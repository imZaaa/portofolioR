import React from "react";
import "../assets/styles/style.css";

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg floating-navbar shadow-sm">
      <div className="container d-flex align-items-center justify-content-between position-relative">
        {/* Brand */}
        <a className="navbar-brand fw-bold" href="#">Zaa</a>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav d-flex gap-lg-4 gap-2 text-center">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Hamburger */}
        <button
          className="navbar-toggler ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
