import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Hackathon:Toy and Games Website",
      description:
        "Developed a website for a hackathon with interactive features. Built using the MERN stack (MongoDB, Express, React, Node.js).",
    },
    {
      title: "Math Adventure Game",
      description:
        "Created a responsive math game website using the MERN stack. Focused on interactive and engaging user experiences.",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio showcasing skills, experience, and projects with a responsive and dynamic design.",
    },
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-wrapper">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button className="see-more-btn">See More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
