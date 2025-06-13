"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";

type FormData = {
  email: string;
};

export default function SubscribeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Subscribed:", data);
    reset();
  };

  return (
    <section id="subscribe" className="relative flex flex-col w-full py-8 md:py-10 lg:py-14  2xl:py-16">
      <div className="flex flex-col xl:flex-row xl:items-stretch w-full xl:h-[50vh]">
        {/* Картинка: сверху на мобилках, справа на xl+ */}
        <div className="relative w-full h-[50vh] xl:h-full xl:w-3/5 xl:order-2">
          <Image
            src="/images/hero6.jpg"
            alt="Subscribe visual"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
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
            {isSubmitSuccessful ? (
              <p className="text-green-600">Thank you for subscribing ✨</p>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                <input
                  type="email"
                  placeholder="your@email.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-clay transition"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email.message}</p>
                )}
                <button
                  type="submit"
                  className="w-full md:w-auto xl:w-full px-6 py-4 bg-graphite text-white uppercase tracking-wide hover:bg-black transition "
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
