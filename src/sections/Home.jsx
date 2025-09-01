import React, { useLayoutEffect, useRef, useState, useMemo } from "react";
import Hyperspeed from "../components/Hyperspeed/Hyperspeed";
import imgProfile from "../assets/img/profile2.png";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { Container, Row, Col, Button } from "react-bootstrap";

/* Hook kecil: pantau ukuran elemen, biar canvas re-init saat layout berubah */
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

const Home = () => {
  const [sectionRef, sectionSize] = useElementSize();
  const w = sectionSize.width || 1200;

  // Breakpoints sederhana berbasis lebar kontainer
  const isSE = w <= 360;           // iPhone SE & friends
  const isPhone = w < 576;
  const isTablet = w >= 768 && w < 992;

  // Typo & spacing adaptif
  const headingStyle = {
    fontWeight: 800,
    // SE: min 1.4rem, phone: naik dikit; desktop: max 3.25rem
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
    margin: isPhone ? "0 auto" : "0", // center di phone
    fontSize: "clamp(0.95rem, 1.5vw, 1.125rem)",
    lineHeight: 1.7,
    opacity: 0.92,
  };

  const btnStyle = {
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(10px)",
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

  // Hyperspeed options: lebih ringan di layar kecil
  const hyperOpts = useMemo(() => {
    const base = {
      distortion: "turbulentDistortion",
      length: 400,
      roadWidth: 10,
      islandWidth: 2,
      lanesPerRoad: 4,
      fov: 90,
      fovSpeedUp: 150,
      speedUp: 2,
      carLightsFade: 0.4,
      totalSideLightSticks: 20,
      lightPairsPerRoadWay: 40,
      shoulderLinesWidthPercentage: 0.05,
      brokenLinesWidthPercentage: 0.1,
      brokenLinesLengthPercentage: 0.5,
      lightStickWidth: [0.12, 0.5],
      lightStickHeight: [1.3, 1.7],
      movingAwaySpeed: [60, 80],
      movingCloserSpeed: [-120, -160],
      carLightsLength: [400 * 0.03, 400 * 0.2],
      carLightsRadius: [0.05, 0.14],
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
    };

    if (isSE || isPhone) {
      // ringanin
      return {
        ...base,
        lanesPerRoad: 3,
        totalSideLightSticks: 14,
        lightPairsPerRoadWay: 24,
        fov: 80,
      };
    }

    if (isTablet) {
      return {
        ...base,
        lanesPerRoad: 4,
        totalSideLightSticks: 18,
        lightPairsPerRoadWay: 32,
        fov: 90,
      };
    }

    return base;
  }, [isSE, isPhone, isTablet]);

  return (
    <section
      ref={sectionRef}
      id="home"
      style={{
        position: "relative",
        // pakai minHeight biar aman address bar mobile
        minHeight: "100svh",
        backgroundColor: "#090d12",
        color: "#ffffff",
        isolation: "isolate",
        display: "flex",
        alignItems: "center",
        // padding vertikal adaptif
        padding: isSE ? "56px 0 28px" : isPhone ? "72px 0" : "96px 0",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND Hyperspeed */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          willChange: "transform, opacity",
        }}
      >
        <Hyperspeed
          key={`${sectionSize.width}x${sectionSize.height}`} // reinit saat resize
          effectOptions={hyperOpts}
        />
      </div>

      {/* KONTEN */}
      <Container style={{ position: "relative", zIndex: 1 }}>
        <Row className="align-items-center g-4 g-lg-5">
          {/* Text */}
          <Col
            md={7}
            className={isPhone ? "text-center" : "text-md-start text-center"}
          >
            <h2 style={headingStyle}>Rheza Rifalsya Hermawan</h2>
            <p style={subStyle}>Informatics Student · Web Development</p>

            <p style={paraStyle}>
              As an Informatics Engineering student, I see every line of code
              not just as syntax, but as a tool to innovate, solve problems, and
              build solutions that matter.
            </p>

            <div className={isPhone ? "d-flex justify-content-center" : ""}>
              <Button
                size={isSE ? "sm" : "sm"}
                href="#about"
                className="mt-3"
                style={btnStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(139, 92, 246, 0.28)";
                  e.currentTarget.style.border = "1px solid #8B5CF6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,0.25)";
                }}
                aria-label="Jump to About section"
              >
                About me
              </Button>
            </div>
          </Col>

          {/* ProfileCard desktop/tablet */}
          <Col
            md={5}
            className="d-none d-md-flex justify-content-center align-items-center"
          >
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

          {/* ProfileCard phone */}
          <Col
            xs={12}
            className="d-flex d-md-none justify-content-center mt-3"
            style={{ marginTop: isSE ? 8 : 12 }}
          >
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
        </Row>
      </Container>
    </section>
  );
};

export default Home;
