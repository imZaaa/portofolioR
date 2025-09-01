import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgVivarta from "../assets/img/vivarta.png";
import imgComputer from "../assets/img/computer.png";
import imgNature from "../assets/img/nature.png";
import imgTK from "../assets/img/tk.png";
import imgStudy from "../assets/img/study.png";
import imgCar from "../assets/img/car.png";
import imgFitness from "../assets/img/fitness.png";
import imgDashboard from "../assets/img/dashboard.png";

const projects = [
  { title: "Nature Nest", description: "Aplikasi mobile wisata lokal dengan fitur wishlist dan ulasan.", tech: ["Flutter", "Dart", "API"], image: imgNature, link: "https://github.com/imZaaa/NatureNest-Aplikasi-Wisata-Lokal" },
  { title: "Vivarta Klinik", description: "Website klinik dengan berbagai fitur dengan admin dan user.", tech: ["PHP", "CodeIgniter 3", "MySQL", "Bootstrap"], image: imgVivarta, link: "https://github.com/imZaaa/CI-KlinikK" },
  { title: "Study Master", description: "Aplikasi mobile untuk membuat jadwal belajar.", tech: ["Flutter", "Dart"], image: imgStudy, link: "https://github.com/imZaaa/Aplikasi-Jadwal-Belajar" },
  { title: "Tech Nest", description: "Mini Website E-Commerce menjual berbagai produk komputer.", tech: ["PHP", "CodeIgniter 3", "MySQL", "Bootstrap"], image: imgComputer, link: "https://github.com/imZaaa/mini_computer_store" },
  { title: "Design Website Taman Kanak-Kanak", description: "Design tampilan website untuk taman kanak-kanak.", tech: ["Figma"], image: imgTK, link: "https://www.figma.com/design/xG0dxMza2zMHHs9RAKFyg0/Madani-Website?node-id=0-1&p=f&t=9VweO569BifYi9dA-" },
  { title: "Design Booking Cuci Mobil", description: "Design website untuk melakukan booking cuci mobil.", tech: ["Figma"], image: imgCar, link: "https://www.figma.com/design/OVnOZ0lcxYstJ7yIoFcq76/Carwash?node-id=0-1&p=f&t=LMz2D4LakEl4PJJ1-0-" },
  { title: "Fitness & Gym", description: "Modifikasi template kursus jadi website workout & gym.", tech: ["HTML", "CSS", "JavaScript"], image: imgFitness, link: "https://github.com/imZaaa/Fitness_and_Gymm" },
  { title: "Mini Dashboard Film", description: "Dashboard film dari OMDb API.", tech: ["React", "Bootstrap", "API"], image: imgDashboard, link: "https://github.com/imZaaa/Mini_Dashboard_Film" },
];

const Projects = () => {
  const [hovered, setHovered] = useState(-1);

  // theme
  const c = {
    bg: "#090d12",
    text: "#ffffff",
    muted: "#cbd5e1",
    border: "rgba(255,255,255,0.08)",
    accent1: "#8B5CF6",
    accent2: "#06b6d4",
  };

  const styles = {
    section: {
      background: c.bg,
      color: c.text,
      padding: "64px 0",
    },
    headingWrap: { textAlign: "center", marginBottom: 28 },
    accentLine: {
      width: 72,
      height: 2,
      margin: "14px auto 0",
      background: `linear-gradient(90deg, ${c.accent1}, ${c.accent2})`,
      borderRadius: 2,
    },
    glowWrap: (isHover) => ({
      background:
        "linear-gradient(135deg, rgba(168,85,247,.9), rgba(99,102,241,.85), rgba(56,189,248,.75))",
      padding: 2,
      borderRadius: 20,
      boxShadow: isHover
        ? "0 14px 40px rgba(6,182,212,.28)"
        : "0 0 44px rgba(168,85,247,.22)",
      transform: isHover ? "translateY(-2px)" : "none",
      transition: "transform .2s ease, box-shadow .25s ease",
      height: "100%",
      display: "flex",
    }),
    card: {
      background:
        "radial-gradient(120% 160% at 0% 0%, #11151b 0%, #0b0f14 60%)",
      borderRadius: 18,
      border: `1px solid ${c.border}`,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
    },
    media: { position: "relative", overflow: "hidden", aspectRatio: "16 / 10" },
    img: (isHover) => ({
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: isHover ? "scale(1.08)" : "scale(1.02)",
      transition: "transform .5s ease",
      display: "block",
    }),
    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg, transparent 55%, rgba(0,0,0,.35) 100%)",
      pointerEvents: "none",
    },
    body: { padding: 18, display: "flex", flexDirection: "column", gap: 10 },
    title: { margin: "2px 0 0", letterSpacing: 0.2, fontWeight: 700 },
    desc: { color: c.muted, margin: 0 },
    techWrap: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 2 },
    badge: {
      fontSize: ".8rem",
      color: "#e5e7eb",
      padding: "6px 10px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,.12)",
      background: "rgba(255,255,255,.06)",
      backdropFilter: "blur(6px)",
    },
    link: (isHover) => ({
      marginTop: 4,
      alignSelf: "flex-start",
      textDecoration: "none",
      fontWeight: 700,
      color: "#fff",
      padding: "10px 14px",
      borderRadius: 12,
      border: "1px solid rgba(255,255,255,.12)",
      background: `linear-gradient(90deg, ${c.accent1}, ${c.accent2})`,
      boxShadow: isHover
        ? "0 14px 30px rgba(6,182,212,.35)"
        : "0 8px 18px rgba(139,92,246,.35)",
      transition: "transform .15s ease, box-shadow .2s ease, opacity .2s ease",
      transform: isHover ? "translateY(-2px)" : "none",
    }),
  };

  return (
    <section id="projects" style={styles.section}>
      <Container>
        <div style={styles.headingWrap}>
          <h2 className="fw-bold display-6">My Projects</h2>
          <p style={{ color: c.muted, opacity: 0.85, marginTop: 6 }}>
            Selected work and experiments
          </p>
          <div style={styles.accentLine} />
        </div>

        <Row className="g-4">
          {projects.map((p, i) => {
            const isHover = hovered === i;
            return (
              <Col key={i} md={6} lg={4}>
                <div
                  style={styles.glowWrap(isHover)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(-1)}
                >
                  <article style={styles.card}>
                    <div style={styles.media}>
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        style={styles.img(isHover)}
                      />
                      <div style={styles.overlay} />
                    </div>

                    <div style={styles.body}>
                      <h5 style={styles.title}>{p.title}</h5>
                      <p style={styles.desc}>{p.description}</p>

                      <div style={styles.techWrap}>
                        {p.tech.map((t, k) => (
                          <span key={k} style={styles.badge}>
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link(isHover)}
                      >
                        View Project →
                      </a>
                    </div>
                  </article>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
