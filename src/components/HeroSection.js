import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { heroStats } from '../data/constants';

const HeroSection = ({ handleTilt, handleTiltReset }) => {
  return (
    <section id="home" data-section-id="home" className="portfolioSection heroSection scrollReveal is-visible">
      <div className="heroText">
        <div className="heroBadge">
          <span className="heroBadgeDot" /> Open to SDE &amp; Full-Stack Roles
        </div>
        <h1>
          {portfolioData.name}
          <span className="heroSubtitle">{portfolioData.role}</span>
        </h1>
        <p className="heroTagline">{portfolioData.tagline}</p>
        <p className="summaryText">{portfolioData.summary}</p>

        <div className="heroMeta">
          <span>📍 India</span>
          <span>💼 MERN &amp; Next.js</span>
          <span>⚡ 500+ DSA Solved</span>
        </div>

        <div className="heroActions">
          <a className="btnPrimary" href={portfolioData.links.linkedin} target="_blank" rel="noreferrer">
            🔗 LinkedIn
          </a>
          <a className="btnOutline" href={portfolioData.links.github} target="_blank" rel="noreferrer">
            ⌨ GitHub
          </a>
          <a className="btnGhost" href={portfolioData.links.resume} target="_blank" rel="noreferrer">
            📄 Resume
          </a>
        </div>
      </div>

      <div className="heroStats">
        {heroStats.map((item) => (
          <article key={item.label} onMouseMove={handleTilt} onMouseLeave={handleTiltReset} className="tiltCard statCard">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
