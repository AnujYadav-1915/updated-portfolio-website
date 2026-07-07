import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { skillGroups, getSkillToken } from '../data/constants';

const SkillsSection = ({ handleTilt, handleTiltReset }) => {
  return (
    <section id="skills" data-section-id="skills" className="portfolioSection scrollReveal">
      <h2><span>03</span> Skills Summary</h2>
      <div className="skillGroupGrid">
        {skillGroups.map((group, i) => (
          <article className="skillGroupCard stagger-item tiltCard" key={group.key}
            style={{ '--stagger-delay': `${i * 100}ms` }}
            onMouseMove={handleTilt} onMouseLeave={handleTiltReset}>
            <h3>{group.title}</h3>
            <div className="chipWrap">
              {portfolioData.skills[group.key].map((item) => (
                <span className="chip" key={item}>
                  <span className="chipToken">{getSkillToken(item)}</span>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
