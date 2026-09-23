import { useCopy, type Lang } from "@/lib/i18n";

export const amardImage = "/images/amard-pack.jpg";
export const adwaImage = "/images/adwa-pack.jpg";

export type Product = {
  slug: string;
  name: string;
  brand: string;
  type: string;
  image: string;
  imageAlt: string;
  description: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "amard",
    name: "AMARD Laundry Soap",
    brand: "AMARD",
    type: "Solid laundry soap bar",
    image: amardImage,
    imageAlt: "AMARD Laundry Soap bar in green packaging with the AMARD badge logo",
    description:
      "A solid laundry soap for everyday clothes washing — long-lasting, extra foaming and soft on hands.",
    features: [
      "Long-lasting",
      "Extra foaming",
      "Powerful cleaning",
      "Soft on hands while washing",
    ],
  },
  {
    slug: "adwa",
    name: "ADWA Laundry Soap",
    brand: "ADWA",
    type: "Solid laundry soap bar",
    image: adwaImage,
    imageAlt: "ADWA Laundry Soap bar in green ADWA-branded packaging",
    description:
      "A solid laundry soap made for everyday washing, with effective cleaning and a rich foam.",
    features: ["Long-lasting", "Extra foaming", "Effective cleaning", "New washing formula"],
  },
];

export const whyChooseArj = [
  {
    title: "Long-lasting",
    body: "Designed to provide lasting use during everyday laundry.",
  },
  {
    title: "Extra foaming",
    body: "A rich foaming experience during washing.",
  },
  {
    title: "Powerful cleaning",
    body: "Made to help deliver clean clothes.",
  },
  {
    title: "Soft on hands",
    body: "Designed to provide a softer feeling on hands while washing.",
  },
];

const productsCopy = {
  en: products,
  am: [
    {
      slug: "amard",
      name: "አማርድ የልብስ ሳሙና",
      brand: "AMARD",
      type: "የልብስ ሳሙና",
      image: amardImage,
      imageAlt: "አማርድ የልብስ ሳሙና በአረንጓዴ መጠቅለያ ውስጥ ከAMARD አርማ ጋር",
      description:
        "ለዕለት ተዕለት ልብስ ማጠቢያ የተዘጋጀ ጠጣር ሳሙና — ረጅም ጊዜ የሚቆይ፣ ደማቅ አረፋ የሚፈጥር እና ለእጅ ገር የሆነ።",
      features: [
        "ረጅም ጊዜ የሚቆይ",
        "ደማቅ አረፋ",
        "ውጤታማ ማጽጃ",
        "ለእጅ ገር",
      ],
    },
    {
      slug: "adwa",
      name: "አድዋ የልብስ ሳሙና",
      brand: "ADWA",
      type: "የልብስ ሳሙና",
      image: adwaImage,
      imageAlt: "አድዋ የልብስ ሳሙና በአረንጓዴ የአድዋ ብራንድ መጠቅለያ ውስጥ",
      description: "ለዕለት ተዕለት ማጠቢያ የተዘጋጀ ጠጣር ሳሙና፣ ውጤታማ ማጽዳት እና ወፍራም አረፋ ያለው።",
      features: ["ረጅም ጊዜ የሚቆይ", "ደማቅ አረፋ", "ውጤታማ ማጽዳት", "አዲስ የማጠቢያ ቀመር"],
    },
  ] satisfies Product[],
} satisfies Record<Lang, Product[]>;

const whyChooseArjCopy = {
  en: whyChooseArj,
  am: [
    {
      title: "ረጅም ጊዜ የሚቆይ",
      body: "ለዕለት ተዕለት ልብስ ማጠቢያ ዘላቂ አገልግሎት እንዲሰጥ ተደርጎ የተዘጋጀ።",
    },
    {
      title: "ደማቅ አረፋ",
      body: "በማጠቢያ ወቅት የበለጸገ አረፋ ይሰጣል።",
    },
    {
      title: "ከፍተኛ የማጽዳት አቅም",
      body: "ልብሶችን አጥርቶ ለማጽዳት ታስቦ የተሠራ።",
    },
    {
      title: "ለእጅ ገር",
      body: "በሚያጥቡበት ጊዜ ለእጆች ገር ተደርጎ የተዘጋጀ።",
    },
  ] satisfies { title: string; body: string }[],
} satisfies Record<Lang, { title: string; body: string }[]>;

export function useProducts(): Product[] {
  return useCopy(productsCopy);
}

export function useWhyChooseArj(): { title: string; body: string }[] {
  return useCopy(whyChooseArjCopy);
}
