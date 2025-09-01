import React, {
  useLayoutEffect,
  useRef,
  useState,
  useMemo,
  useEffect,
} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Hyperspeed from "../components/Hyperspeed/Hyperspeed";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import imgProfile from "../assets/img/profile2.png";

/* ===== Hooks util ===== */
function useElementSize() {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return [ref, size];
}

function useNavHeight() {
  const [h, setH] = useState(80);
  useLayoutEffect(() => {
    const el =
      document.querySelector(".floating-navbar") ||
      document.querySelector(".navbar");
    if (!el) return;
    const calc = () => setH(Math.ceil(el.getBoundingClientRect().height) + 16);
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(el);
    window.addEventListener("resize", calc);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", calc);
    };
  }, []);
  return h;
}

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setPrefers(!!m.matches);
    handler();
    m.addEventListener?.("change", handler);
    return () => m.removeEventListener?.("change", handler);
  }, []);
  return prefers;
}

function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(true);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { root: null, rootMargin, threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);
  return isIntersecting;
}

/* ===== Home ===== */
const Home = () => {
  const [sectionRef, sectionSize] = useElementSize();
  const navH = useNavHeight();
  const w = sectionSize.width || 1200;

  const isPhone = w < 576;
  const isSE = w <= 360;
  const isTablet = w >= 768 && w < 992;

  // --- performance gates
  const prefersReducedMotion = usePrefersReducedMotion();
  const sectionOnScreen = useOnScreen(sectionRef, "100px");

  const deviceMemory = navigator.deviceMemory || 4; // Chrome-only (best-effort)
  const cores = navigator.hardwareConcurrency || 4;
  const dpr = Math.min(window.devicePixelRatio || 1, isPhone ? 1.5 : 2);

  // heuristik low-end
  const isLowEnd = cores <= 4 || deviceMemory <= 2 || dpr > 2.2;

  // enable Hyperspeed? (tunda + kondisi)
  const [hyperReady, setHyperReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHyperReady(true), 300); // delay init
    return () => clearTimeout(t);
  }, []);

  const enableHyperspeed =
    hyperReady && sectionOnScreen && !prefersReducedMotion && !isLowEnd;

  // Typography & spacing
  const headingStyle = {
    fontWeight: 800,
    fontSize: "clamp(1.4rem, 5vw, 3.25rem)",
    lineHeight: 1.1,
    marginBottom: isSE ? 8 : 12,
    wordBreak: "break-word",
  };
  const subStyle = {
    fontSize: "clamp(0.95rem, 2.3vw, 1.25rem)",
    opacity: 0.9,
    marginBottom: isSE ? 8 : 12,
  };
  const paraStyle = {
    maxWidth: isTablet ? 640 : 720,
    margin: isPhone ? "0 auto" : "0",
    fontSize: "clamp(0.95rem, 1.5vw, 1.125rem)",
    lineHeight: 1.7,
    opacity: 0.92,
  };

  // hindari backdrop-filter di mobile (mahal)
  const btnStyle = {
    background: isPhone ? "rgba(139,92,246,0.22)" : "rgba(255, 255, 255, 0.08)",
    // backdropFilter di-disable saat mobile
    ...(isPhone ? {} : { backdropFilter: "blur(10px)" }),
    color: "#fff",
    fontWeight: 600,
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.25)",
    padding: isSE ? "8px 14px" : "10px 20px",
    transition: "all 0.25s ease",
  };

  const cardWrapStyle = {
    width: "100%",
    maxWidth: isSE ? 260 : isPhone ? 300 : 360,
    transform: isSE ? "scale(0.96)" : "none",
    transformOrigin: "center",
  };

  // Hyperspeed options
  const hyperOpts = useMemo(() => {
    // base
    const base = {
      distortion: "turbulentDistortion",
      length: 380,
      roadWidth: 9,
      islandWidth: 2,
      lanesPerRoad: 4,
      fov: 90,
      fovSpeedUp: 150,
      speedUp: 2,
      carLightsFade: 0.35,
      totalSideLightSticks: 18,
      lightPairsPerRoadWay: 32,
      shoulderLinesWidthPercentage: 0.05,
      brokenLinesWidthPercentage: 0.1,
      brokenLinesLengthPercentage: 0.5,
      lightStickWidth: [0.12, 0.45],
      lightStickHeight: [1.2, 1.6],
      movingAwaySpeed: [60, 80],
      movingCloserSpeed: [-120, -150],
      carLightsLength: [380 * 0.03, 380 * 0.2],
      carLightsRadius: [0.05, 0.13],
      carWidthPercentage: [0.3, 0.5],
      carShiftX: [-0.8, 0.8],
      carFloorSeparation: [0, 5],
      colors: {
        roadColor: 0x080808,
        islandColor: 0x0a0a0a,
        background: 0x000000,
        shoulderLines: 0xffffff,
        brokenLines: 0xffffff,
        leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
        rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
        sticks: 0x03b3c3,
      },
      // Jika komponen Hyperspeed support renderer options:
      // renderer: { powerPreference: "low-power", antialias: false, alpha: false, pixelRatio: dpr },
    };

    if (isLowEnd || isPhone) {
      return {
        ...base,
        lanesPerRoad: 3,
        totalSideLightSticks: 12,
        lightPairsPerRoadWay: 20,
        fov: 80,
        speedUp: 1.6,
      };
    }
    if (isTablet) {
      return {
        ...base,
        lanesPerRoad: 4,
        totalSideLightSticks: 16,
        lightPairsPerRoadWay: 26,
        fov: 88,
      };
    }
    return base;
  }, [isLowEnd, isPhone, isTablet, dpr]);

  return (
    <section
      ref={sectionRef}
      id="home"
      style={{
        position: "relative",
        minHeight: "100svh",
        backgroundColor: "#090d12",
        color: "#ffffff",
        isolation: "isolate",
        display: "flex",
        alignItems: "center",
        paddingTop: `calc(${navH}px + env(safe-area-inset-top, 0px))`,
        paddingBottom: isPhone ? 24 : 32,
        overflow: "visible",
      }}
    >
      {/* BACKGROUND */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {enableHyperspeed ? (
          <Hyperspeed
            key={`${sectionSize.width}x${sectionSize.height}:${isLowEnd ? "L" : "H"}`}
            effectOptions={hyperOpts}
          />
        ) : (
          // Fallback ringan di device lemah / reduce motion / offscreen
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(120% 70% at 50% 100%, rgba(6,182,212,.28), transparent 60%), radial-gradient(90% 50% at 0% 80%, rgba(139,92,246,.24), transparent 60%), #090d12",
            }}
          />
        )}

        {/* Mask solid di belakang navbar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: navH,
            background: "#090d12",
          }}
        />
        {/* Gradient memudar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: navH,
            height: "46%",
            background:
              "linear-gradient(180deg, rgba(9,13,18,.92) 0%, rgba(9,13,18,.65) 45%, rgba(9,13,18,0) 100%)",
          }}
        />
      </div>

      {/* KONTEN */}
      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="align-items-center g-4 g-lg-5">
          <Col md={7} className={isPhone ? "text-center" : "text-md-start text-center"}>
            <h2 style={headingStyle}>Rheza Rifalsya Hermawan</h2>
            <p style={subStyle}>Informatics Student · Web Development</p>
            <p style={paraStyle}>
              As an Informatics Engineering student, I see every line of code not just as
              syntax, but as a tool to innovate, solve problems, and build solutions that matter.
            </p>

            <div className={isPhone ? "d-flex justify-content-center" : ""}>
              <Button
                size="sm"
                href="#about"
                className="mt-3"
                style={btnStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(139, 92, 246, 0.28)";
                  e.currentTarget.style.border = "1px solid #8B5CF6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isPhone
                    ? "rgba(139,92,246,0.22)"
                    : "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.border = "1px solid rgba(255,255,255,0.25)";
                }}
              >
                About me
              </Button>
            </div>
          </Col>

          {/* Desktop/Tablet Card */}
          <Col md={5} className="d-none d-md-flex justify-content-center align-items-center">
            <div style={cardWrapStyle}>
              <ProfileCard
                name="Rheza"
                title="Web Development"
                handle="Rheza"
                status="Online"
                contactText="Contact Me"
                avatarUrl={imgProfile}
                showUserInfo
                enableTilt
                enableMobileTilt={false}
                onContactClick={() => console.log("Contact clicked")}
              />
            </div>
          </Col>

          {/* Mobile Card */}
          <Col xs={12} className="d-flex d-md-none justify-content-center" style={{ marginTop: isSE ? 8 : 12 }}>
            <div style={cardWrapStyle}>
              <ProfileCard
                name="Rheza"
                title="Web Development"
                handle="Rheza"
                status="Online"
                contactText="Contact Me"
                avatarUrl={imgProfile}
                showUserInfo
                enableTilt={false}          // extra aman
                enableMobileTilt={false}
                onContactClick={() => console.log("Contact clicked")}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
