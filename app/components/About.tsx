import Image from "next/image";
import React from "react";

interface AboutProps {
  image: {
    src: string;
    alt: string;
  };
  subtitle: string;
  title: React.ReactNode;
  description: string;
  order?: number;
}

export default function About({
  image,
  subtitle,
  title,
  description,
  order,
}: AboutProps) {
  // На xl+ порядок через order, на мобиле всегда картинка сверху
  const imageOrder = order === 2 ? "xl:order-2" : "xl:order-1";
  const textOrder = order === 2 ? "xl:order-1" : "xl:order-2";

  return (
    <section className="relative flex flex-col w-full">
      <div className="flex flex-col xl:flex-row xl:items-stretch w-full xl:h-[40vh]">
        <div
          className={`relative w-full h-[23vh] lg:h-[30vh] xl:h-full xl:w-2/3 ${imageOrder}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 lg:bg-black/10 pointer-events-none" />
        </div>
        <div
          className={`relative flex-1 flex flex-col justify-center p-8 text-graphite
           xl:w-1/3 xl:h-full xl:justify-center xl:items-start xl:text-left xl:p-24s ${textOrder}`}
        >
          <div className="xl:max-w-lg mx-auto  w-full flex flex-col justify-center  gap-4 xl:gap-6">
            <p className="text-sm mb-2">{subtitle}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-3 md:mb-4 leading-tight">
              {title}
            </h1>
            <div className="w-full border-t border-graphite my-4"></div>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
