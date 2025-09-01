import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Lanyard from "../components/Lanyard/Lanyard";
import CurvedLoop from "../components/CurvedLoop/CurvedLoop";
import { DiMysql } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaPhp, FaJs, FaJava } from "react-icons/fa";
import {
  SiCodeigniter, SiFlutter, SiDart, SiBootstrap, SiFigma, SiCoreldraw, SiReact,
} from "react-icons/si";
import { FiDownload } from "react-icons/fi";

/* ====== Hooks kecil ====== */
function useViewportWidth() {
  const get = () => (typeof window !== "undefined" ? window.innerWidth : 1200);
  const [w, setW] = useState(get);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onR = () => setW(window.innerWidth);
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);
  return w;
}
function useIsDesktop(minWidth = 768) {
  const w = useViewportWidth();
  return w >= minWidth;
}

/* ====== Data ikon untuk CurvedLoop ====== */
const techStack = [
  { icon: <FaHtml5 color="#e34c26" /> },
  { icon: <FaCss3Alt color="#264de4" /> },
  { icon: <FaPhp color="#8993be" /> },
  { icon: <FaJs color="#f0db4f" /> },
  { icon: <SiDart color="#0175C2" /> },
  { icon: <FaJava color="#f89820" /> },
  { icon: <SiCodeigniter color="#ee4623" /> },
  { icon: <SiFlutter color="#02569B" /> },
  { icon: <SiBootstrap color="#563d7c" /> },
  { icon: <SiFigma color="#a259ff" /> },
  { icon: <SiCoreldraw color="#00AEEF" /> },
  { icon: <SiReact color="#61DAFB" /> },
  { icon: <DiMysql color="#4479A1" /> },
];

/* ====== Styles responsif (pakai clamp) ====== */
const glowWrapper = {
  background:
    "linear-gradient(135deg, rgba(168,85,247,.9), rgba(99,102,241,.85), rgba(56,189,248,.75))",
  padding: 2,
  borderRadius: 20,
  boxShadow: "0 0 50px rgba(168,85,247,.32)",
};
const card = (w) => ({
  background: "radial-gradient(120% 160% at 0% 0%, #11151b 0%, #0b0f14 60%)",
  borderRadius: 18,
  border: "1px solid rgba(255,255,255,.06)",
  color: "#fff",
  padding: `clamp(20px, ${w ? Math.min(w / 50, 56) : 56}px, 56px)`,
  minHeight: "clamp(420px, 60svh, 560px)",
  position: "relative",
  overflow: "hidden",
});
const h3Style = {
  fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
  lineHeight: 1.1,
};
const aboutP = {
  opacity: 0.9,
  lineHeight: 1.7,
  fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
  maxWidth: 760,
};
const statNum = {
  fontSize: "clamp(1.05rem, 2.5vw, 1.6rem)",
  fontWeight: 800,
  lineHeight: 1.1,
};
const statCap = {
  opacity: 0.95,
  marginTop: 6,
  fontWeight: 600,
  fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
};

