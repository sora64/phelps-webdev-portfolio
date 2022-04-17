import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <>
      <PortfolioContainer />
      <footer>
        <h2>Made by Alan Phelps, 2022.</h2>
        <a href="https://www.linkedin.com/in/alan-phelps-43ab57b6/">
          <FontAwesomeIcon icon={faLinkedin} size="xl" color="white" />
        </a>
        --
        <a href="https://github.com/sora64">
          <FontAwesomeIcon icon={faGithub} size="xl" color="grey" />
        </a>
        --
        <a href="https://twitter.com/sora643216">
          <FontAwesomeIcon icon={faTwitter} size="xl" color="#1DA1F2" />
        </a>
      </footer>
    </>
  );
}
