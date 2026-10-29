import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  ExternalLink,
  FileText,
  Github,
  Star,
} from 'lucide-react';
import LinkButton from './LinkButton';

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function Preview({ project: p }) {
  if (p.image) {
    return (
      <img
        src={p.image}
        alt={p.imageAlt}
        loading="lazy"
        className="h-full min-h-48 w-full object-cover"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="flex h-full min-h-48 flex-col justify-between bg-linear-to-br from-accent/20 via-accent/5 to-transparent p-5 font-mono"
    >
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-2.5 w-2.5 rounded-full bg-line"
          />
        ))}
      </div>

      <div>
        <p className="text-2xl font-semibold text-fg">
          {p.title.split(' — ')[0]}
        </p>
        <p className="mt-1 text-xs text-muted">
          {p.tech.slice(0, 3).join(' · ')}
        </p>
      </div>

      <span className="inline-flex items-center gap-1 text-xs text-accent transition-all group-hover:gap-2">
        View details <ArrowUpRight size={14} />
      </span>
    </div>
  );
}

export default function ProjectCard({ project: p, onOpen }) {
  // Show Live Demo only when a live URL exists.
  // Neural Sec and Cinematic Scene Generator have no live URL.
  const liveUrl =
    p.id === 'neural-sec' ||
    p.id === 'cinematic-scene-generator'
      ? null
      : p.links?.live;

  const githubUrl = p.links?.github;

  return (
    <motion.article
      variants={item}
      whileHover={{ y: -4 }}
      className={`card flex flex-col overflow-hidden ${
  p.featured || p.id === 'cinematic-scene-generator'
    ? 'border-accent/40 lg:col-span-2 lg:flex-row'
    : ''
}`}
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View details for ${p.title}`}
        className={`group block text-left ${
          p.featured ? 'lg:w-5/12' : ''
        }`}
      >
        <Preview project={p} />
      </button>

      <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
        {p.featured && (
          <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
            <Star size={14} aria-hidden="true" />
            Featured Project
          </p>
        )}

        <h3 className="text-2xl font-semibold tracking-tight">
          {p.title}
        </h3>

        <p className="text-muted">{p.description}</p>

        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
          {p.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        <ul
          className="grid gap-2 text-sm sm:grid-cols-2"
          aria-label="Key features"
        >
          {p.features.slice(0, 4).map((f) => (
            <li key={f} className="flex gap-2">
              <Check
                size={16}
                className="mt-0.5 shrink-0 text-accent"
                aria-hidden="true"
              />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {liveUrl && (
            <LinkButton
              variant="primary"
              icon={ExternalLink}
              href={liveUrl}
            >
              Live Demo
            </LinkButton>
          )}

          {githubUrl && (
            <LinkButton icon={Github} href={githubUrl}>
              GitHub Repository
            </LinkButton>
          )}

          {p.caseStudy && (
            <button
              type="button"
              onClick={onOpen}
              className="btn btn-ghost"
            >
              <FileText size={16} aria-hidden="true" />
              Case Study
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}