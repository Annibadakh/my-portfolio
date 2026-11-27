import { Link } from "react-router-dom";
import { ArrowRight, FileDown, Mail, MapPin } from "lucide-react";
import portrait from "../assets/aniket.webp";
import { profile } from "../data/profile";
import ExternalLink from "../components/ui/ExternalLink";
import { GithubIcon, LinkedinIcon } from "../components/ui/BrandIcons";

// Set to true once the background-removed portrait (transparent PNG/WebP) replaces aniket.webp.
// While false, the regular photo is faded at the edges so the layout can be previewed.
const PORTRAIT_IS_CUTOUT = false;

const iconBtn =
  "grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface/70 text-muted backdrop-blur transition hover:border-accent hover:text-accent-ink";

function Socials({ className = "" }) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <ExternalLink href={profile.socials.linkedin} aria-label="LinkedIn" className={iconBtn}>
        <LinkedinIcon size={18} />
      </ExternalLink>
      <ExternalLink href={profile.socials.github} aria-label="GitHub" className={iconBtn}>
        <GithubIcon size={18} />
      </ExternalLink>
      <a href={`mailto:${profile.email}`} aria-label="Email" className={iconBtn}>
        <Mail size={18} />
      </a>
    </div>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto flex w-full max-w-[22rem] items-end justify-center self-end sm:max-w-[26rem]">
      {/* accent disc behind the portrait */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 aspect-square w-[92%] -translate-x-1/2 rounded-full border border-accent/30 bg-gradient-to-b from-accent/25 via-accent/10 to-transparent"
      />
      <div aria-hidden className="absolute bottom-0 left-1/2 aspect-square w-[118%] -translate-x-1/2 rounded-full border border-dashed border-line" />
      <img
        src={portrait}
        alt={`Portrait of ${profile.name}`}
        width="720"
        height="900"
        className={`relative z-10 w-full object-contain object-bottom ${
          PORTRAIT_IS_CUTOUT
            ? "drop-shadow-[0_20px_40px_rgb(var(--c-accent)/0.25)]"
            : "[mask-image:radial-gradient(ellipse_62%_70%_at_50%_42%,black_60%,transparent_100%)]"
        }`}
      />
      {/* fade the bottom edge into the page */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-12 sm:pt-16">
      {/* faint grid backdrop (unchanged) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5] [background-image:linear-gradient(rgb(var(--c-line))_1px,transparent_1px),linear-gradient(90deg,rgb(var(--c-line))_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />

      <div className="container">
        {/* Title, centred above the portrait */}
        <div className="mx-auto max-w-4xl animate-fade-up text-center">
          <p className="eyebrow">
            {profile.role} · {profile.focus}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I'm {profile.name.split(" ")[0]}.{" "}
            <span className="text-accent-ink">I build production systems that ship, scale and stay up.</span>
          </h1>
        </div>

        {/* Left · portrait · right */}
        <div className="mt-10 grid items-stretch gap-8 lg:mt-6 lg:grid-cols-[1fr_minmax(0,26rem)_1fr] lg:gap-6">
          {/* Portrait first on mobile, centre column on desktop */}
          <div className="order-1 flex lg:order-2">
            <Portrait />
          </div>

          {/* Left column */}
          <div className="order-2 flex min-w-0 flex-col justify-between gap-8 animate-fade-up [animation-delay:80ms] lg:order-1 lg:pb-10 lg:pt-12">
            <p className="max-w-sm text-muted lg:text-[17px]">{profile.intro}</p>
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap gap-3">
                <Link to="/#projects" className="btn-primary">
                  View projects <ArrowRight size={16} />
                </Link>
                <a href={profile.resume} download className="btn-ghost bg-surface/70 backdrop-blur">
                  <FileDown size={16} /> Resume
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse-dot rounded-full bg-second" />
                  {profile.current.title} at{" "}
                  <ExternalLink href={profile.current.url} className="link">
                    {profile.current.company}
                  </ExternalLink>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} /> {profile.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="order-3 flex min-w-0 flex-col justify-between gap-8 animate-fade-up [animation-delay:160ms] lg:items-end lg:pb-10 lg:pt-12 lg:text-right">
            <p className="max-w-sm text-muted lg:text-[17px]">{profile.introSecondary}</p>
            <div className="flex flex-col gap-5 lg:items-end">
              <div className="card w-fit px-4 py-3 lg:text-left">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Stack</p>
                <p className="font-mono text-xs">Node.js · TypeScript · React · AWS</p>
              </div>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
