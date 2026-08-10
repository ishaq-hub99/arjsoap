import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, ClipboardCheck, Droplets, Layers, Recycle, ShieldCheck } from "lucide-react";

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
          "Quality-focused production, manufacturing standards, hygiene and quality control at the ARJ factory in Sebeta, Ethiopia.",
      },
    ],
  }),
  component: Quality,
});

const pillars = [
  {
    icon: ShieldCheck,
    title: "Quality-focused production",
    body: "Every batch of AMARD and ADWA soap is produced with quality as the main priority.",
  },
  {
    icon: Layers,
    title: "Manufacturing standards",
    body: "Production follows the standards required for soap manufacturing in Ethiopia.",
  },
  {
    icon: ClipboardCheck,
    title: "Product consistency",
    body: "Bars are formed, cut and packed to keep size, shape and finish consistent.",
  },
  {
    icon: Droplets,
    title: "Hygiene",
    body: "The production area and equipment are kept clean throughout the manufacturing process.",
  },
  {
    icon: BadgeCheck,
    title: "Quality control",
    body: "Products are checked during production and packaging before they enter product storage.",
  },
  {
    icon: Recycle,
    title: "Responsible manufacturing",
    body: "We aim to manufacture responsibly and use our materials and machinery carefully.",
  },
];

function Quality() {
  return (
    <>
      <PageHero
        eyebrow="Quality &amp; Standards"
        title="Approved, qualified and quality-focused"
        description="ARJ Soap Detergent & Manufacturing is officially qualified and approved by the Ethiopian government and holds the certifications required for soap manufacturing."
      />

      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading
            centered
            eyebrow="Our Approach"
            title="How we protect product quality"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((item) => (
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
        <div className="section-shell">
          <SectionHeading
            eyebrow="Certification"
            title="Government approval and certification"
            description="The ARJ factory is officially qualified and approved by the Ethiopian government and has the required certifications for soap manufacturing. Official certificate documents and logos can be published here."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Certification document — placeholder",
              "Certification logo — placeholder",
              "Licence / registration — placeholder",
            ].map((label) => (
              <div
                key={label}
                className="grid min-h-44 place-items-center rounded-xl border border-dashed border-border bg-background p-6 text-center"
              >
                <div>
                  <BadgeCheck className="mx-auto h-7 w-7 text-primary" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-foreground">{label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    To be replaced with the actual document supplied by ARJ.
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
