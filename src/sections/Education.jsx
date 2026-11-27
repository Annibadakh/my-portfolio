import { GraduationCap, Landmark, School } from "lucide-react";
import Section from "../components/ui/Section";
import { education } from "../data/achievements";

const icons = [GraduationCap, Landmark, School];

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="My education journey">
      <ol className="relative grid gap-4 md:grid-cols-3">
        {/* connecting line on wide screens */}
        <span aria-hidden className="absolute left-6 right-6 top-[2.15rem] hidden h-px bg-line md:block" />
        {education.map((e, i) => {
          const Icon = icons[i] ?? School;
          return (
            <li key={e.degree} className="relative">
              <article className="card flex h-full flex-col gap-3 p-6">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`relative grid h-10 w-10 place-items-center rounded-xl border ${
                      i === 0 ? "border-accent bg-accent text-on-accent" : "border-line bg-surface text-accent-ink"
                    }`}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="font-mono text-xs text-muted">{e.period}</span>
                </div>
                <p className="eyebrow mt-2">{e.level}</p>
                <h3 className="text-lg font-bold leading-snug">{e.degree}</h3>
                <p className="text-sm text-muted">{e.school}</p>
                <div className="mt-auto pt-2">
                  <span className="chip !text-xs">{e.score}</span>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
