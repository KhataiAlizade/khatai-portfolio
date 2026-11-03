import SectionHeading from '../components/SectionHeading';
import { languages, skillGroups } from '../data/portfolio';

export default function Skills() {
  return (
    <section className="content-section section-tinted" id="skills" data-reveal>
      <div className="container">
        <SectionHeading eyebrow="MY TOOLKIT" title="Technologies I work with." description="The tools and concepts I've used across internships, coursework and personal projects." />
        <div className="skills-grid">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <article className="skill-card" key={title} data-reveal>
              <div className="skill-card-title"><span className="skill-icon"><Icon size={19} /></span><h3>{title}</h3></div>
              <div className="tag-list">{skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="languages-row"><span className="eyebrow">LANGUAGES</span><div>{languages.map(([language, level]) => <span key={language}><strong>{language}</strong><small>{level}</small></span>)}</div></div>
      </div>
    </section>
  );
}
