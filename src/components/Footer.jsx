import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  // Helper style untuk tombol sosial media (Pill)
  const pill = {
    display: "inline-grid",
    placeItems: "center",
    width: 44,
    height: 44,
    borderRadius: 12,
    background: "rgba(255,255,255,0.03)", // Transparan tipis
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#cbd5e1",
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    marginRight: 10,
    cursor: "pointer",
  };

  return (
    <footer
      id="site-footer"
      style={{
        backgroundColor: "#090d12", // Dark background konsisten
        color: "#e2e8f0",
        paddingTop: "4rem",
        paddingBottom: "2rem",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.05)", // Border tipis di atas
      }}
    >
      {/* Gradient Accent Line (Garis Pemanis di atas) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)",
        }}
      />

      <Container>
        <Row className="gy-5">
          {/* Brand / About */}
          <Col lg={4} md={6}>
            <h4 className="fw-bold mb-3" style={{ color: "#fff", letterSpacing: "-0.02em" }}>
              Rheza Rifalsya H.
            </h4>
            <p style={{ maxWidth: 300, color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Mahasiswa Manajemen Informatika yang berfokus membangun produk digital yang bermanfaat, bersih, dan memprioritaskan pengguna.
            </p>

            <div className="d-flex mt-4">
              <a
                href="https://github.com/imZaaa"
                target="_blank"
                rel="noopener noreferrer"
                style={pill}
                aria-label="GitHub"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.background = "rgba(139,92,246,0.15)";
                  e.currentTarget.style.borderColor = "#8B5CF6";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "#cbd5e1";
                }}
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/rheza-rifalsya-312125341/"
                target="_blank"
                rel="noopener noreferrer"
                style={pill}
                aria-label="LinkedIn"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.background = "rgba(6,182,212,0.15)";
                  e.currentTarget.style.borderColor = "#06b6d4";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "#cbd5e1";
                }}
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://instagram.com/zx_zaaa"
                target="_blank"
                rel="noopener noreferrer"
                style={pill}
                aria-label="Instagram"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.background = "rgba(236,72,153,0.15)";
                  e.currentTarget.style.borderColor = "#ec4899";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "#cbd5e1";
                }}
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </Col>

          {/* Navigation */}
          <Col lg={2} md={3} xs={6}>
            <h6 className="fw-bold mb-4" style={{ color: "#fff", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
              NAVIGASI
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {["home", "about", "projects", "contact"].map((sec) => (
                <li key={sec}>
                  <Link
                    to={sec}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800} // Durasi scroll lebih smooth
                    className="footer-link"
                    style={{ cursor: "pointer", color: "#94a3b8", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => e.target.style.color = "#fff"}
                    onMouseLeave={(e) => e.target.style.color = "#94a3b8"}
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Services */}
          <Col lg={3} md={3} xs={6}>
            <h6 className="fw-bold mb-4" style={{ color: "#fff", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
              LAYANAN
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
              <li>Web Development</li>
              <li>Frontend Engineering</li>
              <li>UI Implementation</li>
              <li>Responsive Design</li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={12}>
            <h6 className="fw-bold mb-4" style={{ color: "#fff", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
              HUBUNGI SAYA
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
              <li>
                <a href="mailto:rhezarifalsya266@gmail.com" style={{ color: "#94a3b8", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = "#fff"} onMouseLeave={(e) => e.target.style.color = "#94a3b8"}>
                  rhezarifalsya266@gmail.com
                </a>
              </li>
              <li>Bekasi, Indonesia</li>
              <li className="mt-2 text-success" style={{ fontSize: "0.85rem" }}>
                <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#22c55e", marginRight: 8 }}></span>
                Open for opportunities
              </li>
            </ul>
          </Col>
        </Row>

        <hr style={{ borderColor: "rgba(255,255,255,0.05)", marginTop: "3rem", marginBottom: "1.5rem" }} />

        {/* Bottom Bar */}
        <div className="d-flex justify-content-between flex-wrap align-items-center gap-3">
          <small style={{ color: "#64748b" }}>
            © {year} Rheza Rifalsya Hermawan. All rights reserved.
          </small>

          <div className="d-flex gap-4">
            <Link to="home" smooth={true} offset={-70} duration={800} style={{ cursor: "pointer", color: "#64748b", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = "#fff"} onMouseLeave={(e) => e.target.style.color = "#64748b"}>
              Back to Top ↑
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;