"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const posts = [
  ["Maraq", Array.from({ length: 9 }, (_, i) => `/maraq${i || ""}.jpg`)],
  [
    "Rick & Morty",
    Array.from({ length: 9 }, (_, i) => `/rickmorty${i || ""}.jpg`),
  ],
  ["Nostalji", Array.from({ length: 11 }, (_, i) => `/nostalji${i || ""}.jpg`)],
  [
    "Melanxoniya",
    Array.from({ length: 10 }, (_, i) => `/melanxoniya${i || ""}.jpg`),
  ],
  ["South Park", Array.from({ length: 9 }, (_, i) => `/sp${i || ""}.jpg`)],
  ["Sci-Fi", Array.from({ length: 11 }, (_, i) => `/sf${i || ""}.jpg`)],
  ["Səbr", Array.from({ length: 10 }, (_, i) => `/sebr${i || ""}.jpg`)],
  ["Düşün", Array.from({ length: 8 }, (_, i) => `/dusun${i || ""}.jpg`)],
  ["Qorxu", Array.from({ length: 11 }, (_, i) => `/qorxu${i || ""}.jpg`)],
  ["Fərqli", Array.from({ length: 9 }, (_, i) => `/ferqlii${i || ""}.jpg`)],
] as const;

export default function PostsHero() {
  const [post, setPost] = useState(0);
  const [slide, setSlide] = useState(0);
  const imgs = posts[post][1];
  useEffect(() => setSlide(0), [post]);
  useEffect(() => {
    const t = setInterval(() => setSlide((v) => (v + 1) % imgs.length), 2200);
    return () => clearInterval(t);
  }, [imgs.length]);

  return (
    <section className="min-h-screen bg-[#89986D] py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-6">
          <div></div>
          <p className="text-[#F7F4EA]">
            {String(post + 1).padStart(2, "0")} / {posts.length}
          </p>
        </div>

        <div className="relative h-[420px] md:h-[500px] w-full max-w-5xl mx-auto rounded-[28px] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 scale-110 blur-3xl opacity-20">
            <Image src={imgs[slide]} alt="" fill className="object-cover" />
          </div>
          <Image
            src={imgs[slide]}
            alt=""
            fill
            className="object-contain relative z-10"
          />
          <button
            onClick={() => setSlide((v) => (v - 1 + imgs.length) % imgs.length)}
            className="absolute z-20 left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white"
          >
            ‹
          </button>
          <button
            onClick={() => setSlide((v) => (v + 1) % imgs.length)}
            className="absolute z-20 right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white"
          >
            ›
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2 overflow-x-auto scrollbar-hide pb-2">
          {posts.map((p, i) => (
            <button
              key={p[0]}
              onClick={() => setPost(i)}
              className={`flex-shrink-0 w-[90px] transition-all ${
                i === post ? "scale-105" : "opacity-80 hover:opacity-100"
              }`}
            >
              <div
                className={`relative h-[120px] rounded-2xl overflow-hidden border ${
                  i === post ? "border-[#F7F4EA]" : "border-white/10"
                } bg-transparent`}
              >
                <Image src={p[1][0]} alt={p[0]} fill className="object-cover" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
