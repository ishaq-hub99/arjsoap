import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { products } from "@/components/site/products";
import { photos } from "@/components/site/photos";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Our Brands | AMARD & ADWA Laundry Soap by ARJ" },
      {
        name: "description",
        content:
          "AMARD and ADWA are the two solid laundry soap brands manufactured by ARJ Soap Detergent & Manufacturing in Sebeta, Ethiopia.",
      },
      { property: "og:title", content: "Our Brands — AMARD and ADWA" },
      {
        property: "og:description",
        content: "Two solid laundry soap brands manufactured at the ARJ factory in Sebeta, Ethiopia.",
      },
    ],
  }),
  component: Brands,
});

function Brands() {
  return (
    <>
      <PageHero
        eyebrow="Our Brands"
        title="AMARD and ADWA laundry soap"
        description="Both brands are manufactured by ARJ Soap Detergent & Manufacturing at its factory in Sebeta, Ethiopia."
      />

      {products.map((product, index) => (
        <section
          key={product.slug}
          className={
            index % 2 === 0
              ? "py-16 sm:py-20"
              : "border-y border-border bg-secondary py-16 sm:py-20"
          }
        >
          <div
            className={`section-shell grid gap-10 lg:items-center ${
              index % 2 === 0 ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]"
            }`}
          >
            <div className={index % 2 === 0 ? "" : "lg:order-2"}>
              <div className="rounded-2xl border border-border bg-background p-8 shadow-card">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="mx-auto h-64 w-full object-contain sm:h-80"
                />
              </div>
            </div>
            <div className={index % 2 === 0 ? "" : "lg:order-1"}>
              <span className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 font-display text-sm font-extrabold uppercase tracking-[0.16em] text-primary-foreground">
                {product.brand}
              </span>
              <h2 className="mt-4 text-2xl font-extrabold text-foreground sm:text-4xl">
                {product.name}
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-primary">
                {product.type}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-border pt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Manufactured by ARJ Soap Detergent &amp; Manufacturing
              </p>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-border bg-secondary py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading
            centered
            eyebrow="ADWA — Victory For Purity"
            title="ADWA in everyday laundry"
            description="ADWA laundry soap bars, produced at the ARJ factory in Sebeta, Ethiopia."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: photos.adwaVictoryGrater, alt: "ADWA laundry soap bar on a wooden washboard with water running over it" },
              { src: photos.adwaSunkissed, alt: "ADWA yellow laundry soap bar on a washboard beside folded towels" },
              { src: photos.adwaVictoryTowels, alt: "ADWA laundry soap bar resting on white folded towels" },
              { src: photos.adwaLaundryLine, alt: "ADWA 220g laundry soap bar on a marble board in front of freshly washed white clothes" },
            ].map((photo) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                width={640}
                height={640}
                className="aspect-square w-full rounded-2xl border border-border object-cover shadow-card"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading
            centered
            eyebrow="One Manufacturer"
            title="Both brands, one factory"
            description="AMARD and ADWA share the same manufacturing standards, the same modern machinery and the same quality focus at the ARJ factory in Sebeta, Ethiopia."
          />
        </div>
      </section>

      <ContactCta />
    </>
  );
}
