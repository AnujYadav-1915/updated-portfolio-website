import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { heroStats } from '../data/constants';

const HeroSection = ({ activeSection, setActiveSection, handleTilt, handleTiltReset }) => {
  return (
    <section id="home" data-section-id="home" className="portfolioSection heroSection scrollReveal is-visible">
      <div className="heroText">
        <p className="terminalLine">
          <span>$</span> open_to_work --roles "SDE, Full-Stack Engineer"
          <span className="terminalCursor">▌</span>
        </p>
        <div className="heroBadge">
          <span className="heroBadgeDot" /> Open to SDE &amp; Full-Stack Roles
        </div>
        <h1>
          {portfolioData.name}
          <span>{portfolioData.role}</span>
        </h1>
        <p>{portfolioData.tagline}</p>
        <p className="summaryText">{portfolioData.summary}</p>
        <div className="heroMeta">
          <span>📍 India</span>
          <span>🎯 AI x Full-Stack</span>
          <span>✅ Available Immediately</span>
        </div>
        <div className="heroTrustStrip">
          <span className="trustBadge">✓ Available Immediately</span>
          <span className="trustBadge">✓ Response within 24h</span>
          <span className="trustBadge">✓ Open to Relocation</span>
        </div>
        <div className="heroActions">
          <a className="btnPrimary" href={portfolioData.links.linkedin} target="_blank" rel="noreferrer">
            🔗 LinkedIn
          </a>
          <a className="btnOutline" href={portfolioData.links.github} target="_blank" rel="noreferrer">
            ⌨ GitHub
          </a>
          <a className="btnGhost" href="#projects" onClick={() => setActiveSection('projects')}>
            ▦ Projects
          </a>
        </div>
      </div>
      <div className="heroStats">
        {heroStats.map((item) => (
          <article key={item.label} onMouseMove={handleTilt} onMouseLeave={handleTiltReset} className="tiltCard">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </article>
        ))}
        <div className="signalStrip" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
