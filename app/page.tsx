import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import SubscribeForm from "./components/SubscribeForm";
import Reviews from "./components/Reviews";
import { GalleryItem } from "./models/GalleryItem";
import About from "./components/About";

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

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Gallery
        items={skinItems}
        id="skin"
        generalDescription={{
          title: "Skin Care",
          description:
            "Skin is a living reflection of your rhythm—shaped by climate, habits, and nourishment. Our formulations respond intuitively to these shifts, helping you nurture lasting skin harmony.",
        }}
      />
      <About />

      <Gallery
        items={handItems}
        id="hands"
        generalDescription={{
          title: "Formulations for Hand & Body",
          description:
            "Each Aelora formulation for hand and body is crafted to transform the everyday—cleansing and care become quiet rituals of presence and renewal.",
        }}
      />
      <SubscribeForm />
      <Reviews />
    </main>
  );
}
