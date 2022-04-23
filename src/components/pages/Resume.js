import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="section-alt">
      <article className="content">
        <a href="AlanPhelpsResume.pdf" download>
          <h2 className="section-header">Resume</h2>
        </a>
        <br/>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vQ4WB6vaijJYwn0uQKuLC2LpdmEd-RUTxUPvVjVOawJKfDhPWpuWHSy36cMvs9iQAP1D5phm3AljZ05/pub?embedded=true"
          className="resume"
          title="myResume"
        ></iframe>
      </article>
    </section>
  );
}
