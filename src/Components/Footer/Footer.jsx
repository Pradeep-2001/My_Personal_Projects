import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
  return (
    <section id='footer' className='footer'>
       <div className='social-bar'>
        <a href='https://www.instagram.com/_pradeep_singh_19/' target='_blank' rel='noopener noreferrer'>
          <FaInstagram />
        </a>
        <a href='https://x.com/pradeeptmk_2001?s=21' target='_blank' rel='noopener noreferrer'>
          <FaTwitter />
        </a>
        <a href='https://www.linkedin.com/in/pradeep-singh-s-m-35b712224/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin />
        </a>
        <a href='https://www.facebook.com/pradeep.singh.537201/' target='_blank' rel='noopener noreferrer'>
          <FaFacebook />
        </a>
        <a href='https://github.com/Pradeep-2001/' target='_blank' rel='noopener noreferrer'>
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Footer;
