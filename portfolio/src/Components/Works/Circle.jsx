import React from 'react'
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Circle.css'

function Circle({value, text}) {
  return (
    <div className="t-circle">
        <div className='mt'>
            <CircularProgressbar 
            value={value} 
            strokeWidth={3}
            text={`${value}%`}
            />
        </div>
        <div className="heading">
            <span>{text}</span>
        </div>
    </div> 
  )
}

export default Circle