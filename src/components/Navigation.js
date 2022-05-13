import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

function NavTabs({ currentPage, handlePageChange }) {
  const [aboutFocused, setAboutFocused] = useState(false);
  let aboutClass = "nav-link";
  if (aboutFocused) {
    aboutClass = "green-text";
  }

  const [portfolioFocused, setPortfolioFocused] = useState(false);
  let portfolioClass = "nav-link";
  if (portfolioFocused) {
    portfolioClass = "green-text";
  }

  const [resumeFocused, setResumeFocused] = useState(false);
  let resumeClass = "nav-link";
  if (resumeFocused) {
    resumeClass = "green-text";
  }

  const [contactFocused, setContactFocused] = useState(false);
  let contactClass = "nav-link";
  if (contactFocused) {
    contactClass = "green-text";
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
            onFocus={function () {
              setAboutFocused(true);
              setPortfolioFocused(false);
              setResumeFocused(false);
              setContactFocused(false);
            }}
            className={aboutClass}
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
            onFocus={function () {
              setAboutFocused(false);
              setPortfolioFocused(true);
              setResumeFocused(false);
              setContactFocused(false);
            }}
            className={portfolioClass}
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
            onFocus={function () {
              setAboutFocused(false);
              setPortfolioFocused(false);
              setResumeFocused(true);
              setContactFocused(false);
            }}
            className={resumeClass}
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
            onFocus={function () {
              setAboutFocused(false);
              setPortfolioFocused(false);
              setResumeFocused(false);
              setContactFocused(true);
            }}
            className={contactClass}
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
