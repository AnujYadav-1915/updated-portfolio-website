import React from 'react';
import { portfolioData } from '../data/portfolioData';

const ExperienceSection = ({ handleTilt, handleTiltReset }) => {
  if (!portfolioData.experience || portfolioData.experience.length === 0) return null;

  return (
    <section id="experience" data-section-id="experience" className="portfolioSection scrollReveal">
      <h2><span>02</span> Work Experience</h2>
      <div className="experienceList">
        {portfolioData.experience.map((exp, i) => (
          <article
            className="experienceCard stagger-item tiltCard"
            key={exp.company + exp.duration}
            style={{ '--stagger-delay': `${i * 120}ms` }}
            onMouseMove={handleTilt}
            onMouseLeave={handleTiltReset}
          >
            <div className="expHeader">
              <div>
                <h3 className="expRole">{exp.role}</h3>
                <h4 className="expCompany">{exp.company} <span className="expType">• {exp.type}</span></h4>
              </div>
              <span className="expDuration">{exp.duration}</span>
            </div>
            <p className="expSummary">{exp.summary}</p>
            <ul className="expPoints">
              {exp.points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
