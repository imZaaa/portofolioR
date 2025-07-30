import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_0zk8mat",      // GANTI: Service ID EmailJS
        "template_2dtq1yd",     // GANTI: Template ID EmailJS
        form.current,
        "U6dij9LIXsK1pwCXI"        // GANTI: Public Key EmailJS
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-5"
      style={{
        backgroundColor: "#fff",
        color: "#000",
      }}
    >
      <Container style={{ maxWidth: "1000px" }}>
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Contact</h2>
          <p className="text-muted fs-5">
            Let's create something amazing together
          </p>
          <hr
            style={{
              width: "60px",
              margin: "1rem auto",
              borderTop: "2px solid #ccc",
            }}
          />
        </div>

        <Row className="g-4">
          {/* Form Kiri */}
          <Col md={7}>
            <h4 className="mb-4">Send a Message</h4>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="from_name" // harus sesuai EmailJS template
                  placeholder="Your name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="reply_to" // harus sesuai EmailJS template
                  placeholder="your@email.com"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject" // tambahan variabel (optional)
                  placeholder="What's this about?"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message" // harus sesuai EmailJS template
                  placeholder="Tell me about your project..."
                  required
                />
              </Form.Group>
              <Button
                type="submit"
                style={{
                  background: "#001219",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "8px",
                  fontWeight: "500",
                }}
              >
                Send Message
              </Button>
              {status && (
                <p style={{ marginTop: "1rem", color: "#555" }}>{status}</p>
              )}
            </Form>
          </Col>

          {/* Info Kanan */}
          <Col md={5}>
            <h4 className="mb-4">Get in Touch</h4>
            <div className="d-flex flex-column gap-3">
              <Card className="border-0 shadow-sm">
                <Card.Body className="d-flex align-items-center">
                  <FaEnvelope size={24} color="#001219" className="me-3" />
                  <div>
                    <h6 className="mb-1">Email</h6>
                    <p className="mb-0 text-muted">
                      rhezarifalsya266@gmail.com
                    </p>
                  </div>
                </Card.Body>
              </Card>
              <Card className="border-0 shadow-sm">
                <Card.Body className="d-flex align-items-center">
                  <FaPhone size={24} color="#001219" className="me-3" />
                  <div>
                    <h6 className="mb-1">Phone</h6>
                    <p className="mb-0 text-muted">+62 895-2485-9114</p>
                  </div>
                </Card.Body>
              </Card>
              <Card className="border-0 shadow-sm">
                <Card.Body className="d-flex align-items-center">
                  <FaMapMarkerAlt size={24} color="#001219" className="me-3" />
                  <div>
                    <h6 className="mb-1">Location</h6>
                    <p className="mb-0 text-muted">Bekasi</p>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="mt-4">
              <h5>Follow Me</h5>
              <div className="d-flex gap-3 mt-2">
                <a href="https://github.com/imZaaa" target="_blank" rel="noreferrer" style={{ color: "#001219" }}>
                  <FaGithub size={28} />
                </a>
                <a href="https://linkedin.com/in/rheza-rifalsya-312125341/" target="_blank" rel="noreferrer">
                  <FaLinkedin size={28} color="#001219" />
                </a>
                <a href="https://instagram.com/zx_zaaa" target="_blank" rel="noreferrer">
                  <FaInstagram size={28} color="#001219" />
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer">
                  <FaDribbble size={28} color="#001219" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
