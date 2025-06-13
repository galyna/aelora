"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface Review {
  name: string;
  role: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Sarah Johnson",
    role: "Beauty Blogger",
    text: "The Geranium Leaf Body Scrub transformed my skincare routine. My skin has never felt so smooth and refreshed!",
  },
  {
    name: "Emma Thompson",
    role: "Yoga Instructor",
    text: "These products have become an essential part of my daily self-care ritual. The quality is exceptional.",
  },
  {
    name: "Michael Chen",
    role: "Skincare Enthusiast",
    text: "I've tried many natural skincare brands, but Aelora stands out with its thoughtful formulations and beautiful scents.",
  },
];

function ReviewCard({ name, role, text }: Review) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className=" bg-linen p-8  flex flex-col items-start justify-center text-left text-graphite">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -60, opacity: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
        className="w-full"
      >
        <h3 className="text-xl font-serif mb-2 font-semibold">{name}</h3>
        <p className="text-base  mb-4 font-serif">{role}</p>
        <p className="text-lg ">&ldquo;{text}&rdquo;</p>
      </motion.div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="pt-8 md:pt-8 lg:pt-10 2xl:pt-14 pb-16 md:pb-20 lg:pb-28  2xl:pb-32s">
      <div className="w-full  ">
        <div className=" container mx-auto px-4">
          <div className="max-w-20xl mx-auto px-6 ">
            <h2 className="text-4xl  font-serif text-center mb-16 ">
            Their Words, Our Rituals
            </h2>
            <div className="grid w-full grid-cols-1  lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 