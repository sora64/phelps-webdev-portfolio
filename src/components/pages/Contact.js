import React from "react";
import "../../styles/Contact.css";

export default function Contact() {
  return (
    <section id="contact-me">
      <article className="content section-alt">
        <h2 className="section-header">Contact</h2>
        <br/>
        <article className="contact-address">
          <h3 className="my-name">Alan Phelps</h3>
          <br />
          <p className="addresses">Mail: P.O. Box 4496, Richmond, VA</p>
          <br />
          <p className="addresses">Phone : (252) 796-7552</p>
          <br />
          <p className="addresses">
            Email: <a href="mailto:phelpsa64@gmail.com">phelpsa64@gmail.com</a>
          </p>
          <br />
          <p className="addresses">
            GitHub: <a href="https://github.com/sora64" target="_blank" rel="noreferrer">@sora64</a>
          </p>
          <br />
          <p className="addresses">
            <a href="https://www.linkedin.com/in/phelps64" target="_blank" rel="noreferrer">
              LinkedIn Profile
            </a>
          </p>
        </article>
      </article>
    </section>
  );
}
