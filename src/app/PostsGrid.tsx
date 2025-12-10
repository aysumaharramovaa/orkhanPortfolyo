"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// şəkillər
const sebrImages = Array.from({ length: 10 }, (_, i) => `/sebr${i || ""}.jpg`);
const dusunImages = Array.from({ length: 8 }, (_, i) => `/dusun${i || ""}.jpg`);
const qorxuImages = Array.from({ length: 11 }, (_, i) => `/qorxu${i || ""}.jpg`);
const anImages = Array.from({ length: 10 }, (_, i) => `/an${i || ""}.jpg`);
const neseImages = Array.from({ length: 10 }, (_, i) => `/nese${i || ""}.jpg`);
const ferqliImages = Array.from({ length: 9 }, (_, i) => `/ferqlii${i || ""}.jpg`);
const spImages = Array.from({ length: 9 }, (_, i) => `/sp${i || ""}.jpg`);
const sfImages = Array.from({ length: 11 }, (_, i) => `/sf${i || ""}.jpg`);
const dovsanImages = Array.from({ length: 10 }, (_, i) => `/dovsan${i || ""}.jpg`);

const Post = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Avtomatik şəkil dəyişmə (sabit)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  return (
    <div className="post w-full relative rounded-lg cursor-pointer overflow-hidden">
      {/* SABİT ÖLÇÜLÜ CONTAINER */}
      <div
        onClick={() => setIsPaused((p) => !p)}
        className="relative w-full h-[500px]"
      >
        <Image
          src={images[currentImage]}
          alt="post image"
          fill
          className="object-cover rounded-lg transition-opacity duration-300"
          priority
        />
      </div>

      {/* sağ-sol düymələri */}
      <button
        onClick={() =>
          setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={() =>
          setCurrentImage((prev) => (prev + 1) % images.length)
        }
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
};

const PostsGrid = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <div className="w-full sm:w-1/2 lg:w-1/4"><Post images={spImages} /></div>
      <div className="w-full sm:w-1/2 lg:w-1/4"><Post images={sfImages} /></div>
      <div className="w-full sm:w-1/2 lg:w-1/4"><Post images={sebrImages} /></div>
      <div className="w-full sm:w-1/2 lg:w-1/4"><Post images={dusunImages} /></div>
      <div className="w-full sm:w-1/2 lg:w-1/4"><Post images={qorxuImages} /></div>
      <div className="w-full sm:w-1/2 lg:w-1/4"><Post images={ferqliImages} /></div>
      <div className="w-full sm:w-1/2 lg:w-1/4"><Post images={neseImages} /></div>
      <div className="w-full sm:w-1/2 lg:w-1/4"><Post images={anImages} /></div>
      <div className="w-full sm:w-1/2 lg:w-1/4"><Post images={dovsanImages} /></div>
    </div>
  );
};

export default PostsGrid;
