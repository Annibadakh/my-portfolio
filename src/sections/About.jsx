import { CheckCircle2 } from "lucide-react";
import Section from "../components/ui/Section";
import { profile } from "../data/profile";

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

        </div>
      </div>
    </Section>
  );
}
