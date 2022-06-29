import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="section-alt">
      <article className="content">
        <h2 className="section-header">Resume</h2>
        <a
          href="https://docs.google.com/document/d/1VMR61Ro0s6gMaS_diw-S6FNiXXtsM7bHyn8IBBH4czs/edit?usp=sharing?format=pdf"
          download
        >
          <h4>Click here to download a copy of my resume.</h4>
        </a>
        <br />
        <iframe
          src="https://docs.google.com/document/d/1VMR61Ro0s6gMaS_diw-S6FNiXXtsM7bHyn8IBBH4czs/edit?usp=sharing?embedded=true"
          className="resume"
          title="myResume"
        ></iframe>
      </article>
    </section>
  );
}
