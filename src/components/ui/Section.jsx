import { navLinks } from "../layout/navLinks";

// Section shell: a numbered label row with a rule, then a large title.
// The number comes from the section's position in the main navigation.
export default function Section({ id, eyebrow, title, intro, children, className = "" }) {
  const index = navLinks.findIndex((l) => l.id === id);
  const number = index >= 0 ? String(index + 1).padStart(2, "0") : null;

  return (
    <section id={id} className={`py-10 sm:py-14 ${className}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3">
            {number && (
              <span className="grid h-8 min-w-8 place-items-center rounded-lg bg-accent px-2 font-mono text-xs font-medium text-on-accent">
                {number}
              </span>
            )}
            {eyebrow && <span className="font-mono text-sm uppercase tracking-[0.16em] text-accent-ink">{eyebrow}</span>}
            <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-accent/50 via-line to-transparent" />
          </div>
          <h2 id={`${id}-title`} className="mt-4 max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            {title}
          </h2>
          {intro && <p className="mt-4 max-w-2xl text-lg text-muted">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
