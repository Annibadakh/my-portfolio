import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FileDown, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Logo from "../ui/Logo";
import { navLinks } from "./navLinks";
import { profile } from "../../data/profile";

// Highlights the section currently in view on the home page.
function useActiveSection(enabled) {
  const [active, setActive] = useState("");
  useEffect(() => {
    if (!enabled) return setActive("");
    const els = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [enabled]);
  return active;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const active = useActiveSection(pathname === "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkCls = (id) =>
    `rounded-md px-2.5 py-1.5 text-sm transition ${
      active === id ? "text-ink bg-chip" : "text-muted hover:text-ink"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled || open ? "border-line bg-bg/85 backdrop-blur-md" : "border-transparent bg-bg"
      }`}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" aria-label={`${profile.name}, home`} className="rounded-lg">
          <Logo name={profile.name} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <Link key={l.id} to={`/#${l.id}`} className={linkCls(l.id)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={profile.resume} download className="btn-primary hidden !py-2 sm:inline-flex">
            <FileDown size={16} /> Resume
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-line bg-bg lg:hidden" aria-label="Mobile">
          <div className="container flex flex-col py-3">
            {navLinks.map((l) => (
              <Link
                key={l.id}
                to={`/#${l.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 ${active === l.id ? "bg-chip text-ink" : "text-muted"}`}
              >
                {l.label}
              </Link>
            ))}
            <a href={profile.resume} download className="btn-primary mt-3 sm:hidden">
              <FileDown size={16} /> Download resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
