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
        content:
          "Two solid laundry soap brands manufactured at the ARJ facility in Sebeta, Ethiopia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        description="Two laundry soap brands, manufactured by ARJ Soap Detergent & Manufacturing at its facility in Sebeta, Ethiopia."
      />

      {products.map((product, index) => (
        <section
          key={product.slug}
          id={product.slug}
          className={
            index % 2 === 0
              ? "scroll-mt-28 py-20 sm:py-28"
              : "scroll-mt-28 border-y border-border bg-secondary py-20 sm:py-28"
          }
        >
          <div
            className={`section-shell grid gap-12 lg:items-center ${
              index % 2 === 0 ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]"
            }`}
          >
            <div className={index % 2 === 0 ? "" : "lg:order-2"}>
              <div className="photo-frame grid-tint bg-background p-10">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="mx-auto h-72 w-full object-contain sm:h-[24rem]"
                />
              </div>
            </div>
            <div className={index % 2 === 0 ? "reveal" : "reveal lg:order-1"}>
              <span className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 font-display text-sm font-extrabold uppercase tracking-[0.18em] text-primary-foreground">
                {product.brand}
              </span>
              <h2 className="display-title mt-5 text-3xl text-foreground sm:text-5xl">
                {product.name}
              </h2>
              <p className="mt-3 text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-primary">
                {product.type}
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <ul className="mt-7 grid gap-2.5 border-t border-border pt-7 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Manufactured by ARJ Soap Detergent &amp; Manufacturing
              </p>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading
            centered
            eyebrow="ADWA — Victory For Purity"
            title="ADWA in everyday laundry"
            description="ADWA laundry soap bars, produced at the ARJ facility in Sebeta, Ethiopia."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                src: photos.adwaVictoryGrater,
                alt: "ADWA laundry soap bar on a wooden washboard with water running over it",
              },
              {
                src: photos.adwaSunkissed,
                alt: "ADWA yellow laundry soap bar on a washboard beside folded towels",
              },
              {
                src: photos.adwaVictoryTowels,
                alt: "ADWA laundry soap bar resting on white folded towels",
              },
              {
                src: photos.adwaLaundryLine,
                alt: "ADWA laundry soap bar on a marble board in front of freshly washed white clothes",
              },
            ].map((photo) => (
              <div key={photo.src} className="photo-frame reveal bg-background">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="aspect-square w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading
            centered
            eyebrow="One Manufacturer"
            title="Both brands, one manufacturer"
            description="AMARD and ADWA share the same manufacturing standards, the same modern machinery and the same quality focus at the ARJ facility in Sebeta, Ethiopia."
          />
        </div>
      </section>

      <ContactCta />
    </>
  );
}
