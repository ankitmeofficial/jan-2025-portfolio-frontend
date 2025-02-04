import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import profileImage from "./profileImage.jpg";
import { Link } from "react-scroll";  // Ensure this import is included if using `Link`

const Home = () => {
  const textRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = ["Full Stack Web Developer", "Logo Design"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [roles.length]); // Add roles.length as a dependency

  return (
    <div className="home-container">
      {/* Text Section */}
      <div className="text-container">
        <h2 style={{     color: "#BB86FC" }}>Hello, It's Me</h2>
        <h1>I'm Ankit Kumar Singh</h1>
        <h2>
          I am a <span className="animated-role">{roles[roleIndex]}</span>
        </h2>
        <p ref={textRef}>
          Passionate and versatile Full Stack Web Developer with a flair for
          creating dynamic, user-centric experiences. Skilled in UI/UX design, I
          craft intuitive interfaces that combine functionality with a touch of
          creativity.
        </p>

        <Link to="about" smooth={true} duration={500}>
          <button className="see-more-btn">See more</button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="image-container">
        <img src={profileImage} alt="Ankit Kumar Singh" />
      </div>
    </div>
  );
};

export default Home;
