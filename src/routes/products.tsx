import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { useProducts } from "@/components/site/products";
import { photos } from "@/components/site/photos";
import { LocalizedHead, useCopy, useT, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | AMARD & ADWA Solid Laundry Soap" },
      {
        name: "description",
        content:
          "Products of ARJ Soap Detergent & Manufacturing: AMARD Laundry Soap and ADWA Laundry Soap, solid laundry soap bars made in Sebeta, Ethiopia.",
      },
      { property: "og:title", content: "ARJ Products — AMARD & ADWA Laundry Soap" },
      {
        property: "og:description",
        content: "Solid laundry soap bars manufactured in Sebeta, Ethiopia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Products,
});

const copy = {
  en: {
    hero: {
      eyebrow: "Products",
      title: "Our solid laundry soaps",
      description: "ARJ produces two solid laundry soaps, both manufactured at our facility in Sebeta, Ethiopia.",
    },
    warehouseAlt: "Pallets of ADWA laundry soap cartons in the ARJ product storage area",
    availability: {
      eyebrow: "Availability",
      title: "Packed, stored and distributed",
      description:
        "Finished bars are packed into cartons and held in product storage at the facility. Distribution is mainly from the factory and through Merkato.",
    },
    packDetails: {
      label: "Pack details",
      body: "Pack sizes, carton quantities and unit weights can be published here once confirmed by ARJ.",
    },
    headTitle: "Products | AMARD & ADWA Solid Laundry Soap",
    headDescription:
      "Products of ARJ Soap Detergent & Manufacturing: AMARD Laundry Soap and ADWA Laundry Soap, solid laundry soap bars made in Sebeta, Ethiopia.",
  },
  am: {
    hero: {
      eyebrow: "ምርቶች",
      title: "ጠጣር የልብስ ሳሙናዎቻችን",
      description: "ኤ.አር.ጄ በሰበታ፣ ኢትዮጵያ በሚገኘው ፋብሪካችን የሚመረቱ ሁለት ጠጣር የልብስ ሳሙናዎችን ያመርታል።",
    },
    warehouseAlt: "የአድዋ የልብስ ሳሙና ካርቶኖች በኤ.አር.ጄ ምርት ማከማቻ ውስጥ ተደርድረው",
    availability: {
      eyebrow: "ዝግጁነት",
      title: "ታሽጎ፣ ተከማችቶ እና ተሰራጭቶ",
      description:
        "የተጠናቀቁ ሳሙና ብሎኮች በካርቶን ታሽገው በፋብሪካው የምርት ማከማቻ ውስጥ ይቀመጣሉ። ስርጭቱ በዋናነት ከፋብሪካው እና በመርካቶ በኩል ይካሄዳል።",
    },
    packDetails: {
      label: "የማሸጊያ ዝርዝር",
      body: "የማሸጊያ መጠን፣ የካርቶን ብዛት እና የክብደት መጠን ኤ.አር.ጄ ካረጋገጠ በኋላ እዚህ ይገለጻል።",
    },
    headTitle: "ምርቶች | አማርድ እና አድዋ ጠጣር የልብስ ሳሙና",
    headDescription:
      "የኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻ ምርቶች፦ አማርድ የልብስ ሳሙና እና አድዋ የልብስ ሳሙና፣ በሰበታ፣ ኢትዮጵያ የተመረቱ ጠጣር ሳሙና ብሎኮች።",
  },
} satisfies Record<Lang, unknown>;

function Products() {
  const c = useCopy(copy);
  const products = useProducts();
  const t = useT();

  return (
    <>
      <LocalizedHead
        title={{ en: copy.en.headTitle, am: copy.am.headTitle }}
        description={{ en: copy.en.headDescription, am: copy.am.headDescription }}
      />
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        description={c.hero.description}
      />

      <section className="py-16 sm:py-24 lg:py-28">
        <div className="section-shell grid gap-6 sm:gap-8 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="photo-frame reveal bg-background">
            <img
              src={photos.adwaCartonsWarehouse}
              alt={c.warehouseAlt}
              loading="lazy"
              width={1408}
              height={912}
              className="w-full object-cover"
            />
          </div>
          <div className="reveal">
            <SectionHeading
              eyebrow={c.availability.eyebrow}
              title={c.availability.title}
              description={c.availability.description}
            />
            <div className="mt-8 rounded-2xl border border-dashed border-input bg-background p-6">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                {c.packDetails.label}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{c.packDetails.body}</p>
            </div>
            <Link to="/contact" className="btn-primary mt-8 w-full sm:w-auto">
              {t("Request a Quote", "የዋጋ ጥያቄ ያቅርቡ")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
