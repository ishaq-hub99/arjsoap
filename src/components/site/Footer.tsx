import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

import { useCopy, type Lang } from "@/lib/i18n";

import { useNavLinks } from "./Header";

const copy = {
  en: {
    tagline: "Manufacturers of AMARD and ADWA Laundry Soap.",
    established: "Established 2022 G.C. / 2014 E.C. — Sebeta, Ethiopia.",
    quickLinks: "Quick Links",
    ourBrands: "Our Brands",
    amard: "AMARD Laundry Soap",
    adwa: "ADWA Laundry Soap",
    contact: "Contact",
    location: "Sebeta, Ethiopia",
    copyright: "© 2026 ARJ Soap Detergent & Manufacturing. All Rights Reserved.",
  },
  am: {
    tagline: "የAMARD እና ADWA ልብስ ማጠቢያ ሳሙና አምራች።",
    established: "የተቋቋመው በ2022 ዓ.ም (እ.ኤ.አ) / 2014 ዓ.ም — ሰበታ, ኢትዮጵያ።",
    quickLinks: "ፈጣን አገናኞች",
    ourBrands: "የእኛ ብራንዶች",
    amard: "አማርድ ልብስ ማጠቢያ ሳሙና",
    adwa: "አድዋ ልብስ ማጠቢያ ሳሙና",
    contact: "አግኙን",
    location: "ሰበታ, ኢትዮጵያ",
    copyright: "© 2026 ARJ Soap Detergent & Manufacturing. ሁሉም መብቶች የተጠበቁ ናቸው።",
  },
} satisfies Record<Lang, Record<string, string>>;

export function Footer() {
  const c = useCopy(copy);
  const links = useNavLinks();

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="grid h-12 w-12 place-items-center rounded-md bg-primary font-display text-base font-extrabold text-primary-foreground">
            ARJ
          </span>
          <h3 className="display-title mt-5 text-base text-foreground">
            ARJ Soap Detergent &amp; Manufacturing
          </h3>
          <p className="mt-3 text-sm font-semibold text-foreground">{c.tagline}</p>
          <p className="mt-2 text-sm text-muted-foreground">{c.established}</p>
        </div>

        <div>
          <h4 className="text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-foreground">
            {c.quickLinks}
          </h4>
          <ul className="mt-5 grid grid-cols-2 gap-2.5 text-sm">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-foreground">
            {c.ourBrands}
          </h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li>
              <Link
                to="/brands"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {c.amard}
              </Link>
            </li>
            <li>
              <Link
                to="/brands"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {c.adwa}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-foreground">
            {c.contact}
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {c.location}
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="flex flex-col gap-1.5">
                <a href="tel:+251911314758" className="whitespace-nowrap hover:text-primary">
                  +251 911 314 758
                </a>
                <a href="tel:+251911235104" className="whitespace-nowrap hover:text-primary">
                  +251 911 235 104
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="section-shell py-6 text-center text-xs text-muted-foreground">
          {c.copyright}
        </div>
      </div>
    </footer>
  );
}
