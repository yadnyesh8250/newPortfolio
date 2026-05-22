import { ExternalLink, GitBranch } from 'lucide-react';
import { projects } from '../data/projects';

export default function Work() {
  return (
    <div className="clone-page subpage">
      <header className="subpage-hero">
        <p>Portfolio</p>
        <h1>Projects</h1>
      </header>
      <div className="work-stack">
        {projects.map((project) => (
          <article className={`work-card ${project.tone}`} key={project.title}>
            <div
              className="work-preview"
              aria-hidden="true"
              style={project.image ? { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
              role={project.image ? 'img' : undefined}
            />
            <div className="work-body">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="scope-tabs">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="work-links">
                <a href={project.code} target="_blank" rel="noreferrer">
                  <GitBranch size={14} />
                  Code
                </a>
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <ExternalLink size={14} />
                    Live
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
