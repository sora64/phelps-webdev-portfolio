import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project() {
  const projectList = [
    {
      name: "Python Newsfeed",
      pic: "pythonNewsfeedScreenshot.png",
      description:
        "This application provides users with a social media platform where they can create, update, comment on, and update posts containing links to the latest developments in tech, on a personal or public scale.",
      technologiesUsed: [
        "Python",
        "Flask",
        "Gunicorn",
        "MySQL",
        "SQLAlchemy",
      ],
      deployedUrl: "https://phelps-python-newsfeed.herokuapp.com/",
      GitHubUrl: "https://github.com/sora64/python-newsfeed",
    },
    {
      name: "House Show",
      pic: "houseShowScreenshot.png",
      description:
        "This application provides performing artists with a platform for seeking out and reserving venues, and provides venue hosts with a platform for booking artists.",
      technologiesUsed: [
        "React.js",
        "GraphQL",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      deployedUrl: "https://house-show.herokuapp.com/",
      GitHubUrl: "https://github.com/Haguermeister/House-show/",
    },
    {
      name: "RVA Sk8Spotter",
      pic: "Sk8SpotterScreenshot.png",
      description:
        "This application makes finding local skateparks easier for skaterboarders. Users can view skateparks in RVA along with images of each skatepark. The app also makes it possible for users to leave comments that persist for others in the skateboarding community and will allow them to find new or undiscovered skateparks.",
      technologiesUsed: [
        "RESTful API",
        "MySQL",
        "Sequelize",
        "Handlebars.js",
        "Google Maps API",
      ],
      deployedUrl: "https://sk8spotter.herokuapp.com/",
      GitHubUrl: "https://github.com/sora64/sk8spotter",
    },
    {
      name: "phelpsBookSrchr",
      pic: "phelpsBookSrchrScreenshot.png",
      description:
        "This application allows users to search for new books to read and to save any books that pique their interest. The books, both searched and saved, are shown with their titles, authors, descriptions, images (where extant), and links to their Google Book sites.",
      technologiesUsed: [
        "Apollo",
        "GraphQL",
        "React.js",
        "Node.js",
        "Google Books API",
      ],
      deployedUrl: "https://phelps-book-srchr.herokuapp.com/",
      GitHubUrl: "https://github.com/sora64/phelpsBookSrchr",
    },
    {
      name: "Budget Tracker",
      pic: "budgetTrackerScreenshot.png",
      description:
        "This progressive web application (PWA) allows users to track their withdrawals and deposits with or without a data/internet connection.",
      technologiesUsed: [
        "Service Worker",
        "Web Manifest",
        "IndexedDB",
        "Express.js",
        "MongoDB",
      ],
      deployedUrl: "https://track-that-budget-baby.herokuapp.com/",
      GitHubUrl: "https://github.com/sora64/track-that-budget-baby",
    },
    {
      name: "Tech Blog",
      pic: "phelpsTechBlogScreenshot.png",
      description:
        "This application provides a CMS-style blog site where users can publish articles, blog posts, and their thoughts and opinions.",
      technologiesUsed: [
        "MVC Framework",
        "MySQL2",
        "Sequelize",
        "Express.js",
        "Handlebars.js",
      ],
      deployedUrl: "https://phelps-tech-blog.herokuapp.com/",
      GitHubUrl: "https://github.com/sora64/phelps-tech-blog",
    },
    {
      name: "Music You May Like",
      pic: "musicYouMayLikeScreenshot.png",
      description:
        "This application lets users discover new musical artists by searching for artists they already like, so they can learn more about music and artists outside their current music libraries.",
      technologiesUsed: [
        "HTML5",
        "CSS",
        "JavaScript",
        "Youtube API",
        "LastFM API",
      ],
      deployedUrl: "https://sora64.github.io/Music-You-May-Like/",
      GitHubUrl: "https://github.com/sora64/Music-You-May-Like",
    },
    {
      name: "Note Taker",
      pic: "noteTakerScreenshot.png",
      description:
        "This application lets users create and save notes on a webpage. The notes that users create are saved on a server, and retrieved from that same server. Notes may be added and deleted by clicking on various buttons on the webpage, said buttons' functionality being clear based on their appearance as specific icons.",
      technologiesUsed: ["Express.js", "Node.js", "JavaScript", "HTML5", "CSS"],
      deployedUrl: "https://phelps-note-taker.herokuapp.com/",
      GitHubUrl: "https://github.com/sora64/phelps-note-taker",
    },
    {
      name: "Weather Dashboard",
      pic: "weatherDashboardScreenshot.png",
      description:
        "This application gives users the ability to search for a city and view its current and forecasted weather conditions. Searches are saved in a user's local storage in the client.",
      technologiesUsed: [
        "JavaScript",
        "HTML5",
        "DOM",
        "Bootstrap",
        "OpenWeather API",
      ],
      deployedUrl: "https://sora64.github.io/phelps-weather-dashboard/",
      GitHubUrl: "https://github.com/sora64/phelps-weather-dashboard",
    },
  ];

  const projects = projectList.map((project) => (
    <section className="projects" key={project.name}>
      <div className="project-wrapper">
        <div className="project-title">{project.name}</div>
        <a
          href={project.GitHubUrl}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <img
            src={require(`../../../public/images/${project.pic}`)}
            alt={project.name}
            key={project.name}
            className="project-img"
          ></img>
        </a>
        <div className="project-description">{project.description}</div>
        <ul className="main-technologies">
          <div>Main Technologies Used:</div>
          <li>• {project.technologiesUsed[0]}</li>
          <li>• {project.technologiesUsed[1]}</li>
          <li>• {project.technologiesUsed[2]}</li>
          <li>• {project.technologiesUsed[3]}</li>
          <li>• {project.technologiesUsed[4]}</li>
        </ul>
        {/* <p className="deployment">
          <a
            href={project.GitHubUrl}
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </p> */}
      </div>
    </section>
  ));

  return <ul>{projects}</ul>;
}
