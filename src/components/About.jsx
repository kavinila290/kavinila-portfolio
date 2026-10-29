import { CheckCircle2 } from 'lucide-react';
import Section from './Section';
import { about } from '../data/site';

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="max-w-prose space-y-4 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="card space-y-4 p-6">
          {about.focus.map((f) => (
            <li key={f} className="flex gap-3">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
