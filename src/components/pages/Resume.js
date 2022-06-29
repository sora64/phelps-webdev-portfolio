import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="section-alt">
      <article className="content">
        <h2 className="section-header">Resume</h2>
        <a
          href="https://docs.google.com/document/d/1VMR61Ro0s6gMaS_diw-S6FNiXXtsM7bHyn8IBBH4czs/export?format=pdf"
          download
        >
          <h4>Click here to download a copy of my resume.</h4>
        </a>
        <br />
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vRYHu9q2roOyKgeyM9ScGMlN7C-wJA66h282W4c-lZLn-sXJC5pQen-0-gBOcwI6mT-huvk-4oh8p8l/pub?embedded=true"
          className="resume"
          title="myResume"
        ></iframe>
      </article>
    </section>
  );
}
