import { isLink } from '../data/links';

// Renders a link-styled button. If the URL is still a placeholder it renders a disabled state.
export default function LinkButton({ href, icon: Icon, variant = 'ghost', className = '', children, ...props }) {
  const cls = `btn btn-${variant} ${className}`;
  const content = (
    <>
      {Icon && <Icon size={16} aria-hidden="true" />}
      {children}
    </>
  );

  if (!isLink(href)) {
    return (
      <span role="link" aria-disabled="true" title="Link coming soon" className={`${cls} pointer-events-none cursor-not-allowed opacity-50`}>
        {content}
      </span>
    );
  }

  const external = /^https?:/.test(href);
  return (
    <a href={href} className={cls} {...(external && { target: '_blank', rel: 'noopener noreferrer' })} {...props}>
      {content}
    </a>
  );
}
