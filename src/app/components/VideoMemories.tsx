"use client";

import React from "react";

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
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl text-[#e3e1c9] font-bold mb-8 text-center">
        Even after all this time, the reason for our laughter is still them!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {videos.map((video, i) => (
          <div
            key={i}
            className="rounded-xl shadow-lg overflow-hidden bg-black"
          >
            <video
              src={video}
              controls
              preload="metadata"
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoMemories;
