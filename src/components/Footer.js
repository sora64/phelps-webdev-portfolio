import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Resume() {
  return (
    <footer>
      <h2>Made by Alan Phelps, 2022.</h2>
      <a
        href="https://www.linkedin.com/in/alan-phelps-43ab57b6/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="xl" color="white" />
      </a>
      --
      <a href="https://github.com/sora64" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} size="xl" color="grey" />
      </a>
      --
      <a href="https://twitter.com/sora643216" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="xl" color="#1DA1F2" />
      </a>
    </footer>
  );
}
