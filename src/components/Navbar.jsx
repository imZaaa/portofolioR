import React, { useState, useEffect } from "react";
import "../assets/styles/style.css";
import Logo from "../assets/img/logo.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // === STYLE OFF-CANVAS DRAWER ===
  const backdropStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(8px)",
    zIndex: 2000, 
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? "visible" : "hidden",
    transition: "all 0.4s ease-in-out",
  };

  const drawerStyle = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    width: "80%", 
    maxWidth: "320px",
    background: "#090d12", 
    borderLeft: "1px solid rgba(139, 92, 246, 0.2)", 
    boxShadow: "-15px 0 40px rgba(0,0,0,0.6)",
    padding: "2rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    zIndex: 2001, 
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg floating-navbar ${scrolled ? "nav-scrolled" : "nav-top"}`}
        style={{ 
            transition: "all 0.3s ease",
            zIndex: 1000 
        }}
      >
        {/* PX-LG-5 untuk jarak aman dari ujung pill */}
        <div className="container-fluid d-flex align-items-center justify-content-between px-3 px-md-4 px-lg-5 py-2">
          
          <a className="navbar-brand m-0 p-0 d-flex align-items-center" href="#">
            <img src={Logo} alt="Logo" className="navbar-logo" />
          </a>

          {/* Desktop Menu */}
          {/* FIX: Tambah mx-lg-5 biar dia nge-push Logo & Let's Talk ke samping */}
          <div className="d-none d-lg-flex justify-content-center flex-grow-1 mx-lg-5">
            <ul className="navbar-nav d-flex flex-row gap-4 gap-lg-4">
              {["home", "about", "projects", "contact"].map((section) => (
                <li className="nav-item" key={section}>
                  <Link
                    className="nav-link-pill"
                    activeClass="active-pill"
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    style={{ cursor: "pointer", fontSize: "0.85rem", fontWeight: "600" }}
                  >
                    {section.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="d-none d-lg-block">
            <a href="#contact" className="btn-talk-elite">Let's Talk</a>
          </div>

          {/* Burger Button */}
          <button
            className="d-lg-none"
            onClick={toggleMenu}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "1.6rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              height: "45px",
              width: "45px",
              cursor: "pointer",
            }}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* === DRAWER OVERLAY === */}
      <div style={backdropStyle} onClick={closeMenu} />

      <div style={drawerStyle}>
        <div className="w-100 d-flex justify-content-end mb-5">
          <button
            onClick={closeMenu}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              color: "#fff",
              fontSize: "1.2rem",
              height: "40px",
              width: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}
          >
            <FaTimes />
          </button>
        </div>

        <div className="d-flex flex-column gap-4">
          {["home", "about", "projects", "contact"].map((section, index) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMenu}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.75rem",
                fontWeight: "800",
                letterSpacing: "-0.02em",
                cursor: "pointer",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(30px)",
                transition: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.1}s`
              }}
              onMouseEnter={(e) => (e.target.style.color = "#8B5CF6")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <a
            href="#contact"
            className="btn-talk-elite w-100 text-center d-block"
            onClick={closeMenu}
            style={{ padding: "16px", borderRadius: "14px", fontSize: "1.1rem" }}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;