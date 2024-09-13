import React from 'react';
import './AboutUs.css';
import aboutus from '../../assests/aboutus.png'; // Import the image

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-banner">
        <h1 className="about-us-title">About Us</h1>
        <p className="about-us-subtitle">Empowering Learners Worldwide</p>
      </div>
      <div className="about-us-content">
        <div className="about-us-image-container">
          <img src={aboutus} alt="About Us" className="about-us-image" />
        </div>
        <div className="about-us-text-container">
          <div className="about-us-section">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-description">
              At EdTech, our mission is to provide accessible, affordable, and high-quality education to learners everywhere. We believe in the power of education to transform lives and strive to make learning a lifelong, engaging journey.
            </p>
          </div>
          <div className="about-us-section">
            <h2 className="section-title">Our Story</h2>
            <p className="section-description">
              Founded by educators and technology enthusiasts, EdTech was born out of a desire to bridge the gap between traditional education and the skills needed in today's fast-paced world. We combine cutting-edge technology with expert teaching to offer courses that prepare our students for the challenges of tomorrow.
            </p>
          </div>
          <div className="about-us-section">
            <h2 className="section-title">Why Choose Us?</h2>
            <ul className="about-us-list">
              <li>Experienced Instructors</li>
              <li>Interactive Learning</li>
              <li>Global Community</li>
              <li>Flexible Learning Paths</li>
              <li>Career Advancement Opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
