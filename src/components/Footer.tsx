import { ArrowUpRight } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand" href="#home"><span className="brand-mark">K</span><span className="brand-name">KHATAI ALIZADE</span></a>
        <p>Designed and built with care. © {new Date().getFullYear()} {profile.name}.</p>
        <a className="back-top" href="#home">Back to top <ArrowUpRight size={14} /></a>
      </div>
    </footer>
  );
}
