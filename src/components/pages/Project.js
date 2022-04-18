import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project() {
  const projectList = [
    {
      name: "RVA Sk8Spotter",
      pic: "Sk8SpotterScreenshot.png",
      deployedUrl: "https://sk8spotter.herokuapp.com/",
      GitHubUrl: "https://github.com/sora64/sk8spotter",
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
  ];

  const projects = projectList.map((project) => (
    <section className="projects">
      <div className="wrapper">
        <div>
          <div className="link-text">{project.name}</div>
          <a href={project.deployedUrl}>
            <img
              src={require(`../../../public/images/${project.pic}`)}
              alt={project.name}
              key={project.index}
              className="project-img"
            />
          </a>
          <p className="deployment">
            <a href={project.GitHubUrl}>
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </p>
        </div>
      </div>
    </section>
  ));

  return <ul>{projects}</ul>;
}
