import React from "react";
import "../../styles/Resume.css";

export default function Resume() {
  return (
    <section id="resume" className="section-alt">
      <article className="content">
        <h2 className="section-header">Resume</h2>
        <a
          href="https://docs.google.com/document/d/1OAJ2WdjFO2L1Bn4rYp-_9N7vRfKRYO0VyWZZOHR_Lg4/export?format=pdf"
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
            src="https://docs.google.com/document/d/e/2PACX-1vQ6IYbzQSlE-UqP3-CZcxlM6cHB6wWfFcpBjUnNO1molLfEnE5UYNa1cw_8eKzQIH7IFlX_E4tZrdgz/pub?embedded=true"
            className="resume"
            title="myResume"
          ></iframe>
        </div>
      </article>
    </section>
  );
}
