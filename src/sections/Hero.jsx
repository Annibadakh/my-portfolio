import { Link } from "react-router-dom";
import { ArrowRight, FileDown, Mail, MapPin } from "lucide-react";
import portrait from "../assets/aniket.webp";
import { profile } from "../data/profile";
import ExternalLink from "../components/ui/ExternalLink";
import { GithubIcon, LinkedinIcon } from "../components/ui/BrandIcons";

export default function Hero() {
  return (
    <section id="home" className="relative pt-10 sm:pt-16">
      {/* faint grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5] [background-image:linear-gradient(rgb(var(--c-line))_1px,transparent_1px),linear-gradient(90deg,rgb(var(--c-line))_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      <div className="container grid items-center gap-12 pb-8 lg:grid-cols-[1.35fr_1fr]">
        <div className="animate-fade-up">
          <p className="eyebrow">
            {profile.role} · {profile.focus}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            Hi, I'm {profile.name.split(" ")[0]}.{" "}
            <span className="text-accent-ink">I build production systems that ship, scale and stay up.</span>
          </h1>
          <p className="mt-6 max-w-prose text-lg text-muted">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/#projects" className="btn-primary">
              View projects <ArrowRight size={16} />
            </Link>
            <a href={profile.resume} download className="btn-ghost">
              <FileDown size={16} /> Download resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
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

          <div className="mt-6 flex gap-2">
            {[
              { href: profile.socials.github, label: "GitHub", Icon: GithubIcon },
              { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
            ].map(({ href, label, Icon }) => (
              <ExternalLink
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition hover:border-accent hover:text-accent-ink"
              >
                <Icon size={18} />
              </ExternalLink>
            ))}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition hover:border-accent hover:text-accent-ink"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:120ms]">
          <div aria-hidden className="absolute -inset-3 -z-10 rounded-[2rem] border border-accent/40" />
          <img
            src={portrait}
            alt={`Portrait of ${profile.name}`}
            width="720"
            height="900"
            className="aspect-[4/5] w-full rounded-3xl border border-line object-cover"
          />
          <div className="card absolute -bottom-5 -left-4 px-4 py-3 shadow-lg shadow-black/5 sm:-left-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Stack</p>
            <p className="font-mono text-xs">Node.js · TypeScript · React · AWS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
