import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import SubscribeForm from "./components/SubscribeForm";
import Reviews from "./components/Reviews";
import { GalleryItem } from "./models/GalleryItem";
import About from "./components/About";

const skinItems: GalleryItem[] = [
  {
    src: "/images/g8.png",
    alt: "Camellia Nut Facial Hydrating Cream",
    title: "Camellia Nut Facial Hydrating Cream",
    description: "For normal, dry and sensitive skin",
  },
  {
    src: "/images/g2.png",
    alt: "Parsley Seed Facial Cleanser",
    title: "Parsley Seed Facial Cleanser",
    description: "For normal, combination and troubled skin",
  },
  {
    src: "/images/g4.png",
    alt: "Camellia Nut Facial Hydrating Cream",
    title: "Camellia Nut Facial Hydrating Cream",
    description: "For normal, dry and sensitive skin",
  },
  {
    src: "/images/g1.png",
    alt: "Sage & Zinc Facial Hydrating Lotion SPF15",
    title: "Sage & Zinc Facial Hydrating Lotion SPF15",
    description: "For a wide range of skin types, including sensitive",
  },
  {
    src: "/images/g6.png",
    alt: "Exalted Eye Serum ",
    title: "Exalted Eye Serum ",
    description: "For sensitive, mature, dehydrated, dull and patchy skin",
  },
];

const handItems: GalleryItem[] = [
  {
    src: "/images/g5.png",
    alt: "Redemption Body Scrub",
    title: "Redemption Body Scrub",
    description: "For normal, dry and sensitive skin",
  },
  {
    src: "/images/g6.png",
    alt: "Citrus Melange Body Cleanser",
    title: "Citrus Melange Body Cleanser",
    description: "Citrus, fresh",
  },
  {
    src: "/images/g3.png",
    alt: "Geranium Leaf Body Scrub",
    title: "Geranium Leaf Body Scrub",
    description: "Coarse-grain gel to cleanse and polish the skin",
  },
  {
    src: "/images/g7.png",
    alt: "Bathroom Essentials Bundle",
    title: "Bathroom Essentials Bundle",
    description: "A trio of much-loved formulations for hands and body",
  },
  {
    src: "/images/g4.png",
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
      <About
        image={{ src: "/images/hero4.png", alt: "Aelora bottle" }}
        subtitle="Mindful Rituals"
        title={<>Crafted for mindful rituals</>}
        order={1}
        description="Aelora  is a 
      sensorial skincare line rooted in nature, designed to ground you in calm and clarity. Our hand-blended oils and creams are created with minimal intervention and
       maximum intention. "
      />

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
