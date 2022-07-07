import React from "react";

export default function About() {
  return (
    <section className="hero">
      <div className="hero-welcome">
        <h2 className="welcome">Welcome!</h2>
        <div className="hero-content">
          <img
            src="images/IMG_0422.jpeg"
            alt="Alan smiling in front of the Eiffel Tower in Paris, France."
            className="welcome-img"
          />
          <article className="content">
            <h2 className="section-header">About Me</h2>
            <p>
              My name is Alan Phelps, and I am a Latin teacher and a full-stack web developer. I have many years of working
              experience, from selling books to making coffee, from facilitating
              a high ropes course to teaching Latin. I'm resourceful,
              inquisitive, and efficient. I hope you enjoy the projects I post here!
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
