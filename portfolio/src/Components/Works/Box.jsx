import React from 'react'
import './Box.css'
import Circle from './Circle'

function Box({value, text}) {
  return (
    <div className="t-box">
      <Circle value={value} text={text} />
    </div>
  )
}

export default Box