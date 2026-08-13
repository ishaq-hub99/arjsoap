import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { photos } from "@/components/site/photos";
import { LocalizedHead, useCopy, type Lang } from "@/lib/i18n";

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

const copy = {
  en: {
    hero: {
      eyebrow: "About ARJ",
      title: "A quality-focused Ethiopian soap manufacturer",
      description:
        "ARJ Soap Detergent & Manufacturing produces solid laundry soap in Sebeta, Ethiopia, through its brands AMARD and ADWA.",
    },
    story: {
      eyebrow: "Company Story",
      title: "Manufacturing Quality Since 2022",
      description:
        "ARJ Soap Detergent & Manufacturing was established in 2022 G.C. / 2014 E.C. in Sebeta, Ethiopia. The company manufactures solid laundry soap using modern machinery imported from China, with production, packaging and product storage handled at its facility.",
    },
    storyBody:
      "ARJ produces two solid laundry soap brands, AMARD and ADWA, both made at its facility in Sebeta.",
    factoryCta: "Explore Our Factory",
    photoAlt: "Stacks of wrapped AMARD laundry soap bars at the ARJ facility in Sebeta",
    timelineEyebrow: "Timeline",
    timelineTitle: "How ARJ developed",
    timeline: [
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
    ],
    values: [
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
    ],
    headTitle: "About ARJ | Ethiopian Laundry Soap Manufacturer in Sebeta",
    headDescription:
      "ARJ Soap Detergent & Manufacturing was established in 2022 G.C. / 2014 E.C. in Sebeta, Ethiopia and manufactures AMARD and ADWA laundry soap.",
  },
  am: {
    hero: {
      eyebrow: "ስለ ኤ.አር.ጄ",
      title: "ጥራትን ማዕከል ያደረገ የኢትዮጵያ ሳሙና አምራች",
      description:
        "ኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻ በሰበታ፣ ኢትዮጵያ በአማርድ እና በአድዋ ብራንዶቹ ጠንካራ የልብስ ማጠቢያ ሳሙና ያመርታል።",
    },
    story: {
      eyebrow: "የድርጅቱ ታሪክ",
      title: "ከ2022 ዓ.ም ጀምሮ ጥራትን ስናመርት",
      description:
        "ኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻ በ2022 እ.ኤ.አ. (2014 ዓ.ም) በሰበታ፣ ኢትዮጵያ ተመሠረተ። ድርጅቱ ከቻይና በገባ ዘመናዊ ማሽነሪ ጠንካራ የልብስ ማጠቢያ ሳሙና ያመርታል፣ ምርት፣ ማሸግ እና ማከማቻ ሁሉም በፋብሪካው ውስጥ ይከናወናሉ።",
    },
    storyBody:
      "ኤ.አር.ጄ በሰበታ ፋብሪካው ሁለት ጠንካራ የልብስ ማጠቢያ ሳሙና ብራንዶችን ያመርታል፣ አማርድ እና አድዋ።",
    factoryCta: "ፋብሪካችንን ይመልከቱ",
    photoAlt: "የታሸጉ የአማርድ ልብስ ማጠቢያ ሳሙና ብሎኮች ክምር በኤ.አር.ጄ ፋብሪካ ውስጥ",
    timelineEyebrow: "የጊዜ መስመር",
    timelineTitle: "የኤ.አር.ጄ ጉዞ",
    timeline: [
      {
        year: "2022 እ.ኤ.አ. / 2014 ዓ.ም",
        title: "ኤ.አር.ጄ ተመሠረተ",
        body: "ኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻ ጥራት ያለው ጠንካራ የልብስ ማጠቢያ ሳሙና ለማምረት በሰበታ፣ ኢትዮጵያ ተቋቋመ።",
      },
      {
        year: "የማምረቻ ዝግጅት",
        title: "ዘመናዊ ማሽነሪ ተገጠመ",
        body: "ፋብሪካው ከቻይና በገባ ዘመናዊ የማምረቻ ማሽነሪ ተገጥሟል።",
      },
      {
        year: "ብራንዶቻችን",
        title: "አማርድ እና አድዋ ልብስ ማጠቢያ ሳሙና",
        body: "ኤ.አር.ጄ ሁለት ጠንካራ የልብስ ማጠቢያ ሳሙና ብራንዶችን ያመርታል፣ አማርድ እና አድዋ፣ ሁለቱም በኤ.አር.ጄ ፋብሪካ ውስጥ ይመረታሉ።",
      },
      {
        year: "ዛሬ",
        title: "ምርት እና ስርጭት",
        body: "ምርቶች በፋብሪካው ውስጥ ይመረታሉ፣ ይታሸጋሉ እና ይከማቻሉ፣ ስርጭትም በዋናነት ከፋብሪካው እና በመርካቶ በኩል ይካሄዳል።",
      },
    ],
    values: [
      {
        title: "የማምረት ትኩረት",
        body: "ለዕለታዊ የልብስ ማጠቢያ የሚሆን ጠንካራ ሳሙና።",
      },
      {
        title: "ዘመናዊ ማሽነሪ",
        body: "ምርት ከቻይና በገባ ዘመናዊ የማምረቻ ማሽነሪ ይደገፋል።",
      },
      {
        title: "ለጥራት ያለ ቁርጠኝነት",
        body: "ወጥ የሆኑ ሳሙና ብሎኮች፣ ንፁህ ማሸጊያ እና ጥራትን ማዕከል ያደረገ የምርት ሂደት።",
      },
    ],
    headTitle: "ስለ ኤ.አር.ጄ | በሰበታ የሚገኝ የኢትዮጵያ ልብስ ማጠቢያ ሳሙና አምራች",
    headDescription:
      "ኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻ በ2022 እ.ኤ.አ. (2014 ዓ.ም) በሰበታ፣ ኢትዮጵያ ተመስርቶ አማርድ እና አድዋ ልብስ ማጠቢያ ሳሙናዎችን ያመርታል።",
  },
} satisfies Record<Lang, unknown>;

function About() {
  const c = useCopy(copy);
  return (
    <>
      <LocalizedHead
        title={{ en: copy.en.headTitle, am: copy.am.headTitle }}
        description={{ en: copy.en.headDescription, am: copy.am.headDescription }}
      />
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} description={c.hero.description} />

      <section className="py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <SectionHeading
              eyebrow={c.story.eyebrow}
              title={c.story.title}
              description={c.story.description}
            />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{c.storyBody}</p>
            <Link to="/factory" className="btn-primary mt-9">
              {c.factoryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="photo-frame reveal bg-background">
            <img
              src={photos.amardBarsStacked}
              alt={c.photoAlt}
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
          <SectionHeading eyebrow={c.timelineEyebrow} title={c.timelineTitle} />
          <ol className="mt-12 space-y-6 border-l-2 border-primary/25 pl-7">
            {c.timeline.map((item) => (
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
          {c.values.map((item) => (
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
