import { createFileRoute } from "@tanstack/react-router";

import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { adwaImage } from "@/components/site/products";
import { LocalizedHead, useCopy, type Lang } from "@/lib/i18n";

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

const copy = {
  en: {
    hero: {
      eyebrow: "Our Vision",
      title: "Our Vision",
      description:
        "ARJ manufactures laundry soap in Sebeta, Ethiopia with an ambition that reaches across the continent.",
    },
    quote: "\u201cTo be the No. 1 soap brand in Africa.\u201d",
    company: "ARJ Soap Detergent & Manufacturing",
    meaning: {
      eyebrow: "What This Means",
      title: "Quality first, brand second",
      description:
        "Our vision starts with the bar itself. By keeping AMARD and ADWA long-lasting, high-foaming and soft on hands, we build the trust needed to grow beyond Sebeta and beyond Ethiopia.",
    },
    items: [
      { title: "Consistent products", body: "Every carton that leaves the facility should match the last one." },
      {
        title: "Recognisable brands",
        body: "Clean, attractive packaging that customers can identify instantly.",
      },
      { title: "Reliable supply", body: "Product stock kept ready at the facility for distribution." },
    ],
    alt: "ADWA Laundry Soap packaging manufactured by ARJ",
    head: {
      title: "Our Vision | To Be the No. 1 Soap Brand in Africa",
      description:
        "The vision of ARJ Soap Detergent & Manufacturing is to be the No. 1 soap brand in Africa, built on quality laundry soap made in Sebeta, Ethiopia.",
    },
  },
  am: {
    hero: {
      eyebrow: "ራዕያችን",
      title: "ራዕያችን",
      description:
        "አርጂ በሰበታ፣ ኢትዮጵያ የልብስ ማጠቢያ ሳሙና የሚያመርት ሲሆን ራዕዩም አህጉሪቱን ሁሉ የሚደርስ ነው።",
    },
    quote: "«በአፍሪካ ቁጥር አንድ የሳሙና ብራንድ መሆን።»",
    company: "አርጂ ሳሙና ዲተርጀንት እና ማምረቻ",
    meaning: {
      eyebrow: "ይህ ምን ማለት ነው",
      title: "መጀመሪያ ጥራት፣ ቀጥሎ ብራንድ",
      description:
        "ራዕያችን የሚጀምረው ከራሱ ከሳሙናው ነው። AMARD እና ADWA ዘላቂ፣ በደንብ የሚያረጋግጡ እና ለቆዳ ገር እንዲሆኑ በማድረግ ከሰበታ እና ከኢትዮጵያ ውጪ ለማደግ የሚያስፈልገውን እምነት እንገነባለን።",
    },
    items: [
      { title: "ወጥ ምርቶች", body: "ከፋብሪካው የሚወጣ እያንዳንዱ ካርቶን ከቀዳሚው ጋር መመሳሰል አለበት።" },
      {
        title: "የሚታወቁ ብራንዶች",
        body: "ደንበኞች ወዲያውኑ ሊለዩት የሚችሉት ንፁህና ማራኪ ማሸጊያ።",
      },
      { title: "ታማኝ አቅርቦት", body: "ለስርጭት ዝግጁ የሆነ የምርት ክምችት በፋብሪካው ውስጥ ይያዛል።" },
    ],
    alt: "በአርጂ የተመረተ የADWA ልብስ ማጠቢያ ሳሙና ማሸጊያ",
    head: {
      title: "ራዕያችን | በአፍሪካ ቁጥር አንድ የሳሙና ብራንድ መሆን",
      description:
        "የአርጂ ሳሙና ዲተርጀንት እና ማምረቻ ራዕይ በአፍሪካ ቁጥር አንድ የሳሙና ብራንድ መሆን ሲሆን በሰበታ፣ ኢትዮጵያ በሚመረት ጥራት ያለው የልብስ ማጠቢያ ሳሙና ላይ የተመሰረተ ነው።",
    },
  },
} satisfies Record<Lang, unknown>;

function Vision() {
  const c = useCopy(copy);
  return (
    <>
      <LocalizedHead title={{ en: copy.en.head.title, am: copy.am.head.title }} description={{ en: copy.en.head.description, am: copy.am.head.description }} />
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} description={c.hero.description} />

      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-3xl bg-primary-dark px-6 py-24 text-center sm:px-12">
            <div className="grid-tint absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="relative">
              <p className="mx-auto max-w-4xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                {c.quote}
              </p>
              <p className="mt-10 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-primary-light">
                {c.company}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <SectionHeading
              eyebrow={c.meaning.eyebrow}
              title={c.meaning.title}
              description={c.meaning.description}
            />
            <ul className="mt-8 space-y-4">
              {c.items.map((item) => (
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
              alt={c.alt}
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
