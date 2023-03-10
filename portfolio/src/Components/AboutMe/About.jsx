import React from 'react'

import './About.css'

function About() {
  return (
    <div className="about" id='About'>
        <div className="a-left">
            <div className="l-intro">
                <span>Hello!</span>
                <span >
                    I am highly driven and motivated person I have been doing web development for over an year now 
                    I have proficient and excellent command both on Front and Back End Technologies. React? Next? SQL? 
                    Firebase? Mongo? Bootstrap? You name it and it will be done. I can design both full scale web applications
                    for you as well as customization of existing web application. 
                </span>
            </div>
            <div className="a-exp">
                <span>Recent Experience</span>
                <span>MERN Stack Engineer</span>
                <span>Techlift</span>
                <span>2022 (Aug - December)</span>
            </div>
            <div className="a-qual">
                <span>Qualification</span>
                <span>Computer Science</span>
                <span>UET Lahore</span>
                <span>2018 - 2022</span>
            </div>
        </div>
        <div className="a-right">
            <div className="image">
                <img src="S:\Portfolio\portfolio\src\img\noman sidez.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About