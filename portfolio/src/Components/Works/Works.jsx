import React from 'react'
import './Works.css'
import HTML from '../../img/html.png'
import CSS from '../../img/css.png'
import React1 from '../../img/react.png'
import Angular from '../../img/angular.png'
import Mongo from '../../img/mongo.png'
import SQL from '../../img/sql.png'
import JS from '../../img/js.png'
import {motion} from 'framer-motion'
import Box from './Box'

function Works() { 
  return (

    <div className="works" id='Expertise'>
      <div className="w-awesome">
        <span>Expertise</span>
        <span>I have extensive working knowledge of different
          technologies stack. My most recent project included 
          major framework like React and I used
          mongoDB to store data with the help of Node.js and 
          Express. This application is used for Educational 
          purposes which allows Admins to create and store 
          quizzes about different topics and provides the users 
          with an opportunity to test there knowledge by taking the 
          quiz.  

        </span>
      </div>
      <div className='w-right'>
          <div>
            <Box value={100} text={"HTML/CS/JS"} />
          </div>
          <div>
            <Box value={90} text={"React.js"} />
          </div>
          <div className='b3'>
            <Box value={85} text={"Node.js"} /> 
          </div>
          <div className='b4'>
            <Box value={80} text={"mongoDB"} />
          </div>
          <div>
            <Box value={70} text={"Java"} />
          </div>
          <div>
          <Box value={90} text={"Git"} />
          </div>
          <div>
            <Box value={70} text={"MySQL"} />
          </div>
          <div>
            <Box value={65} text={"PHP"} />
          </div>
        </div>
    </div>

    // <div className="works">
    //     <div className="w-awesome">
    //         <span>Expertise</span>
    //         <span>JavaScript</span>
    //         <span>I can make interactive web pages using JavaScript using animations, pop-ups and menus which will make your website more engaging and user-friendly</span>
    //         <span>SQL</span>
    //         <span>
    //             I can create or manage your existing backend server with my expertise in SQL 
    //         </span>
    //         <button className="s-button">Hire Me</button>     
    //         <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
    //     </div>
    //     <div className="w-right">
    //         <motion.div 
    //         initial={{rotate:90}}
    //         whileInView={{rotate:0}}
    //         viewport={{margin:'-40px'}}
    //         transition={{duration:1, type: 'spring'}}
    //         className="w-mainCircle">
    //             <div className="w-sec">
    //                 <img src={SQL} alt="" />
    //             </div>
    //             <div className="w-sec">
    //                 <img src={CSS} alt="" />
    //             </div>
    //             <div className="w-sec">
    //                 <img src={HTML} alt="" />
    //             </div>
    //             <div className="w-sec">
    //                 <img src={React1} alt="" />
    //             </div>
    //             <div className="w-sec">
    //                 <img src={JS} alt="" />
    //             </div>
    //         </motion.div>
    //         {/* <div className="w-backCircle blueCircle"></div>
    //         <div className="w-backCircle yellowCircle"></div> */}
    //     </div>
    // </div>
  )
}

export default Works