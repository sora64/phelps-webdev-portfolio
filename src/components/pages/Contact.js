import React from "react";

export default function Contact() {
  return (
    <section id="contact-me">
      <article className="content">
        <h2 style={{ "margin-top": 50 }}>Contact Me</h2>
        <article className="contact-address">
          <h3>Alan Phelps</h3>
          <br />
          <p className="addresses">Mail: P.O. Box 4496, Richmond, VA</p>
          <br />
          <p className="addresses">
            Phone : (252) 796-7552
            <br />
          </p>
          <br />
          <p className="addresses">
            Email: <a href="mailto:phelpsa64@gmail.com">phelpsa64@gmail.com</a>
          </p>
          <br />
          <p className="addresses">
            GitHub: <a href="https://github.com/sora64">github.com/sora64</a>
          </p>
          <br />
          <p className="addresses">
            <a href="https://www.linkedin.com/in/alan-phelps-43ab57b6">
              LinkedIn Profile
            </a>
          </p>
        </article>
      </article>
    </section>
  );
}
