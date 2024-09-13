import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';
import favicon from '../../assests/favicon.png'; // Update this path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolling ? 'window-scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src={favicon} alt="Logo" className="logo-image" />
          <Link to="/">EduTech</Link>
        </div>
        <div className="toggle-button" onClick={toggleMenu}>
          <div className={menuOpen ? 'bar1 open' : 'bar1'}></div>
          <div className={menuOpen ? 'bar2 open' : 'bar2'}></div>
          <div className={menuOpen ? 'bar3 open' : 'bar3'}></div>
        </div>
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/internship">Internship</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
