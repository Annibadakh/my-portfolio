import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Section from "../components/ui/Section";
import ArchitectureDiagram from "../components/ui/ArchitectureDiagram";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudies() {
  return (
    <Section
      id="case-studies"
      eyebrow="Case studies"
      title="How the systems fit together"
      intro="The problem, the architecture and the decisions behind two systems that ran in production."
    >
      <div className="grid gap-16">
        {caseStudies.map((cs) => (
          <article key={cs.slug} className="flex min-w-0 flex-col gap-5">
            <div>
              <h3 className="text-2xl font-bold">{cs.title}</h3>
              <p className="mt-1 text-muted">{cs.subtitle}</p>
            </div>
            <ArchitectureDiagram lanes={cs.architecture} />
            <div className="grid max-w-3xl grid-cols-3 gap-3">
              {cs.metrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-line p-3">
                  <p className="font-display text-xl font-bold tabular-nums">{m.value}</p>
                  <p className="text-xs text-muted">{m.label}</p>
                </div>
              ))}
            </div>
            <Link to={`/case-studies/${cs.slug}`} className="btn-primary w-fit">
              Read the case study <ArrowRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
