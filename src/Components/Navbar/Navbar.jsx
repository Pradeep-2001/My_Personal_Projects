import React, { useEffect, useRef, useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef= useRef();

  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenu(sectionId);
      if (window.innerWidth < 768 && menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
    }
  };

  const openMenu =() =>{
    menuRef.current.style.right="0"
  }

  const clsoeMenu =()=>{
    menuRef.current.style.right="-350px"
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMenu(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // adjust based on your layout
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section className='navbar'>
      <img src={logo} alt="logo" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
      <img src={menu_close} onClick={clsoeMenu} alt="" className='nav-mob-close' />

        {["home", "about", "portfolio", "contact"].map((item) => (
          <li key={item}>
            <p
              onClick={() => handleScrollTo(item)}
              className={menu === item ? "active-menu" : ""}
            >
              {item === "about" ? "About me" : item.charAt(0).toUpperCase() + item.slice(1)}
            </p>
          </li>
        ))}
      </ul>
      <div onClick={()=>handleScrollTo('contact')} className="nav-connect">
        Connect With Me
      </div>
    </section>
  );
};

export default Navbar;