/* ====== Komponen ====== */
const About = () => {
  const w = useViewportWidth();
  const isDesktop = useIsDesktop(768);
  const isPhone = w < 576;
  const isSE = w <= 360;
  const isTablet = w >= 768 && w < 992;

  // CurvedLoop responsif (lebih pelan & padat di HP)
  const loopProps = useMemo(() => {
    return {
      speed: isPhone ? 6 : 10,
      curveAmount: isPhone ? 360 : 500,
      direction: "right",
      interactive: !isPhone, // non-interaktif di HP biar gak “nyangkut”
    };
  }, [isPhone]);

  // Ukuran ikon responsif
  const iconSize = isSE ? "2.2rem" : isPhone ? "2.6rem" : isTablet ? "3rem" : "3.2rem";
  const iconGap = isPhone ? "1.25rem" : "2rem";

  return (
    <section
      id="about"
      style={{
        backgroundColor: "#090d12",
        color: "#fff",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        paddingTop: isPhone ? 48 : 64,
        paddingBottom: isPhone ? 40 : 56,
      }}
    >
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={11}>
            <div style={glowWrapper}>
              <div style={card(w)}>
                <Row className="align-items-center gy-4 gx-3">
                  {/* LEFT: text */}
                  <Col
                    md={7}
                    className={isPhone ? "text-center" : "text-md-start text-center"}
                  >
                    <h3 style={h3Style} className="fw-bold mb-3">About Me</h3>
                    <p style={{ ...aboutP, margin: isPhone ? "0 auto" : 0 }}>
                      I’m Rheza — an IT undergrad who turns ideas into clean, usable products.
                      I focus on Frontend, keep the Backend lean, and ship mobile features that
                      feel fast and reliable. North star: build things that work, stay consistent,
                      and feel good to use. Principle: <em>with code, we learn</em>.
                    </p>

                    <div className={`d-flex ${isPhone ? "justify-content-center" : ""} gap-2 mt-3`}>
                      <Button
                        size="sm"
                        href="/doc/CV-RhezaRifalsyaHermawan.pdf"
                        download
                        className="mt-2"
                        style={{
                          background: "transparent",
                          color: "#fff",
                          fontWeight: 600,
                          borderRadius: 12,
                          border: "2px solid #8B5CF6",
                          padding: isSE ? "8px 14px" : "10px 20px",
                          transition: "all .25s ease",
                          boxShadow: "0 0 10px rgba(139, 92, 246, .5)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#8B5CF6";
                          e.currentTarget.style.color = "#fff";
                          e.currentTarget.style.boxShadow =
                            "0 0 20px rgba(139, 92, 246, .9)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "#fff";
                          e.currentTarget.style.boxShadow =
                            "0 0 10px rgba(139, 92, 246, .5)";
                        }}
                        aria-label="Download my CV (PDF)"
                      >
                        <FiDownload className="me-2" />
                        Download CV
                      </Button>
                    </div>

                    {/* Stats: tanpa angka, tetap relevan */}
                    <Row className="mt-4 gy-3">
                      <Col xs={12} sm={6} md="auto" className={isPhone ? "text-center" : ""}>
                        <div style={statNum}>Product-minded</div>
                        <div style={statCap}>UX · performance · consistency</div>
                      </Col>
                      <Col xs={12} sm={6} md="auto" className={isPhone ? "text-center" : ""}>
                        <div style={statNum}>Builder mentality</div>
                        <div style={statCap}>Ship → learn → iterate</div>
                      </Col>
                    </Row>
                  </Col>

                  {/* RIGHT: Lanyard (hide di mobile, tampil tablet/desktop) */}
                  {isDesktop && (
                    <Col md={5} className="text-center">
                      <div
                        style={{
                          position: "relative",
                          height: isTablet ? 520 : 560,
                          overflow: "visible",
                          marginTop: isTablet ? -24 : -36,
                          // sedikit responsif: geser/minor scale kalau butuh
                          transform: isTablet ? "scale(0.96)" : "none",
                          transformOrigin: "center top",
                        }}
                      >
                        <Lanyard position={[0, 9, 20]} gravity={[0, -40, 0]} />
                      </div>
                    </Col>
                  )}
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        {/* CurvedLoop: baris ikon tech, responsif & aman di HP */}
        <CurvedLoop
          {...loopProps}
          className="custom-text-style"
          style={{
            color: "#fff",
            padding: isPhone ? "1.25rem 0" : "2rem 0",
            marginTop: isPhone ? 16 : 24,
          }}
        >
          {techStack.map((tech, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: `0 ${iconGap}`,
              }}
            >
              <div style={{ fontSize: iconSize }}>{tech.icon}</div>
            </div>
          ))}
        </CurvedLoop>
      </Container>
    </section>
  );
};

export default About;
