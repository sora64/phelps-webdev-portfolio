import React, { useState } from "react";

function NavTabs({ currentPage, handlePageChange }) {
  const [ focused, setFocused ] = useState(false);
  let classes = "nav-link";
  if (focused) {
    classes="green-text"
  }

  return (
    <nav className="navbar" id="myTopnav">
      <a href="/phelps-portfolio-yes-indeed/" className="logo">
        ALAN PHELPS
      </a>
      <ul className="nav-menu">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className="nav-link"
            onFocus={() => setFocused(false)}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#work"
            onClick={() => handlePageChange("Portfolio")}
            className="nav-link"
            onFocus={() => setFocused(false)}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            id="resumeNav"
            onFocus={() => setFocused(true)}
            className={classes}
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className="nav-link"
            onFocus={() => setFocused(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
