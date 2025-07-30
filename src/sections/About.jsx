import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Lanyard from "../components/Lanyard/Lanyard";
import CurvedLoop from "../components/CurvedLoop/CurvedLoop";
import { DiMysql } from "react-icons/di";
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

          <Col md={7}>
            <h2 className="fw-bold display-5">Rheza Rifalsya Hermawan</h2>
            <p className="fs-5">
              Mahasiswa Informatika | Frontend Developer
            </p>
            <p style={{ maxWidth: "700px" }}>
              Saya adalah mahasiswa Informatika yang meyakini bahwa setiap
              baris kode memiliki kekuatan untuk menciptakan perubahan.
              Ketertarikan saya terhadap dunia teknologi dimulai dari rasa
              penasaran terhadap cara kerja aplikasi dan situs web, yang
              kemudian berkembang menjadi tekad untuk meniti karier sebagai
              software engineer.
            </p>
            <p style={{ maxWidth: "700px" }}>
              Saya memiliki minat yang kuat di bidang frontend development,
              dengan pendekatan yang berfokus pada performa, kejelasan
              struktur, dan kenyamanan pengguna. Bagi saya, antarmuka bukan
              hanya soal tampilan, tapi juga pengalaman bagaimana pengguna
              berinteraksi, merasa terarah, dan tidak terbebani.
            </p>
            <p style={{ maxWidth: "700px" }}>
              Saat ini, saya sedang berfokus mendalami React JS sebagai
              fondasi utama dalam membangun antarmuka yang modern, dinamis,
              dan efisien. Saya juga terus mengeksplorasi prinsip-prinsip
              desain dan praktik terbaik dalam pengembangan user interface
              agar mampu menciptakan solusi digital yang intuitif dan
              berdampak.
            </p>
            <Button
              size="lg"
              href="/cv.pdf"
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