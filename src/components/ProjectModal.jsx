import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import LinkButton from './LinkButton';

export default function ProjectModal({ project: p, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!p) return undefined;
    const opener = document.activeElement;
    const focusables = () => [...ref.current.querySelectorAll('a[href], button')];
    focusables()[0]?.focus();
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key !== 'Tab') return;
      const f = focusables();
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      opener?.focus?.();
    };
  }, [p, onClose]);

  return (
    <AnimatePresence>
      {p && (
        <motion.div
          key={p.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center sm:p-6"
        >
          <motion.div
            ref={ref}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 32, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-line bg-bg p-6 sm:rounded-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 id="project-modal-title" className="text-2xl font-semibold tracking-tight">{p.title}</h3>
              <button type="button" onClick={onClose} aria-label="Close project details" className="rounded-lg border border-line p-2 hover:border-accent hover:text-accent">
                <X size={18} />
              </button>
            </div>
            <p className="mt-4 text-muted">{p.description}</p>

            <h4 className="mt-6 font-semibold">Technologies</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className="chip">{t}</li>
              ))}
            </ul>

            <h4 className="mt-6 font-semibold">Features</h4>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-muted marker:text-accent">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            {p.architecture && (
              <>
                <h4 className="mt-6 font-semibold">How it fits together</h4>
                <ol className="mt-3 list-decimal space-y-1 pl-5 text-muted marker:text-accent">
                  {p.architecture.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ol>
              </>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton variant="primary" icon={ExternalLink} href={p.links.live}>Live Demo</LinkButton>
              <LinkButton icon={Github} href={p.links.github}>GitHub</LinkButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
