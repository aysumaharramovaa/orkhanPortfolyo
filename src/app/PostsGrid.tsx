"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Şəkillər
const sebrImages = Array.from({ length: 10 }, (_, i) => `/sebr${i === 0 ? "" : i}.jpg`);
const dusunImages = Array.from({ length: 8 }, (_, i) => `/dusun${i === 0 ? "" : i}.jpg`);

const Post = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); 
  const [offset, setOffset] = useState(0);

  // Avtomatik şəkil dəyişmə və sağ-sol effekt
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentImage((prev) => (prev + 1) % images.length);

        setOffset((prev) => {
          let newOffset = prev + direction * 2;
          if (newOffset > 10 || newOffset < -10) setDirection(-direction);
          return newOffset;
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, direction, images.length]);

  // Funksiyalar
  const togglePause = () => setIsPaused((prev) => !prev);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);

  return (
    <div className="post w-full relative overflow-hidden rounded-lg cursor-pointer">
      <div onClick={togglePause} className="w-full h-auto relative">
        <Image
          src={images[currentImage]}
          alt="post image"
          width={500}   // şəkil ölçüsünə uyğun dəyişdir
          height={300}  // şəkil ölçüsünə uyğun dəyişdir
          style={{ transform: `translateX(${offset}px)` }}
          className="w-full h-auto object-cover rounded-lg transition-transform duration-100"
          priority      // LCP üçün
        />
      </div>

      <button
        onClick={prevImage}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
};

const PostsGrid = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <div className="w-full sm:w-1/2 lg:w-1/4">
        <Post images={sebrImages} />
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4">
        <Post images={dusunImages} />
      </div>
    </div>
  );
};

export default PostsGrid;
