import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/Project.css";
import imgVivarta from "../assets/img/vivarta.png";
import imgComputer from "../assets/img/computer.png";
import imgNature from "../assets/img/nature.png";
import imgTK from "../assets/img/tk.png";
import imgStudy from "../assets/img/study.png";
import imgCar from "../assets/img/car.png";

const projects = [
  {
    title: "Nature Nest",
    description: "Aplikasi mobile wisata lokal dengan fitur wishlist dan ulasan.",
    tech: ["Flutter", "Dart", "API"],
    image: imgNature,
    link: "https://github.com/imZaaa/NatureNest-Aplikasi-Wisata-Lokal",
  },
  {
    title: "Vivarta Klinik",
    description: "Website klinik dengan berbagai fitur dengan admin dan user.",
    tech: ["PHP", "CodeIgniter 3", "MySQL", "Bootstrap"],
    image: imgVivarta,
    link: "https://github.com/imZaaa/CI-KlinikK",
  },
  {
    title: "Study Master",
    description: "Aplikasi mobile untuk membuat jadwal belajar.",
    tech: ["Flutter", "Dart"],
    image: imgStudy,
    link: "https://github.com/imZaaa/Aplikasi-Jadwal-Belajar",
  },
  {
    title: "Tech Nest",
    description: "Mini Website E-Commerce dengan menjual berbagai produk komputer.",
    tech: ["PHP", "CodeIgniter 3", "MySQL", "Bootstrap"],
    image: imgComputer,
    link: "https://github.com/imZaaa/mini_computer_store",
  },
  {
    title: "Design Website Taman Kanak-Kanak",
    description: "Design tampilan website untuk taman kanak-kanak.",
    tech: ["Figma"],
    image: imgTK,
    link: "https://www.figma.com/design/xG0dxMza2zMHHs9RAKFyg0/Madani-Website?node-id=0-1&p=f&t=9VweO569BifYi9dA-",
  },
  {
    title: "Design Website Booking Cuci Mobil ",
    description: "Design tampilan website untuk melakukan booking cuci mobil.",
    tech: ["Figma"],
    image: imgCar,
    link: "https://www.figma.com/design/OVnOZ0lcxYstJ7yIoFcq76/Carwash?node-id=0-1&p=f&t=LMz2D4LakEl4PJJ1-0-",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5" style={{ backgroundColor: "#0f172a", color: "#fff" }}>
      <Container>
        <h2 className="text-center fw-bold display-5 mb-5">My Projects</h2>
        <Row className="g-4">
          {projects.map((project, idx) => (
            <Col key={idx} md={6} lg={4}>
              <div className="custom-project-card">
                <div className="custom-project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="custom-project-body">
                  <h5 className="fw-bold">{project.title}</h5>
                  <p className="fw-light">{project.description}</p>
                  <div className="tech-badges">
                    {project.tech.map((t, i) => (
                      <span key={i} className="badge-tech">{t}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-link">
                    View Project →
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
