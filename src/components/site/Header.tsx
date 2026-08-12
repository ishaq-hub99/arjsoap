import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

import { useLang } from "@/lib/i18n";

export const navLinks = [
  { to: "/", label: "Home", labelAm: "መነሻ" },
  { to: "/about", label: "About", labelAm: "ስለ እኛ" },
  { to: "/brands", label: "Our Brands", labelAm: "የእኛ ብራንዶች" },
  { to: "/products", label: "Products", labelAm: "ምርቶች" },
  { to: "/factory", label: "Our Factory", labelAm: "ፋብሪካችን" },
  { to: "/quality", label: "Quality", labelAm: "ጥራት" },
  { to: "/vision", label: "Vision", labelAm: "ራዕይ" },
  { to: "/contact", label: "Contact", labelAm: "አግኙን" },
] as const;

export function useNavLinks() {
  const { lang } = useLang();
  return navLinks.map((link) => ({ to: link.to, label: lang === "am" ? link.labelAm : link.label }));
}

function LanguageSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`inline-flex items-center overflow-hidden rounded-md border border-border ${className}`}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-2.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] transition-colors ${
          lang === "en" ? "bg-accent text-primary" : "text-muted-foreground hover:text-primary"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("am")}
        className={`px-2.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] transition-colors ${
          lang === "am" ? "bg-accent text-primary" : "text-muted-foreground hover:text-primary"
        }`}
      >
        አማ
      </button>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  const links = useNavLinks();
  const isAm = lang === "am";

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="hidden border-b border-border bg-primary-dark lg:block">
        <div className="section-shell flex items-center justify-between py-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary-light">
          <span>
            {isAm
              ? "የAMARD እና ADWA ልብስ ማጠቢያ ሳሙና አምራች — ሰበታ, ኢትዮጵያ"
              : "Manufacturers of AMARD & ADWA Laundry Soap — Sebeta, Ethiopia"}
          </span>
          <a href="tel:+251911314758" className="transition-opacity hover:opacity-80">
            +251 911 314 758
          </a>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="section-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:flex lg:justify-between lg:py-4">
          <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-primary font-display text-base font-extrabold tracking-tight text-primary-foreground">
              ARJ
            </span>
            <span className="min-w-0">
              <span className="display-title block truncate text-sm text-foreground sm:text-base">
                ARJ Soap Detergent
              </span>
              <span className="block truncate text-[0.65rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                &amp; Manufacturing
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-primary bg-accent" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="rounded-md px-3 py-2 text-[0.8rem] font-bold uppercase tracking-[0.06em] transition-colors hover:text-primary"
              >
                {isAm ? link.labelAm : link.label}
              </Link>
            ))}
            <LanguageSwitch className="ml-3" />
            <Link to="/contact" className="btn-primary ml-3 px-5 py-2.5">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {isAm ? "አግኙን" : "Contact Us"}
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-b border-border bg-background lg:hidden">
          <div className="section-shell flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-primary" }}
                inactiveProps={{ className: "text-foreground" }}
                className="border-b border-border/60 py-3.5 text-sm font-bold uppercase tracking-[0.06em] last:border-0"
              >
                {isAm ? link.labelAm : link.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center gap-3 border-b border-border/60 pb-4">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`flex-1 rounded-md border border-border px-3 py-2.5 text-sm font-bold transition-colors ${
                  lang === "en" ? "bg-accent text-primary" : "text-foreground"
                }`}
              >
                🇬🇧 English
              </button>
              <button
                type="button"
                onClick={() => setLang("am")}
                className={`flex-1 rounded-md border border-border px-3 py-2.5 text-sm font-bold transition-colors ${
                  lang === "am" ? "bg-accent text-primary" : "text-foreground"
                }`}
              >
                🇪🇹 አማርኛ
              </button>
            </div>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4 mb-3">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {isAm ? "አግኙን" : "Contact Us"}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
