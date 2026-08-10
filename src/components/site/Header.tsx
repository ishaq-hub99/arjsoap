import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/brands", label: "Our Brands" },
  { to: "/products", label: "Products" },
  { to: "/factory", label: "Our Factory" },
  { to: "/quality", label: "Quality" },
  { to: "/vision", label: "Vision" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="section-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary font-display text-base font-extrabold text-primary-foreground">
            ARJ
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-extrabold uppercase tracking-tight text-foreground sm:text-base">
              ARJ Soap Detergent
            </span>
            <span className="block truncate text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              &amp; Manufacturing
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-primary bg-accent" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Contact Us
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="section-shell flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-primary" }}
                inactiveProps={{ className: "text-foreground" }}
                className="border-b border-border/60 py-3 text-sm font-semibold last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 mb-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
