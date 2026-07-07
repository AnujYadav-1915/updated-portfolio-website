import React from 'react';
import { portfolioData } from '../data/portfolioData';

const ProjectsSection = () => {
  return (
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
  );
};

export default ProjectsSection;
