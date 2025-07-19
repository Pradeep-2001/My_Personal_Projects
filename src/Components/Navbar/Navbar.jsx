import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenu(sectionId);
    }
  };

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
      <ul className="nav-menu">
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
