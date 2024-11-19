import React from "react";
import "./About.css"; // Add styles for About component
import profileImage from "./about_image.jpg";
const About = () => {
  return (
    <div className="about-container">
      <div className="image-section">
        <img src={profileImage} alt="About Me" />
      </div>

      <div className="text-section">
        <h1>About Me</h1>
        <h2>Full Stack Developer</h2>
        <p>
          Creative and detail-oriented Full Stack Web Developer with a knack for
          building seamless, responsive web experiences. My skills in UI/UX
          design help me craft visually appealing and user-friendly interfaces
          that elevate the user journey.
        </p>
        <p>
          With a background in logo and poster design, I bring a unique blend of
          artistic and technical expertise to every project. Driven by
          innovation, I’m passionate about designing solutions that not only
          look great but deliver results. Ready to collaborate and bring fresh
          ideas to life!
        </p>
        <a
          href="/Ankit_Kumar_Singh_CV.pdf" // Public path to the file
          className="download-cv-btn"
          download="Ankit_Kumar_Singh_CV.pdf"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default About;
