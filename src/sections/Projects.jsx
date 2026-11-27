import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, BadgeCheck, Code2, Cpu, Gamepad2, Globe, LineChart, Lock, Monitor, Network } from "lucide-react";
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

const FILTERS = [
  { key: "all", label: "All", match: () => true },
  { key: "web", label: "Web apps", match: (p) => p.category === "web" || p.category === "game" },
  { key: "iot", label: "IoT & hardware", match: (p) => p.category === "iot" },
  { key: "data", label: "Data & algorithms", match: (p) => p.category === "data" || p.category === "algo" },
];

const CATEGORY_ICONS = { web: Monitor, iot: Cpu, data: LineChart, algo: Network, game: Gamepad2 };

function ProjectTile({ p }) {
  const Icon = CATEGORY_ICONS[p.category] ?? Monitor;
  return (
    <article className="card flex min-w-0 flex-col gap-3 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-accent motion-reduce:transform-none">
      <div className="flex items-center justify-between gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent-ink">
          <Icon size={20} />
        </span>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">{p.categoryLabel}</span>
      </div>
      <h4 className="text-lg font-bold">{p.title}</h4>
      {p.badge && (
        <span className="inline-flex w-fit items-center gap-1.5 whitespace-nowrap rounded-md border border-second/40 bg-second/10 px-2 py-1 font-mono text-[10.5px] text-ink">
          <BadgeCheck size={13} className="text-second" /> {p.badge}
        </span>
      )}
      <p className="text-sm text-muted">{p.description}</p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-1">
        <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
          {p.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
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
      </div>
    </article>
  );
}

function MoreProjects() {
  const [filter, setFilter] = useState("all");
  const active = FILTERS.find((f) => f.key === filter) ?? FILTERS[0];
  const shown = moreProjects.filter(active.match);

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {FILTERS.map((f) => {
          const count = moreProjects.filter(f.match).length;
          const on = f.key === filter;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={on}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                on ? "border-accent bg-accent text-on-accent" : "border-line bg-surface text-ink hover:border-accent"
              }`}
            >
              {f.label}
              <span className={`font-mono text-xs ${on ? "opacity-80" : "text-muted"}`}>{count}</span>
            </button>
          );
        })}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" aria-live="polite">
        {shown.map((p) => (
          <ProjectTile key={p.title} p={p} />
        ))}
      </div>
    </>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built and shipped"
      intro="Each featured project shows the problem, what I built and what it achieved. Smaller and older work is below, filterable by type."
    >
      <div className="space-y-6">
        {featuredProjects.map((p) => (
          <FeaturedCard key={p.slug} p={p} />
        ))}
      </div>

      <h3 className="mb-5 mt-16 text-xl font-bold">More projects</h3>
      <MoreProjects />
    </Section>
  );
}
