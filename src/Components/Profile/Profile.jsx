import React from 'react'
import "./Profile.css"
import profile_img from "../../assets/profile_img.jpeg"

const Profile = () => {
  return (
    <div className='profile'>
        <img src={profile_img} alt="" />
        <h2>I'm Pradeep Singh, a full-stack developer based in Bengaluru.</h2>
        <p>Full-stack developer passionate about MERN stack, AI-driven solutions, and building scalable web applications.</p>
        <div className="profile-action">
            <div className="profile-connect">Connect With Me</div>
            <div className="profile-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Profile