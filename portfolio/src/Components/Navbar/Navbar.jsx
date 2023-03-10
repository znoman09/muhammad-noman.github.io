import React from "react";
import './Navbar.css'
import Toggle from "../Toggle/Toggle";
import {Link} from 'react-scroll'

const Navbar = ()=> { 
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">
                    Noman
                </div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul className="ul-style">
                        <Link spy={true} to="Home" smooth={true} activeClass="activeClass">
                            <li className="n-list-li-style">Home</li>
                        </Link>
                        <Link spy={true} to="About" smooth={true} activeClass="activeClass">
                            <li className="n-list-li-style">About</li>
                        </Link>
                        <Link spy={true} to="Services" smooth={true} activeClass="activeClass">
                            <li className="n-list-li-style">Services</li>
                        </Link>
                        <Link spy={true} to="Expertise" smooth={true} activeClass="activeClass">
                            <li className="n-list-li-style">Expertise</li>
                        </Link>
                        <Link spy={true} to="Portfolio" smooth={true} activeClass="activeClass">
                            <li className="n-list-li-style">Portfolio</li>
                        </Link>
                        <Link spy={true} to="Testimonials" smooth={true} activeClass="activeClass">
                            <li className="n-list-li-style">Testimonials</li>
                        </Link>
                    </ul>
                    
                    <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
                        <button className="n-button">Contact Me</button>
                    </Link>
                </div>
                    
            </div>
        </div>
    )
}

export default Navbar