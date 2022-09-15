import React from 'react'
import '../About/About.css'
import myimg from '../../img/newintro.jpg'
// import {Link} from 'react-router-dom'
const About = () => {
  return (
    <div className="a">
        <div className="a-left">
                <div className="a-card bg"></div>
                     <div className="a-card">
                    <img src={myimg} alt=""className="a-img"/>
                </div>
        </div>
        <div className="a-right">
                    <h1 className="a-title">About Me</h1>
                    <p className="a-sub">
                      I am Vishal Kumar. A full-stack web developer.
                    </p>
                    <p className="a-desc">
                        I offer the technical expertise you are seeking for your web development position.
                        I believe in solving problems through a systematic bottom-up asynchronous approch and 
                        i prefer working in more organic environment that promote innovation through demonstration.
                        For more detail information about my professional experience and skills, 
                        please visit my <a href='https://www.linkedin.com/in/vshlkmr81/' target="_blank" rel="noopener noreferrer">Linkedin</a>  profile .
                    </p>
    
    </div>
  </div>
  )
}

export default About