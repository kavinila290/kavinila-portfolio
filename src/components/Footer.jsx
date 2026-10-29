import LinkButton from './LinkButton';
import { site, socials } from '../data/site';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
        <p>© 2026 {site.name}. Built with React.</p>
        <ul className="flex gap-5">
          {socials.map((s) => (
            <li key={s.label}>
              <LinkButton variant="text" href={s.href}>{s.label}</LinkButton>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
