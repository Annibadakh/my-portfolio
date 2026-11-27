import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, BadgeCheck, Code2, Globe, Lock } from "lucide-react";
import Section from "../components/ui/Section";
import ExternalLink from "../components/ui/ExternalLink";
import { featuredProjects, moreProjects } from "../data/projects";

const linkCls = "inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition hover:text-accent-ink";

function ProjectLinks({ p }) {
  const { live, repo } = p.links;
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {live && (
        <ExternalLink href={live} className={linkCls}>
          <Globe size={15} /> Live
        </ExternalLink>
      )}
      {repo && (
        <ExternalLink href={repo} className={linkCls}>
          <Code2 size={15} /> Code
        </ExternalLink>
      )}
      {!live && !repo && (
        <span className="inline-flex items-center gap-1.5 text-sm text-muted">
          <Lock size={14} /> Private repo
        </span>
      )}
      {p.caseStudy && (
        <Link to={`/case-studies/${p.caseStudy}`} className="inline-flex items-center gap-1 text-sm font-semibold text-accent-ink hover:underline">
          Case study <ArrowUpRight size={15} />
        </Link>
      )}
    </div>
  );
}

function Flow({ nodes }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]" aria-label="System flow">
      {nodes.map((n, i) => {
        const hot = n.endsWith("*");
        return (
          <Fragment key={n}>
            {i > 0 && <span aria-hidden className="text-muted">→</span>}
            <span
              className={`rounded-md border px-2 py-1 ${
                hot ? "border-accent bg-accent/10 text-accent-ink" : "border-line bg-bg text-ink"
              }`}
            >
              {hot ? n.slice(0, -1) : n}
            </span>
          </Fragment>
        );
      })}
    </div>
  );
}

// Browser-window frame around a screenshot (or a drawn preview when there is none).
function BrowserFrame({ p }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-xl border border-line bg-bg">
      <div className="flex items-center gap-1.5 border-b border-line bg-surface px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="ml-2 truncate font-mono text-[10.5px] text-muted">{p.host}</span>
      </div>
      <div className="aspect-[16/10] max-w-full overflow-hidden">
        {p.image ? (
          <img
            src={p.image}
            alt={`${p.title} screenshot`}
            loading="lazy"
            className={`h-full w-full ${p.imageFit === "contain" ? "bg-white object-contain p-4" : "object-cover object-top"}`}
          />
        ) : (
          <div className="grid h-full content-center gap-2 bg-chip p-4 font-mono text-[11px]" aria-label="Illustration of categorised spending">
            <div className="flex justify-between border-b border-dashed border-accent/40 pb-1.5">
              <span>Groceries</span>
              <span>₹ 8,420</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-accent/40 pb-1.5">
              <span>UPI transfers</span>
              <span>₹ 12,900</span>
            </div>
            <div className="flex h-12 items-end gap-1.5">
              {[55, 72, 48, 80].map((h) => (
                <span key={h} className="flex-1 rounded-t bg-accent/85" style={{ height: `${h}%` }} />
              ))}
              {[66, 74].map((h) => (
                <span key={h} className="flex-1 rounded-t bg-second/60" style={{ height: `${h}%` }} />
              ))}
            </div>
            <span className="text-muted">Balance forecast · next 6 months</span>
          </div>
        )}
      </div>
    </div>
  );
}

function FeaturedCard({ p }) {
  return (
    <article className="card overflow-hidden">
      <div className="grid gap-6 p-6 sm:p-7 md:grid-cols-[minmax(0,1fr)_260px]">
        <div className="flex min-w-0 flex-col gap-3">
          <p className="eyebrow">Featured project</p>
          <h3 className="text-2xl font-bold tracking-tight sm:text-[1.7rem]">{p.title}</h3>
          <p className="text-muted">{p.tagline}</p>
          <div className="mt-1">
            <Flow nodes={p.flow} />
          </div>
        </div>
        <BrowserFrame p={p} />
      </div>

      <div className="grid border-t border-line md:grid-cols-[1fr_1.4fr_0.9fr]">
        <div className="p-6 sm:p-7">
          <p className="eyebrow mb-3">Problem</p>
          <p className="text-sm text-muted">{p.problem}</p>
        </div>
        <div className="border-t border-line p-6 sm:p-7 md:border-l md:border-t-0">
          <p className="eyebrow mb-3">What I built</p>
          <ul className="space-y-2.5 text-sm">
            {p.built.map((b) => (
              <li key={b} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-line p-6 sm:p-7 md:border-l md:border-t-0">
          <p className="eyebrow mb-3">Impact</p>
          <p className="font-display text-4xl font-bold tracking-tight text-accent-ink tabular-nums">{p.impact.value}</p>
          <p className="mt-1 text-sm text-muted">{p.impact.label}</p>
          <p className="mt-3 text-sm">{p.impact.note}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line bg-chip/40 px-6 py-4 sm:px-7">
        <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
          {p.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
        <ProjectLinks p={p} />
      </div>
    </article>
  );
}

function Archive() {
  return (
    <div className="card overflow-hidden">
      <div className="hidden grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)_minmax(0,1.3fr)_auto] gap-4 border-b border-line bg-chip/40 px-5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted md:grid">
        <span>Project</span>
        <span>What it is</span>
        <span>Stack</span>
        <span className="text-right">Links</span>
      </div>
      <ul>
        {moreProjects.map((p) => (
          <li
            key={p.title}
            className="grid gap-2 border-t border-line px-5 py-4 transition first:border-t-0 hover:bg-accent/5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)_minmax(0,1.3fr)_auto] md:items-center md:gap-4"
          >
            <div className="min-w-0">
              <p className="font-display font-bold">{p.title}</p>
              {p.badge && (
                <p className="mt-1 inline-flex items-center gap-1 font-mono text-[10.5px] text-second">
                  <BadgeCheck size={12} /> {p.badge}
                </p>
              )}
            </div>
            <p className="text-sm text-muted">{p.description}</p>
            <ul className="flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 md:justify-end">
              {p.links.live && (
                <ExternalLink href={p.links.live} className={linkCls} aria-label={`${p.title} live site`}>
                  <Globe size={15} /> Live
                </ExternalLink>
              )}
              {p.links.repo && (
                <ExternalLink href={p.links.repo} className={linkCls} aria-label={`${p.title} source code`}>
                  <Code2 size={15} /> Code
                </ExternalLink>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built and shipped"
      intro="Each featured project shows the problem, what I built and what it achieved. Smaller and older work is listed below."
    >
      <div className="space-y-6">
        {featuredProjects.map((p) => (
          <FeaturedCard key={p.slug} p={p} />
        ))}
      </div>

      <h3 className="mb-5 mt-16 text-xl font-bold">More projects</h3>
      <Archive />
    </Section>
  );
}
