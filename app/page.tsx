import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import SubscribeForm from "./components/SubscribeForm";
import { GalleryItem } from "./models/GalleryItem";
import About from "./components/About";




const skinItems: GalleryItem[] = [
  { src: "/images/g8.png", alt: "Geranium Leaf Body Scrub", title: "Geranium Leaf Body Scrub", description: "An exfoliating cleanse" },
  { src: "/images/g2.png", alt: "Shampoo", title: "Shampoo", description: "For soft, shiny, fragrant hair" },
  { src: "/images/g4.png", alt: "Conditioner", title: "Conditioner", description: "For soft, smooth hair" },
  { src: "/images/g1.png", alt: "Another Scrub", title: "Parsley Seed Facial Cleanser", description: "For a clarifying cleanse" },
];

const handItems: GalleryItem[] = [
  { src: "/images/g5.png", alt: "Geranium Leaf Body Scrub", title: "Geranium Leaf Body Scrub", description: "An exfoliating cleanse" },
  { src: "/images/g6.png", alt: "Shampoo", title: "Shampoo", description: "For soft, shiny, fragrant hair" },
  { src: "/images/g3.png", alt: "Conditioner", title: "Conditioner", description: "For soft, smooth hair" },
  { src: "/images/g7.png", alt: "Another Scrub", title: "Parsley Seed Facial Cleanser", description: "For a clarifying cleanse" },

];

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery items={skinItems} />
      <Benefits />
      <Gallery items={handItems} />
      <SubscribeForm />
    </main>
  );
}
