import { Github } from 'lucide-react';
import Section from './Section';
import LinkButton from './LinkButton';
import { links } from '../data/links';

export default function GitHub() {
  return (
    <Section id="github" title="Explore my code on GitHub">
      <div className="card flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center">
        <Github size={40} className="shrink-0 text-accent" aria-hidden="true" />
        <p className="max-w-xl flex-1 text-muted">Browse my repositories to see the code behind my projects.</p>
        <LinkButton variant="primary" icon={Github} href={links.github}>
          Visit GitHub
        </LinkButton>
      </div>
    </Section>
  );
}
