import { Download } from 'lucide-react';
import Section from './Section';
import LinkButton from './LinkButton';
import { links } from '../data/links';

export default function Resume() {
  return (
    <Section id="resume" title="Want to know more about my experience?">
      <div className="card flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center">
        <p className="max-w-xl text-muted">Download my resume for a complete overview of my skills, projects, and background.</p>
        <LinkButton variant="primary" icon={Download} href={links.resume} download>
          Download Resume
        </LinkButton>
      </div>
    </Section>
  );
}
