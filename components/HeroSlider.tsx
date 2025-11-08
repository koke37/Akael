"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  src: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    title: "Innovating Beyond Boundaries",
    subtitle: "Smart IT solutions for a dynamic future",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    title: "Engineering Digital Excellence",
    subtitle: "From vision to flawless delivery",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    title: "Partnering for Growth",
    subtitle: "Secure, scalable, and performance-driven",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[80vh]">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={slide.src}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl animate-fadeIn delay-200">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}