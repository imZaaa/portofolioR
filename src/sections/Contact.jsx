import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { motion } from "framer-motion"; 
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

/* ==== THEME STYLES (Optimized & Consistent) ==== */
const styles = {
  section: {
    backgroundColor: "#090d12",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: "80px 0",
  },
  headingWrap: {
    textAlign: "center",
    marginBottom: 48,
  },
  headingTitle: {
    fontWeight: 800,
    letterSpacing: "-0.02em",
    marginBottom: 10,
    background: "linear-gradient(to right, #fff, #94a3b8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  hrAccent: {
    width: 60,
    height: 3,
    margin: "20px auto 0",
    background: "linear-gradient(90deg, #8B5CF6, #06b6d4)",
    border: "none",
    borderRadius: 4,
  },
  // Wrapper Glow yang lebih ringan (Border based)
  glowWrapper: {
    background: "rgba(139, 92, 246, 0.05)", 
    padding: 1,
    borderRadius: 24,
    border: "1px solid rgba(139, 92, 246, 0.15)",
    height: "100%",
  },
  // Card solid dark (No blur, high performance)
  card: {
    background: "#11151b",
    borderRadius: 23,
    border: "1px solid rgba(255,255,255,0.05)",
    color: "#fff",
    padding: "32px",
    height: "100%",
    position: "relative",
    overflow: "hidden",
  },
  input: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    borderRadius: 12,
    padding: "14px 16px",
    fontSize: "0.95rem",
    transition: "border-color 0.2s ease",
  },
  label: { 
    fontWeight: 600, 
    marginBottom: 8, 
    color: "#cbd5e1", // Slate-300
    fontSize: "0.9rem" 
  },
  submitBtn: {
    background: "linear-gradient(90deg, #8B5CF6, #06b6d4)",
    border: "none",
    color: "#fff",
    fontWeight: 700,
    borderRadius: 12,
    padding: "14px 24px",
    boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)",
    transition: "all 0.2s ease",
    width: "100%", // Full width di mobile/desktop biar mantap
  },
  infoRow: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 16,
    padding: "20px",
    display: "flex",
    alignItems: "center",
    transition: "background 0.2s ease",
  },
  iconBubble: {
    width: 48,
    height: 48,
    display: "grid",
    placeItems: "center",
    borderRadius: 12,
    background: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(6,182,212,0.2))",
    border: "1px solid rgba(139,92,246,0.3)",
    color: "#a78bfa", // Text color ungu muda
    marginRight: 16,
  },
  socialLink: {
    display: "inline-grid",
    placeItems: "center",
    width: 48,
    height: 48,
    borderRadius: 14,
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#cbd5e1",
    transition: "all 0.2s ease",
    fontSize: "1.2rem",
  }
};

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    emailjs
      .sendForm(
        "service_0zk8mat", // Ganti Service ID
        "template_2dtq1yd", // Ganti Template ID
        form.current,
        "U6dij9LIXsK1pwCXI" // Ganti Public Key
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Terkirim!",
            text: "Pesan kamu sudah mendarat di inbox.",
            confirmButtonColor: "#8B5CF6",
            background: "#11151b",
            color: "#fff",
          });
          form.current.reset();
        },
        (error) => {
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Gagal 😕",
            text: "Coba lagi sebentar ya.",
            confirmButtonColor: "#8B5CF6",
            background: "#11151b",
            color: "#fff",
          });
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <motion.section 
      id="contact" 
      style={styles.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container style={{ maxWidth: 1100 }}>
        {/* Heading */}
        <motion.div 
            style={styles.headingWrap}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
          <h2 className="display-5" style={styles.headingTitle}>
            Contact
          </h2>
          <p style={{ opacity: 0.7, fontSize: "1.1rem" }}>
            Let’s build something useful, clean, and kind to users.
          </p>
          <hr style={styles.hrAccent} />
        </motion.div>

        <Row className="g-4 align-items-stretch">
          
          {/* LEFT: Info & Socials */}
          <Col lg={5} className="order-2 order-lg-1">
            <motion.div 
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{ height: "100%" }}
            >
                <div style={styles.glowWrapper}>
                  <div style={styles.card}>
                    <h4 className="fw-bold mb-4">Get in Touch</h4>

                    <div className="d-flex flex-column gap-3">
                      <div style={styles.infoRow}>
                        <div style={styles.iconBubble}><FaEnvelope size={20} /></div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>Email</div>
                          <div style={{ opacity: 0.7, fontSize: "0.95rem" }}>rhezarifalsya266@gmail.com</div>
                        </div>
                      </div>

                      <div style={styles.infoRow}>
                        <div style={styles.iconBubble}><FaPhone size={20} /></div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>Phone</div>
                          <div style={{ opacity: 0.7, fontSize: "0.95rem" }}>+62 895-2485-9114</div>
                        </div>
                      </div>

                      <div style={styles.infoRow}>
                        <div style={styles.iconBubble}><FaMapMarkerAlt size={20} /></div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>Location</div>
                          <div style={{ opacity: 0.7, fontSize: "0.95rem" }}>Bekasi, Indonesia</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <h6 className="fw-semibold mb-3" style={{ color: "#a78bfa" }}>Find me online</h6>
                      <div className="d-flex gap-3">
                        {[
                          { icon: <FaGithub />, url: "https://github.com/imZaaa", label: "Github" },
                          { icon: <FaLinkedin />, url: "https://linkedin.com/in/rheza-rifalsya-312125341/", label: "LinkedIn" },
                          { icon: <FaInstagram />, url: "https://instagram.com/zx_zaaa", label: "Instagram" }
                        ].map((social, index) => (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            style={styles.socialLink}
                            aria-label={social.label}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-3px)";
                                e.currentTarget.style.color = "#fff";
                                e.currentTarget.style.background = "rgba(139,92,246,0.2)";
                                e.currentTarget.style.borderColor = "#8B5CF6";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "none";
                                e.currentTarget.style.color = "#cbd5e1";
                                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                            }}
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
            </motion.div>
          </Col>

          {/* RIGHT: Form */}
          <Col lg={7} className="order-1 order-lg-2">
            <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{ height: "100%" }}
            >
                <div style={styles.glowWrapper}>
                  <div style={styles.card}>
                    <h4 className="fw-bold mb-4">Send a Message</h4>
                    <Form ref={form} onSubmit={sendEmail}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3" controlId="formName">
                            <Form.Label style={styles.label}>Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="from_name"
                              placeholder="Your name"
                              required
                              style={styles.input}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label style={styles.label}>Email</Form.Label>
                            <Form.Control
                              type="email"
                              name="reply_to"
                              placeholder="name@example.com"
                              required
                              style={styles.input}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3" controlId="formSubject">
                        <Form.Label style={styles.label}>Subject</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          placeholder="Project collaboration..."
                          style={styles.input}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="formMessage">
                        <Form.Label style={styles.label}>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          placeholder="Tell me about your project..."
                          required
                          style={{ ...styles.input, resize: "none" }}
                        />
                      </Form.Group>

                      <Button
                        type="submit"
                        style={styles.submitBtn}
                        onMouseEnter={(e) => {
                           e.currentTarget.style.transform = "translateY(-2px)";
                           e.currentTarget.style.boxShadow = "0 8px 20px rgba(139, 92, 246, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                           e.currentTarget.style.transform = "none";
                           e.currentTarget.style.boxShadow = "0 4px 12px rgba(139, 92, 246, 0.3)";
                        }}
                        disabled={sending}
                      >
                        {sending ? "Sending..." : "Send Message"}
                      </Button>
                    </Form>
                  </div>
                </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default Contact;