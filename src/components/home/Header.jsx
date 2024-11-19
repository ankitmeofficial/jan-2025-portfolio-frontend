import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
import profilelogo from "./it_smelogo.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={profilelogo} alt="logo_image" />
      </div>
      <nav className="nav-links">
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="services" smooth={true} duration={500}>
          services
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
