import Image from "next/image";
import React from "react";
import hero4 from "@/public/images/hero4.webp";

export default function About() {
  const subtitle = "Mindful Rituals";
  const title = <>Crafted for mindful rituals</>;
  const description = "Aelora is a sensorial skincare line rooted in nature, designed to ground you in calm and clarity. Our hand-blended oils and creams are created with minimal intervention and maximum intention.";

  return (
    <section className="relative flex flex-col w-full py-8 md:py-10 lg:py-14 2xl:py-16">
      <div className="flex flex-col xl:flex-row xl:items-stretch w-full xl:h-[60vh]">
        <div
          className="relative w-full h-[50vh] xl:h-full  xl:w-3/5 xl:order-1`"
        >
          <Image
            src={hero4}
            alt="Aelora about"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 70vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 pointer-events-none" />
        </div>
        <div
          className={`relative flex-1 flex flex-col  px-8 pt-8 text-graphite xl:w-2/5 xl:h-full  xl:items-center xl:text-left xl:pl-24 xl:pr-24  justify-center`}
        >
          <div className="xl:max-w-lg   w-full flex flex-col    2xl:gap-4">
            <p className="text-sm mb-2">{subtitle}</p>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-serif mb-3 md:mb-4">
              {title}
            </h2>
            <div className="w-full border-t border-graphite my-6  "></div>
            <p className="text-md md:text-xl leading-relaxed text-gray-700">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
