import React from 'react'
import "./About.css"
import profile_img from "../../assets/profile_image_portfolio.jpg"

const About = () => {
  return (
    <section id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
              <div className="about-para">
                <p>I'm Pradeep Singh, a Bengaluru-based full-stack developer passionate about building scalable web applications and AI-powered solutions. With expertise in the MERN stack, I specialize in designing and developing seamless digital experiences that bridge technology and innovation. My journey began as an AI/ML engineer at Deloitte, where I explored the power of artificial intelligence in solving real-world challenges. Now, at Navneet Toptech, I continue to craft impactful solutions that enhance user experiences and drive technology forward.</p>
              </div>
              <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                  <div className="about-skill"> <p>ReactJS</p><hr style={{width:"70%"}}/></div>
                  <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                  <div className="about-skill"><p>NodeJS</p><hr style={{width:"50%"}}/> </div>
              </div>
            </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr/>
          <div className="about-achievement">
            <h1>7+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          
         
        </div>
    </section>
  )
}

export default About