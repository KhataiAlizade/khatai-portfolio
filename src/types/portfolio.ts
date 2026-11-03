import type { LucideIcon } from 'lucide-react';

export interface Project {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  demoUrl?: string;
  icon: LucideIcon;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  bullets: string[];
  type: 'internship' | 'other';
}

export interface Credential {
  title: string;
  issuer: string;
  type: string;
  url: string;
}
