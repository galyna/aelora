'use client';

import { GalleryItem } from "../../models/GalleryItem";
import Gallery from "./Gallery";

const skinItems: GalleryItem[] = [
  {
    src: "/images/product8.webp",
    alt: "Camellia Nut Facial  Cream",
    title: "Camellia Nut Facial  Cream",
    description: "For normal, dry  skin",
  },
  {
    src: "/images/product2.webp",
    alt: "Parsley  Facial Cleanser",
    title: "Parsley Facial Cleanser",
    description: "For normal troubled skin",
  },
  {
    src: "/images/product4.webp",
    alt: "Camellia Nut Facial Cream",
    title: "Camellia Nut Facial Cream",
    description: "For normal skin",
  },
  {
    src: "/images/product1.webp",
    alt: "Zinc Facial Hydrating Lotion",
    title: "Zinc Facial Hydrating Lotion ",
    description: "For a wide range of skin types",
  },
  {
    src: "/images/product6.webp",
    alt: "Exalted Eye Serum ",
    title: "Exalted Eye Serum ",
    description: "For sensitive, mature, dehydrated",
  },
];

export default function GallerySkin() {
  return (
    <section aria-labelledby="skin-care-title">
            <h2 id="skin-care-title" className="sr-only">Skin Care Products</h2>
            <Gallery
              items={skinItems}
              id="skin"
              generalDescription={{
                title: "Skin Care",
                description:
                  "Skin is a living reflection of your rhythm—shaped by climate, habits, and nourishment. Our formulations respond intuitively to these shifts, helping you nurture lasting skin harmony.",
              }}
            />
          </section>
  );
}
