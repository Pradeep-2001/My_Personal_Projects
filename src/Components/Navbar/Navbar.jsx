import React from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo}/>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About me</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Contact me</li>
        </ul>
        <div className="nav-connect" onClick={()=>alert("clicked connect with me")}>Connect With Me</div>
        </div>
  )
}

export default Navbar