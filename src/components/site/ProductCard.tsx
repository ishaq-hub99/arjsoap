import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { useT } from "@/lib/i18n";

import type { Product } from "./products";

export function ProductCard({ product }: { product: Product }) {
  const t = useT();
  return (
    <article className="surface-card reveal grid overflow-hidden md:grid-cols-[0.9fr_1.1fr] lg:grid-cols-1 xl:grid-cols-[0.9fr_1.1fr]">
      <div className="product-stage relative flex min-h-72 items-center border-0 border-b border-border p-7 md:border-b-0 md:border-r lg:border-r-0 lg:border-b xl:border-r xl:border-b-0">
        <span className="absolute left-6 top-6 rounded-full bg-primary px-3 py-1 font-display text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-primary-foreground">
          {product.brand}
        </span>
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          width={640}
          height={640}
          className="mx-auto h-64 w-full object-contain drop-shadow-lg sm:h-72"
        />
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          {product.type}
        </p>
        <h3 className="display-title mt-2 text-2xl text-foreground">{product.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
        <ul className="mt-6 grid gap-2.5 border-t border-border pt-6 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-7">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-primary w-full sm:flex-1">
              {t("Request a Quote", "የዋጋ ጥያቄ ያቅርቡ")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/brands" hash={product.slug} className="btn-outline w-full sm:flex-1">
              {t("View Product", "ምርቱን ይመልከቱ")}
            </Link>
          </div>
          <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {t(
              "An ARJ brand — manufactured by ARJ Soap, Detergent & Manufacturing in Sebeta, Ethiopia",
              "የኤ.አር.ጄ ብራንድ — በARJ Soap Detergent & Manufacturing የተመረተ — ሰበታ, ኢትዮጵያ",
            )}
          </p>
        </div>
      </div>
    </article>
  );
}
