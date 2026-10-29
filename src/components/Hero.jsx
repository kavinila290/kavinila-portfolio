import { motion } from 'framer-motion';
import { ArrowRight, Database, Download, Github, Mail, Monitor, Server } from 'lucide-react';
import LinkButton from './LinkButton';
import { links } from '../data/links';
import { site } from '../data/site';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const layers = [
  { icon: Monitor, name: 'React + Vite', note: 'Axios · JavaScript' },
  { icon: Server, name: 'Spring Boot', note: 'Spring Data JPA · REST APIs' },
  { icon: Database, name: 'MySQL', note: 'Relational data' },
];
const wires = ['REST / JSON', 'SQL'];

function StackCard() {
  return (
    <motion.div
      role="img"
      aria-label="Full-stack architecture: React frontend, Spring Boot REST API, MySQL database"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="card p-5 font-mono text-sm shadow-2xl shadow-black/10"
    >
      <div className="mb-5 flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2.5 w-2.5 rounded-full bg-line" />
        ))}
        <span className="ml-3 text-xs text-muted">full-stack-architecture</span>
      </div>
      {layers.map((l, i) => (
        <div key={l.name}>
          {i > 0 && (
            <div className="my-2 flex items-center gap-3 pl-6 text-xs text-muted">
              <span className="h-6 w-px bg-line" />
              {wires[i - 1]}
            </div>
          )}
          <div className="flex items-center gap-4 rounded-xl border border-line bg-bg/60 p-4">
            <l.icon className="shrink-0 text-accent" size={22} />
            <div>
              <p className="font-semibold text-fg">{l.name}</p>
              <p className="text-xs text-muted">{l.note}</p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pt-40">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-ok" aria-hidden="true" />
          Seeking Java Full Stack Developer roles
        </motion.p>
        <motion.h1 variants={item} className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          {site.name}
          <span className="mt-2 block text-3xl text-accent sm:text-4xl">{site.role}</span>
        </motion.h1>
        <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {site.tagline}
        </motion.p>
        <motion.ul variants={item} className="mt-6 flex flex-wrap gap-2" aria-label="Core stack">
          {site.stack.map((s) => (
            <li key={s} className="chip">{s}</li>
          ))}
        </motion.ul>
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <LinkButton variant="primary" icon={ArrowRight} href="#projects">View Projects</LinkButton>
          <LinkButton icon={Github} href={links.github}>GitHub</LinkButton>
          <LinkButton icon={Download} href={links.resume} download>Download Resume</LinkButton>
          <LinkButton icon={Mail} href="#contact">Contact Me</LinkButton>
        </motion.div>
      </motion.div>
      <StackCard />
    </section>
  );
}
