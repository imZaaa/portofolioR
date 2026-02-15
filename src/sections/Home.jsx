import React, {
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion"; 
import ProfileCard from "../components/ProfileCard/ProfileCard";
import imgProfile from "../assets/img/profile2.png";

/* ===== Hooks util (Tetap sama) ===== */
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

/* ===== Home ===== */
const Home = () => {
  const [sectionRef, sectionSize] = useElementSize();
  const navH = useNavHeight();
  const w = sectionSize.width || 1200;

  const isPhone = w < 576;
  const isSE = w <= 360;
  const isTablet = w >= 768 && w < 992;

  // Typography & spacing
  const headingStyle = {
    fontWeight: 800,
    fontSize: "clamp(1.8rem, 5vw, 3.5rem)", // Gedhe dikit biar tegas
    lineHeight: 1.1,
    marginBottom: isSE ? 8 : 16,
    wordBreak: "break-word",
    background: "linear-gradient(to right, #fff, #94a3b8)", // Gradient text dikit
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  
  const subStyle = {
    fontSize: "clamp(1rem, 2.3vw, 1.35rem)",
    color: "#a78bfa", // Aksen ungu muda (aesthetic)
    fontWeight: 600,
    marginBottom: isSE ? 8 : 16,
    letterSpacing: "0.05em",
  };
  
  const paraStyle = {
    maxWidth: isTablet ? 640 : 720,
    margin: isPhone ? "0 auto" : "0",
    fontSize: "clamp(0.95rem, 1.5vw, 1.125rem)",
    lineHeight: 1.8,
    color: "#cbd5e1", // Slate-300 biar mata adem
  };

  const btnStyle = {
    background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
    color: "#fff",
    fontWeight: 600,
    borderRadius: "14px",
    border: "none",
    padding: isSE ? "10px 18px" : "12px 28px",
    boxShadow: "0 4px 14px 0 rgba(139, 92, 246, 0.4)",
    transition: "all 0.3s ease",
  };

  const cardWrapStyle = {
    width: "100%",
    maxWidth: isSE ? 260 : isPhone ? 300 : 360,
    transform: isSE ? "scale(0.96)" : "none",
    transformOrigin: "center",
  };

  // STYLE BARU: Background Mesh Gradient
  const meshGradientStyle = {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    backgroundColor: "#090d12", // Base dark color
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(139, 92, 246, 0.15) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(6, 182, 212, 0.15) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(139, 92, 246, 0.15) 0px, transparent 50%),
      radial-gradient(at 0% 100%, rgba(6, 182, 212, 0.15) 0px, transparent 50%)
    `,
    // Optional: Tambah pattern titik-titik halus (Dot Grid)
    maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
  };

  // Dot Pattern Overlay (Bikin kesan techy & mahal)
  const dotPatternStyle = {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
    backgroundSize: "32px 32px",
    opacity: 0.4,
    pointerEvents: "none",
  };

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
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
      {/* === NEW AESTHETIC BACKGROUND === */}
      <div style={meshGradientStyle} />
      <div style={dotPatternStyle} />
      
      {/* Glow tengah yang subtle */}
      <div 
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vh",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }} 
      />

      {/* Mask solid di belakang navbar (biar navbar kebaca) */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: navH,
          background: "linear-gradient(to bottom, #090d12 20%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* KONTEN UTAMA */}
      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="align-items-center g-4 g-lg-5">
          {/* Teks Kiri */}
          <Col md={7} className={isPhone ? "text-center" : "text-md-start text-center"}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 style={headingStyle}>Rheza Rifalsya Hermawan</h2>
              <p style={subStyle}>INFORMATIKA · WEB DEVELOPMENT</p>
              <p style={paraStyle}>
                Mahasiswa Manajemen Informatika yang berfokus pada pengembangan web, memanfaatkan kode untuk menciptakan solusi digital yang inovatif, efisien, dan berdampak, dengan prioritas pada fungsionalitas dan pengalaman pengguna.
              </p>

              <div className={isPhone ? "d-flex justify-content-center" : ""}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="sm"
                    href="#about"
                    className="mt-4"
                    style={btnStyle}
                  >
                    Tentang Saya
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </Col>

          {/* Kartu Profil Kanan */}
          <Col md={5} className="d-none d-md-flex justify-content-center align-items-center">
            <motion.div 
              style={cardWrapStyle}
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
            >
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
            </motion.div>
          </Col>

          {/* Mobile Card */}
          <Col xs={12} className="d-flex d-md-none justify-content-center" style={{ marginTop: isSE ? 16 : 24 }}>
            <motion.div 
              style={cardWrapStyle}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <ProfileCard
                name="Rheza"
                title="Web Development"
                handle="Rheza"
                status="Online"
                contactText="Contact Me"
                avatarUrl={imgProfile}
                showUserInfo
                enableTilt={false} // Extra aman buat mobile
                enableMobileTilt={false}
                onContactClick={() => console.log("Contact clicked")}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default Home;