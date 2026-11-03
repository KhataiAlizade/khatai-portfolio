import { ArrowUpRight, Braces, Database, Workflow } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const principles = [
  { icon: Braces, title: 'Thoughtful engineering', text: 'I care about readable code, clear boundaries and solving the right problem before adding complexity.' },
  { icon: Database, title: 'Reliable data flows', text: 'I enjoy working with relational data, API design, validation and the details that keep applications consistent.' },
  { icon: Workflow, title: 'End-to-end perspective', text: 'Building full-stack projects helps me understand how backend decisions shape the experience of real users.' },
];

export default function About() {
  return (
    <section className="content-section container" id="about" data-reveal>
      <SectionHeading eyebrow="A BIT ABOUT ME" title={'Curious by nature.\nEngineer by choice.'} description="A practical problem-solver who enjoys turning business needs into reliable software." />
      <div className="about-layout">
        <div className="about-copy">
          <p className="about-lead">My path into software development has been shaped by learning through building — from university foundations to internships and independent applications.</p>
          <p>I'm a Computer Engineering graduate from Vistula University and currently continuing my studies at Master's level in Warsaw. My main focus is Java backend development with Spring Boot, while my full-stack experience includes React and TypeScript.</p>
          <p>Working with developers and contributing to business-oriented applications taught me to ask questions, understand workflows and think about reliability beyond the happy path.</p>
          <a className="text-link" href="#experience">Explore my experience <ArrowUpRight size={16} /></a>
        </div>
        <div className="principles-list">
          {principles.map(({ icon: Icon, title, text }, index) => (
            <div className="principle" key={title} data-reveal>
              <span className="principle-number">0{index + 1}</span>
              <span className="principle-icon"><Icon size={20} /></span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
