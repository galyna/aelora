import { FaLeaf, FaRecycle, FaHeart } from "react-icons/fa";

export default function About() {
  return (
    <section className="py-20 md:py-32  text-graphite">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {/* Описание продукта */}
        <div className="space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif">
            Crafted for mindful rituals
          </h2>
          <p className="text-lg leading-relaxed">
            Aelora Botanicals is a sensorial skincare line rooted in nature, 
            designed to ground you in calm and clarity. Our hand-blended oils 
            and creams are created with minimal intervention and maximum intention.
          </p>
          <p className="text-lg leading-relaxed">
            Every formula is made in small batches, using plant-based ingredients
            and time-honored processes to nourish skin and spirit alike.
          </p>
        </div>

        {/* Преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-12">
          <div className="space-y-3">
            <FaLeaf className="mx-auto text-2xl text-clay" />
            <h3 className="uppercase tracking-wide font-medium">100% Plant-Based</h3>
            <p className="text-sm text-gray-700">
              No synthetic fragrances or fillers — only pure botanicals.
            </p>
          </div>
          <div className="space-y-3">
            <FaRecycle className="mx-auto text-2xl text-clay" />
            <h3 className="uppercase tracking-wide font-medium">Sustainable Packaging</h3>
            <p className="text-sm text-gray-700">
              Glass jars & recyclable materials, sourced with care.
            </p>
          </div>
          <div className="space-y-3">
            <FaHeart className="mx-auto text-2xl text-clay" />
            <h3 className="uppercase tracking-wide font-medium">Made with Love</h3>
            <p className="text-sm text-gray-700">
              Hand-poured in small batches in Ukraine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
