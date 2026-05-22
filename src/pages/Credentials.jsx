const certs = [
  {
    title: 'IIT Gandhinagar Hackathon ',
    issuer: 'IIT Gandhinagar',
    date: '8 Feb 2026',
    tags: ['MongoDB', 'React', 'Node.js'],
    tone: 'green',
    image:  '/certificates/image.png',
  },
  {
    title: 'Code Vhuy Hackathon',
    issuer: 'GDOC NMIMS',
    date: 'Mar 28, 2026',
    tags: ['React', 'Frontend', 'JS'],
    tone: 'green',
    image: '/certificates/code_vhuy_cerf.png',
  },
  
 
  
];

const issuerCounts = certs.reduce((counts, { issuer }) => {
  counts[issuer] = (counts[issuer] || 0) + 1;
  return counts;
}, {});

const filters = [
  `All ${certs.length}`,
  ...Object.entries(issuerCounts).map(([issuer, count]) => `${issuer} ${count}`),
];

export default function Credentials() {
  return (
    <div className="clone-page subpage credentials-page">
      <header className="credential-hero">
        <p>Achievements</p>
        <h1>My Credentials</h1>
        <span>{certs.length} certificates · click any entry to expand</span>
      </header>
      <div className="credential-filters">
        {filters.map((filter, index) => (
          <button className={index === 0 ? 'active' : ''} type="button" key={filter}>{filter}</button>
        ))}
      </div>
      <div className="year-row">
        <span>2026</span>
        <i />
        <em>{certs.length} certs</em>
      </div>
      <div className="cert-timeline">
        {certs.map(({ title, issuer, date, tags, tone, image }) => (
          <article className={`cert-card ${tone}`} key={title}>
            <div className="timeline-dot" />
            <div className="cert-thumb">
              {image ? <img src={image} alt={`${title} certificate`} /> : <div />}
            </div>
            <div>
              <h2>{title}</h2>
              <p>{issuer}</p>
              <div className="chip-row">
                {tags.map((tag) => <span className="mini-chip" key={tag}>{tag}</span>)}
              </div>
            </div>
            <time>{date}</time>
          </article>
        ))}
      </div>
    </div>
  );
}
