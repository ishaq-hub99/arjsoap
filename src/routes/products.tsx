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
          "Product catalog of ARJ Soap Detergent & Manufacturing: AMARD Laundry Soap and ADWA Laundry Soap, solid laundry soap bars made in Sebeta, Ethiopia.",
      },
      { property: "og:title", content: "ARJ Products — AMARD & ADWA Laundry Soap" },
      {
        property: "og:description",
        content: "Solid laundry soap bars manufactured in Sebeta, Ethiopia.",
      },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Our solid laundry soap catalog"
        description="ARJ currently produces two solid laundry soaps, both manufactured at our factory in Sebeta, Ethiopia."
      />

      <section className="py-16 sm:py-20">
        <div className="section-shell grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <img
            src={photos.adwaCartonsWarehouse}
            alt="Pallets of 50 x 200g ADWA laundry soap cartons in the ARJ product storage area"
            loading="lazy"
            width={1408}
            height={912}
            className="w-full rounded-2xl border border-border object-cover shadow-card"
          />
          <div>
            <SectionHeading
              eyebrow="Availability"
              title="Packed, stored and distributed"
              description="Finished bars are packed into cartons and held in product storage at the factory. Distribution is mainly from the factory and through Merkato."
            />
            <div className="mt-6 rounded-lg border border-dashed border-border bg-background p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                Placeholder
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Pack sizes, carton quantities and unit weights can be added here once confirmed by
                ARJ.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
