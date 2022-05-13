import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project() {
  const projectList = [
    {
      name: "House Show",
      pic: "houseShowScreenshot.png",
      deployedUrl: "https://house-show.herokuapp.com/",
      GitHubUrl: "https://github.com/Haguermeister/House-show/",
    },
    {
      name: "RVA Sk8Spotter",
      pic: "Sk8SpotterScreenshot.png",
      deployedUrl: "https://sk8spotter.herokuapp.com/",
      GitHubUrl: "https://github.com/sora64/sk8spotter",
    },
    {
      name: "phelpsBookSrchr",
      pic: "phelpsBookSrchrScreenshot.png",
      deployedUrl: "https://phelps-book-srchr.herokuapp.com/",
      GitHubUrl: "https://github.com/sora64/phelpsBookSrchr",
    },
    {
      name: "Budget Tracker",
      pic: "budgetTrackerScreenshot.png",
      deployedUrl: "https://track-that-budget-baby.herokuapp.com/",
      GitHubUrl: "https://github.com/sora64/track-that-budget-baby",
    },
    {
      name: "Tech Blog",
      pic: "phelpsTechBlogScreenshot.png",
      deployedUrl: "https://phelps-tech-blog.herokuapp.com/",
      GitHubUrl: "https://github.com/sora64/phelps-tech-blog",
    },
    {
      name: "Music You May Like",
      pic: "musicYouMayLikeScreenshot.png",
      deployedUrl: "https://sora64.github.io/Music-You-May-Like/",
      GitHubUrl: "https://github.com/sora64/Music-You-May-Like",
    },
    {
      name: "Note Taker",
      pic: "noteTakerScreenshot.png",
      deployedUrl: "https://intense-lake-30149.herokuapp.com/",
      GitHubUrl: "https://github.com/sora64/phelps-note-taker-challenge",
    },
    {
      name: "Weather Dashboard",
      pic: "weatherDashboardScreenshot.png",
      deployedUrl:
        "https://sora64.github.io/phelps-weather-dashboard-challenge/",
      GitHubUrl: "https://github.com/sora64/phelps-weather-dashboard-challenge",
    },
  ];

  const projects = projectList.map((project) => (
    <section className="projects" key={project.name}>
      <div className="project-wrapper">
        <div className="project-title">{project.name}</div>
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
