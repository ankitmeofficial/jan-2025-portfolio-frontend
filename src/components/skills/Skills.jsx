import React, { useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  useEffect(() => {
    const container = document.querySelector(".skills-container");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            container.classList.add("visible");
          } else {
            container.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the container is visible
      }
    );

    observer.observe(container);

    return () => observer.disconnect(); // Cleanup the observer
  }, []);

  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      <div className="skills-wrapper">
        {/* Client-Side Skills */}
        <div className="skills-card left">
          <h2>Client-Side</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Responsive Design</li>
            <li>Logo Design</li>
          </ul>
        </div>

        {/* Server-Side Skills */}
        <div className="skills-card middle">
          <h2>Server-Side</h2>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Web Development</li>
          </ul>
        </div>

        {/* Tools/Software */}
        <div className="skills-card right">
          <h2>Tools/Software</h2>
          <ul>
            <li>Visual Studio Code</li>
            <li>GitHub</li>
            <li>Figma (UI/UX Design)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
