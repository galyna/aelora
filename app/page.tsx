import Image from "next/image";
import heroImage from "@/public/hero-image-1.png";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <section className="container mx-auto px-4 py-8">
        <div className="flex  md:flex-row flex-col-reverse items-center gap-10">
          <div className="flex-1 flex flex-col gap-2 items-start">
            <h1 className="text-4xl font-bold text-black mb-4">
              Discover what&apos;s possible with 3D printing
            </h1>
            <p className="text-gray-600 text-lg">
              Join our community of creators and explore a vast library of
              user-submitted models.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Get Started
            </button>
          </div>
          <div className="flex-1">
            <Image
              className="w-full h-full object-cover rounded-lg inset-0"
              src={heroImage}
              alt="3D printer hero image"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
