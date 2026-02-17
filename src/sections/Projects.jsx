import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion"; 
import { FaCode, FaPaintBrush } from "react-icons/fa";

import imgVivarta from "../assets/img/vivarta.png";
import imgComputer from "../assets/img/computer.png";
import imgNature from "../assets/img/nature.png";
import imgTK from "../assets/img/tk.png";
import imgStudy from "../assets/img/study.png";
import imgCar from "../assets/img/car.png";
import imgFitness from "../assets/img/fitness.png";
import imgDashboard from "../assets/img/dashboard.png";
import imgPordjo from "../assets/img/pordjo.png";

const projects = [
  { 
    title: "Nature Nest", 
    category: "Development", 
    description: "Platform informasi wisata berbasis mobile yang mengintegrasikan fitur ulasan pengguna dan manajemen wishlist untuk pengalaman perjalanan yang terpersonalisasi.", 
    tech: ["Flutter", "Dart", "API"], 
    image: imgNature, 
    link: "https://github.com/imZaaa/NatureNest-Aplikasi-Wisata-Lokal" 
  },
  { 
    title: "Vivarta Klinik", 
    category: "Development", 
    description: "Sistem Informasi Manajemen Klinik terintegrasi yang memfasilitasi administrasi pasien, rekam medis, dan portal pengguna dengan kontrol akses berbasis peran (RBAC).", 
    tech: ["PHP", "CodeIgniter 3", "MySQL", "Bootstrap"], 
    image: imgVivarta, 
    link: "https://github.com/imZaaa/CI-KlinikK" 
  },
  { 
    title: "Study Master", 
    category: "Development", 
    description: "Aplikasi produktivitas akademik yang dirancang untuk membantu pelajar mengoptimalkan manajemen waktu, penjadwalan studi, dan pelacakan tugas secara efisien.", 
    tech: ["Flutter", "Dart"], 
    image: imgStudy, 
    link: "https://github.com/imZaaa/Aplikasi-Jadwal-Belajar" 
  },
  { 
    title: "Tech Nest", 
    category: "Development", 
    description: "Platform E-Commerce responsif untuk ritel perangkat komputer, menampilkan manajemen katalog produk yang dinamis, keranjang belanja, dan simulasi transaksi.", 
    tech: ["PHP", "CodeIgniter 3", "MySQL", "Bootstrap"], 
    image: imgComputer, 
    link: "https://github.com/imZaaa/mini_computer_store" 
  },
  { 
    title: "Design TK Madani", 
    category: "UI/UX Design", 
    description: "Perancangan antarmuka pengguna (UI) website institusi pendidikan yang modern dan ramah anak, berfokus pada aksesibilitas informasi dan hierarki visual yang jelas.", 
    tech: ["Figma", "Prototyping"], 
    image: imgTK, 
    link: "https://www.figma.com/design/xG0dxMza2zMHHs9RAKFyg0/Madani-Website?node-id=0-1&p=f&t=9VweO569BifYi9dA-" 
  },
  { 
    title: "Booking Cuci Mobil", 
    category: "UI/UX Design", 
    description: "Desain High-Fidelity untuk aplikasi pemesanan layanan otomotif, mengutamakan alur pengguna (User Flow) yang ringkas dari pemilihan layanan hingga konfirmasi jadwal.", 
    tech: ["Figma", "UI Design"], 
    image: imgCar, 
    link: "https://www.figma.com/design/OVnOZ0lcxYstJ7yIoFcq76/Carwash?node-id=0-1&p=f&t=LMz2D4LakEl4PJJ1-0-" 
  },
  { 
    title: "Fitness & Gym", 
    category: "Development", 
    description: "Pengembangan Landing Page interaktif untuk pusat kebugaran, menampilkan jadwal kelas dan profil pelatih dengan antarmuka yang dinamis dan responsif.", 
    tech: ["HTML", "CSS", "JavaScript"], 
    image: imgFitness, 
    link: "https://github.com/imZaaa/Fitness_and_Gymm" 
  },
  { 
    title: "Mini Dashboard Film", 
    category: "Development", 
    description: "Dashboard eksplorasi film interaktif yang mengonsumsi OMDb API, memungkinkan pengguna mencari dan melihat detail sinematik secara real-time.", 
    tech: ["React", "Bootstrap", "API"], 
    image: imgDashboard, 
    link: "https://github.com/imZaaa/Mini_Dashboard_Film" 
  },
  { 
    title: "Company Payroll App & Web", 
    category: "Development", 
    description: "Sistem penggajian dan absensi karyawan berbasis mobile dan website yang dikembangkan untuk PT Pordjo Steelindo Perkasa guna mengotomatisasi perhitungan gaji operasional.", 
    tech: ["React Native", "PHP", "API"], 
    image: imgPordjo, // Pastikan gambarnya sesuai atau pakai placeholder dulu
    link: "#" 
  },
];

