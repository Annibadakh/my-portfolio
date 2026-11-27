import { ArrowDown, ArrowRight } from "lucide-react";
import { Fragment } from "react";

// Left-to-right lanes on wide screens, top-to-bottom on phones.
export default function ArchitectureDiagram({ lanes }) {
  return (
    <div className="card overflow-x-auto p-5 sm:p-6">
      <ol className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
        {lanes.map((lane, i) => (
          <Fragment key={lane.label}>
            <li className="flex min-w-0 flex-1 flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{lane.label}</span>
              <div className="flex flex-col gap-2">
                {lane.nodes.map((node) => (
                  <span
                    key={node}
                    className={`break-words rounded-lg border px-3 py-2 font-mono text-xs ${
                      lane.hot ? "border-accent bg-accent/10 text-accent-ink" : "border-line bg-bg text-ink"
                    }`}
                  >
                    {node}
                  </span>
                ))}
              </div>
            </li>
            {i < lanes.length - 1 && (
              <li aria-hidden className="flex justify-center text-muted lg:pt-5">
                <ArrowDown size={16} className="lg:hidden" />
                <ArrowRight size={16} className="hidden lg:block" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </div>
  );
}
