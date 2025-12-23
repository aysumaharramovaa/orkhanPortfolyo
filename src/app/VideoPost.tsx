"use client";

import { useEffect, useRef, useState } from "react";

/* ---------------- MEDIA LIST ---------------- */

const post1Media = [
  "/spotify.jpg",
  "/spotify.mp4",
  "/spotify1.mp4",
  "/spotify2.mp4",
  "/spotify3.mp4",
  "/spotify4.mp4",
  "/spotify5.mp4",
  "/spotify6.mp4",
  "/spotify7.mp4",
  "/spotify8.mp4",
  "/spotify9.mp4",
  "/spotify10.mp4",
  "/spotify11.mp4",
];

const post2Media = [
  "/music.mp4",
  "/music1.mp4",
  "/music2.mp4",
  "/music3.mp4",
  "/music4.mp4",
  "/music5.mp4",
  "/music6.mp4",
  "/music7.mp4",
  "/music8.mp4",
];

const post3Media = [
  "/yto.jpg",
  "/yto1.mp4",
  "/yto2.mp4",
  "/yto3.mp4",
  "/yto4.mp4",
  "/yto5.mp4",
  "/yto6.mp4",
  "/yto7.mp4",
  "/yto8.mp4",
];

/* ---------------- POST COMPONENT ---------------- */

const Post = ({ media }: { media: string[] }) => {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState(0); // ekranda olan
  const [paused, setPaused] = useState(false);
  const [loading, setLoading] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const nextSrc = media[current];
  const displaySrc = media[displayed];
  const isVideo = displaySrc.endsWith(".mp4");

  // Auto slide
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((p) => (p + 1) % media.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, media.length]);

  // Change with fade
  useEffect(() => {
    if (current === displayed) return;

    setLoading(true);

    const timeout = setTimeout(() => {
      setDisplayed(current);
    }, 250); // fade-out vaxtı

    return () => clearTimeout(timeout);
  }, [current, displayed]);

  // Video play
  useEffect(() => {
    if (!isVideo || !videoRef.current) return;

    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
  }, [displayed, isVideo]);

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-black">
      {/* MEDIA */}
      <div
        onClick={() => setPaused((p) => !p)}
        className="w-full h-full cursor-pointer relative"
      >
        {isVideo ? (
          <video
            ref={videoRef}
            src={displaySrc}
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setLoading(false)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          />
        ) : (
          <img
            src={displaySrc}
            onLoad={() => setLoading(false)}
            alt="post cover"
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          />
        )}
      </div>

      {/* LEFT */}
      <button
        onClick={() =>
          setCurrent((p) => (p - 1 + media.length) % media.length)
        }
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full z-10"
      >
        ◀
      </button>

      {/* RIGHT */}
      <button
        onClick={() =>
          setCurrent((p) => (p + 1) % media.length)
        }
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full z-10"
      >
        ▶
      </button>
    </div>
  );
};

/* ---------------- POSTS GRID ---------------- */

const VideosGrid = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      <div className="w-full sm:w-1/2 lg:w-1/4">
        <Post media={post1Media} />
      </div>

      <div className="w-full sm:w-1/2 lg:w-1/4">
        <Post media={post2Media} />
      </div>

      <div className="w-full sm:w-1/2 lg:w-1/4">
        <Post media={post3Media} />
      </div>
    </div>
  );
};

export default VideosGrid;
