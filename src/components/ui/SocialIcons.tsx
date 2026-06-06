type Props = { className?: string };

export function IgIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function InIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7" />
      <path d="M7 7v.01" />
      <path d="M11 17v-4a2 2 0 0 1 4 0v4" />
      <path d="M11 17v-7" />
    </svg>
  );
}

export function WaIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 21l1.7-5A8 8 0 1 1 8 19.3L3 21Z" />
      <path d="M8.6 9.1c.4-.1.9.1 1.1.6l.3.8c.1.3 0 .6-.2.8l-.3.3c.5.9 1.1 1.5 2 2l.3-.3c.2-.2.5-.3.8-.2l.8.3c.5.2.7.6.6 1.1-.1.6-.7 1.1-1.4 1.1-2.3 0-4.4-2.1-4.4-4.4 0-.7.5-1.3 1.1-1.4Z" />
    </svg>
  );
}

export function YtIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="3.5" />
      <path d="m10.5 9.2 4.2 2.8-4.2 2.8V9.2Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
