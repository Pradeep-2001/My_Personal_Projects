import React from 'react'
import "./Profile.css"
import profile_img from "../../assets/profile_image_portfolio.jpg"

const Profile = () => {

  const handleScrollTo = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    setMenu(sectionId); // Update underline state
  }
};
  return (
    <div id='home' className='profile'>
        <img src={profile_img} alt="" />
        <h2>Hey there! I'm Pradeep Singh, a full-stack developer building web apps from Bengaluru.</h2>
        <p>Full-stack developer passionate about MERN stack, AI-driven solutions, and building scalable web applications.</p>
        <div className="profile-action">
            <div onClick={()=>handleScrollTo("contact")} className="profile-connect">Connect With Me</div>
            <div className="profile-resume" onClick={()=>window.open("/resume.pdf", "_blank")}>My Resume</div>
        </div>
    </div>
  )
}

export default Profile