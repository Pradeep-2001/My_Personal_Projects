import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      
      <section id="home">
        <Profile />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="portfolio">
        <MyWork />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default App;
