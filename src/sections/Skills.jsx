import { Braces, Cloud, Code2, Database, LayoutTemplate, ListChecks, ShieldCheck, Cpu } from "lucide-react";
import Section from "../components/ui/Section";
import { skillGroups } from "../data/skills";

const icons = {
  Languages: Code2,
  Backend: Braces,
  Frontend: LayoutTemplate,
  Databases: Database,
  "Cloud & DevOps": Cloud,
  Security: ShieldCheck,
  Practices: ListChecks,
  "Core CS": Cpu,
};

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I use every week">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g) => {
          const Icon = icons[g.title] ?? Code2;
          return (
            <div key={g.title} className="card p-5">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/10 text-accent-ink">
                  <Icon size={16} />
                </span>
                <h3 className="font-bold">{g.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
