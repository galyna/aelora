'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { GalleryItem } from "../models/GalleryItem";


// Хук для определения ширины окна и количества видимых слайдов
const useVisibleSlides = () => {
  const getDefaultSlidesCount = useCallback(() => 3 as const, []);

  const getSlidesCountOnClient = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1536) { return 4 as const; }
      if (window.innerWidth >= 768) { return 3 as const; }
      return 1 as const;
    }
    return getDefaultSlidesCount();
  }, [getDefaultSlidesCount]);

  const [visibleSlides, setVisibleSlides] = useState<1 | 3 | 4>(getDefaultSlidesCount());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const updateSlides = () => {
      setVisibleSlides(getSlidesCountOnClient());
    };

    window.addEventListener('resize', updateSlides);
    updateSlides(); 

    return () => window.removeEventListener('resize', updateSlides);
  }, [getSlidesCountOnClient]);

  return isClient ? visibleSlides : getDefaultSlidesCount();
};

// НОВЫЙ ХУК для определения, является ли устройство мобильным
const useIsMobile = () => {
  const getDefaultIsMobile = useCallback(() => false as const, []);

  const getIsMobileOnClient = useCallback(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 765; 
    }
    return getDefaultIsMobile();
  }, [getDefaultIsMobile]);

  const [isMobile, setIsMobile] = useState<boolean>(getDefaultIsMobile());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const updateIsMobile = () => {
      setIsMobile(getIsMobileOnClient());
    };

    if (typeof window !== "undefined") {
      window.addEventListener('resize', updateIsMobile);
      updateIsMobile(); 
      return () => window.removeEventListener('resize', updateIsMobile);
    }
  }, [getIsMobileOnClient]);

  return isClient ? isMobile : getDefaultIsMobile();
};

export default function Gallery(props: { items: GalleryItem[] }) {
  const { items } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const visibleSlides = useVisibleSlides();
  const isMobile = useIsMobile(); // Используем новый хук
  const slideItemWidthPercentage = 100 / visibleSlides;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextPossibleIndex = prevIndex + 1;
      return Math.min(nextPossibleIndex, items.length - visibleSlides);
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Обновленные условия для отображения кнопок
  const showPrevButton = (isMobile && currentIndex > 0) || (!isMobile && isHovering && currentIndex > 0);
  const showNextButton = (isMobile && currentIndex < items.length - visibleSlides) || (!isMobile && isHovering && currentIndex < items.length - visibleSlides);

  return (
    <section className="py-16 md:py-24  text-graphite overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
         <h2 className="text-3xl md:text-4xl font-serif text-center">Formulations for Skin, Hair & Body</h2>
      </div>

      <div
        className="relative"
        onMouseEnter={() => !isMobile && setIsHovering(true)} // Ховер только на десктопе
        onMouseLeave={() => !isMobile && setIsHovering(false)} // Ховер только на десктопе
        role="region"
        aria-roledescription="carousel"
        aria-label="Product gallery"
      >
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {`Item ${currentIndex + 1} of ${items.length}: ${items[currentIndex]?.title || ''}`}
        </div>

        <div className="overflow-hidden w-full">
            <motion.div
                className="flex"
                animate={{ x: `-${currentIndex * slideItemWidthPercentage}%` }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
                {items.map((item, index) => (
                <div
                    key={index}
                    className="flex-shrink-0"
                    style={{ width: `${slideItemWidthPercentage}%` }}
                >
                    <div className="flex flex-col items-center text-center px-1 "> 
                        <div className="bg-linen p-2 md:p-3 lg:p-4 2xl:p-4 w-full 
                        aspect-[3/4] flex items-center justify-center mb-4 shadow-sm ">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={200} 
                                height={200}
                                sizes="(max-width: 767px) 90vw, (max-width: 1535px) 30vw, 23vw"
                                className="object-contain max-h-full w-auto"
                                priority={index < visibleSlides}
                            />
                        </div>
                        <div className="w-full">
                            <h3 className="text-base md:text-lg font-medium text-graphite mb-1 truncate">{item.title}</h3>
                            <p className="text-sm text-gray-600 truncate">{item.description}</p>
                        </div>
                    </div>
                </div>
                ))}
            </motion.div>
        </div>

        {showPrevButton && (
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 bg-graphite/80 p-3 hover:bg-graphite transition z-10"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="h-5 w-5 text-white" />
          </button>
        )}
        {showNextButton && (
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 bg-graphite/80 p-3 hover:bg-graphite transition z-10"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="h-5 w-5 text-white" />
          </button>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 md:mt-12">
            <div className="w-full h-0.5 bg-gray-300 rounded-full overflow-hidden">
                <motion.div
                className="h-full bg-graphite"
                animate={{
                    width: `${((Math.min(currentIndex, items.length - visibleSlides) + visibleSlides) / items.length) * 100}%`
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                />
            </div>
        </div>
      </div>
    </section>
  );
}
