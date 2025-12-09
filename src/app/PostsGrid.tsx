"use client";

import { useEffect, useState } from "react";

const images = Array.from({ length: 10 }, (_, i) => `/sebr${i === 0 ? "" : i}.jpg`);

const Post = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

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
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <div className="w-full sm:w-1/2 lg:w-1/4">
        <Post />
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4">
        <Post />
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4">
        <Post />
      </div>
     
    </div>
  );
};

export default PostsGrid;
