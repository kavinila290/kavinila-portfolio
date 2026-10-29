import Section from './Section';
import { certifications, education, internships } from '../data/experience';

function Entry({ title, org, period, note, points = [] }) {
  return (
    <li className="card p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="font-mono text-sm text-muted">{period}</p>
      </div>
      <p className="text-accent">{org}</p>
      {note && <p className="mt-2 text-muted">{note}</p>}
      {points.length > 0 && (
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted marker:text-accent">
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

function Group({ title, children }) {
  return (
    <div>
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      {children}
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience & education">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Group title="Internships">
          <ul className="space-y-4">
            {internships.map((i) => (
              <Entry key={i.title} {...i} />
            ))}
          </ul>
        </Group>
        <div className="space-y-10">
          <Group title="Education">
            <ul className="space-y-4">
              {education.map((e) => (
                <Entry key={e.title} {...e} />
              ))}
            </ul>
          </Group>
          <Group title="Certifications">
            <div className="card space-y-4 p-6">
              {certifications.map((c) => (
                <div key={c.issuer}>
                  <p className="text-sm font-medium">{c.issuer}</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {c.items.map((i) => (
                      <li key={i} className="chip">{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Group>
        </div>
      </div>
    </Section>
  );
}
