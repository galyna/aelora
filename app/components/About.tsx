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
  title,
  description,
  order,
}: AboutProps) {
  // На xl+ порядок через order, на мобиле всегда картинка сверху
  const imageOrder = order === 2 ? "xl:order-2" : "xl:order-1";
  const textOrder = order === 2 ? "xl:order-1" : "xl:order-2";

  return (
    <section className="relative flex flex-col w-full py-8 md:py-10 lg:py-14  2xl:py-16">
      <div className="flex flex-col xl:flex-row xl:items-stretch w-full xl:h-[50vh]">
        <div
          className={`relative w-full h-[50vh] xl:h-full  xl:w-3/5 ${imageOrder}`}
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
          className={`relative flex-1 flex flex-col  px-8 pt-8 text-graphite xl:w-2/5 xl:h-full  xl:items-center xl:text-left xl:px-24 ${textOrder}`}
        >
          <div className="xl:max-w-lg   w-full flex flex-col    2xl:gap-4">
            
            <h1 className="text-4xl font-serif mb-2 leading-tight">
              {title}
            </h1>
            <div className="w-full border-t border-graphite my-6  "></div>
            <p className="text-base md:text-mg lg:text-lg 2xl:text-xl leading-relaxed text-gray-700">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
