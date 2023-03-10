import React from 'react'
import './landing.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/Upwork.png'
import Typical from 'react-typical'
import { Link } from 'react-scroll'


function Landing() {

    const transition = {duration: 2, type: 'spring'}

  return (
    <div className="main-div">
        <div className="landing" id='Home'>
        <div className="l-left">
            <div className="l-name">
                <span>Hello, I am Muhammad Noman a</span>
                <Typical
                    loop={Infinity}
                    steps={[
                        'Full Stack Developer',
                        3000,
                        'Engineer',
                        3000,
                        'Freelancer',
                        3000
                    ]}
                
                />
                <span>I am here to provide you with 
                    fast secure and scalable websites. Help you
                    to reach your target audience and help in fullfilling
                    your dream through technology.
                </span>
                <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
                    <button className="l-button">Hire me</button>
                </Link>
            </div>
            <div className="l-icons">
                <a href="https://github.com/znoman09">
                    <img src={Github} alt="github-logo" />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-noman-a773281a0/">
                    <img src={LinkedIn} alt="linkedin-logo" />
                </a>
                <a href="https://www.upwork.com/freelancers/~01db2c34ff7112635f">
                    <img src={Instagram} alt="Upowrk-logo" />
                </a>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Landing