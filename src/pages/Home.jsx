import { lazy, Suspense } from 'react';
import {
  ArrowRight,
  BrainCircuit,
  Braces,
  ClipboardList,
  Code2,
  Cpu,
  ExternalLink,
  FileText,
  FlaskConical,
  GitBranch,
  GraduationCap,
  Link,
  Mail,
  MapPin,
  PackageCheck,
  Rocket,
  Search,
  Sparkles,
  Zap,
} from 'lucide-react';
import { projects } from '../data/projects';

const DeveloperAvatar3D = lazy(() => import('../components/DeveloperAvatar3D'));

const techOrbit = [
  { name: 'React', icon: Braces, angle: -92, radius: 272, color: 'blue' },
  { name: 'Node.js', icon: Cpu, angle: -52, radius: 287, color: 'green' },
  { name: 'JavaScript', label: 'JS', angle: -18, radius: 332, color: 'yellow' },
  { name: 'MongoDB', label: 'DB', angle: 22, radius: 330, color: 'green' },
  { name: 'Git', icon: GitBranch, angle: 56, radius: 312, color: 'orange' },
  { name: 'Express.js', icon: Zap, angle: 90, radius: 285, color: 'green' },
  { name: 'Tailwind', icon: Sparkles, angle: 124, radius: 300, color: 'blue' },
  { name: 'REST APIs', icon: Braces, angle: 160, radius: 332, color: 'blue' },
  { name: 'HTML/CSS', label: '</>', angle: 198, radius: 330, color: 'blue' },
  { name: 'VS Code', icon: Code2, angle: 232, radius: 305, color: 'violet' },
];

const values = [
  {
    title: 'Growth',
    text: 'Passionate about continuously learning modern technologies and improving development skills.',
    icon: Rocket,
    tone: 'violet',
  },
  {
    title: 'Focus',
    text: 'Focused on building scalable, responsive, and user-friendly web applications.',
    icon: Search,
    tone: 'cyan',
  },
  {
    title: 'Craft',
    text: 'Dedicated to writing clean code and creating high-quality digital experiences.',
    icon: Code2,
    tone: 'amber',
  },
];

const workflow = [
  { label: 'Idea', icon: Sparkles },
  { label: 'Plan', icon: ClipboardList },
  { label: 'Design', icon: BrainCircuit },
  { label: 'Code', icon: Code2 },
  { label: 'Review', icon: Search },
  { label: 'Test', icon: FlaskConical },
  { label: 'Deploy', icon: GraduationCap },
];

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function Chip({ children, tone = 'cyan' }) {
  return <span className={`clone-chip ${tone}`}>{children}</span>;
}

