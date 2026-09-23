import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, Check, Factory, PackageCheck, ShieldCheck } from "lucide-react";

import { ContactCta } from "@/components/site/ContactCta";
import { SectionHeading } from "@/components/site/PageHero";
import { adwaImage, amardImage, useProducts } from "@/components/site/products";
import { photos } from "@/components/site/photos";
import { LocalizedHead, useCopy, type Lang } from "@/lib/i18n";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const copy = {
  en: {
    heroBadge: "ARJ Soap Detergent & Manufacturing · Sebeta, Ethiopia",
    heroTitle: "Quality Laundry Soap, Made in Ethiopia",
    heroDescription:
  "ARJ Soap Detergent & Manufacturing is an Ethiopian manufacturer of solid laundry soap, producing its own brands, AMARD and ADWA, at its facility in Sebeta.",
    exploreProducts: "View Products",
    contactUs: "Contact ARJ",
    aboutArj: "About ARJ",
    requestQuote: "Request a Quote",
    whyArj: {
      eyebrow: "Why ARJ?",
      title: "Why work with ARJ",
      description:
        "A local manufacturer focused on consistent production and dependable supply for retailers and distributors.",
      items: [
        {
          title: "Local Manufacturing",
          body: "Manufactured in Ethiopia at our own facility in Sebeta.",
        },
        {
          title: "Quality Focused",
          body: "Production and packaging are organised around consistent, dependable quality.",
        },
        {
          title: "Reliable Supply",
          body: "Finished stock is packed and stored at the facility, ready for dispatch.",
        },
        {
          title: "Growing Ethiopian Brands",
          body: "AMARD and ADWA are ARJ's own laundry soap brands.",
        },
      ],
    },

    relationshipLabel: "One manufacturer, two brands",
    relationshipBody:
      "The company's laundry soap is produced under these two brands.",
    laundrySoap: "Laundry Soap",
    manufacturedBy: "Manufactured by",
    manufacturerName: "ARJ Soap Detergent & Manufacturing",
    brands: {
      eyebrow: "Our Brands",
      title: "Our Brands",
      description: "Everyday laundry soap, made to clean effectively and last.",
    },
    manufacturedByArj: "Manufactured by ARJ",
    viewBrand: "View Brand",
    intro: {
      eyebrow: "Company Introduction",
      title: "Manufacturing Quality Since 2022",
      description:
        "Established in 2022 G.C. (2014 E.C.), ARJ Soap Detergent & Manufacturing is a soap manufacturing company based in Sebeta, Ethiopia. The company produces two solid laundry soap brands, AMARD and ADWA.",
    },
    introItems: [
      { icon: Building2, title: "Established", body: "2022 G.C. / 2014 E.C." },
      { icon: Factory, title: "Facility", body: "Sebeta, Ethiopia" },
      { icon: PackageCheck, title: "Brands", body: "AMARD and ADWA laundry soap" },
      {
        icon: ShieldCheck,
        title: "Quality Focus",
        body: "Quality-focused soap manufacturing in Sebeta, Ethiopia",
      },
    ],
    learnMore: "Learn More About ARJ",
    introPhotoAlt: "Stacks of wrapped AMARD laundry soap bars at the ARJ facility in Sebeta",
    why: {
      eyebrow: "Product Qualities",
      title: "Why Choose ARJ?",
      description: "What customers can expect from AMARD and ADWA laundry soap.",
    },
    factory: {
      eyebrow: "Our Factory",
      title: "Our Manufacturing Facility",
      description:
        "Based in Sebeta, Ethiopia, ARJ operates a dedicated manufacturing facility equipped with modern machinery imported from China.",
    },
    factoryPhotoAlt:
      "Pallets of ADWA laundry soap cartons stored at the ARJ manufacturing facility",
    factoryBody:
      "Our products are manufactured, packaged, stored and distributed from our facility, with distribution also reaching Merkato.",
    exploreFactory: "Explore Our Factory",
    visionLabel: "Our Vision",
    visionQuote: "\u201cTo be the No. 1 soap brand in Africa.\u201d",
    productsStrip: {
      eyebrow: "Our Products",
      title: "Two solid laundry soap brands",
      description: "Product details, features and packaging for each brand.",
    },
    seeProductDetails: "See full product details and features",
    productsLink: "Products",
    qualityStandards: "Quality & standards at ARJ",
    qualityLink: "Quality",
    headTitle: "ARJ Soap Detergent & Manufacturing | AMARD & ADWA Laundry Soap",
    headDescription:
      "ARJ Soap Detergent & Manufacturing in Sebeta, Ethiopia produces quality solid laundry soaps through its brands AMARD and ADWA.",
  },
  am: {
    heroBadge: "ኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻ · ሰበታ፣ ኢትዮጵያ",

heroTitle: "ጥራት ያለው የልብስ ማጠቢያ ሳሙና፣ በኢትዮጵያ የተመረተ",

heroDescription:
  "ኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻ በሰበታ ፋብሪካው የራሱን የልብስ ማጠቢያ ሳሙና ብራንዶች፣ አማርድ እና አድዋን የሚያመርት የኢትዮጵያ አምራች ነው።",
    exploreProducts: "ምርቶቻችንን ይመልከቱ",
    contactUs: "ኤ.አር.ጄን ያግኙ",
    aboutArj: "ስለ ኤ.አር.ጄ",
    requestQuote: "የዋጋ ጥያቄ ያቅርቡ",
    whyArj: {
      eyebrow: "ለምን ኤ.አር.ጄ?",
      title: "ለምን ኤ.አር.ጄን ይመርጣሉ?",
      description: "ወጥ የሆነ ምርትና አስተማማኝ አቅርቦት ላይ የሚያተኩር የአገር ውስጥ አምራች።",
      items: [
        {
          title: "የአገር ውስጥ ምርት",
          body: "በሰበታ በሚገኘው የራሳችን ፋብሪካ በኢትዮጵያ የሚመረት።",
        },
        {
         title: "ጥራትን ያስቀደመ",
          body: "ምርትና ማሸግ ወጥ የሆነ ጥራትን ለማረጋገጥ ተደራጅተዋል።",
        },
        {
          title: "አስተማማኝ አቅርቦት",
          body: "የተጠናቀቀ ምርት በፋብሪካው ታሽጎ ተከማችቶ ለመላክ ዝግጁ ይሆናል።",
        },
        {
          title: "እያደጉ ያሉ የኢትዮጵያ ብራንዶች",
          body: "አማርድ እና አድዋ የኤ.አር.ጄ የራሱ የልብስ ማጠቢያ ሳሙና ብራንዶች ናቸው።",
        },
      ],
    },

    relationshipLabel: "አንድ አምራች፣ ሁለት ብራንዶች",
    relationshipBody: "የድርጅቱ የልብስ ማጠቢያ ሳሙና በእነዚህ ሁለት ብራንዶች ይቀርባል።",
    laundrySoap: "ልብስ ማጠቢያ ሳሙና",
    manufacturedBy: "አምራች",
    manufacturerName: "ኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻ",
    brands: {
      eyebrow: "ብራንዶቻችን",
      title: "ብራንዶቻችን",
      description: "ለዕለት ተዕለት ልብስ ማጠቢያ የተዘጋጁ — ውጤታማ የማጽዳት አቅም ያላቸው እና ረጅም ጊዜ የሚቆዩ።",
    },
    manufacturedByArj: "በኤ.አር.ጄ የተመረተ",
    viewBrand: "ብራንዱን ይመልከቱ",
    intro: {
      eyebrow: "ስለ ድርጅቱ",
      title: "ከ2022 ዓ.ም ጀምሮ ጥራትን ስናመርት",
      description:
        "በ2022 እ.ኤ.አ. (2014 ዓ.ም) የተመሠረተው ኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻ በሰበታ፣ ኢትዮጵያ የሚገኝ የሳሙና አምራች ድርጅት ነው። ድርጅቱ ሁለት ጠንካራ የልብስ ማጠቢያ ሳሙና ብራንዶችን ያመርታል፣ አማርድ እና አድዋ።",
    },
    introItems: [
      { icon: Building2, title: "የተመሠረተበት", body: "2022 እ.ኤ.አ. / 2014 ዓ.ም" },
      { icon: Factory, title: "ፋብሪካ", body: "ሰበታ፣ ኢትዮጵያ" },
      { icon: PackageCheck, title: "ብራንዶች", body: "አማርድ እና አድዋ ልብስ ማጠቢያ ሳሙና" },
      {
        icon: ShieldCheck,
        title: "የጥራት ትኩረት",
      body: "በሰበታ፣ ኢትዮጵያ ጥራት ላይ የተመሰረተ የሳሙና ማምረቻ",
      },
    ],
    learnMore: "ስለ ኤ.አር.ጄ የበለጠ ይወቁ",
    introPhotoAlt: "የታሸጉ የአማርድ ልብስ ማጠቢያ ሳሙና ብሎኮች ክምር በኤ.አር.ጄ ፋብሪካ ውስጥ",
    why: {
      eyebrow: "የምርት ባህሪያት",
      title: "ለምን ኤ.አር.ጄን ይመርጣሉ?",
      description: "ደንበኞች ከአማርድ እና ከአድዋ ልብስ ማጠቢያ ሳሙና ምን ሊጠብቁ ይችላሉ።",
    },
    factory: {
      eyebrow: "ፋብሪካችን",
      title: "የማምረቻ ፋብሪካችን",
      description: "በሰበታ፣ ኢትዮጵያ የሚገኘው ኤ.አር.ጄ ከቻይና በገባ ዘመናዊ ማሽነሪ የተገጠመ የራሱ ማምረቻ ፋብሪካ ያንቀሳቅሳል።",
    },
    factoryPhotoAlt: "የአድዋ ልብስ ማጠቢያ ሳሙና ካርቶኖች ፓሌቶች በኤ.አር.ጄ ማምረቻ ፋብሪካ ውስጥ የተከማቹ",
    factoryBody: "ምርቶቻችን በፋብሪካችን ይመረታሉ፣ ይታሸጋሉ እና ይከማቻሉ። ምርቶቹ ከፋብሪካችን በቀጥታ ይሰራጫሉ።",
    exploreFactory: "ፋብሪካችንን ይመልከቱ",
    visionLabel: "ራዕያችን",
    visionQuote: "«በአፍሪካ ቁጥር አንድ የሳሙና ብራንድ መሆን።»",
    productsStrip: {
      eyebrow: "ምርቶቻችን",
      title: "ሁለት ጠንካራ የልብስ ማጠቢያ ሳሙና ብራንዶች",
      description: "ለእያንዳንዱ ብራንድ የምርት ዝርዝር፣ ባህሪያት እና ማሸግ።",
    },
    seeProductDetails: "ሙሉ የምርት ዝርዝርና ባህሪያት ይመልከቱ",
    productsLink: "ምርቶች",
    qualityStandards: "የኤ.አር.ጄ ጥራት እና ደረጃዎች",
    qualityLink: "ጥራት",
    headTitle: "ኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻ | አማርድ እና አድዋ ልብስ ማጠቢያ ሳሙና",
    headDescription:
      "ኤ.አር.ጄ ሳሙና፣ ዲተርጀንት እና ማምረቻ በሰበታ፣ ኢትዮጵያ ጥራት ያለው ጠንካራ የልብስ ማጠቢያ ሳሙና በአማርድ እና በአድዋ ብራንዶቹ ያመርታል።",
  },
} satisfies Record<Lang, unknown>;

