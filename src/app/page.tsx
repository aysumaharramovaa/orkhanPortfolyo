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
import Emporium from "./components/Emporium";
import Hansiyerlifilm from "./components/Hansiyerlifilm";

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
          <Emporium />
        </section>

        <section className="my-10">
          <Hansiyerlifilm />
        </section>

        <section className="my-10">
          <WorksPage />
        </section>

        <section className="relative overflow-hidden bg-[#89986D] text-[#e3e1c9] py-20 px-6">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#e3e1c9]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#e3e1c9]/10 rounded-full blur-3xl" />

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <p className="uppercase tracking-[0.35em] text-sm mb-4 text-[#e3e1c9]/70">
                25TREND Video
              </p>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Listen to the voice within yourself!
              </h2>

              <p className="text-lg text-[#e3e1c9]/80 max-w-md">
                A short visual story created to feel, pause and reconnect with
                your inner world.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 border border-[#e3e1c9]/30 rounded-[2rem] rotate-3" />
              <div className="relative bg-[#e3e1c9]/15 backdrop-blur-md p-4 rounded-[2rem] shadow-2xl">
                <video
                  src="/videos/video1.mp4"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-[9/12] object-cover rounded-[1.5rem]"
                />
              </div>
            </div>
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
        © 2026 Orkhan Gurbanli.
      </footer>
    </div>
  );
}
