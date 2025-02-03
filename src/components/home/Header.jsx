import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Header.css";
import profilelogo from "./it_smelogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  // Toggle navigation visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Hide/show header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={`header ${visible ? "" : "hidden"}`}>
      <div className="logo">
        <img src={profilelogo} alt="logo_image" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰ {/* Simple Hamburger Icon */}
      </div>
      <nav className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
        <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link>
        <Link to="services" smooth={true} duration={500} onClick={toggleMenu}>Services</Link>
        <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</Link>
        <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link>
        <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
