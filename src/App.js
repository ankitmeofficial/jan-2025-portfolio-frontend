import React, { useState } from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Header from "./components/home/Header";
import Myservices from "./components/services/Myservices";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Projects from "./components/project/Projects";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.setAttribute("data-theme", isDarkMode ? "light" : "dark");
  };

  return (
    <>
      {/* Header Section */}
      <Header />
      
      {/* Theme Toggle Button */}
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      {/* Main Content */}
      <section id="home" className="section">
        <Home />
      </section>
      <section id="about" className="section">
        <About />
      </section>
      <section id="services" className="section">
        <Myservices />
      </section>
      <section id="skills" className="section">
        <Skills />
      </section>
      <section id="projects" className="section">
        <Projects />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default App;
