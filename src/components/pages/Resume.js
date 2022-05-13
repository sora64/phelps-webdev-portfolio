import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="section-alt">
      <article className="content">
        <h2 className="section-header">Resume</h2>
        <a
          href="https://docs.google.com/document/d/1CEZw2D5ndJFJqJXz7St1_fmOeJokTfL-jepKGyMavWw/export?format=pdf"
          download
        >
          <h4>Click here to download a copy of my resume.</h4>
        </a>
        <br />
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vQ4WB6vaijJYwn0uQKuLC2LpdmEd-RUTxUPvVjVOawJKfDhPWpuWHSy36cMvs9iQAP1D5phm3AljZ05/pub?embedded=true"
          className="resume"
          title="myResume"
        ></iframe>
      </article>
    </section>
  );
}
