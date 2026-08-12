import { createFileRoute } from "@tanstack/react-router";
import { Boxes, ClipboardCheck, Cog, Factory, PackageCheck, Truck, Warehouse } from "lucide-react";

import { ContactCta } from "@/components/site/ContactCta";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { factoryGallery, photos } from "@/components/site/photos";
import { LocalizedHead, useCopy, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/factory")({
  head: () => ({
    meta: [
      { title: "Our Factory | ARJ Soap Manufacturing in Sebeta, Ethiopia" },
      {
        name: "description",
        content:
          "Inside the ARJ manufacturing facility in Sebeta, Ethiopia: modern machinery imported from China, production, packaging, storage and distribution.",
      },
      { property: "og:title", content: "Our Factory — ARJ Soap Detergent & Manufacturing" },
      {
        property: "og:description",
        content:
          "A dedicated Ethiopian soap manufacturing facility in Sebeta, equipped with modern machinery imported from China.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FactoryPage,
});

const sectionIcons = [Factory, Cog, Boxes, PackageCheck, Warehouse, Truck];
const processIcons = [Cog, ClipboardCheck, PackageCheck, Warehouse, Truck];

const copy = {
  en: {
    hero: {
      eyebrow: "Our Factory",
      title: "Our Manufacturing Facility",
      description:
        "Based in Sebeta, Ethiopia, ARJ operates a dedicated manufacturing facility equipped with modern machinery imported from China.",
    },
    packagingAlt: "ADWA branded wrapping film feeding through the packaging machine at the ARJ facility",
    sections: [
      {
        title: "Factory Overview",
        body: "ARJ operates a dedicated manufacturing facility in Sebeta, Ethiopia, where both AMARD and ADWA solid laundry soap are produced.",
      },
      {
        title: "Modern Machinery",
        body: "The facility is equipped with modern manufacturing machinery imported from China.",
      },
      {
        title: "Production",
        body: "Soap is produced, formed and cut into solid bars for laundry use as part of an in-house production process.",
      },
      {
        title: "Packaging",
        body: "Bars are wrapped in clearly branded AMARD and ADWA packaging and packed into cartons.",
      },
      {
        title: "Storage",
        body: "Finished cartons are held in the product storage area at the facility, ready for dispatch.",
      },
      {
        title: "Distribution",
        body: "Products are distributed mainly from the facility and through Merkato.",
      },
    ],
    process: {
      eyebrow: "Production Process",
      title: "From manufacturing to distribution",
      description: "How AMARD and ADWA laundry soap move through the ARJ facility.",
      steps: ["Manufacturing", "Quality Check", "Packaging", "Storage", "Distribution"],
    },
    storage: {
      eyebrow: "Storage & Distribution",
      title: "Product stock ready for distribution",
      description:
        "Finished AMARD and ADWA cartons are stored at the facility and released for distribution from the factory and through Merkato.",
      body: "Cartons are palletised in the storage area before dispatch.",
      photoAlt: "Pallets of ADWA laundry soap cartons stacked in the storage area",
    },
    gallery: {
      eyebrow: "Factory Gallery",
      title: "Inside the ARJ facility",
      description: "Production, wrapping, packing and storage of AMARD and ADWA laundry soap in Sebeta, Ethiopia.",
      alts: [
        "ADWA branded wrapping film running through the packaging machine at the ARJ factory",
        "Freshly formed yellow ADWA laundry soap bar with embossed logo at the ARJ factory",
        "Stacks of wrapped AMARD laundry soap bars ready for packing",
        "Green wrapped 200g ADWA laundry soap bars packed into a carton",
        "Pallets of 50 x 200g ADWA cartons stacked in the ARJ product storage area",
        "Stacked ADWA laundry soap cartons packed 50 x 220g at the factory",
      ],
    },
    headTitle: "Our Factory | ARJ Soap Manufacturing in Sebeta, Ethiopia",
    headDescription:
      "Inside the ARJ manufacturing facility in Sebeta, Ethiopia: modern machinery imported from China, production, packaging, storage and distribution.",
  },
  am: {
    hero: {
      eyebrow: "የእኛ ፋብሪካ",
      title: "የእኛ ማምረቻ ፋብሪካ",
      description:
        "አርጂ በሰበታ፣ ኢትዮጵያ ውስጥ ከቻይና በገባ ዘመናዊ ማሽነሪ የተደራጀ ራሱን የቻለ ማምረቻ ፋብሪካ ያንቀሳቅሳል።",
    },
    packagingAlt: "የአድዋ ብራንድ ማሸጊያ ፊልም በአርጂ ፋብሪካ የማሸጊያ ማሽን ውስጥ ሲያልፍ",
    sections: [
      {
        title: "የፋብሪካ አጠቃላይ እይታ",
        body: "አርጂ በሰበታ፣ ኢትዮጵያ ራሱን የቻለ ማምረቻ ፋብሪካ ያንቀሳቅሳል፣ በዚያም አማርድ እና አድዋ ጠንካራ የልብስ ማጠቢያ ሳሙና ይመረታሉ።",
      },
      {
        title: "ዘመናዊ ማሽነሪ",
        body: "ፋብሪካው ከቻይና በገባ ዘመናዊ የማምረቻ ማሽነሪ የተደራጀ ነው።",
      },
      {
        title: "ምርት",
        body: "ሳሙና በውስጥ የማምረቻ ሂደት ውስጥ ተመርቶ፣ ተቀርፆ እና ለልብስ ማጠቢያ አገልግሎት ወደ ጠንካራ ብሎኮች ይቆረጣል።",
      },
      {
        title: "ማሸግ",
        body: "ብሎኮች በግልጽ በተለዩ የአማርድ እና የአድዋ ማሸጊያዎች ተጠቅልለው ወደ ካርቶን ይታሸጋሉ።",
      },
      {
        title: "ማከማቻ",
        body: "የተጠናቀቁ ካርቶኖች ለመላክ ዝግጁ ሆነው በፋብሪካው የምርት ማከማቻ ቦታ ይቀመጣሉ።",
      },
      {
        title: "ስርጭት",
        body: "ምርቶች በዋናነት ከፋብሪካው እና በመርካቶ በኩል ይሰራጫሉ።",
      },
    ],
    process: {
      eyebrow: "የማምረቻ ሂደት",
      title: "ከምርት እስከ ስርጭት",
      description: "አማርድ እና አድዋ የልብስ ማጠቢያ ሳሙና በአርጂ ፋብሪካ ውስጥ እንዴት እንደሚንቀሳቀሱ።",
      steps: ["ማምረት", "የጥራት ምርመራ", "ማሸግ", "ማከማቻ", "ስርጭት"],
    },
    storage: {
      eyebrow: "ማከማቻ እና ስርጭት",
      title: "ለስርጭት ዝግጁ የሆነ የምርት ክምችት",
      description:
        "የተጠናቀቁ የአማርድ እና የአድዋ ካርቶኖች በፋብሪካው ተከማችተው ከፋብሪካው እና በመርካቶ በኩል ለስርጭት ይለቀቃሉ።",
      body: "ካርቶኖች ከመላካቸው በፊት በማከማቻ ቦታው ፓሌት ላይ ይደረደራሉ።",
      photoAlt: "የአድዋ ልብስ ማጠቢያ ሳሙና ካርቶኖች ፓሌቶች በማከማቻ ቦታ ተደራርበው",
    },
    gallery: {
      eyebrow: "የፋብሪካ ማዕከለ-ስዕላት",
      title: "በአርጂ ፋብሪካ ውስጥ",
      description: "የአማርድ እና የአድዋ የልብስ ማጠቢያ ሳሙና ምርት፣ ማሸግ እና ማከማቻ በሰበታ፣ ኢትዮጵያ።",
      alts: [
        "የአድዋ ብራንድ ማሸጊያ ፊልም በአርጂ ፋብሪካ የማሸጊያ ማሽን ውስጥ ሲያልፍ",
        "አዲስ የተቀረፀ ቢጫ የአድዋ ልብስ ማጠቢያ ሳሙና ብሎክ በተቀረጸ አርማ በአርጂ ፋብሪካ",
        "የተጠቀለሉ የአማርድ ልብስ ማጠቢያ ሳሙና ብሎኮች ክምችት ለማሸግ ዝግጁ",
        "አረንጓዴ የተጠቀለሉ 200ግ የአድዋ ልብስ ማጠቢያ ሳሙና ብሎኮች በካርቶን የታሸጉ",
        "50 x 200ግ የአድዋ ካርቶኖች ፓሌቶች በአርጂ ምርት ማከማቻ ቦታ ተደራርበው",
        "የተደራረቡ የአድዋ ልብስ ማጠቢያ ሳሙና ካርቶኖች 50 x 220ግ በፋብሪካው የታሸጉ",
      ],
    },
    headTitle: "የእኛ ፋብሪካ | የአርጂ ሳሙና ማምረቻ በሰበታ፣ ኢትዮጵያ",
    headDescription:
      "በአርጂ ማምረቻ ፋብሪካ ውስጥ በሰበታ፣ ኢትዮጵያ፡ ከቻይና የገባ ዘመናዊ ማሽነሪ፣ ምርት፣ ማሸግ፣ ማከማቻ እና ስርጭት።",
  },
} satisfies Record<Lang, unknown>;

function FactoryPage() {
  const c = useCopy(copy);
  const sections = c.sections.map((s, i) => ({ ...s, icon: sectionIcons[i] }));
  const processSteps = c.process.steps.map((title, i) => ({
    step: String(i + 1).padStart(2, "0"),
    title,
    icon: processIcons[i],
  }));

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

      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="photo-frame reveal bg-background">
            <img
              src={photos.packagingMachine}
              alt={c.packagingAlt}
              loading="lazy"
              width={1600}
              height={912}
              className="w-full object-cover"
            />
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((item) => (
              <div key={item.title} className="surface-card reveal p-7">
                <item.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="display-title mt-5 text-lg text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTION PROCESS TIMELINE */}
      <section className="border-y border-border bg-secondary py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading
            centered
            eyebrow={c.process.eyebrow}
            title={c.process.title}
            description={c.process.description}
          />

          <ol className="relative mt-14 hidden lg:grid lg:grid-cols-5 lg:gap-6">
            <span
              className="absolute left-[10%] right-[10%] top-7 h-px bg-border"
              aria-hidden="true"
            />
            {processSteps.map((s) => (
              <li key={s.step} className="relative text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-border bg-background text-primary shadow-card">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-5 text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-primary">
                  {s.step}
                </p>
                <h3 className="display-title mt-2 text-base text-foreground">{s.title}</h3>
              </li>
            ))}
          </ol>

          <ol className="mt-12 space-y-5 border-l-2 border-primary/25 pl-7 lg:hidden">
            {processSteps.map((s) => (
              <li key={s.step} className="relative">
                <span
                  className="absolute -left-[2.2rem] top-5 grid h-5 w-5 place-items-center rounded-full border-2 border-primary bg-background"
                  aria-hidden="true"
                />
                <div className="surface-card flex items-center gap-4 p-5">
                  <s.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-primary">
                      {s.step}
                    </p>
                    <h3 className="display-title mt-1 text-base text-foreground">{s.title}</h3>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <SectionHeading
              eyebrow={c.storage.eyebrow}
              title={c.storage.title}
              description={c.storage.description}
            />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{c.storage.body}</p>
          </div>
          <div className="photo-frame reveal bg-background">
            <img
              src={photos.adwaCartonsWarehouse}
              alt={c.storage.photoAlt}
              loading="lazy"
              width={1408}
              height={912}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading
            centered
            eyebrow={c.gallery.eyebrow}
            title={c.gallery.title}
            description={c.gallery.description}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {factoryGallery.map((photo, i) => (
              <div key={photo.src} className="photo-frame reveal bg-background">
                <img
                  src={photo.src}
                  alt={c.gallery.alts[i]}
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

      <ContactCta />
    </>
  );
}
