import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '../types/portfolio';

function OrderBookPreview() {
  return (
    <div className="orderbook-visual" role="img" aria-label="Illustrative order book visualization with buy and sell price levels">
      <div className="orderbook-header"><span>SELL ORDERS</span><span>PRICE / QTY</span><span>BUY ORDERS</span></div>
      <div className="orderbook-grid">
        <div className="orderbook-column orderbook-sell"><i>104.40 <b>180</b></i><i>104.30 <b>120</b></i><i>104.20 <b>75</b></i></div>
        <div className="orderbook-match"><span>MATCH</span><strong>104.10</strong><small>ORDER BOOK</small></div>
        <div className="orderbook-column orderbook-buy"><i><b>90</b> 104.00</i><i><b>140</b> 103.90</i><i><b>220</b> 103.80</i></div>
      </div>
      <div className="orderbook-footer"><span>PRICE-TIME PRIORITY</span><span>ILLUSTRATIVE VISUALISATION</span></div>
    </div>
  );
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;
  return (
    <article className={`project-card ${project.featured ? 'project-featured' : 'project-secondary'}`} data-reveal>
      <div className={`project-visual ${project.image ? 'project-visual-screenshot' : 'project-visual-orderbook'}`}>
        {project.image ? <img src={project.image} alt={project.imageAlt ?? `${project.name} application screenshot`} loading="lazy" decoding="async" /> : <OrderBookPreview />}
        <span className="project-visual-label">{project.image ? 'Genuine project screenshot' : 'Illustrative technical visualisation'}</span>
      </div>
      <div className="project-topline">
        <div className="project-icon"><Icon size={22} strokeWidth={1.7} /></div>
        <span className="project-index">0{index + 1}</span>
      </div>
      <p className="project-category">{project.category}</p>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="project-highlights">
        {project.highlights.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <div className="tag-list">
        {project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
      </div>
      <div className="project-links">
        {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={16} /> Source code <ArrowUpRight size={14} /></a> : null}
        {project.demoUrl ? <a href={project.demoUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a> : null}
      </div>
    </article>
  );
}
