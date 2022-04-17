import React from "react";

export default function Home() {
  // document.getElementById("workNav").classList.remove("green-text");
  // document.getElementById("resumeNav").classList.remove("green-text");
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
          <p className="welcome-text">
            Welcome to my portfolio! Read about me, see my work, and contact me
            for any and all inquiries. Thank you, and have a great day!
          </p>
        </div>
      </div>
    </section>
  );
}
