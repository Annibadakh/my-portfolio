import { Mail } from "lucide-react";
import { profile } from "../../data/profile";
import ExternalLink from "../ui/ExternalLink";
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from "../ui/BrandIcons";

export default function Footer() {
  const socials = [
    { href: profile.socials.github, label: "GitHub", Icon: GithubIcon },
    { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { href: profile.socials.leetcode, label: "LeetCode", Icon: LeetcodeIcon },
  ];
  return (
    <footer className="border-t border-line">
      <div className="container flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-bold">{profile.name}</p>
          <p className="text-sm text-muted">
            {profile.role} · {profile.focus}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition hover:border-accent hover:text-accent-ink"
          >
            <Mail size={18} />
          </a>
          {socials.map(({ href, label, Icon }) => (
            <ExternalLink
              key={label}
              href={href}
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition hover:border-accent hover:text-accent-ink"
            >
              <Icon size={18} />
            </ExternalLink>
          ))}
        </div>
      </div>
      <div className="container pb-8 font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}.
      </div>
    </footer>
  );
}
