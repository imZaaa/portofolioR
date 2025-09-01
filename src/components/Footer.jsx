import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  // small helpers
  const pill = {
    display: "inline-grid",
    placeItems: "center",
    width: 44,
    height: 44,
    borderRadius: 12,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#e5e7eb",
    transition: "transform .15s ease, box-shadow .2s ease, background .2s ease",
  };

  return (
    <footer
      id="site-footer"
      style={{
        backgroundColor: "#090d12",
        color: "#e0e0e0",
        paddingTop: "3.5rem",
        paddingBottom: "2.25rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* gradient accent line */}
      <div
        style={{
          height: 2,
          width: "100%",
          background:
            "linear-gradient(90deg, rgba(139,92,246,1) 0%, rgba(6,182,212,1) 100%)",
          marginBottom: 24,
          opacity: 0.9,
        }}
      />

      <Container>
        <Row className="gy-4">
          {/* Brand / about */}
          <Col md={4}>
            <h4 className="fw-bold mb-3" style={{ color: "#fff", letterSpacing: .2 }}>
              Rheza Rifalsya Hermawan
            </h4>
            <p style={{ maxWidth: 280, color: "#cbd5e1", fontSize: "0.95rem" }}>
              Building useful, clean, and considerate products—one commit at a time.
            </p>

            <div className="d-flex gap-2 mt-3">
              <a
                href="https://github.com/imZaaa"
                target="_blank"
                rel="noopener noreferrer"
                style={pill}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.background = "rgba(139,92,246,0.16)";
                  e.currentTarget.style.boxShadow = "0 10px 22px rgba(139,92,246,.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://linkedin.com/in/rheza-rifalsya-312125341/"
                target="_blank"
                rel="noopener noreferrer"
                style={pill}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.background = "rgba(6,182,212,0.16)";
                  e.currentTarget.style.boxShadow = "0 10px 22px rgba(6,182,212,.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://instagram.com/zx_zaaa"
                target="_blank"
                rel="noopener noreferrer"
                style={pill}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.background = "rgba(139,92,246,0.16)";
                  e.currentTarget.style.boxShadow = "0 10px 22px rgba(139,92,246,.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </Col>

          {/* Navigation – react-scroll smooth */}
          <Col md={3}>
            <h6 className="fw-bold mb-3" style={{ color: "#fff", letterSpacing: .6 }}>
              NAVIGATION
            </h6>
            <ul className="list-unstyled" style={{ lineHeight: "2" }}>
              {["home", "about", "projects", "contact"].map((sec) => (
                <li key={sec}>
                  <Link
                    to={sec}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                    className="footer-link"
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Services */}
          <Col md={2}>
            <h6 className="fw-bold mb-3" style={{ color: "#fff", letterSpacing: .6 }}>
              SERVICES
            </h6>
            <ul className="list-unstyled" style={{ lineHeight: "2", color: "#cbd5e1" }}>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Consulting</li>
              <li>Support</li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={3}>
            <h6 className="fw-bold mb-3" style={{ color: "#fff", letterSpacing: .6 }}>
              CONTACT
            </h6>
            <ul className="list-unstyled" style={{ lineHeight: "2", color: "#cbd5e1" }}>
              <li><a href="mailto:rhezarifalsya266@gmail.com" className="footer-link">rhezarifalsya266@gmail.com</a></li>
              <li>Bekasi</li>
              <li>Available for projects</li>
            </ul>
          </Col>
        </Row>

        <hr style={{ borderColor: "rgba(255,255,255,0.08)", marginTop: "2.25rem" }} />

        <div className="d-flex justify-content-between flex-wrap pt-2">
          <small style={{ color: "#94a3b8" }}>
            © {year} Rheza. All rights reserved.
          </small>

          <div className="d-flex gap-3">
            <a href="#" className="footer-link"><small>Privacy</small></a>
            <a href="#" className="footer-link"><small>Terms</small></a>
            <Link to="home" smooth={true} offset={-70} duration={600} className="footer-link">
              <small>Back to top ↑</small>
            </Link>
          </div>
        </div>
      </Container>

      {/* simple scoped-ish styles */}
      <style>{`
        #site-footer .footer-link {
          color: #cbd5e1;
          text-decoration: none;
          transition: color .2s ease;
          cursor: pointer;
        }
        #site-footer .footer-link:hover {
          color: #ffffff;
        }
        @media (max-width: 767.98px) {
          #site-footer { padding-top: 2.5rem; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
