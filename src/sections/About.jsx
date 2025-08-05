import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Lanyard from "../components/Lanyard/Lanyard";
import CurvedLoop from "../components/CurvedLoop/CurvedLoop";
import { DiMysql } from "react-icons/di";
import imgProfile from "../assets/img/profile2.png";
import ProfileCard from "../components/ProfileCard/ProfileCard";

import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaJs,
  FaJava,
} from "react-icons/fa";
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

const techStack = [
  { icon: <FaHtml5 color="#e34c26" /> },
  { icon: <FaCss3Alt color="#264de4" /> },
  { icon: <FaPhp color="#8993be" />},
  { icon: <FaJs color="#f0db4f" />},
  { icon: <SiDart color="#0175C2" />},
  { icon: <FaJava color="#f89820" />},
  { icon: <SiCodeigniter color="#ee4623" />},
  { icon: <SiFlutter color="#02569B" />},
  { icon: <SiBootstrap color="#563d7c" />},
  { icon: <SiFigma color="#a259ff" />},
  { icon: <SiCoreldraw color="#00AEEF" /> },
  { icon: <SiReact color="#61DAFB" />},
  { icon: <DiMysql color="#4479A1" />},
];

const About = () => {
  return (
    <section
      id="about"
      className="py-5"
      style={{
        backgroundColor: "#fff",
        color: "#000",
      }}
    >
      <Container>
        <Row className="align-items-center g-0">
          <Col
            md={5}
            className="d-none d-md-flex justify-content-center"
            style={{
              marginTop: "-48px",
              overflow: "visible",
              position: "relative",
            }}
          >
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </Col>

          {/* Mobile: ProfileCard */}
          <Col
            xs={12}
            className="d-flex d-md-none justify-content-center mb-4"
            style={{ marginTop: "10px", position: "relative" }}
          >
            <ProfileCard
              name="Rheza"
              title="Web Development"
              handle="Rheza"
              status="Online"
              contactText="Contact Me"
              avatarUrl={imgProfile}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </Col>

          <Col md={7}>
            <h2 className="fw-bold display-5">Rheza Rifalsya Hermawan</h2>
            <p className="fs-5">
              Informathics Student | Web Development
            </p>
            <p style={{ maxWidth: "700px" }}>
              Iam an Informatics Engineering student who believes that every line of code has the power to create change.
              My interest in technology started from my curiosity about how applications and websites work,
              which later developed into a determination to pursue a career as a software engineer.
            </p>
            <p style={{ maxWidth: "700px" }}>
             I have a strong interest in frontend development, with an approach that focuses on performance, 
             clarity of structure, and user experience. To me, an interface is not just about how it looks, 
             but also about how the user interacts, feels guided, and feels unencumbered.
            </p>
            <p style={{ maxWidth: "700px" }}>
              Currently, I am focusing on deepening my knowledge of React JS as the main foundation for building modern,
              dynamic, and efficient interfaces. I also continue to explore design principles and best practices in
              user interface development to create intuitive and impactful digital solutions.
            </p>
            <Button
              size="lg"
              href="/doc/CV-RhezaRifalsyaHermawan.pdf"
              download
              className="mt-3"
              style={{
                background: "#001219",
                color: "#fff",
                fontWeight: "500",
                borderRadius: "12px",
              }}
            >
              <FiDownload className="me-2" />
              Download CV
            </Button>
          </Col>
        </Row>

      </Container>

       <CurvedLoop
          speed={10}
          curveAmount={500}
          direction="right"
          interactive={true}
          className="custom-text-style"
          style={{color: "#fff", padding: "2rem 0" }}
        >
          {techStack.map((tech, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 2rem"
              }}
            >
              <div style={{ fontSize: "3rem" }}>{tech.icon}</div>
            </div>
          ))}
        </CurvedLoop>
    </section>
  );
};

export default About;