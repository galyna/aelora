'use client';

import Gallery from "./Gallery";
import { bodyItems } from "@/app/data/bodyItems";

export default function GalleryBody() {
  return (
    <section aria-labelledby="body-care-title">
      <h2 id="body-care-title" className="sr-only">
        Body Care Products
      </h2>
      <Gallery
        items={bodyItems}
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
