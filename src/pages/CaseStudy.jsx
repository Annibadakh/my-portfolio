import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Globe } from "lucide-react";
import ArchitectureDiagram from "../components/ui/ArchitectureDiagram";
import ExternalLink from "../components/ui/ExternalLink";
import { GithubIcon } from "../components/ui/BrandIcons";
import { caseStudies, findCaseStudy } from "../data/caseStudies";
import NotFound from "./NotFound";

function Block({ eyebrow, title, children }) {
  return (
    <section className="grid gap-4 border-t border-line py-10 lg:grid-cols-[220px_1fr] lg:gap-10">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        {title && <h2 className="mt-2 text-xl font-bold">{title}</h2>}
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const cs = findCaseStudy(slug);

  useEffect(() => {
    if (cs) document.title = `${cs.title} · Case study · Aniket Badakh`;
  }, [cs]);

  if (!cs) return <NotFound />;

  const idx = caseStudies.indexOf(cs);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <article className="container py-12 sm:py-16">
      <Link to="/#case-studies" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent-ink">
        <ArrowLeft size={15} /> All case studies
      </Link>

      <header className="mt-8 max-w-3xl">
        <p className="eyebrow">Case study · {cs.period}</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{cs.title}</h1>
        <p className="mt-4 text-lg text-muted">{cs.subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {cs.links.live && (
            <ExternalLink href={cs.links.live} className="btn-primary">
              <Globe size={16} /> Visit live site
            </ExternalLink>
          )}
          {cs.links.repo && (
            <ExternalLink href={cs.links.repo} className="btn-ghost">
              <GithubIcon size={16} /> View code
            </ExternalLink>
          )}
        </div>
      </header>

      <dl className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {cs.metrics.map((m) => (
          <div key={m.label} className="card flex flex-col-reverse p-5">
            <dt className="text-sm text-muted">{m.label}</dt>
            <dd className="font-display text-3xl font-bold tabular-nums">{m.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12">
        <Block eyebrow="Role">
          <p>{cs.role}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {cs.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </Block>

        <Block eyebrow="Problem">
          <p className="max-w-prose text-muted">{cs.problem}</p>
        </Block>

        <Block eyebrow="Architecture" title="How it fits together">
          <ArchitectureDiagram lanes={cs.architecture} />
          <p className="mt-3 text-xs text-muted">Simplified view. Highlighted boxes carry the core logic.</p>
        </Block>

        <Block eyebrow="Key flows">
          <div className="grid gap-5 md:grid-cols-2">
            {cs.flows.map((f) => (
              <div key={f.title} className="card p-5">
                <h3 className="mb-4 font-bold">{f.title}</h3>
                <ol className="space-y-3">
                  {f.steps.map((s, i) => (
                    <li key={s} className="flex gap-3 text-sm">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-accent/10 font-mono text-xs text-accent-ink">
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Block>

        <Block eyebrow="Decisions" title="Why it's built this way">
          <div className="grid gap-4 sm:grid-cols-2">
            {cs.decisions.map((d) => (
              <div key={d.title} className="rounded-xl border border-line p-5">
                <h3 className="font-bold">{d.title}</h3>
                <p className="mt-2 text-sm text-muted">{d.text}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block eyebrow="Outcome">
          <ul className="space-y-2">
            {cs.outcome.map((o) => (
              <li key={o} className="flex gap-3">
                <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </Block>
      </div>

      {next && next.slug !== cs.slug && (
        <Link
          to={`/case-studies/${next.slug}`}
          className="card mt-6 flex items-center justify-between gap-4 p-6 transition hover:border-accent"
        >
          <div>
            <p className="eyebrow">Next case study</p>
            <p className="mt-1 font-display text-xl font-bold">{next.title}</p>
          </div>
          <ArrowRight className="shrink-0 text-accent-ink" />
        </Link>
      )}
    </article>
  );
}
