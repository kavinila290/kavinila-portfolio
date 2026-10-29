import { Cloud, Coffee, Database, Github, Linkedin, Mail, Monitor, Server, Wrench } from 'lucide-react';
import { email, links, mailto } from './links';

export const site = {
  name: 'Kavinila M',
  role: 'Java Full Stack Developer',
  location: 'Chennai, India',
  tagline: 'Building scalable full-stack applications with Java, Spring Boot, React, and MySQL.',
  stack: ['Java', 'Spring Boot', 'React', 'MySQL'],
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const about = {
  paragraphs: [
    "I'm a Computer Science graduate (First Class with Distinction, CGPA 8.39/10) building practical full-stack applications. I write Java and Spring Boot REST APIs backed by MySQL through Spring Data JPA, and build React interfaces that consume them.",
    "I'm currently in Java Full Stack Development training at QSpiders, with internship experience in REST API development and database work. I'm looking for a Java Full Stack Developer role where I can contribute to real systems and keep growing.",
  ],
  focus: [
    'Java backend development with Spring Boot and Spring Data JPA',
    'REST API design, integration, and Postman testing',
    'React frontends built with Vite',
    'MySQL and MongoDB database work',
  ],
};

export const skillGroups = [
  { title: 'Backend', icon: Server, items: ['Java', 'Spring Boot', 'Spring Data JPA', 'REST APIs', 'Maven', 'Node.js'] },
  { title: 'Java foundations', icon: Coffee, items: ['OOP', 'Collections', 'Exception Handling', 'Multithreading fundamentals'] },
  { title: 'Frontend', icon: Monitor, items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'] },
  { title: 'Database', icon: Database, items: ['MySQL', 'MongoDB', 'SQL'] },
  { title: 'Tools', icon: Wrench, items: ['Git', 'GitHub', 'Postman', 'VS Code'] },
  { title: 'Cloud / Deployment', icon: Cloud, items: ['AWS (EC2, S3)', 'Vercel', 'Render'] },
];

export const socials = [
  { label: 'GitHub', href: links.github, icon: Github },
  { label: 'LinkedIn', href: links.linkedin, icon: Linkedin },
  { label: 'Email', href: mailto(email), icon: Mail },
];
