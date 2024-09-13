import React from 'react';
import './Main-section.css';
import main from '../../src/assests/main.png'; // Replace with your actual image path

const Mainsection = () => {
  return (
    <div className="main-section">
      <div className="container">
        <div className="text-column">
        <h1><br/>From Aspiration to Achievement:<br/> The EdTech Way</h1>

          <p>
            Discover a variety of courses and resources designed to help you 
            advance in your career. Whether you're looking to learn new skills 
            or deepen your existing knowledge, we have the tools and expertise 
            to guide you every step of the way.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="image-column">
          <img src={main} alt="Educational Resources" />
        </div>
      </div>
    </div>
  );
};

export default Mainsection;