// Theme Colors
const c = {
  bg: "#090d12",
  text: "#ffffff",
  muted: "#cbd5e1",
  accent1: "#8B5CF6",
  accent2: "#06b6d4",
  designColor: "#ec4899", 
  devColor: "#3b82f6",    
};

// Styles
const styles = {
  section: {
    background: c.bg,
    color: c.text,
    padding: "80px 0",
    minHeight: "100vh",
  },
  headingWrap: { textAlign: "center", marginBottom: 32 },
  accentLine: {
    width: 80,
    height: 3,
    margin: "16px auto 0",
    background: `linear-gradient(90deg, ${c.accent1}, ${c.accent2})`,
    borderRadius: 4,
  },
  // Style Container Tab
  tabContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginBottom: "48px",
  },
  // Style Tombol Tab
  tabBtn: (isActive, type) => ({
    padding: "10px 24px",
    borderRadius: "12px",
    background: isActive 
      ? (type === "Development" ? "rgba(59, 130, 246, 0.15)" : "rgba(236, 72, 153, 0.15)") 
      : "rgba(255, 255, 255, 0.03)",
    border: `1px solid ${isActive 
      ? (type === "Development" ? c.devColor : c.designColor) 
      : "rgba(255, 255, 255, 0.1)"}`,
    color: isActive ? "#fff" : c.muted,
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.3s ease",
    fontSize: "0.95rem",
  }),
  card: {
    background: "#11151b", 
    borderRadius: 19,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    position: "relative",
  },
  media: { 
    position: "relative", 
    overflow: "hidden", 
    aspectRatio: "16 / 9",
    borderBottom: "1px solid rgba(255,255,255,0.05)" 
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    willChange: "transform", 
  },
  body: { padding: "24px", display: "flex", flexDirection: "column", gap: 10, flex: 1 },
  
  categoryTag: (type) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: "0.75rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: type === "UI/UX Design" ? c.designColor : c.devColor,
    marginBottom: 4
  }),

  title: { margin: 0, fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.3, color: "#f8fafc" },
  desc: { color: c.muted, fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "auto" },
  techWrap: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 },
  badge: {
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#e2e8f0",
    padding: "4px 10px",
    borderRadius: 6,
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
  },
};

