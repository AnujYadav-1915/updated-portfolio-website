import React, { useEffect, useState, useRef, useCallback } from 'react';
import './PortfolioPage.css';
import { portfolioData } from '../data/portfolioData';

/* ─── Static Data ─── */
const skillGroups = [
  { title: 'Programming Languages', key: 'languages' },
  { title: 'Frontend', key: 'frontend' },
  { title: 'Backend', key: 'backend' },
  { title: 'Databases', key: 'databases' },
  { title: 'Tools & Platforms', key: 'tools' },
  { title: 'Core CS', key: 'fundamentals' },
];

const heroStats = [
  { value: '1000+', label: 'DSA Problems Solved' },
  { value: '3+', label: 'Advanced Full-Stack Projects' },
  { value: '7+', label: 'AWS Certifications' },
];

const featuredImpact = [
  {
    metric: 'Real-time Systems',
    headline: 'Low-latency collaborative apps',
    proof: 'Built socket-driven products with instant state sync and production-ready event flows.',
    icon: '⚡',
  },
  {
    metric: 'AI Product Engineering',
    headline: 'From model to user value',
    proof: 'Designed practical AI workflows for resume scoring, interview simulation, and skill-gap guidance.',
    icon: '🧠',
  },
  {
    metric: 'Cloud & Delivery',
    headline: 'Deployment-first mindset',
    proof: 'Shipped projects to live environments with clean APIs, auth, and scalable architecture patterns.',
    icon: '☁️',
  },
];

const sectionItems = [
  { id: 'home', label: 'Home', icon: '◆' },
  { id: 'impact', label: 'Impact', icon: '◈' },
  { id: 'now-building', label: 'Now', icon: '▸' },
  { id: 'skills', label: 'Skills', icon: '◇' },
  { id: 'projects', label: 'Projects', icon: '▦' },
  { id: 'proof', label: 'Proof', icon: '✦' },
  { id: 'education', label: 'Education', icon: '◎' },
  { id: 'achievements', label: 'Wins', icon: '★' },
  { id: 'contact', label: 'Contact', icon: '◉' },
];

const mobileSectionItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'proof', label: 'Proof' },
  { id: 'contact', label: 'Contact' },
];

const skillTokenMap = {
  'React.js': '⚛', 'Next.js': 'NX', 'Node.js': '⬡', 'Express.js': 'EX',
  'Socket.IO': '⚡', 'Python': 'PY', 'TypeScript': 'TS', 'JavaScript': 'JS',
  'MongoDB': 'MG', 'PostgreSQL': 'PG', 'Docker': '🐳', 'AWS': '☁',
  'Redux': 'RX', 'Tailwind CSS': 'TW', 'MySQL': 'MY',
};

const getSkillToken = (skill) => skillTokenMap[skill] || skill.slice(0, 2).toUpperCase();

const proofOfWork = (links) => [
  { label: 'GitHub', href: links.github, blurb: 'Source code, commits, and repository activity.', icon: '⌨' },
  { label: 'LeetCode', href: links.leetcode, blurb: 'Algorithm practice consistency and problem-solving depth.', icon: '🧩' },
  { label: 'CodeChef', href: links.codechef, blurb: 'Competitive coding performance and ranking history.', icon: '🏆' },
  { label: 'LinkedIn', href: links.linkedin, blurb: 'Professional timeline, certifications, and network.', icon: '🔗' },
  { label: 'Resume', href: links.resume, blurb: 'One-page technical snapshot for quick recruiter review.', icon: '📄' },
];

const statusColors = {
  'In Progress': '#00ffa6',
  'R&D': '#00d4ff',
  'Planned': '#ff7b47',
};

