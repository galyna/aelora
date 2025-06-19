"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import { supabase } from "../lib/supabaseClient";
import { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "@/public/images/hero6.webp";

type FormData = {
  email: string;
};

export default function SubscribeForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "error" | "success"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email: data.email }]);

    if (error) {
      setStatus("error");
    } else {
      setStatus("success");

      reset();
    }
  };

  return (
    <section
      id="subscribe"
      className="relative flex flex-col w-full py-8 md:py-10 lg:py-14  2xl:py-16"
    >
      <div className="flex flex-col xl:flex-row xl:items-stretch w-full xl:h-[60vh]">
        {/* Картинка: сверху на мобилках, справа на xl+ */}
        <div className="relative w-full h-[50vh] xl:h-full xl:w-3/5 xl:order-2">
          <Image
            src={heroImage}
            alt="Subscribe visual"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 7s0vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 pointer-events-none" />
        </div>
        {/* Форма */}
        <div className="relative flex-1 flex flex-col p-8 text-graphite xl:w-2/5 xl:h-full xl:items-center xl:text-left xl:pl-24 xl:pr-24 xl:order-1 justify-center">
          <div className="xl:max-w-lg w-full flex flex-col gap-2 xl:gap-2 2xl:gap-4">
            <h2 className="text-4xl  font-serif mb-3 md:mb-4 leading-tight">
              Let care arrive quietly
            </h2>
            <div className="w-full border-t border-graphite my-4"></div>
            <p className="text-lg text-gray-700">
              Receive occasional letters with calm thoughts and seasonal
              skincare tips.
            </p>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className=" bg-linen p-4  mt-4 text-center"
              >
                <p className="text-base font-medium " aria-live="polite">
                  Thank you for joining our ritual. ✨
                </p>
                <p className="text-sm mt-1">
                  We’ll send you seasonal skincare letters, softly.
                </p>
              </motion.div>
            )}
            {(status === "idle" ||
              status === "loading" ||
              status === "error") && (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    disabled={status === "loading"}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Enter a valid email",
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-300 
                    focus:outline-none focus:ring-2 focus:ring-clay transition disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  {errors.email && (
                    <p className="absolute top-full left-0 text-red-600 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                  {status === "error" && (
                    <p className="absolute top-full left-0 text-red-600 text-sm mt-1">
                      Error subscribing. Please try again.
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full md:w-[260px] px-6 py-4 mt-6 shadow-sm hover:shadow-md hover:opacity-100 opacity-95 transition-all duration-200
               border-2 border-olive text-olive uppercase tracking-widest font-bold text-sm  hover:bg-oliveLight "
                >
                  {status === "loading" ? (
                    <>
                      <span className="opacity-0">Subscribe</span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
