import React from "react";

export default function Resume() {
  document.getElementById("workNav").classList.remove("green-text");
  document.getElementById("resumeNav").classList.add("green-text");
  return (
    <section id="resume" className="section-alt">
      <article className="content">
        <a href="https://docs.google.com/document/d/1CEZw2D5ndJFJqJXz7St1_fmOeJokTfL-jepKGyMavWw/edit?usp=sharing">
          <h2 className="section-header">Resume</h2>
        </a>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vQ4WB6vaijJYwn0uQKuLC2LpdmEd-RUTxUPvVjVOawJKfDhPWpuWHSy36cMvs9iQAP1D5phm3AljZ05/pub?embedded=true"
          className="resume"
          title="myResume"
        ></iframe>
      </article>
    </section>
  );
}
