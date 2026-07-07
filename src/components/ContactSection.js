import React from 'react';
import { portfolioData } from '../data/portfolioData';

const ContactSection = ({ handleTilt, handleTiltReset }) => {
  return (
    <section id="contact" data-section-id="contact" className="portfolioSection scrollReveal contactSection">
      <div className="contactCard">
        <h2><span>08</span> Let&apos;s Connect</h2>
        <p>Reach out for internships, full-time roles, collaborations, and product discussions.</p>
        <div className="recruiterActions">
          <a className="btnPrimary" href={portfolioData.links.resume} target="_blank" rel="noreferrer">
            📄 View Resume
          </a>
          <a className="btnOutline" href={portfolioData.links.calendar} target="_blank" rel="noreferrer">
            📅 Schedule with Calendly
          </a>
          <a className="btnGhost" href={`${portfolioData.links.email}?subject=Interview%20Discussion%20-%20Anuj%20Kumar`}>
            ✉ Email for Opportunity
          </a>
        </div>
        <div className="contactGrid">
          {[
            { label: 'Email', href: portfolioData.links.email, icon: '✉' },
            { label: 'LinkedIn', href: portfolioData.links.linkedin, icon: '🔗' },
            { label: 'GitHub', href: portfolioData.links.github, icon: '⌨' },
            { label: 'LeetCode', href: portfolioData.links.leetcode, icon: '🧩' },
            { label: 'CodeChef', href: portfolioData.links.codechef, icon: '🏆' },
            { label: 'Portfolio', href: portfolioData.links.portfolio, icon: '🌐' },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="contactLink tiltCard"
              onMouseMove={handleTilt} onMouseLeave={handleTiltReset}>
              <span className="contactLinkIcon">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
