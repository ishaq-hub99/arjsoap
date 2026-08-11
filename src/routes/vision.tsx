import { createFileRoute } from "@tanstack/react-router";

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
      { property: "og:description", content: "To be the No. 1 soap brand in Africa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Vision,
});

function Vision() {
  return (
    <>
      <PageHero
        eyebrow="Our Vision"
        title="Our Vision"
        description="ARJ manufactures laundry soap in Sebeta, Ethiopia with an ambition that reaches across the continent."
      />

      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-3xl bg-primary-dark px-6 py-24 text-center sm:px-12">
            <div className="grid-tint absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="relative">
              <p className="mx-auto max-w-4xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                &ldquo;To be the No. 1 soap brand in Africa.&rdquo;
              </p>
              <p className="mt-10 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-primary-light">
                ARJ Soap Detergent &amp; Manufacturing
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <SectionHeading
              eyebrow="What This Means"
              title="Quality first, brand second"
              description="Our vision starts with the bar itself. By keeping AMARD and ADWA long-lasting, high-foaming and soft on hands, we build the trust needed to grow beyond Sebeta and beyond Ethiopia."
            />
            <ul className="mt-8 space-y-4">
              {[
                {
                  title: "Consistent products",
                  body: "Every carton that leaves the facility should match the last one.",
                },
                {
                  title: "Recognisable brands",
                  body: "Clean, attractive packaging that customers can identify instantly.",
                },
                {
                  title: "Reliable supply",
                  body: "Product stock kept ready at the facility for distribution.",
                },
              ].map((item) => (
                <li key={item.title} className="surface-card p-6">
                  <h3 className="display-title text-base text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="photo-frame grid-tint reveal bg-background p-10">
            <img
              src={adwaImage}
              alt="ADWA Laundry Soap packaging manufactured by ARJ"
              loading="lazy"
              width={640}
              height={640}
              className="mx-auto h-72 w-full object-contain sm:h-[24rem]"
            />
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
