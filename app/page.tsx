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
    alt: "Geranium Leaf Body Scrub",
    title: "Geranium Leaf Body Scrub",
    description: "Gentle exfoliation with natural ingredients for smooth, radiant skin",
  },
  {
    src: "/images/g2.png",
    alt: "Facial Cleanser",
    title: "Facial Cleanser",
    description: "Deep cleansing formula that removes impurities while maintaining skin's natural balance",
  },
  {
    src: "/images/g4.png",
    alt: "Hydrating Serum",
    title: "Hydrating Serum",
    description: "Intensive hydration with hyaluronic acid and natural extracts",
  },
  {
    src: "/images/g1.png",
    alt: "Parsley Seed Facial Cleanser",
    title: "Parsley Seed Facial Cleanser",
    description: "Purifying cleanser with antioxidant-rich parsley seed extract",
  },
  {
    src: "/images/g6.png",
    alt: "Moisturizing Cream",
    title: "Moisturizing Cream",
    description: "Rich, nourishing cream that deeply hydrates and protects skin",
  },
];

const handItems: GalleryItem[] = [
  {
    src: "/images/g5.png",
    alt: "Geranium Leaf Body Scrub",
    title: "Geranium Leaf Body Scrub",
    description: "An exfoliating cleanse",
  },
  {
    src: "/images/g6.png",
    alt: "Shampoo",
    title: "Shampoo",
    description: "For soft, shiny, fragrant hair",
  },
  {
    src: "/images/g3.png",
    alt: "Conditioner",
    title: "Conditioner",
    description: "For soft, smooth hair",
  },
  {
    src: "/images/g7.png",
    alt: "Another Scrub",
    title: "Parsley Seed Facial Cleanser",
    description: "For a clarifying cleanse",
  },
  {
    src: "/images/g4.png",
    alt: "Conditioner",
    title: "Conditioner",
    description: "For soft, smooth hair",
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
            "Our skincare formulations are crafted with natural ingredients to nourish, protect and enhance your skin's natural beauty. Each product is designed to provide a luxurious, sensorial experience while delivering effective results.",
        }}
      />
      <About
        image={{ src: "/images/hero2.jpeg", alt: "Aelora bottle" }}
        subtitle="Mindful Rituals"
        title={
          <>
            Crafted
            for
            mindful rituals
          </>
        }
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
            "Our formulations are designed to nourish and protect your hair, leavingit feeling soft, smooth, and radiant.",
        }}
      />
      <About
        image={{ src: "/images/hero-image.png", alt: "Aelora bottle" }}
        subtitle="Mindful Rituals"
        title="Crafted for mindful rituals"
        order={2}
        description="Aelora Botanicals is a sensorial skincare line rooted in nature, designed to ground you in calm and clarity. Our hand-blended oils and creams are created with minimal intervention and maximum intention."
      />

      <Reviews />
      <SubscribeForm />
    </main>
  );
}
