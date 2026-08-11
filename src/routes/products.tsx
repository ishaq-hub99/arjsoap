import { createFileRoute } from "@tanstack/react-router";

import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/components/site/products";
import { photos } from "@/components/site/photos";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | AMARD & ADWA Solid Laundry Soap" },
      {
        name: "description",
        content:
          "Products of ARJ Soap Detergent & Manufacturing: AMARD Laundry Soap and ADWA Laundry Soap, solid laundry soap bars made in Sebeta, Ethiopia.",
      },
      { property: "og:title", content: "ARJ Products — AMARD & ADWA Laundry Soap" },
      {
        property: "og:description",
        content: "Solid laundry soap bars manufactured in Sebeta, Ethiopia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Our solid laundry soaps"
        description="ARJ produces two solid laundry soaps, both manufactured at our facility in Sebeta, Ethiopia."
      />

      <section className="py-20 sm:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="photo-frame reveal bg-background">
            <img
              src={photos.adwaCartonsWarehouse}
              alt="Pallets of ADWA laundry soap cartons in the ARJ product storage area"
              loading="lazy"
              width={1408}
              height={912}
              className="w-full object-cover"
            />
          </div>
          <div className="reveal">
            <SectionHeading
              eyebrow="Availability"
              title="Packed, stored and distributed"
              description="Finished bars are packed into cartons and held in product storage at the facility. Distribution is mainly from the factory and through Merkato."
            />
            <div className="mt-8 rounded-2xl border border-dashed border-input bg-background p-6">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                Pack details
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Pack sizes, carton quantities and unit weights can be published here once confirmed
                by ARJ.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
