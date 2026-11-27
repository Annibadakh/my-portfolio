// Consistent section shell: anchor id, eyebrow, heading, optional intro.
export default function Section({ id, eyebrow, title, intro, children, className = "" }) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="mb-10 max-w-2xl">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h2 id={`${id}-title`} className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-muted">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
