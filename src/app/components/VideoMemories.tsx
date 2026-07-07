"use client";

import React, { useEffect, useRef, useState } from "react";

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

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.load();
    videoRef.current.play().catch(() => {});
  }, [currentIndex]);

  return (
    <section className="relative overflow-hidden py-24 px-5 bg-[#e3e1c9] text-[#3d4b2f]">
      <div className="absolute top-8 left-8 text-[90px] md:text-[170px] font-black text-[#89986D]/10 leading-none">
        REELS
      </div>

      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#89986D]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#89986D]/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-14 items-center">
        <div className="flex justify-center">
          <div className="relative w-[280px] md:w-[340px] rounded-[3rem] bg-[#26351f] p-3 shadow-2xl">
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black/60 rounded-full z-20" />

            <video
              ref={videoRef}
              src={videos[currentIndex]}
              controls
              playsInline
              onEnded={nextVideo}
              className="w-full aspect-[9/16] object-cover rounded-[2.4rem] bg-black"
            />

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-black/40 text-white text-xs font-bold backdrop-blur-md">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(videos.length).padStart(2, "0")}
            </div>
          </div>
        </div>

        <div>
          <p className="uppercase tracking-[0.35em] text-sm text-[#89986D] font-bold mb-5">
            Video Memories
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Memories that make us smile!
          </h2>

          <p className="text-lg text-[#5c6d40] max-w-xl leading-relaxed mb-10">
            Short moments, collected like reels. 
          </p>

          <div className="flex gap-3 mb-10">
            <button
              onClick={prevVideo}
              className="px-6 py-3 rounded-full border border-[#89986D]/50 hover:bg-[#89986D] hover:text-[#e3e1c9] transition"
            >
              ← Prev
            </button>

            <button
              onClick={nextVideo}
              className="px-6 py-3 rounded-full bg-[#89986D] text-[#e3e1c9] font-bold hover:scale-105 transition"
            >
              Next →
            </button>
          </div>

          <div className="grid grid-cols-5 gap-3 max-w-xl">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-14 rounded-2xl font-black transition-all duration-300 ${
                  currentIndex === i
                    ? "bg-[#89986D] text-[#e3e1c9] scale-105 shadow-xl"
                    : "bg-[#89986D]/15 text-[#3d4b2f] hover:bg-[#89986D]/25"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoMemories;