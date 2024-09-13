import React from 'react';
import { FaChalkboardTeacher, FaLaptopCode, FaGraduationCap, FaHandsHelping, FaProjectDiagram, FaUserShield } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">What We Provide?</h1>
      <h3>EdTech Services</h3>
      <div className="services-list">
        <div className="service-item">
          <FaChalkboardTeacher className="service-icon" />
          <h2 className="service-title">Expert Instructors</h2>
          <p className="service-description">Learn from industry experts with years of experience.</p>
        </div>
        <div className="service-item">
          <FaLaptopCode className="service-icon" />
          <h2 className="service-title">Interactive Courses</h2>
          <p className="service-description">Engage in hands-on coding sessions and real-world projects.</p>
        </div>
        <div className="service-item">
          <FaGraduationCap className="service-icon" />
          <h2 className="service-title">Certification Programs</h2>
          <p className="service-description">Earn certificates to boost your career opportunities.</p>
        </div>
        <div className="service-item">
          <FaHandsHelping className="service-icon" />
          <h2 className="service-title">Career Support</h2>
          <p className="service-description">Get guidance and resources to advance your career.</p>
        </div>
        <div className="service-item">
          <FaProjectDiagram className="service-icon" />
          <h2 className="service-title">Capstone Projects</h2>
          <p className="service-description">Work on industry-relevant projects to build your portfolio.</p>
        </div>
        <div className="service-item">
          <FaUserShield className="service-icon" />
          <h2 className="service-title">Personalized Mentorship</h2>
          <p className="service-description">Receive one-on-one mentorship tailored to your goals.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
