// Node monogram: initials A → B as two connected nodes, like a message moving between services.
export function NodeMark({ size = 34, className = "" }) {
  const acc = "rgb(var(--c-accent))";
  const on = "rgb(var(--c-on-accent))";
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <rect width="40" height="40" rx="11" fill={acc} />
      <path d="M17 23 L23 17" stroke={on} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="12.5" cy="27.5" r="7.5" fill={on} />
      <circle cx="27.5" cy="12.5" r="6.6" fill="none" stroke={on} strokeWidth="2.2" />
      <text x="12.5" y="31.3" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="10.5" fill={acc}>
        A
      </text>
      <text x="27.5" y="16.2" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="10" fill={on}>
        B
      </text>
    </svg>
  );
}

export default function Logo({ name }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <NodeMark size={34} className="shrink-0" />
      <span className="font-display text-lg font-bold tracking-tight">{name}</span>
    </span>
  );
}
