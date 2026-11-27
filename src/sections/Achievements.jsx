import { Award, BookOpen, ExternalLink as ExtIcon, Trophy } from "lucide-react";
import Section from "../components/ui/Section";
import ExternalLink from "../components/ui/ExternalLink";
import { achievements, certifications, publications } from "../data/achievements";
import { profile } from "../data/profile";

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Recognition" title="Publications, awards and certifications">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card p-6 lg:col-span-2">
          <h3 className="mb-5 flex items-center gap-2 text-lg font-bold">
            <BookOpen size={18} className="text-accent-ink" /> Publications & IP
          </h3>
          <ul className="divide-y divide-line">
            {publications.map((p) => (
              <li key={p.title} className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                    {p.kind}
                    {p.year && ` · ${p.year}`}
                  </p>
                  <p className="mt-1 font-semibold">{p.title}</p>
                  <p className="text-sm text-muted">{p.venue}</p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="chip">{p.note}</span>
                  {p.url && (
                    <ExternalLink href={p.url} className="link inline-flex items-center gap-1 text-sm">
                      View <ExtIcon size={13} />
                    </ExternalLink>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6">
          <h3 className="mb-5 flex items-center gap-2 text-lg font-bold">
            <Trophy size={18} className="text-accent-ink" /> Achievements
          </h3>
          <ul className="space-y-4">
            {achievements.map((a) => (
              <li key={a.title}>
                <p className="font-semibold">
                  {a.url ? (
                    <ExternalLink href={a.url} className="hover:text-accent-ink">
                      {a.title}
                    </ExternalLink>
                  ) : (
                    a.title
                  )}
                </p>
                <p className="text-sm text-muted">{a.detail}</p>
              </li>
            ))}
          </ul>

        </div>

        <div className="card p-6 lg:col-span-3">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h3 className="flex items-center gap-2 text-lg font-bold">
              <Award size={18} className="text-accent-ink" /> Certifications
            </h3>
            <ExternalLink href={profile.socials.coursera} className="link inline-flex items-center gap-1 text-sm">
              Coursera profile <ExtIcon size={13} />
            </ExternalLink>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <li key={c.title} className="rounded-xl border border-line p-4">
                <p className="font-semibold">{c.title}</p>
                <p className="text-sm text-muted">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
