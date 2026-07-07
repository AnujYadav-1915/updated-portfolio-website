import React from 'react';
import { portfolioData } from '../data/portfolioData';

const AchievementsSection = () => {
  return (
    <section id="achievements" data-section-id="achievements" className="portfolioSection scrollReveal">
      <h2><span>07</span> Achievements</h2>

      {/* AWS Certifications - clickable badges */}
      {portfolioData.certifications && (
        <div className="certSection">
          <p className="certEyebrow">Certifications ({portfolioData.certifications.length}x Certified)</p>
          <div className="certGrid">
            {portfolioData.certifications.map((cert, i) => {
              const inner = (
                <>
                  <span className="certIcon">{cert.icon}</span>
                  <span className="certName">{cert.name}</span>
                  <span className="certVerified">{cert.pdf ? '↗ View' : '✓ Verified'}</span>
                </>
              );
              return cert.pdf ? (
                <a href={cert.pdf} target="_blank" rel="noreferrer"
                  className="certCard certCardLink stagger-item" key={cert.name}
                  style={{ '--stagger-delay': `${i * 80}ms` }}>
                  {inner}
                </a>
              ) : (
                <div className="certCard stagger-item" key={cert.name}
                  style={{ '--stagger-delay': `${i * 80}ms` }}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Achievement bullets */}
      <div className="achievementGrid">
        {portfolioData.achievements.map((item, i) => (
          <article className="achievementCard stagger-item" key={item}
            style={{ '--stagger-delay': `${i * 100}ms` }}>
            <span className="achievementIcon">🏅</span>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
