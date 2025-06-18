import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const About = dynamic(() => import("./components/About"), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-100" />,
  ssr: true,
});

const Reviews = dynamic(() => import("./components/Reviews"), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-100" />,
  ssr: true,
});

const SubscribeForm = dynamic(() => import("./components/SubscribeForm"), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-100" />,
  ssr: true,
});

const GallerySkin = dynamic(() => import("./components/gallery/GallerySkin"), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-100" />,
  ssr: true,
});

const GalleryBody = dynamic(() => import("./components/gallery/GalleryBody"), {
  loading: () => <div className="h-[60vh] animate-pulse bg-gray-100" />,
  ssr: true,
});

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <main id="main-content" role="main">
        <Hero />
        <Benefits />
        <Suspense fallback={<div>Loading sections...</div>}>
          <GallerySkin />
        </Suspense>
        <Suspense fallback={<div>Loading about...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Loading sections...</div>}>
          <GalleryBody />
        </Suspense>
        <Suspense fallback={<div>Loading subscribe...</div>}>
          <SubscribeForm />
        </Suspense>
        <Suspense fallback={<div>Loading reviews...</div>}>
          <Reviews />
        </Suspense>
      </main>
    </>
  );
}
