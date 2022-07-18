import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project() {
  const projectList = [
    {
      name: "House Show",
      pic: "houseShowScreenshot.png",
      description: "This application uses React.js, GraphQL, Node.js, Express.js, MongoDB, Mongoose ODM, and JWT to provide performing artists with a platform for seeking out and reserving venues, and provides venue hosts with a platform for booking artists.",
      deployedUrl: "https://house-show.herokuapp.com/",
      GitHubUrl: "https://github.com/Haguermeister/House-show/",
    },
    {
      name: "RVA Sk8Spotter",
      pic: "Sk8SpotterScreenshot.png",
      description: "This application uses an in-house RESTful API, MySQL, Sequelize ORM, and Handlebars.js, to make finding local skateparks easier for skaterboarders. Users can view skateparks in RVA along with images of each skatepark. The app also makes it possible for users to leave comments that persist for others in the skateboarding community and will allow them to find new or undiscovered skateparks.",
      deployedUrl: "https://sk8spotter.herokuapp.com/",
      GitHubUrl: "https://github.com/sora64/sk8spotter",
    },
    {
      name: "phelpsBookSrchr",
      pic: "phelpsBookSrchrScreenshot.png",
      description: "This application uses an Apollo Server, GraphQL, and React.js to allow users to search for new books to read and to save any books that pique their interest. The books, both searched and saved, are shown with their titles, authors, descriptions, images (where extant), and links to their Google Book sites.",
      deployedUrl: "https://phelps-book-srchr.herokuapp.com/",
      GitHubUrl: "https://github.com/sora64/phelpsBookSrchr",
    },
    {
      name: "Budget Tracker",
      pic: "budgetTrackerScreenshot.png",
      description: "This progressive web application (PWA) uses a service worker, a web manifast, and IndexedDB to allow users to track their withdrawals and deposits with or without a data/internet connection.",
      deployedUrl: "https://track-that-budget-baby.herokuapp.com/",
      GitHubUrl: "https://github.com/sora64/track-that-budget-baby",
    },
    {
      name: "Tech Blog",
      pic: "phelpsTechBlogScreenshot.png",
      description: "This application uses the Model-View-Controller paradigm with MySQL2, Sequelize, Express.js, and Handlebars.js to provide a CMS-style blog site where users can publish articles, blog posts, and their thoughts and opinions.",
      deployedUrl: "https://phelps-tech-blog.herokuapp.com/",
      GitHubUrl: "https://github.com/sora64/phelps-tech-blog",
    },
    {
      name: "Music You May Like",
      pic: "musicYouMayLikeScreenshot.png",
      description: "This application uses front-end JavaScript and the YouTube and LastFM third party APIs to let users discover new musical artists by searching for artists they already like, so they can learn more about music and artists outside their current music libraries.",
      deployedUrl: "https://sora64.github.io/Music-You-May-Like/",
      GitHubUrl: "https://github.com/sora64/Music-You-May-Like",
    },
    {
      name: "Note Taker",
      pic: "noteTakerScreenshot.png",
      description: "This application uses Express.js to allow users to create and save notes on a webpage. The notes that users create are saved on a server, and retrieved from that same server. Notes may be added and deleted by clicking on various buttons on the webpage, said buttons' functionality being clear based on their appearance as specific icons.",
      deployedUrl: "https://phelps-note-taker.herokuapp.com/",
      GitHubUrl: "https://github.com/sora64/phelps-note-taker",
    },
    {
      name: "Weather Dashboard",
      pic: "weatherDashboardScreenshot.png",
      description: "This application uses the OpenWeather third-party API to allow users to search for a city and view its current and forecasted weather conditions. Searches are saved in a user's local storage in the client.",
      deployedUrl:
        "https://sora64.github.io/phelps-weather-dashboard/",
      GitHubUrl: "https://github.com/sora64/phelps-weather-dashboard",
    },
  ];

  const projects = projectList.map((project) => (
    <section className="projects" key={project.name}>
      <div className="project-wrapper">
        <div className="project-title">{project.name}</div>
        <div className="project-description">{project.description}</div>
        <a href={project.deployedUrl} target="_blank" rel="noreferrer">
          <img
            src={require(`../../../public/images/${project.pic}`)}
            alt={project.name}
            key={project.name}
            className="project-img"
          />
        </a>
        <p className="deployment">
          <a href={project.GitHubUrl} target="_blank" rel="noreferrer" className="github">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </p>
      </div>
    </section>
  ));

  return <ul>{projects}</ul>;
}
