"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

interface Props {
  gallery: GalleryItem[];
}

export default function Gallery({ gallery }: Props) {
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
  });

  return (
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
  );
}