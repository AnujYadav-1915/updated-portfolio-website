import React from 'react';
import { featuredImpact } from '../data/constants';

const ImpactSection = ({ handleTilt, handleTiltReset }) => {
  return (
    <section id="impact" data-section-id="impact" className="portfolioSection scrollReveal">
      <h2><span>01</span> Featured Impact</h2>
      <div className="impactGrid">
        {featuredImpact.map((item, i) => (
          <article className="impactCard stagger-item tiltCard" key={item.metric}
            style={{ '--stagger-delay': `${i * 120}ms` }}
            onMouseMove={handleTilt} onMouseLeave={handleTiltReset}>
            <span className="impactIcon">{item.icon}</span>
            <p className="impactMetric">{item.metric}</p>
            <h3>{item.headline}</h3>
            <p>{item.proof}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
