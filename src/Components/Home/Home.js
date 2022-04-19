import React, { Component } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faHtml5
} from "@fortawesome/free-brands-svg-icons";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <div className="titleHolder">
          <img className="lilMe" src="https://i.postimg.cc/C5jTLnxj/me.jpg" alt="Mitchell Bennett" />
          <h1>Mitchell Bennett | Software Engineer</h1>
        </div>
        <div className="introHolder">
          <p
            className="intro"
            style={{ fontFamily: "Raleway", color: "black" }}
          >
            My name is Mitchell Bennett, but I mostly 
            go by Mitch these days. I'm a Fullstack software engineer who 
            loves to see projects come to life. Along with my software engineering 
            skills, I have good experience with communication, organization, 
            detail orientation, time management, and teamwork. I also bring a 
            positive can-do attitude as someone who is willing to never give 
            up on an issue and will always bring a smile to the workplace.
          </p>
        </div>
        <div className="skillzHolder">
                    <div className="skillzRowHolder">
                    <h2 className="skillzTitle">Front-End Skills</h2>
                    <div className="skillzRow">
                    <div className="skillAndName">  
                    <FontAwesomeIcon icon={faReact} className="skillIcon" />
                    <h4>React</h4>
                    </div> 
                    <div className="skillAndName">  
                    <FontAwesomeIcon icon={faCss3Alt} className="skillIcon" />
                    <h4>CSS</h4>
                    </div>
                    <div className="skillAndName">  
                    <FontAwesomeIcon icon={faJsSquare} className="skillIcon" />
                    <h4>Javascript</h4>
                    </div> 
                    <div className="skillAndName">  
                    <FontAwesomeIcon icon={faHtml5} className="skillIcon" />
                    <h4>HTML</h4>
                    </div>
                    <div className="skillAndName">  
                    {/* <img className="skillIcon" src={responsive} alt="Responsive Design"/> */}
                    <h4>Responsive Design</h4>
                    </div>
                    </div>
                    <h2 className="skillzTitle">Back-End Skills</h2>
                    <div className="skillzRow">
                    <div className="skillAndName">
                    <FontAwesomeIcon icon={faNodeJs} className="skillIcon" />
                    <div className="skillzRow">
                    <h4>Node.js</h4>
                    </div>
                    </div>
                    <div className="skillAndName">
                    {/* <img className="skillIcon" src={express} alt="RestAPI"/> */}
                    <h4>Express.js</h4>
                    </div>
                    <div className="skillAndName">
                    {/* <img className="skillIcon" src={mongoose} alt="MongoDB"/> */}
                    <h4>MongoDB</h4>
                    </div>
                    <div className="skillAndName">
                    {/* <img className="skillIcon" src={rest} alt="RestAPI"/> */}
                    <h4>REST API</h4>
                    </div>
                    </div>
                    </div>
                </div>
        <div className="skillsHolder">
          <p
            className="skills"
            style={{ fontFamily: "Raleway", color: "black" }}
          >
            When I'm not coding on the computer I like to head outdoors to play some
            ultimate frisbee. If the outdoors aren't an option, then bowling, video 
            games, and football sundays are always a go to as well.{" "}
          </p>
        </div>
        <div className="contactHolder">
          <p
            className="contact"
            style={{ fontFamily: "Raleway", color: "black" }}
          >
            Please feel free to contact me via email at
            mrb5691@gmail.com
          </p>
        </div>
      </div>
    );
  }
}

export default Home;