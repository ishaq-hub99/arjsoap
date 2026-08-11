import { createFileRoute } from "@tanstack/react-router";
import { Boxes, ClipboardCheck, Cog, Factory, PackageCheck, Truck, Warehouse } from "lucide-react";

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
          "Inside the ARJ manufacturing facility in Sebeta, Ethiopia: modern machinery imported from China, production, packaging, storage and distribution.",
      },
      { property: "og:title", content: "Our Factory — ARJ Soap Detergent & Manufacturing" },
      {
        property: "og:description",
        content:
          "A dedicated Ethiopian soap manufacturing facility in Sebeta, equipped with modern machinery imported from China.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FactoryPage,
});

const sections = [
  {
    icon: Factory,
    title: "Factory Overview",
    body: "ARJ operates a dedicated manufacturing facility in Sebeta, Ethiopia, where both AMARD and ADWA solid laundry soap are produced.",
  },
  {
    icon: Cog,
    title: "Modern Machinery",
    body: "The facility is equipped with modern manufacturing machinery imported from China.",
  },
  {
    icon: Boxes,
    title: "Production",
    body: "Soap is produced, formed and cut into solid bars for laundry use as part of an in-house production process.",
  },
  {
    icon: PackageCheck,
    title: "Packaging",
    body: "Bars are wrapped in clearly branded AMARD and ADWA packaging and packed into cartons.",
  },
  {
    icon: Warehouse,
    title: "Storage",
    body: "Finished cartons are held in the product storage area at the facility, ready for dispatch.",
  },
  {
    icon: Truck,
    title: "Distribution",
    body: "Products are distributed mainly from the facility and through Merkato.",
  },
];

const processSteps = [
  { step: "01", title: "Manufacturing", icon: Cog },
  { step: "02", title: "Quality Check", icon: ClipboardCheck },
  { step: "03", title: "Packaging", icon: PackageCheck },
  { step: "04", title: "Storage", icon: Warehouse },
  { step: "05", title: "Distribution", icon: Truck },
];

function FactoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Factory"
        title="Our Manufacturing Facility"
        description="Based in Sebeta, Ethiopia, ARJ operates a dedicated manufacturing facility equipped with modern machinery imported from China."
      />

      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="photo-frame reveal bg-background">
            <img
              src={photos.packagingMachine}
              alt="ADWA branded wrapping film feeding through the packaging machine at the ARJ facility"
              loading="lazy"
              width={1600}
              height={912}
              className="w-full object-cover"
            />
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((item) => (
              <div key={item.title} className="surface-card reveal p-7">
                <item.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="display-title mt-5 text-lg text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTION PROCESS TIMELINE */}
      <section className="border-y border-border bg-secondary py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading
            centered
            eyebrow="Production Process"
            title="From manufacturing to distribution"
            description="How AMARD and ADWA laundry soap move through the ARJ facility."
          />

          <ol className="relative mt-14 hidden lg:grid lg:grid-cols-5 lg:gap-6">
            <span
              className="absolute left-[10%] right-[10%] top-7 h-px bg-border"
              aria-hidden="true"
            />
            {processSteps.map((s) => (
              <li key={s.step} className="relative text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-border bg-background text-primary shadow-card">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-5 text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-primary">
                  {s.step}
                </p>
                <h3 className="display-title mt-2 text-base text-foreground">{s.title}</h3>
              </li>
            ))}
          </ol>

          <ol className="mt-12 space-y-5 border-l-2 border-primary/25 pl-7 lg:hidden">
            {processSteps.map((s) => (
              <li key={s.step} className="relative">
                <span
                  className="absolute -left-[2.2rem] top-5 grid h-5 w-5 place-items-center rounded-full border-2 border-primary bg-background"
                  aria-hidden="true"
                />
                <div className="surface-card flex items-center gap-4 p-5">
                  <s.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-primary">
                      {s.step}
                    </p>
                    <h3 className="display-title mt-1 text-base text-foreground">{s.title}</h3>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <SectionHeading
              eyebrow="Storage &amp; Distribution"
              title="Product stock ready for distribution"
              description="Finished AMARD and ADWA cartons are stored at the facility and released for distribution from the factory and through Merkato."
            />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Cartons are palletised in the storage area before dispatch.
            </p>
          </div>
          <div className="photo-frame reveal bg-background">
            <img
              src={photos.adwaCartonsWarehouse}
              alt="Pallets of ADWA laundry soap cartons stacked in the storage area"
              loading="lazy"
              width={1408}
              height={912}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading
            centered
            eyebrow="Factory Gallery"
            title="Inside the ARJ facility"
            description="Production, wrapping, packing and storage of AMARD and ADWA laundry soap in Sebeta, Ethiopia."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {factoryGallery.map((photo) => (
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

      <ContactCta />
    </>
  );
}
