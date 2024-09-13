import React, { useState, useEffect } from 'react';
import './ModeSwitcher.css';
import { FaSun, FaMoon } from 'react-icons/fa';

const ModeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="mode-switcher">
      <label className="bulb-switch">
        <input type="checkbox" onChange={toggleMode} checked={darkMode} />
        <span className="bulb">
          {darkMode ? <FaMoon className="icon moon-icon" /> : <FaSun className="icon sun-icon" />}
        </span>
      </label>
    </div>
  );
};

export default ModeSwitcher;
