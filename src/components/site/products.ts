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
