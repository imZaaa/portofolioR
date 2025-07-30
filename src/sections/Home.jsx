  import React from "react";
  import LightRays from "../components/LightRays/LightRays"; // pastikan path sesuai

  const Home = () => {
    return (
      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "100vh",
          backgroundColor: "#001219",
          overflow: "hidden", // biar efek nggak bocor
          color: "#ffffff",
          padding: "0 20px",
        }}
        className="d-flex flex-column justify-content-center align-items-center text-center"
      >
        {/* Background Light Rays */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>

        {/* Konten di atas efek */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Rheza Rifalsya Hermawan
          </h1>

          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "500",
              marginBottom: "1.5rem",
            }}
          >
            Web Development
          </h3>

          <p
            style={{
              maxWidth: "600px",
              color: "#cccccc",
              fontSize: "1rem",
              margin: "0 auto 2.5rem", // auto bikin box p-nya ke tengah
              textAlign: "center",     // teks di dalam box di-center juga
            }}
          >
            Crafting digital experiences with clean code and beautiful design.
            Passionate about creating solutions that make a difference.
          </p>

          <a
            href="#projects"
            style={{
              backgroundColor: "#ffffff",
              color: "#000000",
              padding: "0.75rem 1.75rem",
              borderRadius: "999px",
              fontWeight: "600",
              fontSize: "1rem",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#e6e6e6";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#ffffff";
            }}
          >
            View My Projects
          </a>
        </div>
      </section>
    );
  };

  export default Home;
