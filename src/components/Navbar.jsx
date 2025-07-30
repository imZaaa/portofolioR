import React from "react";
import { Link } from "react-scroll";
import "../assets/styles/style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg floating-navbar shadow-sm">
      <div className="container d-flex align-items-center justify-content-between position-relative">
        {/* Brand */}
        <a className="navbar-brand fw-bold" href="#">Zaa</a>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex gap-lg-4 gap-2 text-center">
            {["home", "about", "projects", "contact"].map((section) => (
              <li className="nav-item" key={section}>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-70} // biar gak ketutup navbar
                  duration={600}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
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
