import { createFileRoute } from "@tanstack/react-router";
import { Target } from "lucide-react";

import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { adwaImage } from "@/components/site/products";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Our Vision | To Be the No. 1 Soap Brand in Africa" },
      {
        name: "description",
        content:
          "The vision of ARJ Soap Detergent & Manufacturing is to be the No. 1 soap brand in Africa, built on quality laundry soap made in Sebeta, Ethiopia.",
      },
      { property: "og:title", content: "Our Vision — ARJ Soap Detergent & Manufacturing" },
      {
        property: "og:description",
        content: "To be the No. 1 soap brand in Africa.",
      },
    ],
  }),
  component: Vision,
});

function Vision() {
  return (
    <>
      <PageHero
        eyebrow="Our Vision"
        title="Looking beyond Ethiopia"
        description="ARJ manufactures laundry soap in Sebeta, Ethiopia with an ambition that reaches across the continent."
      />

      <section className="py-16 sm:py-20">
        <div className="section-shell rounded-2xl bg-primary px-6 py-16 text-center sm:px-12">
          <Target className="mx-auto h-9 w-9 text-primary-light" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-3xl font-display text-3xl font-extrabold leading-tight text-primary-foreground sm:text-5xl">
            &ldquo;To be the No. 1 soap brand in Africa.&rdquo;
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary-light">
            ARJ Soap Detergent &amp; Manufacturing
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="What This Means"
              title="Quality first, brand second"
              description="Our vision starts with the bar itself. By keeping AMARD and ADWA long-lasting, high-foaming and soft on hands, we build the trust needed to grow beyond Sebeta and beyond Ethiopia."
            />
            <ul className="mt-6 space-y-4">
              {[
                {
                  title: "Consistent products",
                  body: "Every carton that leaves the factory should match the last one.",
                },
                {
                  title: "Recognisable brands",
                  body: "Clean, attractive packaging that customers can identify instantly.",
                },
                {
                  title: "Reliable supply",
                  body: "Significant production and substantial stock kept ready at the factory.",
                },
              ].map((item) => (
                <li key={item.title} className="surface-card p-5">
                  <h3 className="text-base font-extrabold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={adwaImage}
            alt="ADWA Laundry Soap packaging by ARJ"
            loading="lazy"
            width={640}
            height={640}
            className="w-full rounded-2xl border border-border bg-background object-contain p-8 shadow-card"
          />
        </div>
      </section>

      <ContactCta />
    </>
  );
}
