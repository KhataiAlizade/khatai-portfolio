import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '../data/portfolio';

const links = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Credentials', '#certifications'],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Khatai Alizade home">
          <span className="brand-mark">K</span>
          <span className="brand-name">KHATAI ALIZADE</span>
        </a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="primary-navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </div>
        <button className="mobile-menu" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="primary-navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      <span className="sr-only">Portfolio for {profile.name}</span>
    </header>
  );
}
