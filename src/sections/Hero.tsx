import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" /> Based in Warsaw, Poland <span className="availability-divider">/</span> Open to opportunities</div>
          <p className="hero-overline">{profile.role}</p>
          <h1>Building software<br />with <span>purpose</span><i>.</i></h1>
          <p className="hero-lead">I'm Khatai — a software developer focused on backend engineering, clean APIs and useful full-stack applications.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-secondary" href={profile.cv} target="_blank" rel="noreferrer">Download CV <ArrowDown size={16} /></a>
          </div>
          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Developer profile summary">
          <div className="visual-glow" />
          <div className="terminal-card">
            <div className="terminal-header"><div className="terminal-dots"><i /><i /><i /></div><span>khatai.java</span><span className="terminal-status">● AVAILABLE</span></div>
            <div className="terminal-body">
              <p className="terminal-muted">// A little about how I build</p>
              <p><span className="code-purple">class</span> <span className="code-green">Developer</span> {'{'}</p>
              <p className="indent"><span className="code-purple">String</span> focus = <span className="code-yellow">"Backend"</span>;</p>
              <p className="indent"><span className="code-purple">String</span> stack = <span className="code-yellow">"Java + Spring"</span>;</p>
              <p className="indent"><span className="code-purple">boolean</span> keepLearning = <span className="code-blue">true</span>;</p>
              <p>{'}'}</p>
              <div className="terminal-divider" />
              <div className="terminal-bottom"><span>Warsaw, PL</span><span>UTC +1</span><span>v.2026</span></div>
            </div>
          </div>
          <div className="floating-chip chip-top"><span className="chip-dot" /> Spring Boot</div>
          <div className="floating-chip chip-bottom">PostgreSQL <span>↗</span></div>
          <div className="visual-caption"><span>01 / 04</span><span>ENGINEERING MINDSET</span></div>
        </div>
      </div>
      <div className="hero-bottom container"><span>SCROLL TO EXPLORE</span><span className="hero-line" /><span>SELECTED WORK · 2023—2026</span></div>
    </section>
  );
}
