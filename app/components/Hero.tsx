"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import hero3 from "@/public/images/hero3.webp";
import hero8 from "@/public/images/hero8.webp";

interface HeroSlide {
  id: number;
  imageSrc: StaticImageData;
  altText: string;
  subtitle: string;
  title: string;
  description: string;
}

const heroSlidesData: HeroSlide[] = [
  {
    id: 1,
    imageSrc: hero3,
    altText: "Lucent Facial Refiner bottle",
    subtitle: "The skin—in its best light",
    title: "Introducing Lucent Facial Refiner",
    description:
      "A new gently exfoliatings mask to even the texture and appearance of the skin.",
  },
  {
    id: 3,
    imageSrc: hero8,
    altText: "Yet Another Product",
    subtitle: "Daily protection",
    title: "Protective Facial Lotion SPF25",
    description:
      "A broad-spectrum moisturising lotion that shields skin from UVA and UVB rays.",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const currentSlide = heroSlidesData[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlidesData.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + heroSlidesData.length) % heroSlidesData.length
    );
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        handleNext();
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [currentIndex, isPlaying, handleNext]);

  return (
    <section className="relative flex flex-col w-full border-t  border-gray-200">
      <div className="flex flex-col xl:h-[60vh] xl:flex-row xl:items-stretch w-full">
        {/* Мобильная версия: изображение сверху */}
        <div className="relative w-full h-[50vh]  xl:h-[60vh] xl:order-2 xl:w-1/2">
          {heroSlidesData.map((slide, index) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slide.imageSrc}
                alt={slide.altText}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-black/30 lg:bg-black/10"></div>
        </div>

        {/* Мобильная версия: контент снизу, десктоп: логотип слева */}
        <div
          className="relative flex-1 flex flex-col 2xl:flex-row 
         py-4 bg-linen text-graphite xl:order-1 xl:w-1/2  xl:items-start xl:text-left xl:pl-28 2xl:justify-starts "
        >
          {/* Логотип только для десктопа */}
          <div className="hidden 2xl:flex w-[200px] xl:pt-14 pr-20">
            <h1 className="text-6xl  font-serif  tracking-wide">Aelora</h1>
          </div>

          {/* Контент */}
          <div className="flex items-center justify-center gap-4 xl:hidden">
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="text-graphite hover:text-black"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <span className="text-sm font-mono">
                {String(currentIndex + 1)} / {String(heroSlidesData.length)}
              </span>
              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="text-graphite hover:text-black"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              className="text-graphite hover:text-black"
            >
              {isPlaying ? (
                <PauseIcon className="h-6 w-6" />
              ) : (
                <PlayIcon className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="h-[30vh] xl:h-full xl:max-w-lg mx-auto xl:mx-0 p-8 xl:p-0 xl:pr-16  flex  flex-col justify-center  gap-2 xl:gap-4 2xl:mx-auto 2xl:p-8">
            <p className="text-sm mb-2">{currentSlide.subtitle}</p>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-serif mb-3 md:mb-4">
              {currentSlide.title}
            </h2>
            <p className="text-md md:text-xl leading-relaxed text-gray-700">
              {currentSlide.description}
            </p>

            {/* Контролы для десктопа */}
            <div className="hidden items-center justify-center xl:justify-start xl:gap-4 xl:p-0 xl:pt-8 p-8 xl:flex">
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous slide"
                  className="text-graphite hover:text-black"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <span className="text-sm font-mono">
                  {String(currentIndex + 1)} / {String(heroSlidesData.length)}
                </span>
                <button
                  onClick={handleNext}
                  aria-label="Next slide"
                  className="text-graphite hover:text-black"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </div>
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                className="text-graphite hover:text-black"
              >
                {isPlaying ? (
                  <PauseIcon className="h-6 w-6" />
                ) : (
                  <PlayIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
