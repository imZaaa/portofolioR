import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Lanyard from "../components/Lanyard/Lanyard";
import CurvedLoop from "../components/CurvedLoop/CurvedLoop";
import { DiMysql } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaPhp, FaJs, FaJava } from "react-icons/fa";
import {
  SiCodeigniter,
  SiFlutter,
  SiDart,
  SiBootstrap,
  SiFigma,
  SiCoreldraw,
  SiReact,
} from "react-icons/si";
import { FiDownload } from "react-icons/fi";

/* ====== Hooks ====== */
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

/* ====== Data Ikon ====== */
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

/* ====== Styles (Optimized & Aesthetic) ====== */
const styles = {
  section: {
    backgroundColor: "#090d12",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    padding: "80px 0",
  },
  // Wrapper dengan efek Glow Border Halus
  glowWrapper: {
    position: "relative",
    padding: "1px", // Space buat border gradient
    borderRadius: 24,
    background: "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.3))",
    boxShadow: "0 0 40px -10px rgba(139, 92, 246, 0.15)", // Ambient glow
  },
  card: (w) => ({
    background: "#0f1319", // Darker solid background
    borderRadius: 23, // -1px dari wrapper
    padding: `clamp(24px, ${w ? Math.min(w / 40, 64) : 64}px, 64px)`,
    position: "relative",
    overflow: "hidden",
    zIndex: 2,
  }),
  // Efek Grid Pattern Halus di dalam Card (Biar ga flat)
  cardPattern: {
    position: "absolute",
    inset: 0,
    backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
    backgroundSize: "24px 24px",
    opacity: 0.5,
    pointerEvents: "none",
    zIndex: -1,
  },
  h3: {
    fontSize: "clamp(2rem, 4vw, 3.5rem)",
    fontWeight: 800,
    background: "linear-gradient(to right, #fff 30%, #a78bfa 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "1.2rem",
    letterSpacing: "-0.02em",
  },
  aboutP: {
    color: "#94a3b8",
    lineHeight: 1.8,
    fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
    fontWeight: 400,
    maxWidth: "95%",
    marginBottom: "2.5rem",
  },
  btnPrimary: {
    background: "linear-gradient(90deg, #8B5CF6 0%, #6366F1 100%)",
    border: "none",
    color: "#fff",
    padding: "12px 28px",
    borderRadius: "12px",
    fontSize: "0.95rem",
    fontWeight: 600,
    boxShadow: "0 4px 15px rgba(139, 92, 246, 0.3)", 
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  },
  statBlock: {
    borderLeft: "3px solid #8B5CF6", 
    paddingLeft: "1.2rem",
    marginTop: "0.5rem",
  },
  statTitle: {
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#f1f5f9",
    marginBottom: "0.3rem",
  },
  statDesc: {
    fontSize: "0.9rem",
    color: "#64748b",
    fontWeight: 500,
    letterSpacing: "0.02em",
  },
};

const About = () => {
  const w = useViewportWidth();
  const isMobile = w < 768;

  const loopProps = useMemo(() => ({
    speed: isMobile ? 8 : 12,
    curveAmount: isMobile ? 120 : 300,
    direction: "right",
    interactive: !isMobile,
  }), [isMobile]);

  return (
    <motion.section 
      id="about" 
      style={styles.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={11} xl={10}>
            
            {/* GLOW WRAPPER: Memberikan border gradient halus */}
            <motion.div 
              style={styles.glowWrapper}
              whileHover={{ scale: 1.005, boxShadow: "0 0 50px -5px rgba(139, 92, 246, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <div style={styles.card(w)}>
                
                {/* PATTERN BACKGROUND: Biar card ga mati (polos) */}
                <div style={styles.cardPattern} />

                {/* LIGHT ORB: Efek cahaya di pojok atas */}
                <div style={{
                  position: "absolute",
                  top: "-100px",
                  right: "-100px",
                  width: "300px",
                  height: "300px",
                  background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
                  filter: "blur(50px)",
                  zIndex: 0,
                  pointerEvents: "none"
                }} />

                <Row className="align-items-center gy-5 gx-5" style={{ position: "relative", zIndex: 1 }}>
                  
                  {/* === KOLOM KIRI: KONTEN === */}
                  <Col lg={7} className={isMobile ? "text-center" : "text-start"}>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <h3 style={styles.h3}>About Me</h3>
                      <p style={{ ...styles.aboutP, margin: isMobile ? "0 auto 2rem" : "0 0 2rem" }}>
                        Halo, saya <strong>Rheza</strong>. Pengembang perangkat lunak yang berfokus menciptakan solusi digital yang efisien, estetis, dan berdampak.
                        <br /><br />
                        Keahlian utama saya di <em>Frontend</em> dipadukan dengan pemahaman <em>Backend</em> yang solid, memungkinkan saya membangun aplikasi yang tidak hanya cantik, tapi juga fungsional dan intuitif.
                      </p>

                      <div className={`d-flex ${isMobile ? "justify-content-center" : "justify-content-start"}`}>
                        <Button
                          href="/doc/CV-RhezaRifalsyaHermawan.pdf"
                          download
                          style={styles.btnPrimary}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 8px 25px rgba(139, 92, 246, 0.5)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 4px 15px rgba(139, 92, 246, 0.3)";
                          }}
                        >
                          <FiDownload size={18} /> Unduh CV
                        </Button>
                      </div>

                      <div className="mt-5 pt-4 border-top border-secondary border-opacity-10">
                        <Row className="g-4 justify-content-center justify-content-lg-start">
                          <Col xs={12} sm={6} md="auto">
                            <div style={styles.statBlock}>
                              <div style={styles.statTitle}>Product Oriented</div>
                              <div style={styles.statDesc}>UX · Performance · Scale</div>
                            </div>
                          </Col>
                          <Col xs={12} sm={6} md="auto">
                            <div style={styles.statBlock}>
                              <div style={styles.statTitle}>Developer Mindset</div>
                              <div style={styles.statDesc}>Ship · Evaluate · Iterate</div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </motion.div>
                  </Col>

                  {/* === KOLOM KANAN: LANYARD === */}
                  <Col lg={5} className="d-none d-lg-block">
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      style={{ 
                        height: '520px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        position: 'relative',
                        // Background radial halus di belakang lanyard
                        background: "radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 60%)",
                        borderRadius: "50%"
                      }}
                    >
                      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                    </motion.div>
                  </Col>

                </Row>
              </div>
            </motion.div>

          </Col>
        </Row>

        {/* === TECH STACK === */}
        <div style={{ marginTop: "4rem", opacity: 0.9 }}>
          <CurvedLoop {...loopProps} style={{ color: "#cbd5e1" }}>
            {techStack.map((tech, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: isMobile ? "0 1.5rem" : "0 2.5rem",
                  fontSize: isMobile ? "2.2rem" : "3.5rem",
                  filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.3)) grayscale(20%) hover:grayscale(0%)",
                  transition: "filter 0.3s ease"
                }}
              >
                {tech.icon}
              </div>
            ))}
          </CurvedLoop>
        </div>
        
      </Container>
    </motion.section>
  );
};

export default About;