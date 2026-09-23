import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, ClipboardCheck, Layers, Repeat, ShieldCheck } from "lucide-react";

import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { photos } from "@/components/site/photos";
import { LocalizedHead, useCopy, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality & Standards | ARJ Soap Detergent & Manufacturing" },
      {
        name: "description",
        content:
          "ARJ Soap Detergent & Manufacturing is a soap manufacturing company in Sebeta, Ethiopia, focused on quality, standards and product consistency.",
      },
      { property: "og:title", content: "Quality & Standards — ARJ" },
      {
        property: "og:description",
        content:
          "Quality control, manufacturing standards and product consistency at the ARJ facility in Sebeta, Ethiopia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Quality,
});

const pillars = [
  { key: "responsible", icon: ShieldCheck },
  { key: "quality", icon: ClipboardCheck },
  { key: "manufacturing", icon: Layers },
  { key: "consistency", icon: Repeat },
] as const;

const copy = {
  en: {
    pillars: {
      responsible: {
        title: "Responsible Manufacturing",
        body: "Manufacturing at the ARJ facility in Sebeta, Ethiopia, is carried out with attention to hygiene and responsible production.",
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
        "ARJ Soap Detergent & Manufacturing is a soap manufacturing company in Sebeta, Ethiopia, focused on quality, standards and product consistency.",
    },
    approach: { eyebrow: "Our Approach", title: "How we protect product quality" },
    certification: {
      eyebrow: "Certification",
      title: "Certification Documentation",
      description:
        "ARJ maintains the documentation required for its soap manufacturing operations. Official certification documents can be published here once supplied.",
      note: "For distribution, wholesale or compliance enquiries, our team can provide the relevant documentation on request.",
      badge: "Documentation coming soon",
    },
    head: {
      title: "Quality & Standards | ARJ Soap Detergent & Manufacturing",
      description:
        "ARJ Soap Detergent & Manufacturing is a soap manufacturing company in Sebeta, Ethiopia, focused on quality, standards and product consistency.",
    },
  },
  am: {
    pillars: {
      responsible: {
        title: "ኃላፊነት የሚሰማው ማምረቻ",
        body: "ማምረቱ በሰበታ፣ ኢትዮጵያ በሚገኘው የኤ.አር.ጄ ፋብሪካ ንጽህናን እና ኃላፊነት የሚሰማውን የማምረቻ አካሄድ በመከተል ይካሄዳል።",
      },
      quality: {
        title: "የጥራት ቁጥጥር",
        body: "የአማርድ እና የአድዋ ሳሙና ምርት ሂደት ጥራትን በዋነኛነት መርህ አድርጎ ይከናወናል።",
      },
      manufacturing: {
        title: "የማምረቻ ደረጃዎች",
        body: "ማምረቱ በኢትዮጵያ ውስጥ ለሳሙና ምርት የተቀመጡ ደረጃዎችን ተከትሎ ይካሄዳል።",
      },
      consistency: {
        title: "የምርት ወጥነት",
        body: "ሳሙናዎቹ መጠናቸው፣ ቅርጻቸው እና አጨራረሳቸው ወጥ እንዲሆን በጥንቃቄ ተቀርፀው፣ ተቆርጠው ይታሸጋሉ።",
      },
    },
    hero: {
      eyebrow: "ጥራት እና ደረጃዎች",
      title: "ጥራት እና ደረጃዎች",
      description:
        "ኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻ በሰበታ፣ ኢትዮጵያ የሚገኝ የሳሙና አምራች ድርጅት ሲሆን ጥራት፣ የማምረቻ ደረጃዎች እና የምርት ወጥነት ላይ ያተኩራል።",
    },
    approach: { eyebrow: "አካሄዳችን", title: "የምርት ጥራትን የምንጠብቅበት መንገድ" },
    certification: {
      eyebrow: "ማረጋገጫ",
      title: "የማረጋገጫ ሰነዶች",
      description:
        "ኤ.አር.ጄ ለሳሙና ማምረቻ ሥራው የሚያስፈልጉ ሰነዶችን ይዟል። ኦፊሴላዊ የማረጋገጫ ሰነዶች ሲቀርቡ በዚህ ገጽ ላይ ይለጠፋሉ።",
      note: "ለስርጭት፣ ለጅምላ ግዢ ወይም ለሕጋዊ መስፈርት ጥያቄዎች ቡድናችን አግባብነት ያላቸውን ሰነዶች በጥያቄ መሠረት ማቅረብ ይችላል።",
      badge: "ሰነዶቹ በቅርቡ ይቀርባሉ",
    },
    head: {
      title: "ጥራት እና ደረጃዎች | ኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻ",
      description:
        "ኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻ በሰበታ፣ ኢትዮጵያ የሚገኝ የሳሙና አምራች ድርጅት ሲሆን ጥራት፣ የማምረቻ ደረጃዎች እና የምርት ወጥነት ላይ ያተኩራል።",
    },
  },
} satisfies Record<Lang, unknown>;

function Quality() {
  const c = useCopy(copy);
  return (
    <>
      <LocalizedHead
        title={{ en: copy.en.head.title, am: copy.am.head.title }}
        description={{ en: copy.en.head.description, am: copy.am.head.description }}
      />
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} description={c.hero.description} />

      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading centered eyebrow={c.approach.eyebrow} title={c.approach.title} />
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="photo-frame reveal bg-background">
              <img
                src={photos.adwaYellowBar}
                alt="ADWA laundry soap bar produced at the ARJ facility"
                loading="lazy"
                width={640}
                height={640}
                className="h-full min-h-80 w-full object-cover"
              />
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {pillars.map((item) => {
              const p = c.pillars[item.key];
              return (
                <div key={item.key} className="reveal bg-background p-7">
                  <item.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  <h3 className="display-title mt-5 text-lg text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              );
            })}
            </div>
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
          <div className="surface-card reveal mt-10 flex flex-col gap-5 p-7 sm:flex-row sm:items-start sm:gap-6 sm:p-9">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border bg-background text-primary">
              <BadgeCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {c.certification.note}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                {c.certification.badge}
              </span>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