export default function Home() {
  return (
    <div className="clone-page">
      <section className="clone-hero" id="home">
        <div className="orbit-field" aria-hidden="true">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-ring ring-three" />
          <div className="orbit-ring ring-four" />

          {techOrbit.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                className="orbit-tech"
                style={{
                  '--angle': `${tech.angle}deg`,
                  '--radius': `${tech.radius}px`,
                  '--orbit-delay': `${index * -3.2}s`,
                }}
                key={tech.name}
              >
                <span className={`orbit-icon ${tech.color}`}>
                  {Icon ? <Icon size={18} /> : tech.label}
                </span>

                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>

        <div className="hero-stage">
          <div className="hero-copy">
            <p className="hello">Hello! I'm</p>

            <h1>Yadnyesh Patil</h1>

            <p className="hero-subtitle">
              A passionate <span>Full-Stack</span> Developer
            </p>

            <p className="role">Software Developer</p>

            <div className="hero-loader" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>

            <p className="hero-description">
              Building scalable and modern web applications with clean UI,
              efficient backend systems, and responsive user experiences.
            </p>

            <div className="hero-actions">
              <a className="pill-action lounge" href="#projects">
                <Rocket size={17} />
                Projects
              </a>

              <a className="pill-action resume" href="/credentials">
                <FileText size={17} />
                Resume
              </a>

              <a
                className="pill-action source"
                href="https://github.com/yadnyesh8250"
                target="_blank"
                rel="noreferrer"
              >
                <PackageCheck size={17} />
                GitHub
              </a>
            </div>
          </div>

          <Suspense fallback={<div className="hero-avatar hero-avatar-loading" />}>
            <DeveloperAvatar3D />
          </Suspense>
        </div>
      </section>

      <section className="clone-section projects-section" id="projects">
        <SectionHeader eyebrow="Featured Work" title="Projects" />

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.tone}`}
              key={project.title}
            >
              <span className="card-rule" />

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="chip-row">
                {project.tags.map((tag) => (
                  <Chip key={tag} tone={project.tone}>
                    {tag}
                  </Chip>
                ))}
              </div>

              <div className="project-card-actions">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="project-action-link"
                  title="View Source Code"
                >
                  <GitBranch size={13} />
                  Code
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-link live"
                    title="Open Live Application"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <a className="center-link" href="/projects">
          View All Projects <ArrowRight size={16} />
        </a>
      </section>

      <section className="clone-section about-section" id="about">
        <SectionHeader eyebrow="Who I Am" title="About Me" />

        <div className="about-grid">
          <article className="location-card">
            <div className="card-kicker">
              <MapPin size={13} />
              Location · India
            </div>

            <div className="location-copy">
              <h3>Mumbai, India</h3>
              <p>19.0760° N, 72.8777° E</p>
              <span>GMT+5:30</span>
            </div>

            <div className="map-caption">
              Mumbai · India · GMT+5:30
            </div>
          </article>

          <article className="about-card">
            <span>/ About</span>

            <p>
              I'm Yadnyesh, a Computer Science student passionate about
              full-stack web development, clean UI design, and backend systems.
              I enjoy building modern web applications and continuously learning
              new technologies.
            </p>

            <blockquote>
              "Building modern digital experiences through code."
            </blockquote>
          </article>

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                className={`value-card ${value.tone}`}
                key={value.title}
              >
                <Icon size={20} />

                <h3>{value.title}</h3>

                <p>{value.text}</p>
              </article>
            );
          })}
        </div>

        <a className="center-link" href="/about">
          Know More <ArrowRight size={16} />
        </a>
      </section>

      <section className="clone-section experience-section">
        <SectionHeader eyebrow="Education & Work" title="Experience" />

        <div className="experience-grid">
          <article className="edu-card">
            <div>
              <span>2025 - 2027</span>

              <h3>Bachelor of Technology</h3>

              <p>Computer Science</p>

              <strong>NMIMS University</strong>
            </div>
          </article>

          <article className="job-card">
            <span>Jan 2025 - Mar 2025</span>

            <h3>Digital Marketing Intern</h3>

            <strong>CLP Infotech Private Limited</strong>

            <p>
              Worked on video editing, content creation, social media
              management, Google review handling, and client interaction.
              Created marketing content using CapCut and Canva while assisting
              in digital branding campaigns and online reputation management.
            </p>

            <div className="chip-row">
              {[
                'Content Creation',
                'Video Editing',
                'CapCut',
                'Canva',
                'Social Media',
                'Client Handling',
              ].map((tag) => (
                <Chip key={tag} tone="amber">
                  {tag}
                </Chip>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="clone-section reach-section" id="contact">
        <SectionHeader
          eyebrow="Skills · Workflow · Contact"
          title="Reach Out"
        />

        <div className="contact-panel">
          <p className="panel-title">Workflow</p>

          <div className="workflow-row">
            {workflow.map((item) => {
              const Icon = item.icon;

              return (
                <div className="workflow-step" key={item.label}>
                  <span>
                    <Icon size={21} />
                  </span>

                  <p>{item.label}</p>
                </div>
              );
            })}
          </div>

          <div className="contact-bottom">
            <div>
              <p className="panel-title">Hit Me Up</p>

              <div className="contact-links">
                <a
                  className="mail"
                  href="mailto:yadnyeshpatil8250@gmail.com"
                >
                  <Mail size={15} />
                  Mail
                </a>

                <a
                  href="https://github.com/yadnyesh8250"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitBranch size={15} />
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/yadnyesh-patil"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Link size={15} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="energy-core" aria-hidden="true" />
          </div>
        </div>
      </section>
    </div>
  );
}
