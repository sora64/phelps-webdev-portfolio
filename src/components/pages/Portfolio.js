import React from "react";
import Project from "./Project";

export default function Work() {
  return (
    <section id="portfolio" className="section-alt">
      <article className="content">
        <h2 className="section-header">Portfolio</h2>
        <br />
        <h5 className="work-instructions">
          Click an image to reach the related application at its deployed URL,
          where applicable. Click on the GitHub icon below an image to visit the
          related application's GitHub repository.
        </h5>
        <br />
        <Project />
        {/* <div className="projects">
          <div className="wrapper">
            <a href="https://sora64.github.io/photo-port/">
              <img
                src="images/photoPortPicjpg.jpeg"
                alt="PhotoPort GitHub repo link"
                width="500"
                height="500"
              />
              <div className="link-text lt1">Photo-Port</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/photo-port">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://track-that-budget-baby.herokuapp.com/">
              <img
                src="images/budgetTrackerScreenshot.png"
                alt="Budget Tracker GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Track That Budget!</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/track-that-budget-baby">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://sora64.github.io/food-festival/">
              <img
                src="images/foodFestival.jpg"
                alt="Food Festival GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Food Festival</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/food-festival">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://rva-pizza-hunt.herokuapp.com/">
              <img
                src="images/pizzaHuntScreenshot.png"
                alt="Pizza-Hunt GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Pizza-Hunt</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/pizza-hunt">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://drive.google.com/file/d/1rnE9P5jrvC2ktlyjA4TWMPQT-KfTWE3W/view">
              <img
                src="images/socialMediaApiScreenshot.png"
                alt="Social Media API GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Social-Media-API</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/phelps-social-media-api">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://gist.github.com/sora64/b448058c9b5ecf07ee0e60bf59c3f8f8">
              <img
                src="images/dateTimeRegexGistScreenshot.png"
                alt="DateTime Regex GitHub Gist link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">DateTime Regex Gist</div>
            </a>
            <p className="deployment">
              <a href="https://gist.github.com/sora64/b448058c9b5ecf07ee0e60bf59c3f8f8">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://sk8spotter.herokuapp.com/">
              <img
                src="images/Sk8SpotterScreenshot.png"
                alt="Sk8Spotter GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Sk8Spotter</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/sk8spotter">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://phelps-tech-blog.herokuapp.com/">
              <img
                src="images/phelpsTechBlogScreenshot.png"
                alt="u-develop-it GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">phelps-tech-blog</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/phelps-tech-blog">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://drive.google.com/file/d/1xyb5bvRGC8Yqd5tKzTyo6NKJor5-S71v/view">
              <img
                src="images/eCommerceBackendScreenshot.png"
                alt="u-develop-it GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">E-Commerce Backend</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/phelps-eCommerce-backend-challenge/">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://drive.google.com/file/d/1-5f5dwUV9d5rfRzmQq8zg9UXnsrnVkMj/view">
              <img
                src="images/employeeTrackerScreenshot.png"
                alt="u-develop-it GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Employee Tracker</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/phelps-employee-tracker-challenge">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://github.com/sora64/u-develop-it">
              <img
                src="images/uDevelopItScreenshot.png"
                alt="u-develop-it GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">u-develop-it</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/u-develop-it">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://intense-lake-30149.herokuapp.com/">
              <img
                src="images/noteTakerScreenshot.png"
                alt="Note Taker GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Note Taker</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/phelps-note-taker-challenge">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://blooming-island-88976.herokuapp.com/">
              <img
                src="images/zookeeprScreenshot.png"
                alt="Zoo Keepr GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Zoo Keepr</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/zookeepr">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://watch.screencastify.com/v/0ebeRx8dLUezg3dfHqkc">
              <img
                src="images/teamProfileGeneratorScreenshot.png"
                alt="Team Profile Generator GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Team Profile Generator</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/phelps-team-profile-generator-challenge">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://github.com/sora64/jest-another-RPG">
              <img
                src="images/jestAnotherRPGplaceholderImage.jpeg"
                alt="Jest Another RPG Generator GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Jest Another RPG</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/jest-another-RPG">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://github.com/sora64/phelps-README-generator-challenge">
              <img
                src="images/readmeGeneratorScreenshot.png"
                alt="README Generator GitHub repo lik"
                width="400"
                height="300"
              />
              <div className="link-text lt2">README Generator</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/phelps-README-generator-challenge">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://github.com/sora64/portfolio-generator">
              <img
                src="images/portfolioGeneratorScreenshot.png"
                alt="Portfolio Geneartor GitHub repo lik"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Portfolio Generator</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/portfolio-generator">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://sora64.github.io/Music-You-May-Like/">
              <img
                src="images/musicYouMayLikeScreenshot.png"
                alt="Music You May Like GitHub repo lik"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Music You May Like</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/Music-You-May-Like">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://sora64.github.io/weather-dashboard/">
              <img
                src="images/weatherDashboardScreenshot.png"
                alt="Weather Dashboard GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Weather Dashboard</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/phelps-weather-dashboard-challenge">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://sora64.github.io/git-it-done/">
              <img
                src="images/gitItDoneScreenshot.png"
                alt="Git-It-Done GitHub repository link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Git-It-Done</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/git-it-done">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://sora64.github.io/workday-scheduler/">
              <img
                src="images/WorkDaySchedulerScreenshot.png"
                alt="Workday Scheduler GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Workday Scheduler</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/workday-scheduler">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://sora64.github.io/taskmaster-pro/">
              <img
                src="images/taskMasterProScreenShot.png"
                alt="Taskmaster Pro GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Taskmaster Pro</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/taskmaster-pro">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://sora64.github.io/code-quiz-challenge/">
              <img
                src="images/Coding Quiz Challenge pic.png"
                alt="Coding Quiz Challenge GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Coding Quiz Challenge</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/code-quiz-challenge">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://sora64.github.io/taskinator/">
              <img
                src="images/Taskinator Webpabe.png"
                alt="Taskinator GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Taskinator</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/taskinator/">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://sora64.github.io/password-generator-challenge/">
              <img
                src="images/passWordGenerator.png"
                alt="Password Generator GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Password Generator</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/password-generator-challenge">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://sora64.github.io/robot-gladiators/">
              <img
                src="images/robot-face.png"
                alt="Robot Gladiators GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Robot Gladiators</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/robot-gladiators">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://sora64.github.io/Horiseon-Code-Refactor/">
              <img
                src="images/horiseon-marketing.jpg"
                alt="Horiseon Code Refactor GitHub repo link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Horiseon Code Refactor</div>
            </a>
            <p className="deployment">
              <a href="https://github.com/sora64/Horiseon-Code-Refactor">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
          <div className="wrapper">
            <a href="https://github.com/sora64/run-buddy">
              <img
                src="images/hero-bg.jpg"
                alt="Run-Buddy website link"
                width="400"
                height="300"
              />
              <div className="link-text lt2">Run-Buddy</div>
            </a>
            <p className="deployment">
              <a href="https://sora64.github.io/run-buddy/">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </p>
          </div>
        </div> */}
      </article>
    </section>
  );
}
