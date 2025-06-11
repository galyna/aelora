'use client';

import { useForm } from "react-hook-form";

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
    <section id='subscribe' className="py-20 md:py-32  text-graphite">
      <div className="max-w-xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif">
          Join the Ritual
        </h2>
        <p className="text-lg text-gray-700">
          Receive occasional letters with calm thoughts and seasonal skincare tips.
        </p>

        {isSubmitSuccessful ? (
          <p className="text-green-600">Thank you for subscribing ✨</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clay transition"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-graphite text-white uppercase tracking-wide hover:bg-black transition rounded"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
