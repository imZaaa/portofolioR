import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

/* ==== THEME STYLES (match About) ==== */
const glowWrapper = {
  background:
    "linear-gradient(135deg, rgba(168,85,247,.9), rgba(99,102,241,.85), rgba(56,189,248,.75))",
  padding: 2,
  borderRadius: 20,
  boxShadow: "0 0 44px rgba(168,85,247,.32)",
};

const glassCard = {
  background: "radial-gradient(120% 160% at 0% 0%, #11151b 0%, #0b0f14 60%)",
  borderRadius: 18,
  border: "1px solid rgba(255,255,255,.08)",
  color: "#fff",
  padding: "28px",
  position: "relative",
  overflow: "hidden",
};

const sectionStyle = {
  backgroundColor: "#090d12",
  color: "#fff",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  padding: "64px 0",
};

const headingWrap = {
  textAlign: "center",
  marginBottom: 32,
};

const hrAccent = {
  width: 72,
  height: 2,
  margin: "12px auto 0",
  background:
    "linear-gradient(90deg, rgba(139,92,246,1) 0%, rgba(6,182,212,1) 100%)",
  border: "none",
  borderRadius: 2,
};

const inputStyle = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "#fff",
  borderRadius: 12,
  padding: "12px 14px",
};

const labelStyle = { fontWeight: 600, marginBottom: 6, opacity: 0.9 };

const submitBtnStyle = {
  background: "linear-gradient(90deg, #8B5CF6, #06b6d4)",
  border: "none",
  color: "#fff",
  fontWeight: 700,
  borderRadius: 12,
  padding: "12px 20px",
  boxShadow: "0 8px 20px rgba(139, 92, 246, 0.45)",
  transition: "transform .2s ease, box-shadow .2s ease, opacity .2s ease",
};

const infoRowItem = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12,
  padding: "16px 18px",
  display: "flex",
  alignItems: "center",
};

const iconBubble = {
  width: 40,
  height: 40,
  display: "grid",
  placeItems: "center",
  borderRadius: 10,
  background: "linear-gradient(135deg,#8B5CF6 0%, #06b6d4 100%)",
  boxShadow: "0 6px 18px rgba(6, 182, 212, .35)",
  marginRight: 12,
};

const socialLink = {
  display: "inline-grid",
  placeItems: "center",
  width: 44,
  height: 44,
  borderRadius: 12,
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  transition: "transform .15s ease, box-shadow .2s ease, background .2s ease",
  color: "#fff",
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
        "service_0zk8mat",      // TODO: ganti ke Service ID kamu
        "template_2dtq1yd",     // TODO: ganti ke Template ID kamu
        form.current,
        "U6dij9LIXsK1pwCXI"     // TODO: ganti ke Public Key kamu
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Terkirim!",
            text: "Pesan kamu sudah mendarat di inbox.",
            confirmButtonColor: "#8B5CF6",
            background: "#0b0f14",
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
            background: "#0b0f14",
            color: "#fff",
          });
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" style={sectionStyle}>
      <Container style={{ maxWidth: 1100 }}>
        {/* Heading */}
        <div style={headingWrap}>
          <h2 className="fw-bold display-6" style={{ letterSpacing: 0.2 }}>
            Contact
          </h2>
          <p className="text" style={{ opacity: 0.85, marginTop: 6 }}>
            Let’s build something useful, clean, and kind to users.
          </p>
          <hr style={hrAccent} />
        </div>

        <Row className="g-4 align-items-stretch">
          {/* LEFT: Info & Socials (glass card + glow) */}
          <Col lg={5} className="order-2 order-lg-1">
            <div style={glowWrapper}>
              <div style={{ ...glassCard, padding: 24 }}>
                <h4 className="fw-bold mb-3">Get in Touch</h4>

                <div className="d-flex flex-column gap-3">
                  <div style={infoRowItem}>
                    <div style={iconBubble}>
                      <FaEnvelope size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700 }}>Email</div>
                      <div style={{ opacity: 0.8 }}>
                        rhezarifalsya266@gmail.com
                      </div>
                    </div>
                  </div>

                  <div style={infoRowItem}>
                    <div style={iconBubble}>
                      <FaPhone size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700 }}>Phone</div>
                      <div style={{ opacity: 0.8 }}>+62 895-2485-9114</div>
                    </div>
                  </div>

                  <div style={infoRowItem}>
                    <div style={iconBubble}>
                      <FaMapMarkerAlt size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700 }}>Location</div>
                      <div style={{ opacity: 0.8 }}>Bekasi</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h6 className="fw-semibold mb-2">Find me online</h6>
                  <div className="d-flex gap-2">
                    <a
                      href="https://github.com/imZaaa"
                      target="_blank"
                      rel="noreferrer"
                      style={socialLink}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow =
                          "0 12px 24px rgba(139,92,246,.35)";
                        e.currentTarget.style.background =
                          "rgba(139,92,246,0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.background =
                          "rgba(255,255,255,0.06)";
                      }}
                      aria-label="GitHub"
                    >
                      <FaGithub size={20} />
                    </a>

                    <a
                      href="https://linkedin.com/in/rheza-rifalsya-312125341/"
                      target="_blank"
                      rel="noreferrer"
                      style={socialLink}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow =
                          "0 12px 24px rgba(6,182,212,.35)";
                        e.currentTarget.style.background =
                          "rgba(6,182,212,0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.background =
                          "rgba(255,255,255,0.06)";
                      }}
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={20} />
                    </a>

                    <a
                      href="https://instagram.com/zx_zaaa"
                      target="_blank"
                      rel="noreferrer"
                      style={socialLink}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow =
                          "0 12px 24px rgba(139,92,246,.35)";
                        e.currentTarget.style.background =
                          "rgba(139,92,246,0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.background =
                          "rgba(255,255,255,0.06)";
                      }}
                      aria-label="Instagram"
                    >
                      <FaInstagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* RIGHT: Form (glass card + glow) */}
          <Col lg={7} className="order-1 order-lg-2">
            <div style={glowWrapper}>
              <div style={{ ...glassCard, padding: 24 }}>
                <h4 className="fw-bold mb-3">Send a Message</h4>
                <Form ref={form} onSubmit={sendEmail}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label style={labelStyle}>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="from_name"
                      placeholder="Your name"
                      required
                      style={inputStyle}
                      aria-label="Your name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label style={labelStyle}>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="reply_to"
                      placeholder="your@email.com"
                      required
                      style={inputStyle}
                      aria-label="Your email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formSubject">
                    <Form.Label style={labelStyle}>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      style={inputStyle}
                      aria-label="Subject"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label style={labelStyle}>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Tell me about your project..."
                      required
                      style={{ ...inputStyle, resize: "vertical" }}
                      aria-label="Your message"
                    />
                  </Form.Group>

                  <div className="d-flex align-items-center gap-3">
                    <Button
                      type="submit"
                      style={submitBtnStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 14px 30px rgba(6, 182, 212, .45)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow =
                          "0 8px 20px rgba(139, 92, 246, 0.45)";
                      }}
                      disabled={sending}
                    >
                      {sending ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
