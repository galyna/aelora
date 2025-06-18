import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import dynamic from "next/dynamic";
import LoadingSection from "./components/LoadingSection";

const load = (path: string) =>
  dynamic(() => import(`./components/${path}`), {
    loading: () => <LoadingSection />,
    ssr: true,
  });

const About = load("About");
const Reviews = load("Reviews");
const SubscribeForm = load("SubscribeForm");
const GallerySkin = load("gallery/GallerySkin");
const GalleryBody = load("gallery/GalleryBody");

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <main id="main-content" role="main">
        <Hero />
        <Benefits />
        <GallerySkin />
        <About />
        <GalleryBody />
        <SubscribeForm />
        <Reviews />
      </main>
    </>
  );
}