const brandCardsBase = [
  {
    brand: "AMARD",
    image: amardImage,
    altEn: "AMARD Laundry Soap bar in green ARJ packaging",
    altAm: "የአማርድ ልብስ ማጠቢያ ሳሙና ብሎክ በአረንጓዴ የኤ.አር.ጄ መጠቅለያ ውስጥ",
    featuresEn: [
      "Long-lasting",
      "Extra foaming",
      "Powerful cleaning",
      "Soft on hands while washing",
    ],

    featuresAm: [
  "ረጅም ጊዜ የሚቆይ",
  "በቂ አረፋ የሚያመነጭ",
  "ኃይለኛ የማጽዳት አቅም",
  "በሚያጥቡበት ጊዜ ለእጆች ገር የሆነ",
],
  },
  
  {
    brand: "ADWA",
    image: adwaImage,
    altEn: "ADWA Laundry Soap bar in green ARJ packaging",
    altAm: "የአድዋ ልብስ ማጠቢያ ሳሙና ብሎክ በአረንጓዴ የኤ.አር.ጄ መጠቅለያ ውስጥ",
    featuresEn: ["Long-lasting", "Extra foaming", "Effective cleaning", "New washing formula"],
    featuresAm: ["ረጅም ጊዜ የሚያገለግል", "ተጨማሪ አረፋ ማውጣት", "ውጤታማ ማጽዳት", "አዲስ የማጠቢያ ቀመር"],
  },
];

