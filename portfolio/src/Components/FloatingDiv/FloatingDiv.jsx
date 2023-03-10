import React from 'react'
import './FloatingDiv.css'

function FloatingDiv({image, text1, text2, cond}) {
  if (cond === '0' ) {
    return (
      <div className='floating'>
          <img src={image} alt="shocked"/>
          <span>
              {text1} <br />
              {text2}
          </span> 
      </div>
    )
  }
  else{
    return (
      <div className='cash'>
          <img src={image} alt="shocked"/>
          <span>
              {text1} <br />
              {text2}
          </span> 
      </div>
    )
  }
  
}

export default FloatingDiv