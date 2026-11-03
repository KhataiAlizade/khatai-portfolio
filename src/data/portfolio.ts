import {
  Activity,
  Boxes,
  Building2,
  Code2,
  Database,
  CloudSun,
  Film,
  Users,
} from 'lucide-react';
import type { Credential, Experience, Project } from '../types/portfolio';

export const profile = {
  name: 'Khatai Alizade',
  role: 'Java Backend / Full-Stack Developer',
  location: 'Warsaw, Poland',
  email: 'xataializade01@gmail.com',
  github: 'https://github.com/KhataiAlizade',
  linkedin: 'https://www.linkedin.com/in/khatai-alizade-857235242/',
  cv: '/files/Khatai-Alizade-CV.pdf',
  intro:
    'I build backend services and full-stack applications with a focus on clear APIs, reliable data workflows and maintainable code.',
};

export const experiences: Experience[] = [
  {
    company: 'EVERY ON sp. z o.o.',
    role: 'Full-Stack Developer Intern',
    period: 'Aug 2025 — Feb 2026 · 792 hours',
    location: 'Kalisz, Poland',
    description:
      'Contributed to a service-management platform for a cleaning-services business, supporting workflows for clients, managers and field staff.',
    bullets: [
      'Worked on relational database design, REST APIs, client booking flows and an administrative dashboard.',
      'Implemented and improved data validation, SQL queries, indexing and database integrity workflows.',
      'Contributed to authentication, integrations, testing, deployment support and automated database backups.',
      'Participated in sprint planning, peer code reviews, project demonstration and technical handover.',
    ],
    type: 'internship',
  },
  {
    company: 'Onfuture',
    role: 'Software Developer Intern',
    period: 'Feb 2023 — Jun 2023',
    description:
      'Assisted with development of e-commerce platforms, contributing to frontend interfaces and API-connected functionality.',
    bullets: [
      'Built and refined responsive React interfaces for e-commerce platforms.',
      'Integrated REST APIs and fixed frontend bugs and UI inconsistencies.',
      'Used Git and GitHub for source control during development.',
    ],
    type: 'internship',
  },
];

export const projects: Project[] = [
  {
    name: 'Electronic Trading Engine',
    category: 'Backend Engineering',
    description:
      'A backend trading API implementing price-time priority order matching, order-book aggregation and concurrent order processing using Hibernate optimistic locking.',
    technologies: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Hibernate'],
    highlights: [
      'Price-time priority matching.',
      'Order-book aggregation.',
      'Concurrent order processing.',
      '10 automated tests (6 unit and 4 integration).',
    ],
    githubUrl: 'https://github.com/KhataiAlizade/electronic-trading-engine',
    icon: Activity,
    featured: true,
  },
  {
    name: 'HR Management System',
    category: 'Full-Stack Application',
    description:
      'A full-stack HR application with role-based access and workflows for employee management, leave approvals, skill-based project assignment and payroll calculations.',
    technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'JWT', 'JUnit 5', 'Mockito'],
    highlights: [
      'Employee management.',
      'Role-based access control for Admin and Employee.',
      'Leave approval workflows.',
      'Skill-based project assignment.',
      'Payroll calculations.',
      '50 backend unit tests using JUnit 5 and Mockito.',
    ],
    githubUrl: 'https://github.com/KhataiAlizade/HumanResources',
    demoUrl: 'https://human-resources-pye8.vercel.app/',
    icon: Users,
    featured: true,
    image: '/images/projects/hrms-home.png',
    imageAlt: 'Human Resources Management System home screen',
  },
  {
    name: 'Warehouse Management System',
    category: 'Desktop Application',
    description:
      'A Java desktop application for inventory and transaction management with product records, stock monitoring and role-specific workflows.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
    highlights: [
      'Product management with SKU, stock quantities, minimum stock levels and prices.',
      'Created role-based views for Admin, Sales Manager and Warehouse Manager roles.',
      'Implemented stock tracking, low-stock alerts and inventory transactions.',
      'Added printable bill generation and relational data-integrity constraints.',
    ],
    githubUrl: 'https://github.com/KhataiAlizade/WareHouseManagement',
    icon: Boxes,
    image: '/images/projects/warehouse-management.png',
    imageAlt: 'Warehouse Management System desktop inventory window',
  },
  {
    name: 'KaStore — Movie & TV Catalog',
    category: 'Frontend Development',
    description:
      'A movie and TV show catalog application that integrates with TMDb to provide real-time movie and television information.',
    technologies: ['React', 'TypeScript', 'Material UI', 'TMDb API'],
    highlights: [
      'Movie and TV show discovery.',
      'Search and filtering with genre and language filters.',
      'Sorting by popularity and detailed media information.',
      'Responsive user interface.',
    ],
    demoUrl: 'https://kastorel.netlify.app/',
    icon: Film,
    image: '/images/projects/kastore-home.png',
    imageAlt: 'KaStore movie and TV catalog home screen',
  },
  {
    name: 'WeatherTTS — Weather Application',
    category: 'Frontend Development',
    description:
      'A weather application providing real-time weather information for searched cities.',
    technologies: ['React', 'TypeScript', 'Material UI', 'OpenWeather API'],
    highlights: [
      'City search with current temperature and feels-like temperature.',
      'Wind speed, humidity and pressure details.',
      'Daily forecast and OpenWeather API integration.',
    ],
    demoUrl: 'https://weathertts.netlify.app/',
    icon: CloudSun,
    image: '/images/projects/weather-tts.png',
  },
];

export const skillGroups = [
  {
    title: 'Backend',
    icon: Code2,
    skills: ['Java 17', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'JWT'],
  },
  {
    title: 'Databases & data',
    icon: Database,
    skills: ['PostgreSQL', 'Redis', 'H2', 'SQL', 'Database modelling', 'Query optimisation'],
  },
  {
    title: 'Frontend',
    icon: Activity,
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Testing & tools',
    icon: Building2,
    skills: ['JUnit 5', 'Mockito', 'Postman', 'Git', 'GitHub', 'Maven', 'Docker', 'IntelliJ IDEA'],
  },
];

export const languages = [
  ['Azerbaijani', 'Native'],
  ['Turkish', 'C1'],
  ['English', 'Full professional proficiency'],
  ['Polish', 'B1'],
] as const;

export const credentials: Credential[] = [
  {
    title: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    type: 'Role-based certification',
    url: 'https://www.hackerrank.com/certificates/b283d5b956b3',
  },
  {
    title: 'Software Engineer Intern',
    issuer: 'HackerRank',
    type: 'Role-based certification',
    url: 'https://www.hackerrank.com/certificates/258de729bc3c',
  },
  {
    title: 'Software Engineer',
    issuer: 'HackerRank',
    type: 'Role-based certification',
    url: 'https://www.hackerrank.com/certificates/d96ff9a5a1c7',
  },
  {
    title: 'Java (Basic)',
    issuer: 'HackerRank',
    type: 'Skill-based certification',
    url: 'https://www.hackerrank.com/certificates/1d982475e6e9',
  },
  {
    title: 'Spring Boot Developer',
    issuer: 'Udemy',
    type: 'Course completion certificate',
    url: 'https://www.udemy.com/certificate/UC-af1e2478-7aa5-434a-96b8-1d1800885643/',
  },
];
