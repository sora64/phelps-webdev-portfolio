import React from "react";
import "../../styles/Resume.css";

export default function Resume() {
  return (
    <section id="resume" className="section-alt">
      <article className="content">
        <h2 className="section-header">Resume</h2>
        <a
          href="https://docs.google.com/document/d/1dpc3u5yFJxrkQmLU6KGUWtIL6tjGHA32pIb5mz0ukeg/export?format=pdf"
          download
        >
          <h4>
            Click this text to download a copy of my resume
            <div className="scroll-instructions">
              or view it below (scroll in the box to see more)
            </div>
          </h4>
        </a>
        <br />
        <div className="resume-container">
          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vR71-pwuPMXy9XBdrnpmNMiDj_gdX4awF82vIGI1h0_DH_eOBusaFuV9kQF2rE-1uVEzBwQY_X5Ys-E/pub?embedded=true"
            className="resume"
            title="myResume"
          ></iframe>
        </div>
      </article>
    </section>
  );
}
