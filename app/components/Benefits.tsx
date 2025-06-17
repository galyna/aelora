
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
    <section className=" pt-8 md:pt-10 lg:pt-14  2xl:pt-16">
      {/* Marquee */}
      <div className="relative w-full overflow-x-hidden bg-linen border-t border-b border-gray-200 py-4 ">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueeBenefits, ...marqueeBenefits].map((b, i) => (
            <span
              key={i}
              className="mx-6 text-xs md:text-sm tracking-widest uppercase text-gray-700 font-semibold"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
      
    </section>
  );
}
