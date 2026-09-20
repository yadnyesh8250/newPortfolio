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
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="work-preview-link"
                title={`Open live demo of ${project.title}`}
              >
                <div
                  className="work-preview"
                  aria-hidden="true"
                  style={
                    project.image
                      ? {
                          backgroundImage: `url(${project.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center top',
                        }
                      : undefined
                  }
                  role={project.image ? 'img' : undefined}
                />
              </a>
            ) : (
              <div
                className="work-preview"
                aria-hidden="true"
                style={
                  project.image
                    ? {
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center top',
                      }
                    : undefined
                }
                role={project.image ? 'img' : undefined}
              />
            )}
            <div className="work-body">
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              {project.features && project.features.length > 0 && (
                <div className="work-features">
                  <h3 className="work-features-title">Key Architectural Features</h3>
                  <ul className="work-features-list">
                    {project.features.map((feature, idx) => {
                      const colonIdx = feature.indexOf(':');
                      if (colonIdx !== -1) {
                        const heading = feature.slice(0, colonIdx);
                        const rest = feature.slice(colonIdx + 1);
                        return (
                          <li key={idx}>
                            <strong>{heading}:</strong>
                            {rest}
                          </li>
                        );
                      }
                      return <li key={idx}>{feature}</li>;
                    })}
                  </ul>
                </div>
              )}

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
                  <a href={project.live} target="_blank" rel="noreferrer" className="work-live-btn">
                    <ExternalLink size={14} />
                    Live Demo
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
