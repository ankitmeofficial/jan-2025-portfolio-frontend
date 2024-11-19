import React from "react";
import "./Myservices.css";

const MyServices = () => {
  return (
    <div className="services-container">
      <h1>My Services</h1>
      <div className="services-wrapper">
        {/* Service 1 */}
        <div className="service-card">
          <h2>UI/UX Design</h2>
          <p>
            Crafting intuitive and engaging interfaces that enhance user experience.
          </p>
          <button className="see-more-btn">See More</button>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <h2>Web Developer</h2>
          <p>
            Building responsive, high-performance websites with a seamless user journey.
          </p>
          <button className="see-more-btn">See More</button>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <h2>Logo Design</h2>
          <p>
            Designing memorable logos that capture brand identity and leave a lasting impression.
          </p>
          <button className="see-more-btn">See More</button>
        </div>
      </div>
      <button className="see-all-btn">See All Services</button>
    </div>
  );
};

export default MyServices;
