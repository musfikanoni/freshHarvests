"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import testimonials from "../data/testimonial";

export default function Testimonial() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-[150px]">
      <h3 className='text-center text-[#749B3F] text-xl font-bold'><span className='bg-slate-200 px-3 rounded py-1.5'>Testimonial</span></h3>
      <h2 className='text-center font-bold text-4xl py-5'>What Our Customers Say</h2>

      <p className="text-center mb-16">
        Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:
      </p>

      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]} 
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="lg:flex flex-none items-center gap-6 shadow">
              <Image
                src={testimonial.reviewerImage}
                alt={testimonial.reviewerName}
                className="h-[30rem]"
                width={500}
                height={300}
              />
              <div className="bg-[#f9f9f9] p-8">
                <p className="text-gray-700 text-base mb-2 leading-relaxed ">
                  “{testimonial.reviewDescription}”
                </p>
                <h4 className="text-[#212337] font-semibold text-lg mt-10">
                  — {testimonial.reviewerName}
                </h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}