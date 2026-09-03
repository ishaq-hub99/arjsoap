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
    tagline: "የአማርድ እና አድዋ የልብስ ሳሙና አምራች።",
    established: "የተመሰረተው በ2022 እ.ኤ.አ (2014 ዓ.ም) — ሰበታ፣ ኢትዮጵያ።",
    quickLinks: "ፈጣን አገናኞች",
    ourBrands: "ብራንዶቻችን",
    amard: "አማርድ የልብስ ሳሙና",
    adwa: "አድዋ የልብስ ሳሙና",
    contact: "አግኙን",
    location: "ሰበታ፣ ኢትዮጵያ",
    copyright: "© 2026 ኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻ። መብቱ በህግ የተጠበቀ ነው።",
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
              <span className="flex flex-col gap-2">
  <a
    href="tel:+251911314758"
    className="whitespace-nowrap hover:text-primary"
  >
    +251 911 314 758
  </a>

  <a
    href="tel:+251911235104"
    className="whitespace-nowrap hover:text-primary"
  >
    +251 911 235 104
  </a>

  <a
    href="https://wa.me/251911314758"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 whitespace-nowrap hover:text-primary"
    aria-label="WhatsApp"
  >
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
      <path d="M20.52 3.449A11.868 11.868 0 0 0 12.05 0C5.495 0 .16 5.334.157 11.89c0 2.096.547 4.142 1.588 5.946L.057 24l6.304-1.654a11.89 11.89 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.893-11.89a11.821 11.821 0 0 0-3.423-8.455ZM12.05 21.785h-.004a9.86 9.86 0 0 1-5.031-1.378l-.361-.214-3.742.982.999-3.648-.235-.374a9.864 9.864 0 0 1-1.511-5.263C2.168 6.448 6.603 2.013 12.055 2.013a9.82 9.82 0 0 1 6.99 2.897 9.82 9.82 0 0 1 2.893 6.997c-.003 5.45-4.437 9.878-9.888 9.878Z" />
    </svg>
    WhatsApp
  </a>

  <a
    href="https://t.me/ARJ2014"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 whitespace-nowrap hover:text-primary"
    aria-label="Telegram"
  >
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.7 3.3 2.8 10.59c-1.29.52-1.28 1.23-.24 1.55l4.85 1.51 1.86 5.68c.23.63.12.88.78.88.51 0 .74-.23 1.01-.51l2.35-2.28 4.89 3.61c.9.5 1.55.24 1.78-.84l3.2-15.08c.34-1.34-.51-1.95-1.58-1.3ZM8.16 13.31l10.78-6.8c.54-.33 1.03-.15.63.2l-8.72 7.87-.34 3.62-2.35-4.89Z" />
    </svg>
    Telegram
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
