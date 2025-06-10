import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import SubscribeForm from "./components/SubscribeForm";
import { GalleryItem } from "./models/GalleryItem";
import About from "./components/About";

const skinItems: GalleryItem[] = [
  {
    src: "/images/g8.png",
    alt: "Geranium Leaf Body Scrub",
    title: "Geranium Leaf Body Scrub",
    description: "An exfoliating cleanse",
  },
  {
    src: "/images/g2.png",
    alt: "Shampoo",
    title: "Shampoo",
    description: "For soft, shiny, fragrant hair",
  },
  {
    src: "/images/g4.png",
    alt: "Conditioner",
    title: "Conditioner",
    description: "For soft, smooth hair",
  },
  {
    src: "/images/g1.png",
    alt: "Another Scrub",
    title: "Parsley Seed Facial Cleanser",
    description: "For a clarifying cleanse",
  },
  {
    src: "/images/g6.png",
    alt: "Conditioner",
    title: "Conditioner",
    description: "For soft, smooth hair",
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
        generalDescription={{
          title: "Formulations for Skin",
          description:
            "Our formulations are designed to nourish and protect your skin, leaving it feeling soft, smooth, and radiant.",
        }}
      />
      <About
        image={{ src: "/images/hero2.jpeg", alt: "Aelora bottle" }}
        subtitle="Mindful Rituals"
        title={
          <>
            Crafted
            <br />
            for
            <br />
            mindful rituals
          </>
        }
        order={1}
        description="Aelora Botanicals is a 
      sensorial skincare line rooted in nature, designed to ground you in calm and clarity. Our hand-blended oils and creams are created with minimal intervention and
       maximum intention. "
      />

      <Gallery
        items={handItems}
        generalDescription={{
          title: "Formulations for Hair",
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

      <SubscribeForm />
    </main>
  );
}
