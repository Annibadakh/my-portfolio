import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Section from "../components/ui/Section";
import ExternalLink from "../components/ui/ExternalLink";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've shipped"
      intro="A full-time role, two internships, freelance work and an early SDE role, mostly on software that real users depend on."
    >
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden
              className={`absolute -left-[31px] top-6 h-3.5 w-3.5 rounded-full border-2 border-bg sm:-left-[39px] ${
                job.current ? "bg-second" : "bg-accent"
              }`}
            />
            <article className="card p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                <div>
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  {job.url ? (
                    <ExternalLink href={job.url} className="link text-sm font-semibold">
                      {job.company}
                    </ExternalLink>
                  ) : (
                    <p className="text-sm font-semibold text-accent-ink">{job.company}</p>
                  )}
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-muted">
                  <span>
                    {job.start} – {job.end}
                  </span>
                  <span className="chip">{job.type}</span>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted">{job.summary}</p>
              {job.points.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              )}
              {(job.stack.length > 0 || job.caseStudy) && (
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {job.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
                {job.caseStudy && (
                  <Link to={`/case-studies/${job.caseStudy}`} className="link inline-flex items-center gap-1 text-sm font-semibold">
                    Read the case study <ArrowUpRight size={15} />
                  </Link>
                )}
              </div>
              )}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
