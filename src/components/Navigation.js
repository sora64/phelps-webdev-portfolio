import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

function NavTabs({ currentPage, handlePageChange }) {
  const [focused, setFocused] = useState(false);
  let classes = "nav-link";
  if (focused) {
    classes = "green-text";
  }

  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navbar navLinks" id="myTopnav">
      <button onClick={handleToggle} className="hamburger">
        {navbarOpen ? (
          <MdClose style={{ color: "ffffff", width: "40px", height: "40px" }} />
        ) : (
          <FiMenu style={{ color: "#ffffff", width: "40px", height: "40px" }} />
        )}
      </button>{" "}
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <li className="nav-item" key="about">
          <a
            href="#about"
            onClick={function () {
              handlePageChange("About");
              closeMenu();
            }}
            className="nav-link"
            onFocus={() => setFocused(false)}
          >
            About Me
          </a>
        </li>
        <li className="nav-item" key="portfolio">
          <a
            href="#work"
            onClick={function () {
              handlePageChange("Portfolio");
              closeMenu();
            }}
            className="nav-link"
            onFocus={() => setFocused(false)}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item" key="resume">
          <a
            href="#resume"
            onClick={function () {
              handlePageChange("Resume");
              closeMenu();
            }}
            id="resumeNav"
            onFocus={() => setFocused(true)}
            className={classes}
          >
            Resume
          </a>
        </li>
        <li className="nav-item" key="contact">
          <a
            href="#contact"
            onClick={function () {
              handlePageChange("Contact");
              closeMenu();
            }}
            className="nav-link"
            onFocus={() => setFocused(false)}
          >
            Contact
          </a>
        </li>
      </ul>
      <a href="/phelps-portfolio-yes-indeed/" className="logo">
        ALAN PHELPS
      </a>
    </nav>
  );
}

export default NavTabs;
