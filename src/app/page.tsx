"use client";
import Image from "next/image";
import { useState } from "react";
import PostsGride from "./components/PostsGrid";
import VideosGrid from "./components/VideoPost";
import CollabWorks from "./components/CollabWorks";
import WorksPage from "./components/WorksPage";
import AparRide from "./components/AparRide";
import ArkaPartaGallery from "./components/ArkaPartaGallery";
import Aviasales from "./components/Aviasales";
import VideoMemories from "./components/VideoMemories";

export default function Portfolio() {
  const [isPaused, setIsPaused] = useState(false);

  function handleClick(instagramLink: string) {
    window.open(instagramLink, "_blank");
  }
  const cols = 4;
  const [visibleCount, setVisibleCount] = useState(cols * 2);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + cols);
  };

  return (
    <div className=" bg-[#89986D]">
      <div className="min-h-screen  flex flex-col">
        <div className="min-h-screen flex flex-col items-center justify-center px-4  ">
          <div className="text-center space-y-4">
            <h1
              className="text-5xl font-bold tracking-wide"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              Orkhan Gurbanli
            </h1>
            <p
              className="text-2xl text-[#FDF5AA] font-medium"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Content Creator & Copywriter
            </p>

            <div className="w-20 h-1 bg-[#FDF5AA] rounded-full animate-pulse mx-auto"></div>

            <div className="flex justify-center gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/orkhan-gurbanli-405043297/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg text-[#e5e3d0] bg-[#c3c4a8] hover:bg-[#34699A] transition-colors"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                LinkedIn
              </a>

              <a
                href="mailto:orkhankhurban@gmail.com"
                className="px-8 py-3 rounded-lg text-[#e5e3d0] bg-[#c3c4a8] hover:bg-[#34699A] transition-colors"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <section className="my-10 pt-5 bg-[#89986D]">
          <h2 className="text-3xl text-[#e3e1c9] font-bold text-center mb-6">
            Carousel Posts
          </h2>
          <PostsGride />
        </section>

        <section className="my-10">
          <h2 className="text-3xl  text-[#e3e1c9] font-bold text-center mb-6">
            Video Carousel Posts
          </h2>
          <VideosGrid />
        </section>

        <section className="my-10">
          <CollabWorks />
        </section>

        <section className="my-10">
          <WorksPage />
        </section>

        <section className=" bg-[#89986D] text-[#e3e1c9] py-10">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Listen to the voice within yourself!
          </h2>
          <div className="max-w-[600px] mx-auto rounded-xl shadow-2xl overflow-hidden">
            <video
              src="/videos/video1.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        <section className="my-10">
          <AparRide />
        </section>

        <section className=" text-[#FDF5AA] py-10 px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">
            How about getting to know the world of animation up close?
          </h2>

          <div className="max-w-[600px] mx-auto rounded-xl shadow-2xl overflow-hidden mb-6">
            <video
              src="/videos/animfilmi.mp4"
              controls
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="text-center">
            <a
              href="https://www.instagram.com/reel/DOS64BcjH8u/?utm_source=ig_web_copy_link&igsh=bWZ1cmN0d3pkZDZo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#e3e1c9] text-[#5c6d40] rounded-lg shadow hover:bg-[#c9c491] transition-all duration-300"
            >
              Instagram Link
            </a>
          </div>
        </section>

        <section className="my-10">
          <ArkaPartaGallery />
        </section>

        <section className="my-10">
          <Aviasales />
        </section>

        <section className="my-10">
          <VideoMemories />
        </section>
      </div>

      <footer className="w-full py-6 text-center text-sm text-[#e3e1c9]">
        © 2026 Orkhan Gurbanli. All rights reserved.
      </footer>
    </div>
  );
}
