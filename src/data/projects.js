import { links } from './links';

import hireflowImage from '../img/h1.png';
import buildwiseImage from '../img/h2.png';
import neuralSecImage from '../img/h3.png';
import cinematicImage from '../img/h4.png';

export const projects = [
  {
    id: 'hireflow',
    featured: true,
    caseStudy: true,
    title: 'HireFlow — Full Stack Job Portal',
    description:
      'A full-stack job portal built with Spring Boot, React, and MySQL that allows users to discover jobs, manage profiles, and submit applications.',
    tech: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'MySQL',
      'REST API',
      'React',
      'Axios',
      'Maven',
      'Postman',
    ],
    features: [
      'User registration and login',
      'Job search',
      'Job details',
      'Job applications',
      'User profile',
      'RESTful backend APIs',
      'MySQL database with Spring Data JPA',
      'React frontend',
    ],
    architecture: [
      'Layered Spring Boot backend: Controller, Service, Repository, Entity, and DTO components',
      'Spring Data JPA persists data to MySQL',
      'RESTful APIs tested and validated with Postman',
      'React frontend calls the APIs through Axios',
    ],
    links: links.hireflow,
    image: hireflowImage,
    imageAlt: 'HireFlow job portal screenshot',
  },
  {
    id: 'buildwise',
    featured: false,
    caseStudy: true,
    title: 'BuildWise AI — AI Software Project Mentor',
    description:
      "An AI-powered application that generates personalized software project ideas, development roadmaps, and GitHub-ready project documentation based on a user's skills, interests, and career goals.",
    tech: ['React', 'Node.js', 'Express', 'Claude AI API', 'GitHub API', 'Vite'],
    features: [
      'Personalized project recommendations',
      'Skill-level based suggestions',
      'Career-goal based recommendations',
      'Step-by-step development roadmaps',
      'Recruiter-focused project feedback engine',
      'Automated README, project structure, and contribution guidelines',
    ],
    architecture: [
      'React.js frontend',
      'Node.js backend with feedback-engine logic',
      'Claude AI and GitHub REST APIs integrated end to end',
    ],
    links: links.buildwise,
    image: buildwiseImage,
    imageAlt: 'BuildWise AI screenshot',
  },
  {
  id: 'neural-sec',
  featured: false,
  caseStudy: true,
  title: 'Neural Sec — Cybersecurity Project',
  description:
    'A cybersecurity-focused project designed to help users explore security concepts and understand potential threats.',
  tech: [
    // Replace these with the actual technologies used in Neural Sec.
  ],
  features: [
    'Security-focused analysis',
    'Threat awareness',
    'Clear presentation of security findings',
    'User-friendly interface',
  ],
  architecture: [],
  links: links.neuralSec,
  image: neuralSecImage,
  imageAlt: 'Neural Sec project screenshot',
},
{
  id: 'cinematic-scene-generator',
  featured: false,
  caseStudy: true,
  title: 'Cinematic Scene Generator',
  description:
    'An AI-powered creative application for generating cinematic scene concepts from text descriptions.',
  tech: [
    // Replace these with the actual technologies used in this project.
  ],
  features: [
    'Text-based scene concepts',
    'Cinematic storytelling ideas',
    'Creative scene descriptions',
    'AI-assisted content generation',
  ],
  architecture: [],
  links: links.cinematic,
  image: cinematicImage,
  imageAlt: 'Cinematic Scene Generator screenshot',
},
]