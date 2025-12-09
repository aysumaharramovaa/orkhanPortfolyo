"use client";

import { useEffect, useState } from "react";

// 1-ci post
const sebrImages = Array.from({ length: 10 }, (_, i) => `/sebr${i === 0 ? "" : i}.jpg`);
// 2-ci post 
const dusunImages = Array.from({ length: 8 }, (_, i) => `/dusun${i=== 0 ? "" : i }.jpg`);

const Post = ({ images, currentImage }: { images: string[], currentImage: number }) => {
  return (
    <div className="post w-full">
      <img
        src={images[currentImage]}
        alt="post image"
        className="w-full h-auto rounded-lg object-cover"
      />
    </div>
  );
};

const PostsGrid = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => prev + 1);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <div className="w-full sm:w-1/2 lg:w-1/4">
        <Post images={sebrImages} currentImage={currentImage % sebrImages.length} />
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4">
        <Post images={dusunImages} currentImage={currentImage % dusunImages.length} />
      </div>
    </div>
  );
};

export default PostsGrid;
