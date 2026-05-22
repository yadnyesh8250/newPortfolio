import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bot, Home, Menu, Moon, SunMedium, X } from 'lucide-react';

const navItems = [
  { name: 'PROJECTS', path: '/projects' },
  { name: 'CREDENTIALS', path: '/credentials' },
  { name: 'FORGE', path: '/skills' },
  { name: 'PERSONA', path: '/about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="site-nav-wrap">
      <nav className="site-nav">
        <NavLink className="brand" to="/" onClick={() => setOpen(false)}>
          yadnyesh.readme
        </NavLink>
        <NavLink className="home-pill" to="/" aria-label="Home" onClick={() => setOpen(false)}>
          <Home size={18} />
        </NavLink>
        <span className="nav-divider" />
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink key={item.name} to={item.path} onClick={() => setOpen(false)}>
              {item.name}
            </NavLink>
          ))}
          <NavLink className="kiro-pill" to="/kiro" onClick={() => setOpen(false)}>
            <Bot size={14} />
            KIRO
          </NavLink>
          <button
            className="theme-pill"
            type="button"
            aria-label={`Switch to ${nextTheme} mode`}
            onClick={() => setTheme(nextTheme)}
          >
            {theme === 'dark' ? <Moon size={14} /> : <SunMedium size={15} />}
            {theme.toUpperCase()}
          </button>
        </div>
        <button className="menu-button" type="button" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
    </header>
  );
}
