import { useState } from 'react';
import { ExternalLink, X, Award } from 'lucide-react';

const certs = [
  {
    title: 'ET AI Hackathon 2.0',
    issuer: 'The Economic Times',
    date: '26 Aug 2026',
    tags: ['GenAI', 'AI Hackathon', 'LLMs', 'Innovation'],
    tone: 'orange',
    image: '/certificates/et_ai_hackathon.png',
  },
  {
    title: 'Web Development Internship',
    issuer: 'InAmigos Foundation',
    date: '22 Jun 2026',
    tags: ['Web Development', 'Full Stack', 'Internship'],
    tone: 'blue',
    image: '/certificates/inamigos_internship.png',
  },
  {
    title: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    date: '02 Jun 2026',
    tags: ['React', 'Frontend', 'JavaScript', 'HackerRank'],
    tone: 'green',
    image: '/certificates/hackerrank_react.png',
    verifyUrl: 'https://www.hackerrank.com/certificates/8cbeba672022',
    credentialId: '8CBEBA672022',
  },
  {
    title: 'AI Foundations',
    issuer: 'IBM-SkillsBuild',
    date: '23 May 2026',
    tags: ['Artificial Intelligence', 'Machine Learning', 'GenAI', 'IBM'],
    tone: 'cyan',
    image: '/certificates/ibm_ai_foundations.png',
    verifyUrl: 'https://www.credly.com/badges/293b537b-4b28-402d-adbc-c5324fb37094',
    credentialId: '293b537b-4b28-402d-adbc-c5324fb37094',
  },
  {
    title: 'CODE VYUH - AMBIORA \'26',
    issuer: 'GDGoC NMIMS',
    date: '28 Mar 2026',
    tags: ['Google Tech', 'Problem Solving', 'Innovation'],
    tone: 'green',
    image: '/certificates/code_vyuh.png',
  },
  {
    title: 'IIT Gandhinagar Hackathon',
    issuer: 'IIT Gandhinagar',
    date: '08 Feb 2026',
    tags: ['MongoDB', 'React', 'Node.js'],
    tone: 'green',
    image: '/certificates/image.png',
  },
];

export default function Credentials() {
  const [selectedIssuer, setSelectedIssuer] = useState('All');
  const [activeCert, setActiveCert] = useState(null);

  const issuerCounts = certs.reduce((counts, { issuer }) => {
    counts[issuer] = (counts[issuer] || 0) + 1;
    return counts;
  }, {});

  const filterOptions = [
    { label: `All ${certs.length}`, value: 'All' },
    ...Object.entries(issuerCounts).map(([issuer, count]) => ({
      label: `${issuer} ${count}`,
      value: issuer,
    })),
  ];

  const filteredCerts =
    selectedIssuer === 'All'
      ? certs
      : certs.filter((cert) => cert.issuer === selectedIssuer);

  return (
    <div className="clone-page subpage credentials-page">
      <header className="credential-hero">
        <p>Achievements</p>
        <h1>My Credentials</h1>
        <span>{certs.length} certificates · click any entry to expand</span>
      </header>

      <div className="credential-filters">
        {filterOptions.map(({ label, value }) => (
          <button
            className={selectedIssuer === value ? 'active' : ''}
            type="button"
            key={value}
            onClick={() => setSelectedIssuer(value)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="year-row">
        <span>2026</span>
        <i />
        <em>
          {filteredCerts.length} cert{filteredCerts.length === 1 ? '' : 's'}
        </em>
      </div>

      <div className="cert-timeline">
        {filteredCerts.map((cert) => (
          <article
            className={`cert-card ${cert.tone}`}
            key={cert.title}
            onClick={() => setActiveCert(cert)}
            style={{ cursor: 'pointer' }}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveCert(cert);
              }
            }}
          >
            <div className="timeline-dot" />
            <div className="cert-thumb">
              {cert.image ? (
                <img src={cert.image} alt={`${cert.title} certificate`} />
              ) : (
                <div />
              )}
            </div>
            <div className="cert-info">
              <h2>{cert.title}</h2>
              <p>{cert.issuer}</p>
              <div className="chip-row">
                {cert.tags.map((tag) => (
                  <span className="mini-chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="cert-actions">
              <time>{cert.date}</time>
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-verify-link"
                  onClick={(e) => e.stopPropagation()}
                  title="Verify online"
                >
                  <ExternalLink size={12} />
                  Verify
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Modal Dialog for Certificate Preview */}
      {activeCert && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setActiveCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cert-modal-close"
              type="button"
              onClick={() => setActiveCert(null)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="cert-modal-image-wrap">
              <img
                src={activeCert.image}
                alt={`${activeCert.title} certificate preview`}
                className="cert-modal-image"
              />
            </div>

            <div className="cert-modal-body">
              <div className="cert-modal-header">
                <div>
                  <span className="cert-modal-issuer">{activeCert.issuer}</span>
                  <h3 className="cert-modal-title">{activeCert.title}</h3>
                </div>
                <time className="cert-modal-date">{activeCert.date}</time>
              </div>

              {activeCert.credentialId && (
                <p className="cert-modal-id">
                  <strong>Credential ID:</strong>{' '}
                  <code>{activeCert.credentialId}</code>
                </p>
              )}

              <div className="chip-row" style={{ marginTop: '12px' }}>
                {activeCert.tags.map((tag) => (
                  <span className="mini-chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="cert-modal-footer">
                {activeCert.verifyUrl ? (
                  <a
                    href={activeCert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-modal-verify-btn"
                  >
                    <ExternalLink size={15} />
                    Verify Credential Online
                  </a>
                ) : (
                  <span className="cert-modal-verified-badge">
                    <Award size={15} />
                    Verified Credential
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

