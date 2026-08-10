import { Check } from "lucide-react";

import type { Product } from "./products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="surface-card flex flex-col overflow-hidden">
      <div className="bg-secondary p-6">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          width={640}
          height={640}
          className="mx-auto h-56 w-full object-contain sm:h-64"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
            {product.brand}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {product.type}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-extrabold text-foreground">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
        <ul className="mt-5 space-y-2 border-t border-border pt-5">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Manufactured by ARJ Soap Detergent &amp; Manufacturing — Sebeta, Ethiopia
        </p>
      </div>
    </article>
  );
}
