import { motion } from 'framer-motion';
import Section from './Section';
import { skillGroups } from '../data/site';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ title, icon: Icon, items }) => (
          <motion.li key={title} whileHover={{ y: -3 }} className="card p-6">
            <h3 className="flex items-center gap-3 text-lg font-semibold">
              <Icon size={20} className="text-accent" aria-hidden="true" />
              {title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((i) => (
                <li key={i} className="chip">{i}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
