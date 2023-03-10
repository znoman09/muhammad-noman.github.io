import React from 'react'
import './services.css'
import Card from '../Cards/Card'
import CV from './Noman\ CV.pdf'
import {motion} from 'framer-motion'

function Services() {
    const transition = {duration: 1, type: 'spring'}
  return (
    <div className="services" id='Services'>
        <div className="awesome">
            <span>My Services:</span>
            <span>1. I can design and code, provide testing and maintenance for you Web Application.</span>
            <span>2. Custom web development services tailored to your specific business needs and requirements.</span>
            <span>3. E-commerce web development services to help you sell your products or services online.</span>
            <span>4. Wide Range of Technologies. Including Java, React and PHP.</span>
            <span>5. Responsive web design services ensure that your website looks great on all devices, from desktops to smartphones.</span>
            <span>6. I provide content management system (CMS) web development services to help you easily manage your website's content.</span>
            <span>7. My web development services include search engine optimization (SEO) to help your website rank higher on search engines.</span>
            <a href={CV} download >
                <button className="s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        <div className="cards">
            <motion.div 
            whileInView={{left:'40rem'}}
            initial={{left:'30rem'}}
            transition={transition}
            style={{left: '40rem'}}>
                <Card 
                heading = {'Designer'}
                b_heading={"I can design for you in"}
                detail = {'Figma, Sketch, and Adobe'}
                b_detail={'Which will make your UI/UX astounding    '}
                />
            </motion.div>

            <motion.div 
            whileInView={{left:'14rem'}}
            initial={{left:'0rem'}}
            transition={transition}
            style={{top: '25rem', left: '4rem'}}>
                <Card 
                heading={"Developer"}
                b_heading={"I can write for you in"}
                detail={"Html, Css, JavaScript, React"}   
                b_detail={"Which will be clean, efficient and easy to maintain"}             
                />
            </motion.div>
            <motion.div 
            whileInView={{left:'45rem'}}
            initial={{left:'35rem'}}
            transition={transition} 
            style={{left: '45rem', top: '35rem'}}>
                <Card 
                heading={'UI/UX'}
                b_heading={'I can make your website\'s'}
                detail={"User Interface & Experience"}
                b_detail={'both responsive and amazing.'}
                />
            </motion.div>
            <div className='blur s-blur2' style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services