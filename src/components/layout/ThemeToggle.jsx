import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Light theme" : "Dark theme"}
      className={`grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition hover:border-accent hover:text-accent-ink ${className}`}
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
