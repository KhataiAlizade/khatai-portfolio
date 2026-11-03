import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section className="content-section container" id="projects" data-reveal>
      <SectionHeading eyebrow="SELECTED BUILDS" title={'Projects that show\nhow I think.'} description="A selection of backend and full-stack applications. Explore the repositories for implementation details and source code." />
      <div className="projects-grid">
        {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
      </div>
    </section>
  );
}
