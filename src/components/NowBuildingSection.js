import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { statusColors } from '../data/constants';

const NowBuildingSection = ({ handleTilt, handleTiltReset }) => {
  return (
    <section id="now-building" data-section-id="now-building" className="portfolioSection scrollReveal">
      <h2><span>02</span> Now Building</h2>
      <div className="nowGrid">
        {portfolioData.nowBuilding.map((item, i) => (
          <article className="nowCard stagger-item tiltCard" key={item.title}
            style={{ '--stagger-delay': `${i * 120}ms` }}
            onMouseMove={handleTilt} onMouseLeave={handleTiltReset}>
            <div className="nowTopRow">
              <h3>{item.title}</h3>
              <span className="statusPill" style={{ '--status-color': statusColors[item.status] || 'var(--accent-2)' }}>
                <span className="statusDot" />
                {item.status}
              </span>
            </div>
            <p>{item.details}</p>
            <p className="timelineTag">{item.timeline}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NowBuildingSection;
