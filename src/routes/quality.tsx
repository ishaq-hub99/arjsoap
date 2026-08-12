import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, ClipboardCheck, Layers, Repeat, ShieldCheck } from "lucide-react";

import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { LocalizedHead, useCopy, type Lang } from "@/lib/i18n";

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
  { key: "government", icon: ShieldCheck },
  { key: "quality", icon: ClipboardCheck },
  { key: "manufacturing", icon: Layers },
  { key: "consistency", icon: Repeat },
] as const;

const copy = {
  en: {
    pillars: {
      government: {
        title: "Government Approval",
        body: "ARJ Soap Detergent & Manufacturing is qualified and approved by the Ethiopian government.",
      },
      quality: {
        title: "Quality Control",
        body: "Production of AMARD and ADWA soap is carried out with quality as the main priority.",
      },
      manufacturing: {
        title: "Manufacturing Standards",
        body: "Manufacturing follows the standards required for soap production in Ethiopia.",
      },
      consistency: {
        title: "Product Consistency",
        body: "Bars are formed, cut and packed to keep size, shape and finish consistent.",
      },
    },
    hero: {
      eyebrow: "Quality & Standards",
      title: "Quality & Standards",
      description:
        "ARJ Soap Detergent & Manufacturing is qualified and approved by the Ethiopian government and has the certifications required for soap manufacturing.",
    },
    approach: { eyebrow: "Our Approach", title: "How we protect product quality" },
    certification: {
      eyebrow: "Certification",
      title: "Certification documentation",
      description:
        "ARJ holds the certifications required to manufacture soap in Ethiopia. Official documentation can be published in the spaces below once supplied.",
      boxTitle: "Certification documentation",
      boxBody: "Space reserved for official documentation supplied by ARJ.",
    },
    head: {
      title: "Quality & Standards | ARJ Soap Detergent & Manufacturing",
      description:
        "ARJ Soap Detergent & Manufacturing is qualified and approved by the Ethiopian government and holds the certifications required for soap manufacturing.",
    },
  },
  am: {
    pillars: {
      government: {
        title: "የመንግስት ፈቃድ",
        body: "አርጂ ሳሙና ዲተርጀንት እና ማምረቻ በኢትዮጵያ መንግስት ብቁ ሆኖ ፈቃድ የተሰጠው ድርጅት ነው።",
      },
      quality: {
        title: "የጥራት ቁጥጥር",
        body: "የAMARD እና ADWA ሳሙና ምርት ጥራትን በዋነኝነት ባማከለ መልኩ ይከናወናል።",
      },
      manufacturing: {
        title: "የማምረቻ ደረጃዎች",
        body: "ማምረቱ በኢትዮጵያ ውስጥ ለሳሙና ምርት የሚያስፈልጉትን ደረጃዎች ተከትሎ ይካሄዳል።",
      },
      consistency: {
        title: "የምርት ወጥነት",
        body: "ሳሙናዎቹ መጠናቸው፣ ቅርፃቸው እና አጨራረሳቸው ወጥ እንዲሆን ተቀርፀው፣ ተቆርጠው እና ይታሸጋሉ።",
      },
    },
    hero: {
      eyebrow: "ጥራት እና ደረጃዎች",
      title: "ጥራት እና ደረጃዎች",
      description:
        "አርጂ ሳሙና ዲተርጀንት እና ማምረቻ በኢትዮጵያ መንግስት ብቁ ሆኖ ፈቃድ የተሰጠው ሲሆን ለሳሙና ማምረቻ የሚያስፈልጉ ማረጋገጫዎችን ይዟል።",
    },
    approach: { eyebrow: "አካሄዳችን", title: "የምርት ጥራትን የምንጠብቅበት መንገድ" },
    certification: {
      eyebrow: "ማረጋገጫ",
      title: "የማረጋገጫ ሰነዶች",
      description:
        "አርጂ በኢትዮጵያ ውስጥ ሳሙና ለማምረት የሚያስፈልጉ ማረጋገጫዎችን ይዟል። ኦፊሴላዊ ሰነዶች ሲቀርቡ ከዚህ በታች ባሉት ቦታዎች ይታተማሉ።",
      boxTitle: "የማረጋገጫ ሰነዶች",
      boxBody: "በአርጂ ለሚቀርቡ ኦፊሴላዊ ሰነዶች የተያዘ ቦታ።",
    },
    head: {
      title: "ጥራት እና ደረጃዎች | አርጂ ሳሙና ዲተርጀንት እና ማምረቻ",
      description:
        "አርጂ ሳሙና ዲተርጀንት እና ማምረቻ በኢትዮጵያ መንግስት ብቁ ሆኖ ፈቃድ የተሰጠው ሲሆን ለሳሙና ማምረቻ የሚያስፈልጉ ማረጋገጫዎችን ይዟል።",
    },
  },
} satisfies Record<Lang, unknown>;

function Quality() {
  const c = useCopy(copy);
  return (
    <>
      <LocalizedHead title={{ en: copy.en.head.title, am: copy.am.head.title }} description={{ en: copy.en.head.description, am: copy.am.head.description }} />
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} description={c.hero.description} />

      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading centered eyebrow={c.approach.eyebrow} title={c.approach.title} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item) => {
              const p = c.pillars[item.key];
              return (
                <div key={item.key} className="surface-card reveal p-7">
                  <item.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  <h3 className="display-title mt-5 text-lg text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow={c.certification.eyebrow}
            title={c.certification.title}
            description={c.certification.description}
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
                    {c.certification.boxTitle}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">{c.certification.boxBody}</p>
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
