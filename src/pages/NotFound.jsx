import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container flex flex-col items-start gap-4 py-24">
      <p className="eyebrow">404</p>
      <h1 className="text-4xl font-extrabold">This page doesn't exist.</h1>
      <p className="text-muted">The link may be old, or the address may have a typo.</p>
      <Link to="/" className="btn-primary mt-2">
        <ArrowLeft size={16} /> Back to home
      </Link>
    </section>
  );
}
