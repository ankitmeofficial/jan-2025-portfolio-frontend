import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Hackathon: Toy and Games Website",
      description:
        "Developed a website for a hackathon with interactive features. Built using the MERN stack (MongoDB, Express, React, Node.js).",
      link: "https://toyandgames-demo.netlify.app/", // Replace with actual demo link
    },
    {
      title: "Math Adventure Game",
      description:
        "Created a responsive math game website using the MERN stack. Focused on interactive and engaging user experiences.",
      link: "https://mathadventure-demo.netlify.app/", // Replace with actual demo link
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio showcasing skills, experience, and projects with a responsive and dynamic design.",
      link: "https://ankitmeofficial.netlify.app/",
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
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="see-more-btn">See More</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
