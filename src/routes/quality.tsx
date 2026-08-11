import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, ClipboardCheck, Layers, Repeat, ShieldCheck } from "lucide-react";

import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, SectionHeading } from "@/components/site/PageHero";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality & Standards | ARJ Soap Detergent & Manufacturing" },
      {
        name: "description",
        content:
          "ARJ Soap Detergent & Manufacturing is qualified and approved by the Ethiopian government and holds the certifications required for soap manufacturing.",
      },
      { property: "og:title", content: "Quality & Standards — ARJ" },
      {
        property: "og:description",
        content:
          "Government approval, quality control, manufacturing standards and product consistency at the ARJ facility in Sebeta, Ethiopia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Quality,
});

const pillars = [
  {
    icon: ShieldCheck,
    title: "Government Approval",
    body: "ARJ Soap Detergent & Manufacturing is qualified and approved by the Ethiopian government.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control",
    body: "Production of AMARD and ADWA soap is carried out with quality as the main priority.",
  },
  {
    icon: Layers,
    title: "Manufacturing Standards",
    body: "Manufacturing follows the standards required for soap production in Ethiopia.",
  },
  {
    icon: Repeat,
    title: "Product Consistency",
    body: "Bars are formed, cut and packed to keep size, shape and finish consistent.",
  },
];

function Quality() {
  return (
    <>
      <PageHero
        eyebrow="Quality &amp; Standards"
        title="Quality &amp; Standards"
        description="ARJ Soap Detergent & Manufacturing is qualified and approved by the Ethiopian government and has the certifications required for soap manufacturing."
      />

      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading centered eyebrow="Our Approach" title="How we protect product quality" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item) => (
              <div key={item.title} className="surface-card reveal p-7">
                <item.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="display-title mt-5 text-lg text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Certification"
            title="Certification documentation"
            description="ARJ holds the certifications required to manufacture soap in Ethiopia. Official documentation can be published in the spaces below once supplied."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="reveal grid min-h-52 place-items-center rounded-2xl border border-dashed border-input bg-background p-8 text-center"
              >
                <div>
                  <BadgeCheck className="mx-auto h-8 w-8 text-primary" aria-hidden="true" />
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-foreground">
                    Certification documentation
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Space reserved for official documentation supplied by ARJ.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
