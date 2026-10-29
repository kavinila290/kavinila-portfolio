import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../data/projects';

const list = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };

export default function Projects() {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <Section id="projects" title="Featured projects">
      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-6 lg:grid-cols-2"
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={() => setActive(p)} />
        ))}
      </motion.div>
      <ProjectModal project={active} onClose={close} />
    </Section>
  );
}
