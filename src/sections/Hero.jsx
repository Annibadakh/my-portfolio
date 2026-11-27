import { Link } from "react-router-dom";
import { ArrowRight, FileDown, Mail, MapPin } from "lucide-react";
import portrait from "../assets/aniket-cutout.webp";
import { profile } from "../data/profile";
import ExternalLink from "../components/ui/ExternalLink";
import { GithubIcon, LinkedinIcon } from "../components/ui/BrandIcons";

// Fade the bottom and the cut-off shoulder edges into the page.
const portraitMask = {
  WebkitMaskImage:
    "linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
  maskImage:
    "linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
  WebkitMaskComposite: "source-in",
  maskComposite: "intersect",
};

const iconBtn =
  "grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/80 text-muted backdrop-blur transition hover:border-accent hover:text-accent-ink";

function Socials() {
  return (
    <div className="flex gap-2">
      <ExternalLink href={profile.socials.linkedin} aria-label="LinkedIn" className={iconBtn}>
        <LinkedinIcon size={17} />
      </ExternalLink>
      <ExternalLink href={profile.socials.github} aria-label="GitHub" className={iconBtn}>
        <GithubIcon size={17} />
      </ExternalLink>
      <a href={`mailto:${profile.email}`} aria-label="Email" className={iconBtn}>
        <Mail size={17} />
      </a>
    </div>
  );
}

// Speech bubble whose tail points at the portrait: toward the centre on desktop
// (bottom-right for the left bubble, bottom-left for the right one). On phones only the
// first bubble, which sits right under the photo, keeps a tail (pointing up).
function Bubble({ side, label, children }) {
  const tail =
    side === "left"
      ? "left-8 -top-[7px] border-l border-t lg:left-auto lg:right-10 lg:top-auto lg:-bottom-[7px] lg:border-l-0 lg:border-t-0 lg:border-b lg:border-r"
      : "hidden lg:block lg:left-10 lg:-bottom-[7px] lg:border-b lg:border-r";
  return (
    <div
      className={`relative w-full max-w-xs rounded-2xl border border-line bg-surface px-5 py-4 text-left shadow-lg shadow-accent/10 ${
        side === "right" ? "lg:ml-auto" : ""
      }`}
    >
      <span aria-hidden className={`absolute h-3.5 w-3.5 rotate-45 border-line bg-surface ${tail}`} />
      <p className="mb-1.5 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-accent-ink">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {label}
      </p>
      <p className="text-[15px] leading-relaxed text-ink/85">{children}</p>
    </div>
  );
}

export default function Hero() {
  const first = profile.name.split(" ")[0];
  return (
    <section id="home" className="relative overflow-x-clip pt-12 sm:pt-14">
      {/* faint grid backdrop (unchanged) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5] [background-image:linear-gradient(rgb(var(--c-line))_1px,transparent_1px),linear-gradient(90deg,rgb(var(--c-line))_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      {/* soft violet glow behind the portrait */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[30%] -z-10 h-[30rem] w-[30rem] max-w-[110vw] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px] dark:bg-accent/20"
      />

      <div className="container">
        {/* Title: sits behind the portrait so the head overlaps the second line */}
        <div className="relative z-0 animate-fade-up text-center">
          <p className="eyebrow">{profile.focus} engineer</p>
          <h1 className="mt-3 font-display font-bold tracking-tight">
            <span className="block text-4xl sm:text-5xl lg:text-6xl">Hi, I'm {first}</span>
            <span className="mt-1 block whitespace-nowrap text-[2.1rem] leading-none text-accent-ink min-[400px]:text-[2.4rem] sm:text-7xl lg:text-[6.5rem]">
              Software Engineer
            </span>
          </h1>
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[1fr_minmax(0,26rem)_1fr] lg:gap-6">
          {/* Portrait */}
          <div className="relative z-10 order-1 mt-1 flex justify-center sm:-mt-10 lg:order-2 lg:-mt-24">
            <img
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              width="900"
              height="1125"
              style={portraitMask}
              className="w-full max-w-[20rem] animate-fade-up object-contain object-bottom [animation-delay:120ms] sm:max-w-[24rem] lg:max-w-none"
            />
          </div>

          {/* Left: short description (middle) · status, location and actions (bottom) */}
          <div className="order-2 flex min-w-0 flex-col gap-6 lg:order-1 lg:justify-between lg:pb-12 lg:pt-28">
            <Bubble side="left" label="How I work">
              I build production web apps and own them end to end, from requirements and QA to deployment and support.
            </Bubble>

            <div className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap gap-3">
              <Link to="/#projects" className="btn-primary rounded-full px-5">
                View projects <ArrowRight size={16} />
              </Link>
              <a href={profile.resume} download className="btn-ghost rounded-full bg-surface/80 px-5 backdrop-blur">
                <FileDown size={16} /> Resume
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/90 py-2 pl-2.5 pr-4 text-sm shadow-sm backdrop-blur">
                <span className="relative grid h-5 w-5 place-items-center rounded-full bg-second/20">
                  <span className="h-2 w-2 animate-pulse-dot rounded-full bg-second" />
                </span>
                {profile.current.title} at{" "}
                <ExternalLink href={profile.current.url} className="font-semibold text-accent-ink hover:underline">
                  {profile.current.company}
                </ExternalLink>
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                <MapPin size={14} /> {profile.location}
              </span>
            </div>
            </div>
          </div>

          {/* Right: short description (middle) · stack + socials (bottom) */}
          <div className="order-3 flex min-w-0 flex-col gap-6 lg:items-end lg:justify-between lg:pb-12 lg:pt-28 lg:text-right">
            <Bubble side="right" label="What I focus on">
              Backend-first: event-driven AWS services, payment integrations and secure APIs with Node.js and TypeScript.
            </Bubble>

            <div className="flex flex-col gap-4 lg:items-end">
              <p className="font-mono text-xs text-muted">
                <span className="mr-2 uppercase tracking-[0.14em]">Stack</span>
                <span className="text-ink">Node.js · TypeScript · React · AWS</span>
              </p>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
