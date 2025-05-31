export default function Benefits() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Quality', 'Service', 'Support'].map((benefit) => (
          <div key={benefit} className="text-center">
            <h3 className="text-xl font-bold mb-2">{benefit}</h3>
            <p className="text-gray-600">Description of {benefit.toLowerCase()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
