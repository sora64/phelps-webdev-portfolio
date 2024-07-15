import React from "react";
import "../../styles/About.css";

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
            <h1 className="section-header">About Me</h1>
            <h2 className="subsection-header">Summary</h2>
            <p>Experienced Full Stack Web Developer with a background in Education, Classics, and Linguistics. Efficient, and adept at problem solving to develop user-friendly applications. Known for breadth of knowledge, ability to explain information in understandable ways, and for enjoying challenges.</p>
            <h2 className="subsection-header">Technical Skills</h2>
            <ul>
              <li>
                Programming Languages: JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, Python, Java, PHP, TypeScript</li>
              <li>
                Frameworks and Libraries: React.js, React Native, Express.js, Node.js, Handlebars.js, jQuery, Bootstrap, Bulma, JSP
              </li>
              <li>
                Tools and Applications: Git, GitHub, MongoDB, MySQL, MySQL Server, Visual Studio, Visual Studio Code, Android Studio, Figma, Jira, Microsoft Azure DevOps, Microsoft Outlook, Microsoft Teams, Slack, Zoom
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
