import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { proofOfWork } from '../data/constants';

const ProofSection = ({ handleTilt, handleTiltReset }) => {
  return (
    <section id="proof" data-section-id="proof" className="portfolioSection scrollReveal">
      <h2><span>05</span> Proof of Work</h2>
      <div className="proofGrid">
        {proofOfWork(portfolioData.links).map((item, i) => (
          <a href={item.href} target="_blank" rel="noreferrer"
            className="proofCard stagger-item tiltCard"
            key={item.label}
            style={{ '--stagger-delay': `${i * 100}ms` }}
            onMouseMove={handleTilt} onMouseLeave={handleTiltReset}>
            <span className="proofIcon">{item.icon}</span>
            <h3>{item.label}</h3>
            <p>{item.blurb}</p>
            <span className="proofArrow">→</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProofSection;
