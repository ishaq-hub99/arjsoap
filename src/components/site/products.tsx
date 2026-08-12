import adwaAsset from "@/assets/adwa-pack.jpg.asset.json";
import amardAsset from "@/assets/amard-pack.jpg.asset.json";
import { useCopy, type Lang } from "@/lib/i18n";

export const amardImage = amardAsset.url;
export const adwaImage = adwaAsset.url;

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
      "Made from 100% vegetable oil according to the product packaging",
    ],
  },
  {
    slug: "adwa",
    name: "ADWA Laundry Soap",
    brand: "ADWA",
    type: "Solid laundry soap bar",
    image: adwaImage,
    imageAlt: "ADWA Laundry Soap bar in green packaging, 200g net weight when packed",
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
      name: "አማርድ ልብስ ማጠቢያ ሳሙና",
      brand: "AMARD",
      type: "ጠጣር ልብስ ማጠቢያ ሳሙና",
      image: amardImage,
      imageAlt: "የአማርድ ልብስ ማጠቢያ ሳሙና በአረንጓዴ መጠቅለያ ውስጥ ከAMARD አርማ ጋር",
      description:
        "ለዕለታዊ የልብስ ማጠቢያ የሚሆን ጠጣር ሳሙና — ረጅም ጊዜ የሚያገለግል፣ ጥሩ አረፋ የሚያወጣ እና ለእጅ ገር የሆነ።",
      features: [
        "ረጅም ጊዜ የሚያገለግል",
        "ተጨማሪ አረፋ ማውጣት",
        "ኃይለኛ ማጽዳት",
        "በሚያጥቡበት ጊዜ ለእጅ ገር የሆነ",
        "እንደ ምርቱ መጠቅለያ መረጃ ከ100% የአትክልት ዘይት የተሠራ",
      ],
    },
    {
      slug: "adwa",
      name: "አድዋ ልብስ ማጠቢያ ሳሙና",
      brand: "ADWA",
      type: "ጠጣር ልብስ ማጠቢያ ሳሙና",
      image: adwaImage,
      imageAlt: "የአድዋ ልብስ ማጠቢያ ሳሙና በአረንጓዴ መጠቅለያ ውስጥ፣ ሲታሸግ 200 ግራም ጥቅል ክብደት",
      description:
        "ለዕለታዊ ማጠቢያ የሚሆን ጠጣር ሳሙና፣ ውጤታማ ማጽዳትና የበለጸገ አረፋ ያለው።",
      features: ["ረጅም ጊዜ የሚያገለግል", "ተጨማሪ አረፋ ማውጣት", "ውጤታማ ማጽዳት", "አዲስ የማጠቢያ ቀመር"],
    },
  ] satisfies Product[],
} satisfies Record<Lang, Product[]>;

const whyChooseArjCopy = {
  en: whyChooseArj,
  am: [
    {
      title: "ረጅም ጊዜ የሚያገለግል",
      body: "ለዕለታዊ ልብስ ማጠቢያ ዘላቂ አገልግሎት እንዲሰጥ ተደርጎ የተዘጋጀ።",
    },
    {
      title: "ተጨማሪ አረፋ ማውጣት",
      body: "በማጠቢያ ጊዜ የበለጸገ የአረፋ ልምድ ይሰጣል።",
    },
    {
      title: "ኃይለኛ ማጽዳት",
      body: "ንጹህ ልብሶችን ለማምጣት ታስቦ የተሠራ።",
    },
    {
      title: "ለእጅ ገር",
      body: "በሚያጥቡበት ጊዜ ለእጆች ገር ስሜት እንዲሰጥ ተደርጎ የተዘጋጀ።",
    },
  ] satisfies { title: string; body: string }[],
} satisfies Record<Lang, { title: string; body: string }[]>;

export function useProducts(): Product[] {
  return useCopy(productsCopy);
}

export function useWhyChooseArj(): { title: string; body: string }[] {
  return useCopy(whyChooseArjCopy);
}
