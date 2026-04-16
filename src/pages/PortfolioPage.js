import React, { useEffect, useState } from 'react';
import './PortfolioPage.css';
import { portfolioData } from '../data/portfolioData';

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
  },
  {
    metric: 'AI Product Engineering',
    headline: 'From model to user value',
    proof: 'Designed practical AI workflows for resume scoring, interview simulation, and skill-gap guidance.',
  },
  {
    metric: 'Cloud & Delivery',
    headline: 'Deployment-first mindset',
    proof: 'Shipped projects to live environments with clean APIs, auth, and scalable architecture patterns.',
  },
];

const sectionItems = [
  { id: 'home', label: 'Home' },
  { id: 'impact', label: 'Impact' },
  { id: 'now-building', label: 'Now' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'proof', label: 'Proof' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Wins' },
  { id: 'contact', label: 'Contact' },
];

const recruiterSectionItems = [
  { id: 'home', label: 'Home' },
  { id: 'recruiter-snapshot', label: 'Snapshot' },
  { id: 'contact', label: 'Contact' },
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
  { label: 'GitHub Profile', href: links.github, blurb: 'Source code, commits, and repository activity.' },
  { label: 'LeetCode Profile', href: links.leetcode, blurb: 'Algorithm practice consistency and problem-solving depth.' },
  { label: 'CodeChef Profile', href: links.codechef, blurb: 'Competitive coding performance and ranking history.' },
  { label: 'LinkedIn Profile', href: links.linkedin, blurb: 'Professional timeline, certifications, and network.' },
  { label: 'Resume PDF', href: links.resume, blurb: 'One-page technical snapshot for quick recruiter review.' },
];

const PortfolioPage = ({ theme }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [recruiterMode, setRecruiterMode] = useState(false);

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
      {
        threshold: 0.22,
        rootMargin: '-15% 0px -45% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className={`portfolioPage ${theme}`}>
      <div className="ambientFx" aria-hidden="true" />
      <nav className="sectionRail" aria-label="Section navigation">
        {sectionItems.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={activeSection === section.id ? 'active' : ''}
            onClick={() => setActiveSection(section.id)}
          >
            <span>{section.label}</span>
          </a>
        ))}
      </nav>

      <section id="home" data-section-id="home" className="portfolioSection heroSection scrollReveal is-visible">
        <div className="heroText">
          <p className="terminalLine">
            <span>$</span> open_to_work --roles "SDE, Full-Stack Engineer"
          </p>
          <div className="heroBadge">Open to SDE & Full-Stack Roles</div>
          <h1>
            {portfolioData.name}
            <span>{portfolioData.role}</span>
          </h1>
          <p>{portfolioData.tagline}</p>
          <p className="summaryText">{portfolioData.summary}</p>
          <div className="heroMeta">
            <span>Location: India</span>
            <span>Focus: AI x Full-Stack</span>
            <span>Availability: Immediate</span>
          </div>
          <div className="heroTrustStrip">
            <span className="trustBadge">✓ Available Immediately</span>
            <span className="trustBadge">✓ Response within 24h</span>
            <span className="trustBadge">✓ Open to Relocation</span>
          </div>
          <div className="heroActions">
            <a className="btnPrimary" href={portfolioData.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btnOutline" href={portfolioData.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btnGhost" href="#projects" onClick={() => setActiveSection('projects')}>Projects</a>
          </div>
        </div>
        <div className="heroStats">
          {heroStats.map((item) => (
            <article key={item.label}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </article>
          ))}
          <div className="signalStrip" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

        <>
            <section id="impact" data-section-id="impact" className="portfolioSection scrollReveal">
              <h2><span>01</span> Featured Impact</h2>
              <div className="impactGrid">
                {featuredImpact.map((item) => (
                  <article className="impactCard" key={item.metric}>
                    <p className="impactMetric">{item.metric}</p>
                    <h3>{item.headline}</h3>
                    <p>{item.proof}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="now-building" data-section-id="now-building" className="portfolioSection scrollReveal">
              <h2><span>02</span> Now Building</h2>
              <div className="nowGrid">
                {portfolioData.nowBuilding.map((item) => (
                  <article className="nowCard" key={item.title}>
                    <div className="nowTopRow">
                      <h3>{item.title}</h3>
                      <span className="statusPill">{item.status}</span>
                    </div>
                    <p>{item.details}</p>
                    <p className="timelineTag">{item.timeline}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="skills" data-section-id="skills" className="portfolioSection scrollReveal">
              <h2><span>03</span> Skills Summary</h2>
              <div className="skillGroupGrid">
                {skillGroups.map((group) => (
                  <article className="skillGroupCard" key={group.key}>
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

            <section id="projects" data-section-id="projects" className="portfolioSection scrollReveal">
              <h2><span>04</span> Featured Projects</h2>
              <div className="projectGrid">
                {portfolioData.projects.map((project, index) => (
                  <article className="projectCard" key={project.title}>
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
                        <a href={project.demoLink} target="_blank" rel="noreferrer">Live Demo</a>
                        <a href={project.repoLink} target="_blank" rel="noreferrer">GitHub</a>
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

            <section id="proof" data-section-id="proof" className="portfolioSection scrollReveal">
              <h2><span>05</span> Proof of Work</h2>
              <div className="proofGrid">
                {proofOfWork(portfolioData.links).map((item) => (
                  <article className="proofCard" key={item.label}>
                    <h3><a href={item.href} target="_blank" rel="noreferrer">{item.label}</a></h3>
                    <p>{item.blurb}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="education" data-section-id="education" className="portfolioSection scrollReveal">
              <h2><span>06</span> Education</h2>
              <div className="eduTimeline">
                {portfolioData.education.map((item) => (
                  <article className="eduCard" key={item.institute + item.duration}>
                    <h3>{item.degree}</h3>
                    <h4>{item.specialization}</h4>
                    <p>{item.institute}</p>
                    <p>{item.location}</p>
                    <p>{item.duration}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="achievements" data-section-id="achievements" className="portfolioSection scrollReveal">
              <h2><span>07</span> Achievements</h2>
              {portfolioData.certifications && (
                <div className="certGrid">
                  <p className="certEyebrow">AWS Certifications</p>
                  {portfolioData.certifications.map((cert) => (
                    <span className="certBadge" key={cert}>{cert}</span>
                  ))}
                </div>
              )}
              <ul className="achievementList">
                {portfolioData.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </>
        )}

        <section id="contact" data-section-id="contact" className="portfolioSection scrollReveal contactSection">
        <div className="contactCard">
            <h2><span>{recruiterMode ? '02' : '08'}</span> Let&apos;s Connect</h2>
          <p>Reach out for internships, full-time roles, collaborations, and product discussions.</p>
          <div className="recruiterActions">
            <a className="btnPrimary" href={portfolioData.links.resume} target="_blank" rel="noreferrer">View Resume</a>
              <a className="btnOutline" href={portfolioData.links.calendar} target="_blank" rel="noreferrer">Schedule with Calendly</a>
            <a className="btnGhost" href={`${portfolioData.links.email}?subject=Interview%20Discussion%20-%20Anuj%20Kumar`}>Email for Opportunity</a>
          </div>
          <ul className="contactList">
            <li><a href={portfolioData.links.email}>Email</a></li>
            <li><a href={portfolioData.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={portfolioData.links.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={portfolioData.links.leetcode} target="_blank" rel="noreferrer">LeetCode</a></li>
            <li><a href={portfolioData.links.codechef} target="_blank" rel="noreferrer">CodeChef</a></li>
            <li><a href={portfolioData.links.portfolio} target="_blank" rel="noreferrer">Current Portfolio (Live)</a></li>
          </ul>
        </div>
      </section>
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
