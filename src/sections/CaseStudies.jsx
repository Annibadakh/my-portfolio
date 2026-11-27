import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Section from "../components/ui/Section";
import { caseStudies } from "../data/caseStudies";

const ROWS = [
  ["context", "Context"],
  ["decision", "Decision"],
  ["why", "Why"],
  ["result", "Result"],
];

// Each case study as an Architecture Decision Record (ADR) card.
export default function CaseStudies() {
  return (
    <Section
      id="case-studies"
      eyebrow="Case studies"
      title="Decisions behind the systems"
      intro="Written like the decision records engineering teams keep: the context, what I decided, why, and how it turned out."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {caseStudies.map((cs, i) => {
          const headline = cs.metrics[0];
          return (
            <article key={cs.slug} className="card flex min-w-0 flex-col overflow-hidden">
              <header className="grid gap-2 border-b border-dashed border-line px-6 py-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    ADR-{String(i + 1).padStart(3, "0")} · {cs.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-second/40 bg-second/10 px-2 py-0.5 font-mono text-[10.5px] text-ink">
                    <CheckCircle2 size={12} className="text-second" /> Shipped · in production
                  </span>
                </div>
                <h3 className="text-xl font-bold sm:text-2xl">{cs.title}</h3>
                <p className="text-sm text-muted">{cs.subtitle}</p>
              </header>

              <dl className="flex-1 px-6 py-2">
                {ROWS.map(([key, label]) => (
                  <div
                    key={key}
                    className="grid gap-1 border-b border-line py-3.5 last:border-b-0 sm:grid-cols-[100px_minmax(0,1fr)] sm:gap-4"
                  >
                    <dt className="pt-0.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-accent-ink">{label}</dt>
                    <dd className="text-sm">{cs.adr[key]}</dd>
                  </div>
                ))}
              </dl>

              <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-chip/40 px-6 py-4">
                <p className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold tabular-nums">{headline.value}</span>
                  <span className="text-sm text-muted">{headline.label}</span>
                </p>
                <Link to={`/case-studies/${cs.slug}`} className="btn-ghost rounded-full bg-surface !py-2">
                  Full case study <ArrowRight size={15} />
                </Link>
              </footer>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
