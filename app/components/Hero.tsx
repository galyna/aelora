"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import hero1 from "@/public/images/poster-hero1.webp";
import hero2 from "@/public/images/poster-hero2.webp";
import hero4 from "@/public/images/hero4.webp";

interface HeroSlide {
  id: number;
  imageSrc: StaticImageData; // используется как poster, если есть video
  videoSrc?: string; // если задано, слайд видео
  altText: string;
  subtitle: string;
  title: string;
  description: string;
}

const heroSlidesData: HeroSlide[] = [
  {
    id: 3,
    imageSrc: hero1, // poster
    videoSrc: "/hero1.mp4",
    altText: "Lucent Facial Refiner bottle",
    subtitle: "Daily protection",
    title: "Introducing Lucent Facial Refiner",
    description:
      "Brighten and renew your skin with this lightweight facial serum for daily radiance.",
  },
  {
    id: 2,
    imageSrc: hero2, // poster
    videoSrc: "/hero2.mp4",
    altText: "Protective Facial Lotion video",
    subtitle: "Gentle cleansing",
    title: "Oat & Honey Artisan Soap",
    description:
      "Handcrafted soap with oats and honey to gently cleanse and deeply nourish your skin.",
  },
  {
    id: 1,
    imageSrc: hero4,
    altText: "Lucent Facial Refiner bottle",
    subtitle: "The skin—in its best light",
    title: "Bathroom Essentials Bundle",
    description:
      "A premium set for daily body care—gentle cleansing, freshness, and smooth skin.",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // refs to video elements per slide (only filled for slides that have video)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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

  // Play / pause videos based on carousel state
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === currentIndex && isPlaying) {
        // try to play, ignore errors from browsers that block autoplay
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [currentIndex, isPlaying]);

  return (
    <section className="relative flex flex-col w-full border-t  border-gray-200">
      <div className="flex flex-col xl:h-[60vh] xl:flex-row xl:items-stretch w-full">
        {/* Мобильная версия: изображение сверху */}
        <div className="relative w-full h-[50vh]  xl:h-[60vh] xl:order-2 xl:w-1/2">
          {heroSlidesData.map((slide, index) => {
            const isActive = index === currentIndex;
            const isFirst = index === 0;

            return (
              <motion.div
                key={slide.id}
                initial={isFirst ? false : { opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: isFirst ? 0 : 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {slide.videoSrc ? (
                  <video
                    className="object-cover w-full h-full"
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    loop
                    muted
                    playsInline
                    autoPlay={isActive && isPlaying}
                    preload={isActive ? "metadata" : "none"}
                    poster={slide.imageSrc.src}
                    width={600}
                    height={300}
                  >
                    <source
                      src={slide.videoSrc}
                      type={
                        slide.videoSrc.endsWith(".webm")
                          ? "video/webm"
                          : "video/mp4"
                      }
                    />
                  </video>
                ) : (
                  <Image
                    src={slide.imageSrc}
                    alt={slide.altText}
                    priority={isFirst}
                    fetchPriority={isFirst ? "high" : undefined}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    className="object-cover"
                    fill
                    placeholder="blur"
                  />
                )}
              </motion.div>
            );
          })}
          <div className="absolute inset-0 pointer-events-none bg-overlay/20 z-10"></div>
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
          <div className="h-auto  xl:h-full xl:max-w-lg mx-auto xl:mx-0 p-8 xl:p-0 xl:pr-16  flex  flex-col justify-around   2xl:mx-auto 2xl:p-8">
            <p className="text-sm mb-2">{currentSlide.subtitle}</p>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-serif mb-3 md:mb-4">
              {currentSlide.title}
            </h2>
            <p className="text-md md:text-xl leading-relaxed text-gray-700">
              {currentSlide.description}
            </p>
            <button
              onClick={() => {
                const el = document.getElementById("subscribe");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-[260px] px-6 py-4 mt-6 shadow-sm hover:shadow-md hover:opacity-100 opacity-95 transition-all duration-200
               border-2 border-olive text-oliveDark uppercase tracking-widest font-bold text-sm  hover:bg-oliveLight"
            >
              Join the ritual
            </button>
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
