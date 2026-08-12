import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { useProducts } from "@/components/site/products";
import { photos } from "@/components/site/photos";
import { LocalizedHead, useCopy, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Our Brands | AMARD & ADWA Laundry Soap by ARJ" },
      {
        name: "description",
        content:
          "AMARD and ADWA are the two solid laundry soap brands manufactured by ARJ Soap Detergent & Manufacturing in Sebeta, Ethiopia.",
      },
      { property: "og:title", content: "Our Brands — AMARD and ADWA" },
      {
        property: "og:description",
        content:
          "Two solid laundry soap brands manufactured at the ARJ facility in Sebeta, Ethiopia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Brands,
});

const copy = {
  en: {
    hero: {
      eyebrow: "Our Brands",
      title: "AMARD and ADWA laundry soap",
      description:
        "Two laundry soap brands, manufactured by ARJ Soap Detergent & Manufacturing at its facility in Sebeta, Ethiopia.",
    },
    manufacturedBy: "Manufactured by ARJ Soap Detergent & Manufacturing",
    gallery: {
      eyebrow: "ADWA — Victory For Purity",
      title: "ADWA in everyday laundry",
      description: "ADWA laundry soap bars, produced at the ARJ facility in Sebeta, Ethiopia.",
      photos: [
        { alt: "ADWA laundry soap bar on a wooden washboard with water running over it" },
        { alt: "ADWA yellow laundry soap bar on a washboard beside folded towels" },
        { alt: "ADWA laundry soap bar resting on white folded towels" },
        { alt: "ADWA laundry soap bar on a marble board in front of freshly washed white clothes" },
      ],
    },
    oneManufacturer: {
      eyebrow: "One Manufacturer",
      title: "Both brands, one manufacturer",
      description:
        "AMARD and ADWA share the same manufacturing standards, the same modern machinery and the same quality focus at the ARJ facility in Sebeta, Ethiopia.",
    },
    headTitle: "Our Brands | AMARD & ADWA Laundry Soap by ARJ",
    headDescription:
      "AMARD and ADWA are the two solid laundry soap brands manufactured by ARJ Soap Detergent & Manufacturing in Sebeta, Ethiopia.",
  },
  am: {
    hero: {
      eyebrow: "የእኛ ብራንዶች",
      title: "የአማርድ እና የአድዋ ልብስ ማጠቢያ ሳሙና",
      description:
        "አርጂ ሳሙና ዲተርጀንት እና ማምረቻ በሰበታ፣ ኢትዮጵያ በሚገኘው ፋብሪካው የሚያመርታቸው ሁለት የልብስ ማጠቢያ ሳሙና ብራንዶች።",
    },
    manufacturedBy: "በአርጂ ሳሙና ዲተርጀንት እና ማምረቻ የተመረተ",
    gallery: {
      eyebrow: "አድዋ — ለንፅህና ድል",
      title: "አድዋ በዕለት ተዕለት ልብስ ማጠብ",
      description: "በሰበታ፣ ኢትዮጵያ በሚገኘው የአርጂ ፋብሪካ የሚመረቱ የአድዋ ልብስ ማጠቢያ ሳሙና ብሎኮች።",
      photos: [
        { alt: "የአድዋ ልብስ ማጠቢያ ሳሙና በእንጨት ማጠቢያ ሰሌዳ ላይ ውሃ ሲፈስስበት" },
        { alt: "ቢጫ የአድዋ ልብስ ማጠቢያ ሳሙና በማጠቢያ ሰሌዳ ላይ ከታጠፉ ፎጣዎች አጠገብ" },
        { alt: "የአድዋ ልብስ ማጠቢያ ሳሙና በነጭ የታጠፉ ፎጣዎች ላይ ተቀምጦ" },
        { alt: "የአድዋ ልብስ ማጠቢያ ሳሙና በእምነበረድ ሰሌዳ ላይ ከታጠቡ ነጭ ልብሶች ፊት ለፊት" },
      ],
    },
    oneManufacturer: {
      eyebrow: "አንድ አምራች",
      title: "ሁለት ብራንዶች፣ አንድ አምራች",
      description:
        "አማርድ እና አድዋ በሰበታ፣ ኢትዮጵያ በሚገኘው የአርጂ ፋብሪካ ተመሳሳይ የማምረቻ ደረጃዎችን፣ ተመሳሳይ ዘመናዊ ማሽነሪ እና ተመሳሳይ የጥራት ትኩረት ይጋራሉ።",
    },
    headTitle: "የእኛ ብራንዶች | አማርድ እና አድዋ የልብስ ማጠቢያ ሳሙና በአርጂ",
    headDescription:
      "አማርድ እና አድዋ አርጂ ሳሙና ዲተርጀንት እና ማምረቻ በሰበታ፣ ኢትዮጵያ የሚያመርታቸው ሁለት ጠንካራ የልብስ ማጠቢያ ሳሙና ብራንዶች ናቸው።",
  },
} satisfies Record<Lang, unknown>;

function Brands() {
  const c = useCopy(copy);
  const products = useProducts();

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

      {products.map((product, index) => (
        <section
          key={product.slug}
          id={product.slug}
          className={
            index % 2 === 0
              ? "scroll-mt-28 py-20 sm:py-28"
              : "scroll-mt-28 border-y border-border bg-secondary py-20 sm:py-28"
          }
        >
          <div
            className={`section-shell grid gap-12 lg:items-center ${
              index % 2 === 0 ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]"
            }`}
          >
            <div className={index % 2 === 0 ? "" : "lg:order-2"}>
              <div className="photo-frame grid-tint bg-background p-10">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="mx-auto h-72 w-full object-contain sm:h-[24rem]"
                />
              </div>
            </div>
            <div className={index % 2 === 0 ? "reveal" : "reveal lg:order-1"}>
              <span className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 font-display text-sm font-extrabold uppercase tracking-[0.18em] text-primary-foreground">
                {product.brand}
              </span>
              <h2 className="display-title mt-5 text-3xl text-foreground sm:text-5xl">
                {product.name}
              </h2>
              <p className="mt-3 text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-primary">
                {product.type}
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <ul className="mt-7 grid gap-2.5 border-t border-border pt-7 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {c.manufacturedBy}
              </p>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading
            centered
            eyebrow={c.gallery.eyebrow}
            title={c.gallery.title}
            description={c.gallery.description}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: photos.adwaVictoryGrater, alt: c.gallery.photos[0]?.alt ?? "" },
              { src: photos.adwaSunkissed, alt: c.gallery.photos[1]?.alt ?? "" },
              { src: photos.adwaVictoryTowels, alt: c.gallery.photos[2]?.alt ?? "" },
              { src: photos.adwaLaundryLine, alt: c.gallery.photos[3]?.alt ?? "" },

            ].map((photo) => (
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

      <section className="border-t border-border bg-secondary py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading
            centered
            eyebrow={c.oneManufacturer.eyebrow}
            title={c.oneManufacturer.title}
            description={c.oneManufacturer.description}
          />
        </div>
      </section>

      <ContactCta />
    </>
  );
}
