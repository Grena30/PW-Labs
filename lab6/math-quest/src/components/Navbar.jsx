import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';
import main_icon from '../img/main_page_icon.png';
import dark_theme from '../img/dark_theme_icon.png';

const Navbar = ({ fetchToken }) => { 
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('darkTheme');
    return savedTheme === 'true' ? true : false;
  });

  useEffect(() => {
    localStorage.setItem('darkTheme', isDarkTheme);
    const body = document.body;
    body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

    
  return (
    <nav id="navbar" className={`navbar ${isDarkTheme ? 'dark-theme' : ''}`}>
      <a className="navbar-logo-wrapper" href="#header">
        <img className="navbar-logo" src={main_icon} alt="Math-Quest" />
        <h1 className="navbar-title">Math-Quest</h1>
      </a>

      <div className="navbar-links">
        <a className="navbar-link" href="#courses" onClick={() => fetchToken("admin")}>Admin</a>
        <a className="navbar-link" href="#courses" onClick={() => fetchToken("writer")}>Writer</a>
        <a className="navbar-link" href="#home">Get started</a>
        <a className="navbar-link" href="#courses">Courses</a>
        <button className="navbar-btn" onClick={toggleTheme}>
          <img className="navbar-icon" src={isDarkTheme ? dark_theme : dark_theme} alt="dark_theme_icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;