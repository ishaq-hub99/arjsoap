import { createFileRoute } from "@tanstack/react-router";

import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import factoryImage from "@/assets/factory.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ARJ | Ethiopian Laundry Soap Manufacturer in Sebeta" },
      {
        name: "description",
        content:
          "ARJ Soap Detergent & Manufacturing was established in 2022 G.C. / 2014 E.C. in Sebeta, Ethiopia and manufactures AMARD and ADWA laundry soap.",
      },
      { property: "og:title", content: "About ARJ Soap Detergent & Manufacturing" },
      {
        property: "og:description",
        content:
          "Our company story: established 2022 G.C. / 2014 E.C. in Sebeta, Ethiopia, manufacturing AMARD and ADWA laundry soap.",
      },
    ],
  }),
  component: About,
});

const timeline = [
  {
    year: "2022 G.C. / 2014 E.C.",
    title: "ARJ is established",
    body: "ARJ Soap Detergent & Manufacturing is founded in Sebeta, Ethiopia, with a focus on manufacturing quality solid laundry soap.",
  },
  {
    year: "Manufacturing setup",
    title: "Modern machinery installed",
    body: "The factory is equipped with modern manufacturing machinery imported from China to support soap production.",
  },
  {
    year: "Our brands",
    title: "AMARD and ADWA laundry soap",
    body: "ARJ manufactures two solid laundry soap brands, AMARD and ADWA, both produced at the ARJ factory.",
  },
  {
    year: "Today",
    title: "Production and distribution",
    body: "The factory maintains significant production and a substantial amount of product stock. Products are distributed mainly from the factory and through Merkato.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About ARJ"
        title="A quality-focused Ethiopian soap manufacturer"
        description="ARJ Soap Detergent & Manufacturing produces solid laundry soap in Sebeta, Ethiopia, for people who want clean clothes."
      />

      <section className="py-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Company Story"
              title="Manufacturing quality since 2022"
              description="ARJ Soap Detergent & Manufacturing was established in 2022 G.C. / 2014 E.C. in Sebeta, Ethiopia. The company focuses on manufacturing quality solid laundry soaps for people who want clean clothes."
            />
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Although the factory is not extremely large, it has significant production and
              maintains a substantial amount of product stock. The company uses modern machinery
              imported from China to support its manufacturing process, and the factory is officially
              qualified and approved by the Ethiopian government with the certifications required for
              soap manufacturing.
            </p>
          </div>
          <img
            src={factoryImage}
            alt="Modern soap manufacturing equipment at the ARJ factory in Sebeta"
            loading="lazy"
            width={1600}
            height={912}
            className="w-full rounded-2xl border border-border object-cover shadow-card"
          />
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Timeline" title="How ARJ developed" />
          <ol className="mt-10 space-y-6 border-l-2 border-primary/25 pl-6">
            {timeline.map((item) => (
              <li key={item.title} className="relative">
                <span
                  className="absolute -left-[1.9rem] top-2 grid h-4 w-4 place-items-center rounded-full border-2 border-primary bg-background"
                  aria-hidden="true"
                />
                <div className="surface-card p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    {item.year}
                  </span>
                  <h3 className="mt-2 text-lg font-extrabold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Manufacturing focus",
              body: "Solid laundry soap made for everyday clothes washing — nothing more, nothing less.",
            },
            {
              title: "Modern machinery",
              body: "Production is supported by modern manufacturing machinery imported from China.",
            },
            {
              title: "Commitment to quality",
              body: "Consistent bars, clean packaging and a production process organised around quality.",
            },
          ].map((item) => (
            <div key={item.title} className="surface-card p-6">
              <h3 className="text-base font-extrabold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
