
"use client";
import { useState, useEffect } from "react"
import { useSwipeable } from "react-swipeable"
import Navbar from '@/components/Navbar'
import HeroSlider from '@/components/HeroSlider'
import services from '@/data/services.json'
import testimonials from '@/data/testimonials.json'
import projects from '@/data/projects.json'
import gallery from '@/data/gallery.json'
import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}


interface Props {
  gallery: GalleryItem[];
}





export default function Page() {

  
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowRight" && selectedIndex !== null) {
        nextImage();
      } else if (e.key === "ArrowLeft" && selectedIndex !== null) {
        prevImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === 0 ? gallery.length - 1 : prev! - 1
      );
    }
  };

  // Swipe handlers for modal
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  return (
    <main>
      
      <Navbar />

      {/* Home / Hero */}
      <section id="home" className="relative">
        
        <HeroSlider />
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">About Us</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
             Every big dream starts small. For us at AKAEL VENTURES NIGERIA LIMITED, it began with a
simple idea: to serve people better.
Years ago, standing in the middle of a busy Lagos street, we noticed how everyday needs — from a
good meal, to a place to shop, to a trusted service — were often scattered and hard to reach. That
observation sparked a vision: what if one company could bring these essentials together under one
trusted name?
With determination, faith, and a deep love for our community, we opened our first business — a
modest retail outlet that quickly became a gathering spot for locals. From there, we expanded into
restaurants that felt like home, service hubs that solved daily challenges, and spaces where people
could connect and thrive.
We grew not just in size, but in heart. Every milestone — each store opened, every customer
served — has been part of a bigger journey to bridge needs and possibilities.
  </p>
<br />
<h5 className="text-1xl font-bold tracking-tight">Our Vision</h5>

<p className="mt-4 text-gray-700 leading-relaxed">
To become a trusted name across Nigeria for quality, innovation, and community-driven solutions.
Our Mission
To create spaces and services that make daily life easier and better. To operate with honesty,
consistency, and care. To give back to the communities that give us so much. To keep evolving
with the times while staying true to our roots.</p> 

<h5 className="text-1xl font-bold tracking-tight">Our Promise</h5>
<p className="mt-4 text-gray-700 leading-relaxed">At AKAEL, we live by our motto: “Where Needs Meet Vision.”
We don’t just see what’s in front of us — we look ahead, finding ways to serve people today while
building a better tomorrow.</p>

          
            <a href="#projects" className="mt-6 inline-block text-brand-700 font-medium">See our projects →</a>
          </div>
          <div className="relative h-64 md:h-80">
            <Image src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1200&auto=format&fit=crop" alt="About" fill className="object-cover rounded-lg shadow" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section bg-gray-50">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-4 text-gray-600">At AKAEL VENTURES NIGERIA LIMITED, we bring everyday essentials under one trusted name. Our services are designed to make life easier, better, and more connected.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      
  <section id="gallery" className="section">
      <h2 className="text-3xl font-bold mb-6">Gallery</h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {gallery.map((g, index) => (
          <div
            key={g.src}
            className="relative group cursor-pointer h-40 md:h-48 lg:h-56 overflow-hidden rounded-md"
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={g.src}
              alt={g.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
              loading="lazy"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm font-medium">
              Click to enlarge
            </div>
            {/* Caption */}
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-xs p-1 text-center">
              {g.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            {...swipeHandlers}
            className="relative w-[90%] md:w-[70%] lg:w-[50%]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <Image
              src={gallery[selectedIndex].src}
              alt={gallery[selectedIndex].alt}
              width={1200}
              height={800}
              priority
              className="rounded-lg"
            />
            <p className="text-white text-center mt-4">
              {gallery[selectedIndex].caption}
            </p>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={() => setSelectedIndex(null)}
            >
              ✕
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
              onClick={prevImage}
            >
              ◀
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
              onClick={nextImage}
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </section>



      {/* <section id="gallery" className="section">
        <h2 className="text-3xl font-bold">Gallery</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((g) => (
            <div key={g.src} className="relative h-40 md:h-48 lg:h-56">
              <Image src={g.src} alt={g.alt} fill className="object-cover rounded-md" />
            </div>
          ))}
        </div>
      </section> */}

      {/* Testimonials */}
      
<section id="testimonials" className="section bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Testimonials</h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
       
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 3 }, // Desktop
        }}
        className="pb-10"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.name}>
            <figure className="rounded-lg border bg-white p-6 shadow-sm">
              <blockquote className="text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-gray-900">
                — {t.name}
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>


      
      {/* <section id="testimonials" className="section bg-gray-50">
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-lg border bg-white p-6 shadow-sm">
              <blockquote className="text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-gray-900">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section> */}

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="rounded-lg border p-6 shadow-sm">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="mt-2 text-gray-600">{p.summary}</p>
              {Array.isArray(p.tags) && (
                <div className="mt-4 flex gap-2 flex-wrap">
                  {p.tags.map((tag: string) => (
                    <span key={tag} className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

   <footer className="bg-white border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <div className="text-2xl font-bold">AKAEL</div>
            <p className="mt-2 sm:mt-0 text-sm text-gray-500">
              © {new Date().getFullYear()} OnePage. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap gap-4">
            <a href="#about" className="text-sm text-gray-600 hover:text-gray-900">About</a>
            <a href="#services" className="text-sm text-gray-600 hover:text-gray-900">Services</a>
            <a href="#projects" className="text-sm text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#gallery" className="text-sm text-gray-600 hover:text-gray-900">Gallery</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="mailto:hello@onepage.example" className="text-sm text-gray-600 hover:text-gray-900">
              hello@onepage.example
            </a>

            <div className="flex items-center space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} className="text-gray-500 hover:text-blue-600 transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} className="text-gray-500 hover:text-sky-500 transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} className="text-gray-500 hover:text-blue-700 transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} className="text-gray-500 hover:text-pink-500 transition-colors" />
              </a>
            </div>
          </div>
        </div>

     
      </div>
    </footer>
    </main>
  )
}
