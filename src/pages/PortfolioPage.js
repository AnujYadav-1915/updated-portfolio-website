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
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Wins' },
  { id: 'contact', label: 'Contact' },
];

const PortfolioPage = ({ theme }) => {
  const [activeSection, setActiveSection] = useState('home');

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
          <div className="heroActions">
            <a className="btnPrimary" href={portfolioData.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btnOutline" href={portfolioData.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btnGhost" href="#projects">Projects</a>
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

      <section id="skills" data-section-id="skills" className="portfolioSection scrollReveal">
        <h2><span>02</span> Skills Summary</h2>
        <div className="skillGroupGrid">
          {skillGroups.map((group) => (
            <article className="skillGroupCard" key={group.key}>
              <h3>{group.title}</h3>
              <div className="chipWrap">
                {portfolioData.skills[group.key].map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

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

      <section id="projects" data-section-id="projects" className="portfolioSection scrollReveal">
        <h2><span>03</span> Featured Projects</h2>
        <div className="projectGrid">
          {portfolioData.projects.map((project, index) => (
            <article className="projectCard" key={project.title}>
              <div className="projectHead">
                <h3>{project.title}</h3>
                <div className="projectActions">
                  <a href={project.demoLink} target="_blank" rel="noreferrer">Live Demo</a>
                  <a href={project.repoLink} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
              <p className="projectLabel">Case Study</p>
              <p className="stackRow">{project.stack.join(' • ')}</p>
              {index < 2 && project.caseStudy && (
                <div className="caseStudyBlock">
                  <p><strong>Problem:</strong> {project.caseStudy.problem}</p>
                  <p><strong>Architecture:</strong> {project.caseStudy.architecture}</p>
                  <p><strong>Result:</strong> {project.caseStudy.result}</p>
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

      <section id="education" data-section-id="education" className="portfolioSection scrollReveal">
        <h2><span>04</span> Education</h2>
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
        <h2><span>05</span> Achievements</h2>
        <ul className="achievementList">
          {portfolioData.achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="contact" data-section-id="contact" className="portfolioSection scrollReveal contactSection">
        <div className="contactCard">
          <h2><span>06</span> Let&apos;s Connect</h2>
          <p>Reach out for internships, full-time roles, collaborations, and product discussions.</p>
          <div className="recruiterActions">
            <a className="btnPrimary" href={portfolioData.links.resume} target="_blank" rel="noreferrer">View Resume</a>
            <a className="btnOutline" href={portfolioData.links.calendar} target="_blank" rel="noreferrer">Book Intro Call</a>
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
    </main>
  );
};

export default PortfolioPage;
