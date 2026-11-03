import { GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function Education() {
  return (
    <section className="content-section container" id="education" data-reveal>
      <SectionHeading eyebrow="FOUNDATIONS" title="Education" />
      <div className="education-card" data-reveal>
        <div className="education-icon"><GraduationCap size={23} /></div>
        <div className="education-main"><h3>Master of Computer Engineering</h3><p>Vistula University · Warsaw, Poland</p><span>Oct 2026 — Sep 2028 · In progress</span></div>
        <span className="education-status">CURRENT</span>
      </div>
      <div className="education-card education-secondary" data-reveal>
        <div className="education-icon"><GraduationCap size={23} /></div>
        <div className="education-main"><h3>Bachelor of Computer Engineering</h3><p>Vistula University · Warsaw, Poland</p><span>Feb 2023 — Sep 2026</span></div>
        <span className="education-status">COMPLETED</span>
      </div>
    </section>
  );
}
