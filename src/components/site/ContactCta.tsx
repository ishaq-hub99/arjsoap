import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

export function ContactCta() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-primary-light">
            Contact Us
          </span>
          <h2 className="display-title mt-4 text-2xl text-primary-foreground sm:text-4xl">
            Talk to ARJ about AMARD and ADWA laundry soap
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-primary-light">
            For orders, distribution and product enquiries, reach our team in Sebeta, Ethiopia.
            Products are distributed mainly from the factory and through Merkato.
          </p>
        </div>
        <div className="rounded-2xl bg-background p-7 shadow-card">
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-foreground">Sebeta, Ethiopia</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="flex flex-col gap-1 text-foreground">
                <a href="tel:+251911314758" className="font-semibold hover:text-primary">
                  +251 911 314 758
                </a>
                <a href="tel:+251911235104" className="font-semibold hover:text-primary">
                  +251 911 235 104
                </a>
              </span>
            </li>
          </ul>
          <Link to="/contact" className="btn-primary mt-7 w-full">
            Go to contact page
          </Link>
        </div>
      </div>
    </section>
  );
}
