import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { credentials } from '../data/portfolio';

export default function Certifications() {
  return (
    <section className="content-section section-tinted certifications-section" id="certifications" data-reveal>
      <div className="container">
        <SectionHeading
          eyebrow="CREDENTIALS & TECHNICAL ASSESSMENTS"
          title="Proof of continuous learning."
          description="Role-based and skill-based credentials, alongside course completion, that document focused technical study."
        />
        <div className="credential-grid">
          {credentials.map((credential) => {
            const Icon = credential.issuer === 'HackerRank' ? ShieldCheck : Award;

            return (
              <article className="credential-card" key={credential.url} data-reveal>
                <div className="credential-topline">
                  <span className="credential-icon"><Icon size={22} strokeWidth={1.7} /></span>
                  <span className="credential-issuer">{credential.issuer}</span>
                </div>
                <p className="credential-type">{credential.type}</p>
                <h3>{credential.title}</h3>
                <a className="credential-link" href={credential.url} target="_blank" rel="noopener noreferrer">
                  View Certificate <ExternalLink size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
