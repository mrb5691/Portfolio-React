import React, { Component } from 'react';
import './About.css'



class About extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        return(
            <div className="home">
            <div className="titleHolder">
                <h1>Mitchell Bennett | Software Engineer
                </h1>
            </div>
            <div className="introHolder">
                <p className="intro">My name is Mitchell Bennett, but I mostly 
                go by Mitch these days. I'm a Fullstack software engineer who 
                loves to see projects come to life. I have expertise in HTML, 
                CSS, Javascript, and SQL. Along with my software engineering 
                skills, I have good experience with communication, organization, 
                detail orientation, time management, and teamwork. I also bring a 
                positive can-do attitude as someone who is willing to never give 
                up on an issue and will always bring a smile to the workplace.</p>
            </div>
            <div className="skillsHolder">
                <p className="skills">When I'm not writing code I enjoy playing gaming, playing basketball, watching my beloved Washington Wizards and Redskins dissapoint me year after year, and hanging out with my dogs, Harley and Daisy. </p>
            </div>
            <div className="contactHolder">
                <p className="contact">Please feel free to contact me via email at mrb5691@gmail.com</p>
            </div>

        </div>
    )
    }
}

export default About