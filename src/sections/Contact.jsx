import { useState } from "react";
import { CheckCircle2, Copy, Loader2, Mail, Send } from "lucide-react";
import Section from "../components/ui/Section";
import ExternalLink from "../components/ui/ExternalLink";
import { GithubIcon, LinkedinIcon } from "../components/ui/BrandIcons";
import { profile } from "../data/profile";

const inputCls =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(profile.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
        return;
      }
      const data = await res.json().catch(() => ({}));
      setError(data?.errors?.map((x) => x.message).join(", ") || "The form service rejected the message. Please try again.");
      setStatus("error");
    } catch {
      setError("Couldn't reach the form service. Check your connection, or email me directly.");
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked; the address is visible anyway */
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      intro="Open to backend and full-stack roles, freelance work and collaborations. I usually reply within a day or two."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-4">
          <div className="card p-6">
            <p className="eyebrow mb-3">Email</p>
            <div className="flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} className="inline-flex min-w-0 items-center gap-2 break-all font-semibold hover:text-accent-ink">
                <Mail size={18} className="shrink-0" /> {profile.email}
              </a>
              <button type="button" onClick={copyEmail} className="btn-ghost !px-3 !py-1.5 text-xs">
                {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />} {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
          <div className="card p-6">
            <p className="eyebrow mb-3">Elsewhere</p>
            <div className="flex flex-col gap-3">
              <ExternalLink href={profile.socials.linkedin} className="inline-flex items-center gap-3 hover:text-accent-ink">
                <LinkedinIcon size={18} /> linkedin.com/in/aniket-badakh
              </ExternalLink>
              <ExternalLink href={profile.socials.github} className="inline-flex items-center gap-3 hover:text-accent-ink">
                <GithubIcon size={18} /> github.com/Annibadakh
              </ExternalLink>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="card grid gap-4 p-6 sm:grid-cols-2" noValidate={false}>
          <label className="grid gap-1.5 text-sm font-semibold">
            Name
            <input id="contact-name" name="name" required autoComplete="name" className={inputCls} placeholder="Your name" />
          </label>
          <label className="grid gap-1.5 text-sm font-semibold">
            Email
            <input id="contact-email" name="email" type="email" required autoComplete="email" className={inputCls} placeholder="you@company.com" />
          </label>
          <label className="grid gap-1.5 text-sm font-semibold sm:col-span-2">
            Company or community <span className="font-normal text-muted">(optional)</span>
            <input id="contact-company" name="company" autoComplete="organization" className={inputCls} placeholder="Where you're writing from" />
          </label>
          <label className="grid gap-1.5 text-sm font-semibold sm:col-span-2">
            Message
            <textarea id="contact-message" name="message" required rows={5} className={`${inputCls} resize-y`} placeholder="What would you like to talk about?" />
          </label>
          {/* Honeypot for bots (Formspree ignores submissions that fill it). */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

          <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
            <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
              {status === "sending" ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p role="status" aria-live="polite" className="text-sm">
              {status === "sent" && <span className="text-accent-ink">Message sent. Thanks for reaching out!</span>}
              {status === "error" && <span className="text-red-600 dark:text-red-400">{error}</span>}
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
}
