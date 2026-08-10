import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

export function ContactCta() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary-light">
            Contact Us
          </span>
          <h2 className="mt-3 text-2xl font-extrabold text-primary-foreground sm:text-3xl lg:text-4xl">
            Talk to ARJ about AMARD and ADWA laundry soap
          </h2>
          <p className="mt-3 max-w-xl text-primary-light">
            For orders, distribution and product enquiries, reach our team in Sebeta, Ethiopia.
            Products are distributed mainly from the factory and through Merkato.
          </p>
        </div>
        <div className="rounded-xl bg-background p-6 shadow-card">
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-foreground">Sebeta, Ethiopia</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="flex flex-col text-foreground">
                <a href="tel:+251911314758" className="font-semibold hover:text-primary">
                  +251 911 31 47 58
                </a>
                <a href="tel:+251911235104" className="font-semibold hover:text-primary">
                  +251 911 23 5104
                </a>
              </span>
            </li>
          </ul>
          <Link
            to="/contact"
            className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Go to contact page
          </Link>
        </div>
      </div>
    </section>
  );
}
