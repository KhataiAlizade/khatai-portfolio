import { BriefcaseBusiness } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section className="content-section section-tinted" id="experience" data-reveal>
      <div className="container">
        <SectionHeading eyebrow="WHERE I'VE CONTRIBUTED" title="Experience" description="Internship experience across full-stack development, APIs, data workflows and collaborative software delivery." />
        <div className="timeline">
          {experiences.map((experience, index) => (
            <article className="experience-item" key={experience.company} data-reveal>
              <div className="timeline-marker"><BriefcaseBusiness size={17} /></div>
              <div className="experience-main">
                <div className="experience-heading">
                  <div><p className="experience-period">{experience.period}</p><h3>{experience.role}</h3><p className="experience-company">{experience.company}{experience.location ? <> <span>·</span> {experience.location}</> : null}</p></div>
                  <span className="experience-number">0{index + 1}</span>
                </div>
                <p className="experience-description">{experience.description}</p>
                <ul className="clean-list">{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
        <p className="experience-note">Also bringing team coordination and customer-facing experience from earlier shift-management work.</p>
      </div>
    </section>
  );
}
