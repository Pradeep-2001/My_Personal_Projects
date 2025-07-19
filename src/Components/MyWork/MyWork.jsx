import React from 'react';
import mywork_data from "../../assets/mywork_data";
import "./MyWork.css";

function MyWork() {
  return (
    <section id='portfolio' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        {/* <img src={theme_pattern} alt='theme' /> */}
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div className="work-card" key={index}>
            <h2>{work.title}</h2>
            <p className="impact">{work.impact}</p>
            <p className="description">{work.description}</p>
            <div className="tech-stack">
              {work.tech.map((techItem, i) => (
                <span className="tech-badge" key={i}>{techItem}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyWork;
