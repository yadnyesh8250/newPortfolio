import {
  Code2,
  Flame,
  Terminal,
  TrendingUp,
  Quote,
  Briefcase,
} from 'lucide-react';

import Card3D from '../components/Card3D';

export default function Persona() {
  const metrics = [
    {
      value: '10+',
      label: 'Projects Built',
      icon: <Code2 className="w-8 h-8 text-electric-blue" />,
    },
    {
      value: '300+',
      label: 'DSA Problems',
      icon: <Terminal className="w-8 h-8 text-amber-glow" />,
    },
    {
      value: '3+',
      label: 'Full Stack Apps',
      icon: <Flame className="w-8 h-8 text-cyber-purple" />,
    },
    {
      value: 'MERN',
      label: 'Stack Expertise',
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
    },
    {
      value: '2025',
      label: 'Started Journey',
      icon: <Briefcase className="w-8 h-8 text-electric-blue" />,
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yadnyesh8250',

      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 .5C5.65 .5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.08-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.77 1.04.77 2.1 0 1.51-.01 2.73-.01 3.1 0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
        </svg>
      ),
    },

    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yadnyesh-patil',

      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.53V8.98H7.1v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
        </svg>
      ),
    },

    {
      name: 'LeetCode',
      url: 'https://leetcode.com/',

      icon: <Terminal className="w-5 h-5" />,
    },
  ];

  return (
    <div className="relative z-10 w-full animate-fade-in pt-12 pb-24">
      {/* Hero Intro Section */}

      <section className="min-h-[60vh] flex flex-col justify-center relative mb-24 max-w-4xl mx-auto">
        <div className="z-10">
          <h1 className="font-display-xl text-4xl md:text-7xl mb-6 font-bold leading-tight">
            <span className="text-on-surface">Hi, I'm </span>

            <span className="text-electric-blue neon-text">
              Yadnyesh
            </span>
          </h1>

          <p className="font-body-lg text-lg md:text-xl text-on-surface-variant mb-8 leading-relaxed opacity-90">
            I am currently pursuing Computer Science at NMIMS University.
            Passionate about Full-Stack Development, backend systems,
            scalable web applications, and creating modern UI/UX
            experiences using the MERN stack.
          </p>

          <div className="flex gap-4">
            <a
              href="mailto:yadnyeshpatil8250@gmail.com"
              className="bg-electric-blue text-deep-void px-8 py-3 rounded-full font-label-mono text-sm font-bold hover:shadow-[0_0_30px_rgba(0,217,255,0.6)] transition-all uppercase tracking-wider"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Floating Element */}

        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 hidden lg:block w-[350px] h-[350px] animate-float pointer-events-none">
          <div className="w-full h-full rounded-full border border-electric-blue/15 flex items-center justify-center p-8">
            <div className="w-full h-full rounded-full border border-cyber-purple/20 flex items-center justify-center p-8 rotate-45">
              <div className="w-full h-full glass-card rounded-full shadow-[0_0_50px_rgba(188,19,254,0.1)] flex items-center justify-center">
                <Terminal className="w-24 h-24 text-electric-blue/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}

      <section className="mb-28 relative">
        <div className="absolute -left-20 top-20 w-48 h-48 bg-cyber-purple/10 rounded-full blur-[100px] pointer-events-none" />

        <h2 className="font-headline-lg text-2xl md:text-4xl mb-12 flex items-center gap-4 font-bold max-w-4xl mx-auto">
          <span className="w-8 h-1 bg-electric-blue block"></span>
          Education
        </h2>

        <Card3D
          glowColor="rgba(0, 217, 255, 0.2)"
          className="max-w-4xl mx-auto rounded-xl p-8 md:p-12 relative overflow-hidden group"
        >
          {/* Institute Background Image */}

          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
            style={{
              backgroundImage:
                "url('https://images.shiksha.com/mediadata/images/1532088035phpm8K7Ac.jpeg')",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <div className="inline-block px-3 py-1 bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30 font-label-mono text-xs rounded mb-4 font-semibold uppercase tracking-wider">
                2025 — 2027
              </div>

              <h3 className="font-headline-md text-2xl md:text-3xl text-on-surface mb-2 font-bold">
                NMIMS University
              </h3>

              <p className="font-body-lg text-lg text-electric-blue mb-6">
                Computer Science
              </p>

              <div className="flex items-center gap-6">
                <div className="glass-panel px-6 py-4 rounded-lg border-l-2 border-l-electric-blue">
                  <p className="font-label-mono text-xs text-on-surface-variant mb-1 uppercase tracking-wider">
                    Focus Area
                  </p>

                  <p className="font-headline-md text-2xl text-on-surface font-bold">
                    MERN Stack
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-end opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              <img
                src="https://www.nmims.edu/images/home-slide/m-school-3.jpg"
                alt="NMIMS Logo"
                className="w-24 h-24 object-contain mb-4"
              />

              <p className="font-label-mono text-xs text-outline-variant text-right max-w-[200px] leading-relaxed">
                NMIMS University · Mumbai
              </p>
            </div>
          </div>
        </Card3D>
      </section>

      {/* Metrics */}

      <section className="mb-28 max-w-4xl mx-auto">
        <h2 className="font-headline-lg text-2xl md:text-4xl mb-12 flex items-center gap-4 font-bold">
          <span className="w-8 h-1 bg-electric-blue block"></span>
          Metrics
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-electric-blue/30 hover:shadow-[0_0_20px_rgba(0,217,255,0.15)]"
            >
              <div className="mb-4">{metric.icon}</div>

              <h4 className="font-headline-md text-3xl font-bold text-on-surface mb-2">
                {metric.value}
              </h4>

              <p className="font-label-mono text-xs text-on-surface-variant uppercase tracking-wider">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}

      <section className="mb-28 py-16 relative flex justify-center max-w-4xl mx-auto">
        <div className="absolute inset-0 bg-electric-blue/5 blur-[120px] rounded-full w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <Card3D
          glowColor="rgba(0, 217, 255, 0.15)"
          className="w-full p-12 rounded-xl text-center relative z-10 border-t-2 border-t-electric-blue/50"
        >
          <Quote className="w-10 h-10 text-electric-blue/40 mx-auto mb-6" />

          <h3 className="font-display-xl text-2xl md:text-4xl leading-tight text-on-surface italic font-light tracking-wide max-w-2xl mx-auto">
            "Building scalable systems and modern digital experiences
            through clean code."
          </h3>
        </Card3D>
      </section>

      {/* Social Links */}

      <section className="mb-12 max-w-4xl mx-auto">
        <h2 className="font-headline-lg text-2xl md:text-4xl mb-12 flex items-center gap-4 font-bold">
          <span className="w-8 h-1 bg-electric-blue block"></span>
          Find Me On
        </h2>

        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel px-6 py-4 rounded-xl flex items-center gap-3 hover:bg-white/5 hover:border-electric-blue/50 hover:shadow-[0_0_15px_rgba(0,217,255,0.2)] hover:-translate-y-1 transition-all duration-300 group border border-white/5"
            >
              <span className="text-on-surface group-hover:text-electric-blue transition-colors duration-300">
                {link.icon}
              </span>

              <span className="font-label-mono text-sm text-on-surface group-hover:text-electric-blue transition-colors duration-300">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
