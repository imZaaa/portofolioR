import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#001219",
        color: "#e0e0e0",
        paddingTop: "4rem",
        paddingBottom: "2rem",
        marginTop: "4rem",
      }}
    >
      <Container>
        <Row className="gy-4">
          {/* Kiri */}
          <Col md={4}>
            <h4 className="fw-bold mb-3" style={{ color: "#fff" }}>
              Rheza Rifalsya Hermawan
            </h4>
            <p style={{ maxWidth: "250px", color: "#ccc", fontSize: "0.95rem" }}>
              Crafting digital experiences with clean code and beautiful design. Passionate about creating solutions that make a difference.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="https://github.com/imZaaa" target="_blank" rel="noopener noreferrer">
                <FaGithub size={22} color="#ccc" />
              </a>
              <a href="https://linkedin.com/in/rheza-rifalsya-312125341/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={22} color="#ccc" />
              </a>
              <a href="https://instagram.com/zx_zaaa" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={22} color="#ccc" />
              </a>
            </div>
          </Col>

          {/* Navigation */}
          <Col md={2}>
            <h6 className="fw-bold mb-3" style={{ color: "#fff" }}>
              NAVIGATION
            </h6>
            <ul className="list-unstyled" style={{ lineHeight: "2" }}>
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#work" className="footer-link">Projects</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </Col>

          {/* Services */}
          <Col md={3}>
            <h6 className="fw-bold mb-3" style={{ color: "#fff" }}>
              SERVICES
            </h6>
            <ul className="list-unstyled" style={{ lineHeight: "2" }}>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Consulting</li>
              <li>Support</li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={3}>
            <h6 className="fw-bold mb-3" style={{ color: "#fff" }}>
              CONTACT
            </h6>
            <ul className="list-unstyled" style={{ lineHeight: "2" }}>
              <li>rhezarifalsya266@gmail.com</li>
              <li>Bekasi</li>
              <li>Available for projects</li>
            </ul>
          </Col>
        </Row>

        <hr style={{ borderColor: "rgba(255,255,255,0.1)", marginTop: "3rem" }} />

        <div className="d-flex justify-content-between flex-wrap pt-3">
          <small style={{ color: "#ccc" }}>
            © 2025 Rheza. All rights reserved.
          </small>
          <div className="d-flex gap-3">
            <small style={{ color: "#ccc", cursor: "pointer" }}>Privacy</small>
            <small style={{ color: "#ccc", cursor: "pointer" }}>Terms</small>
          </div>
        </div>
      </Container>

      {/* CSS inline tambahan untuk hover link */}
      <style jsx>{`
        .footer-link {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #fff;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
