import adwaAsset from "@/assets/adwa-pack.jpg.asset.json";
import amardAsset from "@/assets/amard-pack.jpg.asset.json";

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
      "AMARD is a solid laundry soap designed for washing clothes. It is long-lasting, produces extra foam and stays soft on hands while washing.",
    features: [
      "Designed for washing clothes",
      "Long-lasting bar",
      "Helps provide a deep clean",
      "Extra foaming",
      "Gentle, soft feeling on hands while washing",
      "Made from 100% vegetable oil, according to the product packaging",
      "New washing formula",
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
      "ADWA is a solid laundry soap made for everyday clothes washing, with effective cleaning, extra foaming and a long-lasting bar.",
    features: [
      "Designed for washing clothes",
      "Long-lasting bar",
      "Extra foaming",
      "Effective cleaning",
      "New washing formula",
    ],
  },
];

export const whyChooseArj = [
  {
    title: "Long-lasting",
    body: "Both AMARD and ADWA bars are made to last through everyday laundry use.",
  },
  {
    title: "Extra foaming",
    body: "Our formulas produce generous foam for hand washing clothes.",
  },
  {
    title: "Powerful cleaning",
    body: "Solid laundry soap built to clean clothes effectively.",
  },
  {
    title: "Soft on hands",
    body: "A gentle, soft feeling on hands while washing.",
  },
  {
    title: "Clean, attractive packaging",
    body: "Clear brand packaging that is easy to recognise on the shelf.",
  },
  {
    title: "Quality-focused manufacturing",
    body: "Production at our Sebeta factory is organised around consistent quality.",
  },
  {
    title: "Made for everyday laundry",
    body: "Practical soap for households that want clean clothes every day.",
  },
];