function useBrandCards() {
  const c = useCopy(copy);
  const isAm = c === copy.am;
  return brandCardsBase.map((card) => ({
    brand: card.brand,
    image: card.image,
    alt: isAm ? card.altAm : card.altEn,
    features: isAm ? card.featuresAm : card.featuresEn,
  }));
}

function Home() {
  const c = useCopy(copy);
  const products = useProducts();
  const brandCards = useBrandCards();

  return (
    <>
      <LocalizedHead
        title={{ en: copy.en.headTitle, am: copy.am.headTitle }}
        description={{ en: copy.en.headDescription, am: copy.am.headDescription }}
      />
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-secondary">
        <div className="grid-tint absolute inset-0" aria-hidden="true" />
        <div className="section-shell relative grid gap-10 py-12 sm:py-20 lg:min-h-[42rem] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:py-20">
          <div className="rise-in">
            <span className="hairline-label">
              <span className="h-px w-10 bg-primary" aria-hidden="true" />
              {c.heroBadge}
            </span>
            <h1 className="display-title mt-5 max-w-3xl text-[2.25rem] text-foreground sm:text-6xl lg:text-[4.35rem]">
              {c.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {c.heroDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                {c.requestQuote}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/products" className="btn-outline w-full sm:w-auto">
                {c.exploreProducts}
              </Link>
            </div>

            {/* ARJ -> AMARD + ADWA relationship */}
            <div className="mt-9 border-l-2 border-primary bg-background/70 px-5 py-4">
              <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-primary">
                {c.relationshipLabel}
              </p>
              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
                <span className="display-title text-lg text-foreground">ARJ</span>
                <span className="hidden h-px flex-1 bg-border sm:block" aria-hidden="true" />
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-md bg-primary px-3.5 py-2 font-display text-sm font-extrabold uppercase tracking-tight text-primary-foreground">
                    AMARD
                  </span>
                  <span className="text-muted-foreground" aria-hidden="true">
                    +
                  </span>
                  <span className="rounded-md bg-primary px-3.5 py-2 font-display text-sm font-extrabold uppercase tracking-tight text-primary-foreground">
                    ADWA
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{c.relationshipBody}</p>
            </div>
          </div>

          <div className="relative rise-in">
            <div className="product-stage relative grid min-h-[20rem] grid-cols-2 items-end gap-2 overflow-hidden p-4 sm:min-h-[34rem] sm:gap-5 sm:p-8">
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-accent" aria-hidden="true" />
              {brandCards.map((card) => (
                <div key={card.brand} className="relative z-10 flex min-w-0 flex-col items-center">
                  <img
                    src={card.image}
                    alt={card.alt}
                    width={640}
                    height={640}
                    className="mx-auto h-56 w-full object-contain drop-shadow-xl sm:h-[25rem]"
                  />
                  <p className="mt-1 text-center font-display text-lg font-extrabold uppercase text-primary sm:text-2xl">
                    {card.brand}
                  </p>
                  <p className="mt-1 text-center text-[0.6rem] font-bold uppercase tracking-[0.14em] text-muted-foreground sm:text-[0.65rem]">
                    {c.laundrySoap}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 border-b border-border bg-background px-1 py-4">
              <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-primary">
                {c.manufacturedBy}
              </p>
               <p className="text-right text-sm font-bold text-foreground">{c.manufacturerName}</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR BRANDS */}
      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading
            centered
            eyebrow={c.brands.eyebrow}
            title={c.brands.title}
            description={c.brands.description}
          />
           <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {brandCards.map((card) => (
               <article key={card.brand} className="surface-card reveal grid overflow-hidden md:grid-cols-[0.95fr_1.05fr] lg:grid-cols-1 xl:grid-cols-[0.95fr_1.05fr]">
                 <div className="product-stage border-0 border-b border-border p-7 md:border-b-0 md:border-r lg:border-r-0 lg:border-b xl:border-r xl:border-b-0">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="mx-auto h-64 w-full object-contain sm:h-80"
                  />
                </div>
                 <div className="flex flex-col justify-center p-7 sm:p-8">
                  <h3 className="display-title text-3xl text-primary sm:text-4xl">{card.brand}</h3>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    {c.laundrySoap}
                  </p>
                  <ul className="mt-6 grid gap-2.5 border-t border-border pt-6 sm:grid-cols-2">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {c.manufacturedByArj}
                    </p>
                    <Link to="/brands" className="btn-outline px-5 py-2.5">
                      {c.viewBrand}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="border-y border-border bg-secondary py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <SectionHeading
              eyebrow={c.intro.eyebrow}
              title={c.intro.title}
              description={c.intro.description}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {c.introItems.map((item) => (
                <div key={item.title} className="surface-card p-5">
                  <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-primary mt-9">
              {c.learnMore}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="photo-frame reveal bg-background">
            <img
              src={photos.amardBarsStacked}
              alt={c.introPhotoAlt}
              loading="lazy"
              width={1200}
              height={1400}
              className="h-full max-h-[34rem] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY ARJ */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="section-shell">
          <SectionHeading
            centered
            eyebrow={c.whyArj.eyebrow}
            title={c.whyArj.title}
            description={c.whyArj.description}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-4">
            {c.whyArj.items.map((item, i) => (
              <div key={item.title} className="surface-card reveal p-6 sm:p-7">
                <span className="font-display text-sm font-extrabold text-primary">0{i + 1}</span>
                <h3 className="display-title mt-4 text-lg text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACTORY */}
      <section className="border-y border-border bg-secondary py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="photo-frame reveal bg-background">
            <img
              src={photos.adwaCartonsWarehouse}
              alt={c.factoryPhotoAlt}
              loading="lazy"
              width={1408}
              height={912}
              className="w-full object-cover"
            />
          </div>
          <div className="reveal">
            <SectionHeading
              eyebrow={c.factory.eyebrow}
              title={c.factory.title}
              description={c.factory.description}
            />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{c.factoryBody}</p>
            <Link to="/factory" className="btn-primary mt-9">
              {c.exploreFactory}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-3xl bg-primary-dark px-6 py-20 text-center sm:px-12">
            <div className="grid-tint absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="relative">
              <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.28em] text-primary-light">
                {c.visionLabel}
              </span>
              <p className="mx-auto mt-8 max-w-4xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                {c.visionQuote}
              </p>
              <p className="mt-8 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-primary-light">
                {c.manufacturerName}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT STRIP */}
      <section className="border-t border-border bg-secondary py-16 sm:py-24 lg:py-28">
        <div className="section-shell">
          <SectionHeading
            centered
            eyebrow={c.productsStrip.eyebrow}
            title={c.productsStrip.title}
            description={c.productsStrip.description}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.slug}
                to="/products"
                className="surface-card reveal overflow-hidden"
              >
                <div className="grid-tint bg-background p-6">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    loading="lazy"
                    width={480}
                    height={480}
                    className="mx-auto h-44 w-full object-contain sm:h-48"
                  />
                </div>
                <div className="border-t border-border p-5">
                  <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.2em] text-primary">
                    {c.manufacturedByArj}
                  </p>
                  <h3 className="display-title mt-2 text-base text-foreground">{product.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{product.type}</p>
                </div>
              </Link>
            ))}
            <div className="surface-card reveal grid place-items-center p-7 text-center sm:col-span-2 lg:col-span-1">
              <div>
                <p className="text-sm font-semibold text-foreground">{c.seeProductDetails}</p>
                <div className="mt-6 flex flex-col items-center gap-3">
                  <Link to="/products" className="btn-primary w-full">
                    {c.exploreProducts}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link to="/contact" className="btn-outline w-full">
                    {c.requestQuote}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
