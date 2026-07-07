import React from 'react';
import { portfolioData } from '../data/portfolioData';

const EducationSection = ({ handleTilt, handleTiltReset }) => {
  return (
    <section id="education" data-section-id="education" className="portfolioSection scrollReveal">
      <h2><span>06</span> Education</h2>
      <div className="eduTimeline">
        {portfolioData.education.map((item, i) => (
          <article className="eduCard stagger-item tiltCard" key={item.institute + item.duration}
            style={{ '--stagger-delay': `${i * 120}ms` }}
            onMouseMove={handleTilt} onMouseLeave={handleTiltReset}>
            <div className="eduIcon">🎓</div>
            <h3>{item.degree}</h3>
            <h4>{item.specialization}</h4>
            <p>{item.institute}</p>
            <p>{item.location}</p>
            <p className="eduDuration">{item.duration}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
