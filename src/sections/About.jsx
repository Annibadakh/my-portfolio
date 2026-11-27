import { Briefcase, CheckCircle2, GraduationCap, Layers, MapPin, Users } from "lucide-react";
import Section from "../components/ui/Section";
import { profile } from "../data/profile";
import { leadership } from "../data/experience";

const facts = [
  { Icon: Briefcase, label: "Currently", value: `${profile.current.title} at FirstCry` },
  { Icon: Layers, label: "Focus", value: "Backend & full-stack" },
  { Icon: GraduationCap, label: "Education", value: "B.Tech IT · CGPA 8.6" },
  { Icon: MapPin, label: "Based in", value: profile.location },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Backend-first, full-stack when it counts">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-8">
          <div className="space-y-4 text-muted">
            {profile.about.map((p) => (
              <p key={p} className="max-w-prose">
                {p}
              </p>
            ))}
          </div>

          {/* Quick facts fill the left column so it lines up with the two cards on the right */}
          <dl className="grid gap-3 sm:grid-cols-2">
            {facts.map(({ Icon, label, value }) => (
              <div key={label} className="card flex items-start gap-3 p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-ink">
                  <Icon size={17} />
                </span>
                <div className="min-w-0">
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">{label}</dt>
                  <dd className="font-semibold">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
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
                    <Users size={15} />
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
