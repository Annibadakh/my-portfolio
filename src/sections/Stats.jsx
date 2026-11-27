import { useEffect, useRef, useState } from "react";
import { stats } from "../data/profile";

const fmt = (n) => n.toLocaleString("en-IN");

// Counts up once when scrolled into view; shows final numbers immediately with reduced motion.
function Counter({ value, suffix }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 900;
        const tick = (t) => {
          const p = Math.min(1, (t - start) / dur);
          setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        setShown(0);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {fmt(shown)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-label="Impact in numbers" className="pt-12">
      <div className="container">
        <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="card flex flex-col-reverse p-5">
              <dt className="mt-1 text-sm text-muted">{s.label}</dt>
              <dd className="font-display text-3xl font-bold sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
