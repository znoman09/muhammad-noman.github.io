import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Face from '@iconscout/react-unicons/icons/uil-facebook'
import Upwork from '@iconscout/react-unicons/icons/uil-instagram'
import Git from '@iconscout/react-unicons/icons/uil-github'

function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:'100%'}} />
        <div className="f-content">
            <span>znoman09@gmail.com</span>
            {/* <div className="f-icons">
                <Face color='white' size='3rem' />
                <Upwork color='white' size='3rem' />
                <Git color='white' size='3rem' />
            </div> */}
        </div>
    </div>
  )
}

export default Footer