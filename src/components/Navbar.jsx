import React, { useState, useEffect } from "react";
import "../assets/styles/style.css";
import Logo from "../assets/img/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Perubahan ukuran terjadi setelah scroll 50px
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg floating-navbar ${scrolled ? "nav-scrolled" : "nav-top"}`}>
      <div className="container-fluid d-flex align-items-center justify-content-between px-md-4">
        
        {/* Brand/Logo - Persis kayak gambar */}
        <a className="navbar-brand p-0" href="#">
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </a>

        {/* Menu Links - Di Tengah dengan Background Active Capsule */}
        <div className={`collapse navbar-collapse justify-content-center ${isExpanded ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav d-flex gap-lg-1 menu-container">
            {["home", "about", "projects", "contact"].map((section) => (
              <li className="nav-item" key={section}>
                <Link
                  className="nav-link-pill"
                  activeClass="active-pill"
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsExpanded(false)}
                >
                  {section.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right CTA - Let's Talk Button */}
        <div className="d-flex align-items-center gap-3">
          <div className="nav-cta d-none d-lg-block">
            <a href="#contact" className="btn-talk-elite">Let's Talk</a>
          </div>

          {/* Hamburger buat Mobile */}
          <button 
            className="navbar-toggler border-0 p-0" 
            type="button" 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;