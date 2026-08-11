import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

import { navLinks } from "./Header";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="grid h-11 w-11 place-items-center rounded-md bg-primary font-display text-base font-extrabold text-primary-foreground">
            ARJ
          </span>
          <h3 className="mt-4 font-display text-base font-extrabold uppercase text-foreground">
            ARJ Soap Detergent &amp; Manufacturing
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Ethiopian solid laundry soap manufacturer, established 2022 G.C. / 2014 E.C.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-foreground">
            Manufacturers of
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>AMARD Laundry Soap</li>
            <li>ADWA Laundry Soap</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-foreground">
            Quick Links
          </h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
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
          <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              Sebeta, Ethiopia
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="flex flex-col">
                <a href="tel:+251911314758" className="hover:text-primary">
                  +251 911 31 47 58
                </a>
                <a href="tel:+251911235104" className="hover:text-primary">
                  +251 911 23 51 04
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="section-shell py-5 text-center text-xs text-muted-foreground">
          © 2026 ARJ Soap Detergent &amp; Manufacturing. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
