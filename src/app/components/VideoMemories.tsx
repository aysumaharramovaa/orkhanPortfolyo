"use client";

import React, { useState, useRef, useEffect } from "react";

const videos: string[] = [
  "/videos/zaman (1).mp4",
  "/videos/zaman (2).mp4",
  "/videos/zaman (3).mp4",
  "/videos/zaman (4).mp4",
  "/videos/zaman (5).mp4",
  "/videos/zaman (6).mp4",
  "/videos/zaman (7).mp4",
  "/videos/zaman (8).mp4",
  "/videos/zaman (9).mp4",
  "/videos/zaman (10).mp4",
  "/videos/zaman (11).mp4",
  "/videos/zaman (12).mp4",
  "/videos/zaman (13).mp4",
  "/videos/zaman (14).mp4",
  "/videos/zaman (15).mp4",
];

const VideoMemories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnded = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-4xl text-[#e3e1c9] font-bold mb-8 text-center">
        Memories that make us smile!
      </h2>

      <div className="flex justify-center mb-4">
        <div className="rounded-xl overflow-hidden">
          <video
            ref={videoRef}
            src={videos[currentIndex]}
            controls
            onEnded={handleEnded}
            className="w-full h-[200px] md:h-[600px] object-cover"
          />
        </div>
      </div>

      <div className="hidden md:flex gap-2">
        {videos.map((video, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`flex-1 cursor-pointer border-4 ${
              currentIndex === i ? "border-yellow-400" : "border-transparent"
            }`}
          >
            <video
              src={video}
              className="w-full h-24 object-cover rounded"
              muted
              preload="metadata"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoMemories;