const cardVariants = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Projects = () => {
  // State untuk Tab Aktif (Default: Development)
  const [activeTab, setActiveTab] = useState("Development");

  // Filter Projects berdasarkan Tab
  const filteredProjects = projects.filter(project => {
    if (activeTab === "Development") return project.category === "Development";
    if (activeTab === "Design") return project.category === "UI/UX Design";
    return true;
  });

  return (
    <motion.section 
      id="projects" 
      style={styles.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        {/* Header */}
        <motion.div 
            style={styles.headingWrap}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
          <h2 className="fw-bold display-6">My Projects</h2>
          <p style={{ color: c.muted, opacity: 0.85, marginTop: 6 }}>
            Selected work and experiments
          </p>
          <div style={styles.accentLine} />
        </motion.div>

        {/* === TAB SWITCHER === */}
        <div style={styles.tabContainer}>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("Development")}
            style={styles.tabBtn(activeTab === "Development", "Development")}
          >
            <FaCode /> Development
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("Design")}
            style={styles.tabBtn(activeTab === "Design", "Design")}
          >
            <FaPaintBrush /> Design
          </motion.button>
        </div>

        {/* Project Grid */}
        {/* AnimatePresence buat animasi smooth pas ganti tab */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // Kunci ini penting biar react tau konten berubah
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Row className="g-4">
              {filteredProjects.map((p, i) => {
                const glowColor = p.category === "UI/UX Design" ? c.designColor : c.devColor;
                
                return (
                  <Col key={i} md={6} lg={4}>
                    <motion.div
                      variants={cardVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true }}
                      style={{ height: "100%" }}
                    >
                      <motion.div
                        style={{
                          padding: 1,
                          borderRadius: 20,
                          background: "transparent",
                          border: "1px solid rgba(255,255,255,0.1)",
                          height: "100%",
                          display: "flex",
                        }}
                        whileHover={{ 
                          y: -4,
                          backgroundColor: `rgba(${p.category === "UI/UX Design" ? "236, 72, 153" : "59, 130, 246"}, 0.05)`, 
                          borderColor: glowColor,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <article style={styles.card}>
                          <div style={styles.media}>
                            <motion.img
                              src={p.image}
                              alt={p.title}
                              loading="lazy" 
                              decoding="async"
                              style={styles.img}
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.4 }}
                            />
                            <div style={{
                              position: "absolute",
                              inset: 0,
                              background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                              pointerEvents: "none"
                            }} />
                            
                            {/* Label kategori di atas gambar */}
                            <div style={{
                                position: "absolute",
                                top: 12,
                                right: 12,
                                background: "rgba(0,0,0,0.6)",
                                backdropFilter: "blur(4px)",
                                padding: "4px 8px",
                                borderRadius: 6,
                                border: "1px solid rgba(255,255,255,0.1)",
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                color: "#fff",
                                display: "flex",
                                alignItems: "center",
                                gap: 4
                            }}>
                                {p.category === "UI/UX Design" ? <FaPaintBrush size={10} color={c.designColor}/> : <FaCode size={12} color={c.devColor}/>}
                                {p.category === "UI/UX Design" ? "DESIGN" : "DEV"}
                            </div>
                          </div>

                          <div style={styles.body}>
                            <div style={styles.categoryTag(p.category)}>
                               {p.category === "UI/UX Design" ? <FaPaintBrush /> : <FaCode />}
                               {p.category}
                            </div>

                            <h5 style={styles.title}>{p.title}</h5>
                            <p style={styles.desc}>{p.description}</p>

                            <div style={styles.techWrap}>
                              {p.tech.map((t, k) => (
                                <span key={k} style={styles.badge}>
                                  {t}
                                </span>
                              ))}
                            </div>

                            <motion.a
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                marginTop: 16,
                                alignSelf: "flex-start",
                                textDecoration: "none",
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                color: "#fff",
                                padding: "10px 20px",
                                borderRadius: 10,
                                background: p.category === "UI/UX Design" 
                                    ? `linear-gradient(90deg, #ec4899, #8B5CF6)` 
                                    : `linear-gradient(90deg, #3b82f6, #06b6d4)`,
                                display: "inline-block"
                              }}
                              whileHover={{ scale: 1.05, opacity: 0.9 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              View Project →
                            </motion.a>
                          </div>
                        </article>
                      </motion.div>
                    </motion.div>
                  </Col>
                );
              })}
            </Row>
          </motion.div>
        </AnimatePresence>

      </Container>
    </motion.section>
  );
};

export default Projects;