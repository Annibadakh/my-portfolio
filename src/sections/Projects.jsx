import { Link } from "react-router-dom";
import { ArrowUpRight, BadgeCheck, Globe, Sparkles } from "lucide-react";
import Section from "../components/ui/Section";
import ExternalLink from "../components/ui/ExternalLink";
import { GithubIcon } from "../components/ui/BrandIcons";
import { featuredProjects, moreProjects } from "../data/projects";

function ProjectLinks({ links, small }) {
  const cls = `inline-flex items-center gap-1.5 ${small ? "text-xs" : "text-sm"} font-semibold text-muted hover:text-accent-ink`;
  return (
    <div className="flex flex-wrap gap-4">
      {links.live && (
        <ExternalLink href={links.live} className={cls}>
          <Globe size={small ? 14 : 16} /> Live
        </ExternalLink>
      )}
      {links.repo && (
        <ExternalLink href={links.repo} className={cls}>
          <GithubIcon size={small ? 14 : 16} /> Code
        </ExternalLink>
      )}
    </div>
  );
}

function Placeholder({ title }) {
  return (
    <div className="grid h-full w-full place-items-center bg-chip">
      <div className="flex flex-col items-center gap-2 text-accent-ink">
        <Sparkles size={28} />
        <span className="font-display text-lg font-bold">{title}</span>
      </div>
    </div>
  );
}

function FeaturedCard({ p, flip }) {
  return (
    <article className="card grid overflow-hidden lg:grid-cols-2">
      <div className={`aspect-[16/10] max-w-full overflow-hidden border-b border-line bg-bg lg:aspect-auto lg:border-b-0 ${flip ? "lg:order-2 lg:border-l" : "lg:border-r"}`}>
        {p.image ? (
          <img
            src={p.image}
            alt={`${p.title} screenshot`}
            loading="lazy"
            className={`h-full w-full ${p.imageFit === "contain" ? "bg-white object-contain p-10" : "object-cover object-top"}`}
          />
        ) : (
          <Placeholder title={p.title} />
        )}
      </div>
      <div className="flex min-w-0 flex-col gap-4 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-xs text-second">● {p.metric}</span>
          <ProjectLinks links={p.links} />
        </div>
        <div>
          <h3 className="text-2xl font-bold">{p.title}</h3>
          <p className="text-sm font-semibold text-muted">{p.tagline}</p>
        </div>
        <p className="text-muted">{p.description}</p>
        <ul className="space-y-2 text-sm">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
          {p.caseStudy && (
            <Link to={`/case-studies/${p.caseStudy}`} className="btn-ghost !py-2">
              Case study <ArrowUpRight size={15} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

function SmallCard({ p }) {
  return (
    <article className="card flex flex-col overflow-hidden">
      <div className="aspect-[16/9] max-w-full overflow-hidden border-b border-line bg-bg">
        {p.image ? (
          <img src={p.image} alt={`${p.title} preview`} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <Placeholder title={p.title} />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-bold">{p.title}</h3>
        {p.badge && (
          <span className="inline-flex w-fit items-center gap-1.5 rounded-md border border-second/40 bg-second/10 px-2 py-1 font-mono text-[11px] text-ink">
            <BadgeCheck size={13} className="text-second" /> {p.badge}
          </span>
        )}
        <p className="text-sm text-muted">{p.description}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
          <ProjectLinks links={p.links} small />
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built and shipped"
      intro="Production platforms first, then the side projects and experiments that taught me along the way."
    >
      <div className="space-y-6">
        {featuredProjects.map((p, i) => (
          <FeaturedCard key={p.slug} p={p} flip={i % 2 === 1} />
        ))}
      </div>

      <h3 className="mb-6 mt-16 text-xl font-bold">More projects</h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {moreProjects.map((p) => (
          <SmallCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  );
}
