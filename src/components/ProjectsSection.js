import React from 'react';
import { portfolioData } from '../data/portfolioData';

const ProjectsSection = () => {
  return (
    <section id="projects" data-section-id="projects" className="portfolioSection scrollReveal">
      <h2><span>03</span> Featured Projects</h2>
      <div className="projectGrid">
        {portfolioData.projects.map((project, index) => (
          <article className="projectCard stagger-item" key={project.title}
            style={{ '--stagger-delay': `${index * 150}ms` }}>
            
            {project.image && (
              <div className="projectImageWrap">
                <img src={project.image} alt={project.title} className="projectImage" loading="lazy" />
                <div className="projectImageOverlay" />
              </div>
            )}

            <div className="projectHead">
              <div>
                <span className="projectCategoryTag">{project.category}</span>
                <h3>{project.title}</h3>
              </div>
              <div className="projectActions">
                <a href={project.demoLink} target="_blank" rel="noreferrer" className="btnProjectAction">
                  ▶ Live Demo
                </a>
                <a href={project.repoLink} target="_blank" rel="noreferrer" className="btnProjectAction">
                  ⌨ GitHub
                </a>
              </div>
            </div>

            <div className="stackTagRow">
              {project.stack.map((tech) => (
                <span key={tech} className="techBadge">{tech}</span>
              ))}
            </div>

            {project.caseStudy && (
              <div className="caseStudyBlock">
                <p><strong>Problem:</strong> {project.caseStudy.problem}</p>
                <p><strong>Architecture:</strong> {project.caseStudy.architecture}</p>
                <p><strong>Result:</strong> {project.caseStudy.result}</p>
              </div>
            )}

            <ul className="projectBulletList">
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
