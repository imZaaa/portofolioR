import React, { useState, useEffect } from "react";
import "../assets/styles/style.css";
import Logo from "../assets/img/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg floating-navbar ${scrolled ? "nav-scrolled" : "nav-top"}`}>
      <div className="container-fluid d-flex align-items-center justify-content-between px-2">
        
        {/* Logo */}
        <a className="navbar-brand m-0 p-0" href="#">
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </a>

        {/* Menu Tengah */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row gap-1">
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
                >
                  {section.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Tombol Kanan */}
        <div className="nav-cta d-none d-lg-block">
          <a href="#contact" className="btn-talk-elite">Let's Talk</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;