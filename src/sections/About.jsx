import { CheckCircle2, Trophy, Users } from "lucide-react";
import Section from "../components/ui/Section";
import { profile } from "../data/profile";
import { leadership } from "../data/experience";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Backend-first, full-stack when it counts">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-muted">
          {profile.about.map((p) => (
            <p key={p} className="max-w-prose">
              {p}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="card p-5">
            <p className="eyebrow mb-3">How I work</p>
            <ul className="space-y-3">
              {profile.principles.map((pr) => (
                <li key={pr.title} className="flex gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-ink" />
                  <div>
                    <p className="font-semibold">{pr.title}</p>
                    <p className="text-sm text-muted">{pr.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-5">
            <p className="eyebrow mb-3">Beyond code</p>
            <ul className="space-y-3">
              {leadership.map((l) => (
                <li key={l.role} className="flex gap-3">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-ink">
                    {l.period ? <Users size={15} /> : <Trophy size={15} />}
                  </span>
                  <div>
                    <p className="font-semibold">{l.role}</p>
                    <p className="text-sm text-muted">{l.org}</p>
                    {l.period && <p className="font-mono text-xs text-muted">{l.period}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
