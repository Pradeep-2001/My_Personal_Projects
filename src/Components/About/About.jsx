import React from 'react'
import "./About.css"
import theme from "../../assets/theme_pattern.svg"

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                
            </div>
        </div>
    </div>
  )
}

export default About