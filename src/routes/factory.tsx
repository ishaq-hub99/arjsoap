import { createFileRoute } from "@tanstack/react-router";
import { Boxes, Cog, Factory, PackageCheck, Truck, Warehouse } from "lucide-react";

import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { factoryGallery, photos } from "@/components/site/photos";

export const Route = createFileRoute("/factory")({
  head: () => ({
    meta: [
      { title: "Our Factory | ARJ Soap Manufacturing in Sebeta, Ethiopia" },
      {
        name: "description",
        content:
          "Inside the ARJ soap factory in Sebeta, Ethiopia: manufacturing facility, modern machinery imported from China, production, packaging, storage and distribution.",
      },
      { property: "og:title", content: "Our Factory — ARJ Soap Detergent & Manufacturing" },
      {
        property: "og:description",
        content:
          "A modern Ethiopian soap manufacturing facility in Sebeta, using machinery imported from China.",
      },
    ],
  }),
  component: FactoryPage,
});

const capabilities = [
  {
    icon: Factory,
    title: "Manufacturing facility",
    body: "Our factory in Sebeta, Ethiopia manufactures both AMARD and ADWA solid laundry soap. It is not extremely large, but it has significant production capability.",
  },
  {
    icon: Cog,
    title: "Modern machinery",
    body: "The facility is equipped with modern manufacturing machinery imported from China to support consistent soap production.",
  },
  {
    icon: Boxes,
    title: "Production process",
    body: "Soap is produced, formed and cut into solid bars for laundry use as part of a controlled in-house production process.",
  },
  {
    icon: PackageCheck,
    title: "Packaging",
    body: "Bars are wrapped in clean, clearly branded AMARD and ADWA packaging and packed into cartons.",
  },
  {
    icon: Warehouse,
    title: "Product storage",
    body: "The factory maintains a substantial amount of finished product stock in its storage area.",
  },
  {
    icon: Truck,
    title: "Distribution",
    body: "Products are distributed mainly from the factory and through Merkato.",
  },
];

function FactoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Factory"
        title="A modern Ethiopian soap manufacturing facility"
        description="Located in Sebeta, Ethiopia, the ARJ factory handles production, packaging and storage of AMARD and ADWA laundry soap."
      />

      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <img
            src={photos.packagingMachine}
            alt="ADWA branded wrapping film feeding through the packaging machine at the ARJ factory"
            loading="lazy"
            width={1600}
            height={912}
            className="w-full rounded-2xl border border-border object-cover shadow-card"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title} className="surface-card p-6">
                <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-3 text-base font-extrabold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Stock &amp; Storage"
              title="Product stock ready for distribution"
              description="Finished AMARD and ADWA cartons are stored at the factory and released for distribution from the factory and through Merkato."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              ADWA is packed 50 x 200g and 50 x 220g per carton, with cartons palletised in the
              factory storage area before dispatch.
            </p>
          </div>
          <img
            src={photos.adwaCartonsWarehouse}
            alt="Pallets of ADWA laundry soap cartons stacked in the factory storage area"
            loading="lazy"
            width={1408}
            height={912}
            className="w-full rounded-2xl border border-border object-cover shadow-card"
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading
            centered
            eyebrow="Factory Gallery"
            title="Inside the ARJ facility"
            description="Production, wrapping, packing and storage of AMARD and ADWA laundry soap in Sebeta, Ethiopia."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {factoryGallery.map((photo) => (
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


      <ContactCta />
    </>
  );
}
