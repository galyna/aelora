'use client';

import { GalleryItem } from "../../models/GalleryItem";
import Gallery from "./Gallery";

const handItems: GalleryItem[] = [
  {
    src: "/images/product5.webp",
    alt: "Redemption Body Scrub",
    title: "Redemption Body Scrub",
    description: "For normal, dry and sensitive skin",
  },
  {
    src: "/images/product6.webp",
    alt: "Citrus Melange Body Cleanser",
    title: "Citrus Melange Body Cleanser",
    description: "Citrus, fresh",
  },
  {
    src: "/images/product3.webp",
    alt: "Geranium Leaf Body Scrub",
    title: "Geranium Leaf Body Scrub",
    description: "Coarse-grain gel to cleanse ",
  },
  {
    src: "/images/product7.webp",
    alt: "Bathroom Essentials Bundle",
    title: "Bathroom Essentials Bundle",
    description: "A trio of much-loved formulations ",
  },
  {
    src: "/images/product4.webp",
    alt: "Rejuvenate Intensive Body Balm",
    title: "Rejuvenate Intensive Body Balm",
    description: "Citrus, vanilla, woody",
  },
];

export default function GalleryBody() {
  return (
    <section aria-labelledby="body-care-title">
      <h2 id="body-care-title" className="sr-only">
        Body Care Products
      </h2>
      <Gallery
        items={handItems}
        id="hands"
        generalDescription={{
          title: "Formulations for Hand & Body",
          description:
            "Each Aelora formulation for hand and body is crafted to transform the everyday—cleansing and care become quiet rituals of presence and renewal.",
        }}
      />
    </section>
  );
}
