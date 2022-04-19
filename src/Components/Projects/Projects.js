import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <div className="Project Project1">
          <h1 className="ProjectTitle">Megaman Pygame Network</h1>
          <div className="ProjectInfo">
            <img
              className="ProjectPhoto"
              src="https://i.postimg.cc/bvqcNHy5/Screen-Shot-2022-04-11-at-3-55-25-PM.png"
              alt="Fantasy Football Trade Analyzer"
            ></img>
            <h2 className="tech">Pythong through Pygame</h2>
            <p className="ProjectDescription">
              Megaman Pygame Network is a game application that utilizes python
              and the pygame network that makes for easier application.
              This is a replica of the game "Megaman Battle Network", though 
              it is just the battle sequence. With the use of python and sprites
              we are able to make animations and game like sequences to a battle
              an AI across from us. This project provided me a great opportunity
              to see the backend side of a video game that I have always enjoyed
              and have a great passion for.
            </p>
            <div className="ProjectLinks">
              <a
                href="https://github.com/mrb5691/Project-4-MMBN"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                <h3>Github Repo</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="Project Project2">
          <h1 className="ProjectTitle">DnD Character Creator</h1>
          <div className="ProjectInfo">
            <img
              className="ProjectPhoto"
              src="https://i.postimg.cc/VNFwjZZ1/Screen-Shot-2022-04-11-at-3-58-30-PM.png"
              alt="Photos from the Great Beyond"
            ></img>
            <h2 className="tech">React, Node.js, Express.js, Mongoose</h2>
            <p className="ProjectDescription">
              DnD Character Creator is a full stack app created as a
              group project by me and two of my classmates at General
              Assembly. My team and I utilized the app "DnD Beyond" as a template
              for front-end design and different back paths. The front-end utilizes 
              Responsive Design techniques to optimize its display on mobile devices 
              and smaller windows. This was the first time that I worked on an 
              application with a group, and as such was my first experience with 
              multiple collaborators pushing changes and merging branches to the 
              same Github Repo. This process went surprisingly smooth, with only 1 merge
              conflicts occuring, of which we as a team were able to fix quickly. 
              This project provided me an opportunity to utilize and expand my skills 
              in React, the Github Workflow, and Express while working with a team 
              in a scheduled and dead-line envbironment.
            </p>
            <div className="ProjectLinks">
              <a
                href="https://daffodil-dragons.github.io/Project-03-Client/"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                <h3>Deployed App</h3>
              </a>
              <a
                href="https://github.com/daffodil-dragons/Project-03-Client"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                <h3>Github Repo</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="Project Project3">
          <h1 className="ProjectTitle">Portfolio (original)</h1>
          <div className="ProjectInfo">
            <img
              className="ProjectPhoto"
              src="https://i.postimg.cc/66CNbX0D/Screen-Shot-2022-01-28-at-12-18-44-AM.png"
              alt="Who's That Pokemon"
            ></img>
            <h2 className="tech">HTML, CSS</h2>
            <p className="ProjectDescription">
              The (original) portfolio was the first project I ever built on my own. A
              couple weeks into my boot camp at General Assembly we were tasked
              with building a portfolio while using the HTML and CSS skills we learned. 
              We were given a few templates to work with for inspiration. This was the
              first time working alone for a week to learn my working habits and time
              management when creating something of my own design. I did not get to 
              explore the creative side as much as I wanted as I spent the last day 
              implementing Responsive Design so the portfolio would still look good 
              on different screen sizes.
            </p>
            <div className="ProjectLinks">
              <a
                href="https://mrb5691.github.io/Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                <h3>Deployed Link</h3>
              </a>
              <a
                href="https://github.com/mrb5691/Portfolio.git"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                <h3>Github Repo</h3>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="Project">
          <h1 className="ProjectTitle">Pokemon API</h1>
          <div className="ProjectInfo">
            <img
              className="ProjectPhoto"
              src={project2Photo}
              alt="Pokemon API"
            ></img>
            <h2 className="tech">Node.js, Express.js, Mongoose</h2>
            <p className="ProjectDescription">
              Pokemon API is a REST API with full CRUD (Create, read, update,
              delete) functionality that displays data on the first 151 Pokemon.
              The API allows you to view Pokemon names, types, and generations.
              I built and deployed this project for my boot camp using Express,
              Node, Mongoose and Heroku. I originally intended for this API to
              serve as a back-end to my Who's That Pokemon game, but due to the
              specific requirements of the project that I had to meet to acheive
              a passing grade I was unable to format it in a way that would work
              with my existing game. Up until this point, most of my work had
              been with front-end technologies. This project gave me an
              opportunity to further develop my back-end skills and become more
              comfortable building full-stack applications.
            </p>
            <div className="ProjectLinks">
              <a
                href="https://wills-pokemon-api.herokuapp.com/api/pokemon"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                <h3>Deployed Link</h3>
              </a>
              <a
                href="https://github.com/willmca/PokemonAPI"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                <h3>Github Repo</h3>
              </a>
              <a
                href="https://willmca.github.io/WhosThatPokemon/"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                <h3>Blog Post</h3>
              </a>
            </div>
          </div>
        </div>*/}
      </div>
    );
  }
}

export default Projects;