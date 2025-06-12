import { FaLeaf, FaRecycle, FaHeart } from "react-icons/fa";
export default function Benefits() {
  return (
    <section className="py-12 container mx-auto">
      {/* Преимущества */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-12">
        <div className="space-y-3">
          <FaLeaf className="mx-auto text-2xl text-clay" />
          <h3 className="uppercase tracking-wide font-medium">
            100% Plant-Based
          </h3>
          <p className="text-sm text-gray-700">
            No synthetic fragrances or fillers — only pure botanicals.
          </p>
        </div>
        <div className="space-y-3">
          <FaRecycle className="mx-auto text-2xl text-clay" />
          <h3 className="uppercase tracking-wide font-medium">
            Sustainable Packaging
          </h3>
          <p className="text-sm text-gray-700">
            Glass jars & recyclable materials, sourced with care.
          </p>
        </div>
        <div className="space-y-3">
          <FaHeart className="mx-auto text-2xl text-clay" />
          <h3 className="uppercase tracking-wide font-medium">
            Made with Love
          </h3>
          <p className="text-sm text-gray-700">
            Hand-poured in small batches in Ukraine.
          </p>
        </div>
      </div>
    </section>
  );
}
