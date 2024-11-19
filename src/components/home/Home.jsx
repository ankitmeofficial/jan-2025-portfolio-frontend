import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import profileImage from "./profileImage.jpg";

const Home = () => {
  const textRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false); // State for showing/hiding the popup

  const roles = ["UI/UX Design", "Web Developer", "Logo Design"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (showPopup) {
        setShowPopup(false); // Close the popup on scroll
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup the scroll event listener
  }, [showPopup]);

  const handleSeeMoreClick = () => {
    setShowPopup(true); // Show the popup
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Hide the popup
  };

  return (
    <div className="home-container">
      {/* Text Section */}
      <div className="text-container">
        <h2 style={{ color: '#ff5733' }}>Hello, It's Me</h2>
        <h1> I'm Ankit Kumar Singh</h1>
        <h2>I am a <span className="animated-role">{roles[roleIndex]}</span></h2>
        <p ref={textRef}>Passionate and versatile Full Stack Web Developer with a flair for creating dynamic, user-centric experiences. Skilled in UI/UX design, I craft intuitive interfaces that combine functionality with a touch of creativity.</p>
        <button className="see-more-btn" onClick={handleSeeMoreClick}>See More</button>
      </div>

      {/* Image Section */}
      <div className="image-container">
        <img src={profileImage} alt="Ankit Kumar Singh" />
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>More About Me</h3>
            <p>
              I am an ambitious and detail-oriented professional who loves
              tackling complex challenges. Whether it's designing sleek user
              interfaces or solving backend issues, I bring passion and
              dedication to every project I undertake.
            </p>
            <button className="close-popup-btn" onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
