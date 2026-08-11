import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { photos } from "@/components/site/photos";

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
          "Established 2022 G.C. / 2014 E.C. in Sebeta, Ethiopia, manufacturing AMARD and ADWA laundry soap.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const timeline = [
  {
    year: "2022 G.C. / 2014 E.C.",
    title: "ARJ is established",
    body: "ARJ Soap Detergent & Manufacturing is founded in Sebeta, Ethiopia, to manufacture quality solid laundry soap.",
  },
  {
    year: "Manufacturing setup",
    title: "Modern machinery installed",
    body: "The facility is equipped with modern manufacturing machinery imported from China.",
  },
  {
    year: "Our brands",
    title: "AMARD and ADWA laundry soap",
    body: "ARJ manufactures two solid laundry soap brands, AMARD and ADWA, both produced at the ARJ facility.",
  },
  {
    year: "Today",
    title: "Production and distribution",
    body: "Products are manufactured, packaged and stored at the facility, with distribution mainly from the factory and through Merkato.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About ARJ"
        title="A quality-focused Ethiopian soap manufacturer"
        description="ARJ Soap Detergent & Manufacturing produces solid laundry soap in Sebeta, Ethiopia, through its brands AMARD and ADWA."
      />

      <section className="py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <SectionHeading
              eyebrow="Company Story"
              title="Manufacturing Quality Since 2022"
              description="Established in 2022 G.C. (2014 E.C.), ARJ Soap Detergent & Manufacturing is a soap manufacturing company based in Sebeta, Ethiopia. The company produces two solid laundry soap brands, AMARD and ADWA."
            />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Manufacturing is supported by modern machinery imported from China, and the company is
              qualified and approved by the Ethiopian government with the certifications required for
              soap manufacturing.
            </p>
            <Link to="/factory" className="btn-primary mt-9">
              Explore Our Factory
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="photo-frame reveal bg-background">
            <img
              src={photos.amardBarsStacked}
              alt="Stacks of wrapped AMARD laundry soap bars at the ARJ facility in Sebeta"
              loading="lazy"
              width={1200}
              height={1400}
              className="max-h-[34rem] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Timeline" title="How ARJ developed" />
          <ol className="mt-12 space-y-6 border-l-2 border-primary/25 pl-7">
            {timeline.map((item) => (
              <li key={item.title} className="relative">
                <span
                  className="absolute -left-[2.05rem] top-6 grid h-4 w-4 place-items-center rounded-full border-2 border-primary bg-background"
                  aria-hidden="true"
                />
                <div className="surface-card reveal p-7">
                  <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-primary">
                    {item.year}
                  </span>
                  <h3 className="display-title mt-3 text-lg text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Manufacturing focus",
              body: "Solid laundry soap made for everyday clothes washing.",
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
            <div key={item.title} className="surface-card reveal p-7">
              <h3 className="display-title text-lg text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
