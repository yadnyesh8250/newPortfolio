import { BrainCircuit, Code2, Database, GitBranch, Layers, Terminal, Wrench } from 'lucide-react';

const groups = [
  {
    name: 'Foundations',
    title: 'Programming Foundations',
    text: 'Core concepts that underpin everything - applied across problem-solving, development, and system design.',
    skills: ['Object-Oriented Programming', 'Data Structures', 'Algorithms', 'Complexity Analysis', 'Linear Algebra', 'Probability & Statistics', 'Numerical Methods', 'Computer Organization'],
  },
  {
    name: 'Languages',
    title: 'Languages',
    text: 'Daily drivers and research tools for shipping products, notebooks, services, and automation.',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C++', 'Java', 'Bash', 'HTML/CSS'],
  },
  {
    name: 'AI / ML',
    title: 'AI / ML Systems',
    text: 'Applied model work, agent workflows, retrieval, and inference-focused product features.',
    skills: ['LangChain', 'LangGraph', 'Groq', 'XGBoost', 'LSTM', 'Transformers', 'RAG', 'pgvector'],
  },
  {
    name: 'Tools',
    title: 'Tools & Platforms',
    text: 'Infrastructure and product platforms for low-cost, production-minded deployments.',
    skills: ['React', 'Next.js', 'FastAPI', 'Node.js', 'Docker', 'Supabase', 'Redis', 'GitHub Actions'],
  },
];

const orbit = [
  ['React', Code2],
  ['Next.js', Layers],
  ['Python', Terminal],
  ['FastAPI', Wrench],
  ['Supabase', Database],
  ['Git', GitBranch],
  ['LangGraph', BrainCircuit],
];

export default function Skills() {
  return (
    <div className="clone-page subpage forge-page">
      <header className="subpage-hero tall">
        <p>Expertise</p>
        <h1>Technical Expertise</h1>
      </header>
      <div className="skill-orbit" aria-hidden="true">
        {orbit.map(([name, Icon], index) => (
          <span style={{ '--skill-angle': `${index * 51}deg`, '--skill-delay': `${index * -3.4}s` }} key={name}>
            <Icon size={22} />
            {name}
          </span>
        ))}
      </div>
      <div className="skill-tabs">
        {groups.map((group, index) => (
          <a className={index === 0 ? 'active' : ''} href={`#${group.name}`} key={group.name}>
            {group.name}
          </a>
        ))}
      </div>
      <div className="skill-panels">
        {groups.map((group) => (
          <section className="skill-panel" id={group.name} key={group.name}>
            <div>
              <i />
              <h2>{group.title}</h2>
              <p>{group.text}</p>
            </div>
            <span>{group.skills.length} skills</span>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <b key={skill}>{skill}</b>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