/* ─── Component ─── */
const PortfolioPage = ({ theme }) => {
  const [activeSection, setActiveSection] = useState('home');
  const mainRef = useRef(null);
  const cursorRef = useRef(null);

  /* Scroll-reveal observer — uses a lower threshold and no negative rootMargin
     so that tall sections (like projects) always trigger */
  useEffect(() => {
    const sections = document.querySelectorAll('[data-section-id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            setActiveSection(entry.target.dataset.sectionId || 'home');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -10% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Staggered children reveal */
  useEffect(() => {
    const cards = document.querySelectorAll('.stagger-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('stagger-visible');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -5% 0px' },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  /* Custom glow cursor */
  const handleMouseMove = useCallback((e) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = e.clientX + 'px';
      cursorRef.current.style.top = e.clientY + 'px';
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  /* 3D tilt effect handler */
  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleTiltReset = (e) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <main className={`portfolioPage ${theme}`} ref={mainRef}>
      {/* Glow cursor */}
      <div className="glowCursor" ref={cursorRef} aria-hidden="true" />

      {/* Ambient background */}
      <div className="ambientFx" aria-hidden="true" />

      {/* Side rail navigation */}
      <nav className="sectionRail" aria-label="Section navigation">
        {sectionItems.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={activeSection === section.id ? 'active' : ''}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="railIcon">{section.icon}</span>
            <span>{section.label}</span>
          </a>
        ))}
      </nav>

      {/* ═══════════ HERO ═══════════ */}
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

      {/* ═══════════ 01 IMPACT ═══════════ */}
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

      {/* ═══════════ 02 NOW BUILDING ═══════════ */}
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

      {/* ═══════════ 03 SKILLS ═══════════ */}
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

      {/* ═══════════ 04 PROJECTS ═══════════ */}
      <section id="projects" data-section-id="projects" className="portfolioSection scrollReveal">
        <h2><span>04</span> Featured Projects</h2>
        <div className="projectGrid">
          {portfolioData.projects.map((project, index) => (
            <article className="projectCard stagger-item" key={project.title}
              style={{ '--stagger-delay': `${index * 150}ms` }}>
              {/* Project Image */}
              {project.image && (
                <div className="projectImageWrap">
                  <img src={project.image} alt={project.title} className="projectImage" loading="lazy" />
                  <div className="projectImageOverlay" />
                </div>
              )}
              {/* Visual header */}
              {project.tone && (
                <div className={`projectVisual tone-${project.tone}`}>
                  <div className="projectVisualTop">
                    <span className="projectEyebrow">{project.coverEyebrow}</span>
                    <div className="projectSignalBars" aria-hidden="true">
                      <span /><span /><span /><span />
                    </div>
                  </div>
                  <p className="projectMetricHeadline">{project.metricHeadline}</p>
                  {project.metrics && (
                    <div className="projectMetricRow">
                      {project.metrics.map((m) => (
                        <span className="metricChip" key={m}>{m}</span>
                      ))}
                    </div>
                  )}
                </div>
              )}
              <div className="projectHead">
                <h3>{project.title}</h3>
                <div className="projectActions">
                  <a href={project.demoLink} target="_blank" rel="noreferrer" className="btnProjectAction">
                    ▶ Live Demo
                  </a>
                  <a href={project.repoLink} target="_blank" rel="noreferrer" className="btnProjectAction">
                    ⌨ GitHub
                  </a>
                </div>
              </div>
              <p className="projectLabel">Case Study</p>
              <p className="stackRow">{project.stack.join(' • ')}</p>
              {project.caseStudy && (
                <div className="caseStudyBlock">
                  <p><strong>Problem:</strong> {project.caseStudy.problem}</p>
                  <p><strong>Architecture:</strong> {project.caseStudy.architecture}</p>
                  <p><strong>Result:</strong> {project.caseStudy.result}</p>
                  {project.architectureSnapshot && (
                    <ul className="snapshotList">
                      {project.architectureSnapshot.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ═══════════ 05 PROOF ═══════════ */}
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

      {/* ═══════════ 06 EDUCATION ═══════════ */}
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

      {/* ═══════════ 07 ACHIEVEMENTS ═══════════ */}
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

      {/* ═══════════ 08 CONTACT ═══════════ */}
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

      {/* Mobile dock */}
      <nav className="mobileDock" aria-label="Mobile navigation">
        {mobileSectionItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'active' : ''}
            onClick={() => setActiveSection(item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </main>
  );
};

export default PortfolioPage;
