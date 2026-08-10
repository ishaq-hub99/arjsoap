import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, Factory, PackageCheck, ShieldCheck, Target } from "lucide-react";

import { ContactCta } from "@/components/site/ContactCta";
import { SectionHeading } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { amardImage, products, whyChooseArj } from "@/components/site/products";
import factoryImage from "@/assets/factory.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARJ Soap Detergent & Manufacturing | AMARD & ADWA Laundry Soap" },
      {
        name: "description",
        content:
          "ARJ Soap Detergent & Manufacturing in Sebeta, Ethiopia produces quality solid laundry soaps through its brands AMARD and ADWA.",
      },
      { property: "og:title", content: "ARJ Soap Detergent & Manufacturing" },
      {
        property: "og:description",
        content:
          "Quality laundry soap, made in Ethiopia. Manufacturers of AMARD and ADWA laundry soap in Sebeta.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="section-shell grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="rise-in">
            <span className="eyebrow">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Sebeta, Ethiopia
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              Quality Laundry Soap, Made in Ethiopia
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              ARJ Soap Detergent &amp; Manufacturing produces quality solid laundry soaps through its
              trusted brands, AMARD and ADWA.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-card">
              <img
                src={amardImage}
                alt="AMARD Laundry Soap bar in green ARJ packaging"
                width={640}
                height={640}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="Manufacturing Quality Since 2022"
            title="An Ethiopian soap manufacturer focused on clean clothes"
            description="ARJ Soap Detergent & Manufacturing was established in 2022 G.C. / 2014 E.C. in Sebeta, Ethiopia. The company manufactures solid laundry soap for people who want clean clothes, using modern machinery imported from China. Although the factory is not extremely large, it has significant production and maintains a substantial amount of product stock."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Building2, title: "Established", body: "2022 G.C. / 2014 E.C." },
              { icon: Factory, title: "Factory", body: "Sebeta, Ethiopia" },
              { icon: PackageCheck, title: "Brands", body: "AMARD and ADWA laundry soap" },
              {
                icon: ShieldCheck,
                title: "Approved",
                body: "Qualified and approved by the Ethiopian government",
              },
            ].map((item) => (
              <div key={item.title} className="surface-card p-5">
                <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-bold uppercase tracking-wider text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading
            centered
            eyebrow="Our Products"
            title="Two solid laundry soap brands"
            description="Both brands are manufactured at the ARJ factory in Sebeta, Ethiopia."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeading
            centered
            eyebrow="Product Qualities"
            title="Why Choose ARJ?"
            description="What our customers can expect from AMARD and ADWA laundry soap."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseArj.map((item) => (
              <div key={item.title} className="surface-card p-6">
                <h3 className="text-base font-extrabold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <img
            src={factoryImage}
            alt="Soap production line inside the ARJ factory"
            loading="lazy"
            width={1600}
            height={912}
            className="w-full rounded-2xl border border-border object-cover shadow-card"
          />
          <div>
            <SectionHeading
              eyebrow="Our Factory"
              title="Modern machinery in Sebeta, Ethiopia"
              description="The ARJ factory manufactures both AMARD and ADWA laundry soap using modern manufacturing machinery imported from China. Production, packaging and product storage are all handled at the facility, with distribution mainly from the factory and through Merkato."
            />
            <Link
              to="/factory"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Visit our factory page
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell rounded-2xl border border-border bg-accent px-6 py-14 text-center sm:px-12">
          <Target className="mx-auto h-8 w-8 text-primary" aria-hidden="true" />
          <span className="eyebrow mt-4">Our Vision</span>
          <p className="mx-auto mt-4 max-w-3xl font-display text-2xl font-extrabold leading-tight text-foreground sm:text-4xl">
            &ldquo;To be the No. 1 soap brand in Africa.&rdquo;
          </p>
          <Link
            to="/vision"
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-primary px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Read our vision
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
