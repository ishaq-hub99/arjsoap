import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

import { useCopy, type Lang } from "@/lib/i18n";

const copy = {
  en: {
    eyebrow: "Contact Us",
    title: "Talk to ARJ about AMARD and ADWA laundry soap",
    description:
      "For orders, distribution and product enquiries, reach our team in Sebeta, Ethiopia. Products are distributed mainly from the factory and through Merkato.",
    location: "Sebeta, Ethiopia",
    cta: "Go to contact page",
  },
  am: {
    eyebrow: "አግኙን",
    title: "ስለ አማርድ እና አድዋ የልብስ ሳሙና ከኤ.አር.ጄ ጋር ይነጋገሩ",
    description:
      "ለትዕዛዝ፣ ለስርጭት እና ለምርት ጥያቄዎች ቡድናችንን በሰበታ፣ ኢትዮጵያ ያግኙ። ምርቶቻችን በዋናነት ከፋብሪካው እና በመርካቶ በኩል ይሰራጫሉ።",
    location: "ሰበታ፣ ኢትዮጵያ",
    cta: "ወደ አግኙን ገጽ ይሂዱ",
  },
} satisfies Record<Lang, Record<string, string>>;

export function ContactCta() {
  const c = useCopy(copy);
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-primary-light">
            {c.eyebrow}
          </span>
          <h2 className="display-title mt-4 text-2xl text-primary-foreground sm:text-4xl">
            {c.title}
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-primary-light">{c.description}</p>
        </div>
        <div className="rounded-2xl bg-background p-7 shadow-card">
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-foreground">{c.location}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="flex flex-col gap-1.5 text-foreground">
                <a href="tel:+251911314758" className="font-semibold whitespace-nowrap hover:text-primary">
                  +251 911 314 758
                </a>
                <a href="tel:+251911235104" className="font-semibold whitespace-nowrap hover:text-primary">
                  +251 911 235 104
                </a>
              </span>
            </li>
          </ul>
          <Link to="/contact" className="btn-primary mt-7 w-full">
            {c.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
