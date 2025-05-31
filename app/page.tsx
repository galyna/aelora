import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import SubscribeForm from "./components/SubscribeForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Gallery />
      <SubscribeForm />
    </main>
  );
}
