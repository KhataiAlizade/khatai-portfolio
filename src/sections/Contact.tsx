import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Contact() {
  return (
    <section className="contact-section" id="contact" data-reveal>
      <div className="container contact-inner">
        <p className="eyebrow">HAVE A ROLE OR PROJECT IN MIND?</p>
        <h2>Let's build<br /><span>something useful.</span></h2>
        <p className="contact-copy">I'm interested in junior Java backend and full-stack opportunities where I can contribute, learn from experienced engineers and grow through meaningful work.</p>
        <a className="button button-primary contact-button" href={`mailto:${profile.email}?subject=Opportunity%20for%20Khatai`}>Get in touch <ArrowUpRight size={17} /></a>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
