import { useState } from 'react';
import { AlertCircle, CheckCircle2, Send } from 'lucide-react';
import Section from './Section';
import LinkButton from './LinkButton';
import { email as ownerEmail } from '../data/links';
import { site, socials } from '../data/site';

const initialValues = { name: '', email: '', message: '' };

function validate({ name, email, message }) {
  const errors = {};
  if (name.trim().length < 2) errors.name = 'Enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = 'Enter a valid email address.';
  if (message.trim().length < 10) errors.message = 'Enter a message of at least 10 characters.';
  return errors;
}

function Field({ label, name, error, as: Tag = 'input', ...props }) {
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
      <Tag
        id={id}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-lg border bg-bg px-3.5 py-2.5 text-sm placeholder:text-muted/70 ${error ? 'border-danger' : 'border-line'}`}
        {...props}
      />
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-danger">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setStatus(null);
    if (Object.keys(found).length) return;

    if (!ownerEmail.includes('@')) {
      setStatus({ type: 'error', text: 'The contact email address has not been set up yet. Please use LinkedIn or GitHub instead.' });
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name.trim()}`);
    const body = encodeURIComponent(`${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`);
    window.location.href = `mailto:${ownerEmail}?subject=${subject}&body=${body}`;
    setStatus({ type: 'success', text: 'Your email app should now open with this message ready. Nothing has been sent until you send it from there.' });
    setValues(initialValues);
  };

  return (
    <Section id="contact" title="Get in touch">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-5">
        <p className="text-muted">Based in {site.location}. Open to Java Full Stack Developer roles.</p>
        <ul className="flex flex-col items-start gap-3">
          {socials.map((s) => (
            <li key={s.label}>
              <LinkButton icon={s.icon} href={s.href}>{s.label}</LinkButton>
            </li>
          ))}
        </ul>
        </div>
        <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8">
          <p className="text-sm text-muted">This form opens your email app with your message pre-filled.</p>
          <Field label="Name" name="name" value={values.name} onChange={onChange} error={errors.name} autoComplete="name" />
          <Field label="Email" name="email" type="email" value={values.email} onChange={onChange} error={errors.email} autoComplete="email" />
          <Field label="Message" name="message" as="textarea" rows={5} value={values.message} onChange={onChange} error={errors.message} />
          <button type="submit" className="btn btn-primary">
            <Send size={16} aria-hidden="true" /> Send Message
          </button>
          <div role="status" aria-live="polite">
            {status && (
              <p className={`flex items-start gap-2 rounded-lg border p-3 text-sm ${status.type === 'error' ? 'border-danger text-danger' : 'border-ok text-ok'}`}>
                {status.type === 'error' ? <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" /> : <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden="true" />}
                {status.text}
              </p>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}
