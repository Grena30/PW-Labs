import React from 'react'
import '../css/Navbar.css'
import main_icon from '../img/main_page_icon.png'
import dark_theme from '../img/dark_theme_icon.png'

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar">
      <a className="navbar-logo-wrapper" href="#header">
        <img className="navbar-logo" src={main_icon} alt="Math-Quest" />
        <h1 className="navbar-title">Math-Quest</h1>
      </a>

      <div className="navbar-links">
        <a className="navbar-link" href="#get_started">Get started</a>
        <a className="navbar-link" href="#lessons">Courses</a>
        <a className="navbar-link" href="#about">About</a>
        <button className="navbar-btn">
          <img className="navbar-icon" src={dark_theme} alt="dark_theme_icon" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar