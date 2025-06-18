const marqueeBenefits = [
  "99% NATURAL",
  "CLINICALLY PROVEN",
  "VEGAN",
  "AWARD-WINNING",
  "NON-TOXIC",
  "PLANT-BASED",
  "CRUELTY-FREE",
  "PARABEN FREE",
  "CARBON NEUTRAL",
  "SULFATE FREE",
  "PHTHALATE FREE",
  "FREE OF MINERAL OILS",
  "FREE OF GMOS",
];

export default function Benefits() {
  return (
    <section 
      className="pt-8 md:pt-10 lg:pt-14 2xl:pt-16"
      aria-labelledby="benefits-title"
    >
      <h2 id="benefits-title" className="sr-only">
        Product Benefits and Certifications
      </h2>
      
      {/* Marquee */}
      <div 
        className="relative w-full overflow-x-hidden bg-linen border-t border-b border-gray-200 py-4"
        role="region"
        aria-label="Product benefits and certifications"
      >
        <div 
          className="flex whitespace-nowrap animate-marquee"
          aria-hidden="true"
          role="presentation"
        >
          {[...marqueeBenefits, ...marqueeBenefits].map((benefit, i) => (
            <span
              key={i}
              className="mx-6 text-xs md:text-sm tracking-widest uppercase text-graphite font-semibold"
            >
              {benefit}
            </span>
          ))}
        </div>
        
        {/* Скрытый список для скринридеров */}
        <div className="sr-only">
          <p>Our products are:</p>
          <ul>
            {marqueeBenefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
