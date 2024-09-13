import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = ({ onCourseSelect }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>About Us</h4>
            <p>Edtech is a platform dedicated to providing high-quality educational content to learners worldwide. Empowering your education with the best resources.</p>
          </div>

          <div className="footer-column">
            <h4>Contact Us</h4>
            <div className="footer-address">
              <FaMapMarkerAlt /> <p>123 EdTech Street, Knowledge City, ED 45678</p>
              <br/>
              <p>Email: info@edtech.com</p>
              <br/>
              <p>Phone: +123-456-7890</p>
            </div>
          </div>

          <div className="footer-column">
            <h4>Internship Courses</h4>
            <ul>
              <li><a href="#webdev" onClick={() => onCourseSelect('Web Development')}>Web Development</a></li>
              <li><a href="#datasci" onClick={() => onCourseSelect('Data Science')}>Data Science</a></li>
              <li><a href="#marketing" onClick={() => onCourseSelect('Digital Marketing')}>Digital Marketing</a></li>
              <li><a href="#design" onClick={() => onCourseSelect('Graphic Design')}>Graphic Design</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a> 
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 EdTech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
