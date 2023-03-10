import React from 'react'
import './Card.css'

function Card({emoji, heading, b_heading, detail, b_detail}) {
  return (
    <div className="card">
        <span>As a</span>
        <span>{heading}</span>
        <span>{b_heading}</span>
        <span>{detail}</span>
        <span>{b_detail}</span>
    </div>
  )
}

export default Card