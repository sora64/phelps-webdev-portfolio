import React from "react";
import Project from "./Project";
import "../../styles/Portfolio.css";

export default function Work() {
  return (
    <section id="portfolio" className="section-alt">
      <article className="content">
        <h2 className="section-header">Portfolio</h2>
        <br />
        <h5 className="work-instructions">
          Click an image to reach the related application's GitHub repository.
        </h5>
        <br />
        <Project />
      </article>
    </section>
  );
}
