'use client';

import Gallery from "./Gallery";
import { skinItems } from "@/app/data/skinItems";

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
