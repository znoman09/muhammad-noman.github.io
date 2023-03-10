import {React, useRef, useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

function Contact() {


    const[done, setDone] = useState(false)
    const form = useRef();

    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_x14cxbo', 'template_gc8v25l', form.current, 'Tqr9ps_rohj-rNiXr')
        .then((result)=>{
            console.log(result.text);
            setDone(true);
        }, (error)=>{
            console.log(error.text);
        });
    };

  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span>Get in Touch</span>
                <span>Let's discuss your amazing idea. Feel free to reach out!</span>
                <div
                    className='blur s-blur1'
                    style={{background:'#abf1ff94'}}
                ></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <span className='c-f-head'>Name</span>
                <input type="text" name='user_name' className='user' placeholder='Alex' />
                <span className='c-f-head'>Email</span>
                <input type="email" name="user_email" className='user' placeholder='alex@email.com' />
                <span className='c-f-head'>Message</span>
                <textarea name="message" className='user' placeholder='Hi. I have a web application pro....'></textarea>
                <input type="submit" value='Send' className='c-button' />
                <span style={{marginTop:'2rem', fontSize:'16px', color:'var(--orange)', fontWeight:'bold', marginLeft:'30%', display:'flex'}}>{done && "Thanks for contacting me!"}</span>
                <div className="blur c-blur1" style={{
                    background:'var(--purple)'
                }}></div>
            </form>
        </div>


    </div>
  )
}

export default Contact