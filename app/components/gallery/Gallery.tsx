'use client';

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { GalleryItem as GalleryItemType } from "../../models/GalleryItem";


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

function useIs2xl() {
  const [is2xl, setIs2xl] = useState(false);
  useEffect(() => {
    const check = () => setIs2xl(window.innerWidth >= 1536);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return is2xl;
}

function GalleryItem({ item,  visibleSlides, className = "" }: { item: GalleryItemType, index: number, visibleSlides: number, className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <div
      className={`flex-shrink-0 group ${className}`}
      style={{ width: `${100 / visibleSlides}%` }}
    >
      <div role="region" aria-label="Product carousel" ref={ref} className="relative w-full aspect-auto xl:aspect-square flex flex-col overflow-hidden group">
        <div className="h-2/3 xl:h-4/5 bg-linen transition-colors  flex items-center justify-center">
          <motion.div
            key={item.src}
            initial={{ y: -60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={300}
              height={300}
              sizes="(max-width: 967px) 99vw, (max-width: 1535px) 25vw, 25vw"
              className="object-contain max-h-full w-auto"
            
            />
          </motion.div>
        </div>
        <div className="h-1/3 xl:h-1/5 bg-transparent transition-colors duration-500 group-hover:bg-linen flex flex-col items-start justify-center text-left px-8 py-8">
          <h3 className="text-base lg:text-xl font-serif text-graphite mb-1 whitespace-normal break-words">{item.title}</h3>
          <p className="text-base lg:text-lg text-black whitespace-normal break-words">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Gallery({ items = [], generalDescription, id }: { 
  items: GalleryItemType[], 
  generalDescription?: { title: string, description: string },
  id?: string 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = useVisibleSlides();
  const slideItemWidthPercentage = 100 / visibleSlides;
  const is2xl = useIs2xl();

  if (!items || items.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextPossibleIndex = prevIndex + 1;
      return Math.min(nextPossibleIndex, items.length - visibleSlides);
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const showPrevButton = currentIndex > 0;
  const showNextButton = currentIndex < items.length - visibleSlides;

  // Формируем коллекцию для отображения
  const galleryItems: (GalleryItemType | { isGeneral: true; title: string; description: string })[] = is2xl && generalDescription
    ? [{ isGeneral: true, title: generalDescription.title, description: generalDescription.description }, ...items]
    : items;

  return (
    <section id={id} className=" text-graphite overflow-x-hidden py-8 md:py-10 lg:py-14  2xl:py-16">
      {/* Описание первого айтема только на маленьких экранах */}
      <div className="block 2xl:hidden max-w-7xl mx-auto px-4 sm:px-6 pb-8 ">
        {generalDescription && (
          <>
            <h2 className="text-4xl font-serif text-center mb-4">{generalDescription.title}</h2>
            <p className="text-lg text-center text-gray-700">{generalDescription.description}</p>
          </>
        )}
      </div>
      <div
        className="relative"
        role="region"
        aria-roledescription="carousel"
        aria-label="Product gallery"
      >
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {`Item ${currentIndex + 1} of ${galleryItems.length}: ${galleryItems[currentIndex]?.title || ''}`}
        </div>
        <div className="overflow-hidden w-full ">
            <motion.div
                className="flex gap-x-2 md:gap-x-2 "
                animate={{ x: `-${currentIndex * slideItemWidthPercentage}%` }}
                transition={{ type: "tween", duration: 0.7, ease: "easeInOut" }}
            >
                {galleryItems.map((item, index) =>
                  'isGeneral' in item ? (
                    <div
                      key="special"
                      className="hidden 2xl:flex flex-shrink-0 aspect-square h-3/5 min-h-0 flex-col items-start  bg-transparent group"
                      style={{ width: `${100 / visibleSlides}%` }}
                    >
                      <div className="flex-1  flex flex-col  items-start text-left py-8 pl-24 pr-8 gap-y-10">
                        <h2 className="text-2xl md:text-4xl font-serif text-graphite">{item.title}</h2>
                        <p className="text-lg md:text-xl text-gray-700 max-w-md mb-2">
                          {item.description}
                        </p>
                       
                      </div>
                    </div>
                  ) : (
                    <GalleryItem key={item.src} item={item} index={index} visibleSlides={visibleSlides} />
                  )
                )}
            </motion.div>
        </div>

        {showPrevButton && (
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 bg-graphite/80 p-8 hover:bg-graphite transition z-10"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="h-6 w-6 text-white" />
          </button>
        )}
        {showNextButton && (
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 bg-graphite/80 p-8 hover:bg-graphite transition z-10"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="h-6 w-6 text-white" />
          </button>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 md:mt-8">
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
