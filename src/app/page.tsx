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

        <section className="relative overflow-hidden py-24 px-5 text-[#FDF5AA]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1f2a1b] via-[#89986D] to-[#3d4b2f]" />

          <div className="absolute top-10 left-8 text-[80px] md:text-[150px] font-black text-white/5 leading-none">
            ANİMASİYA
          </div>

          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#FDF5AA]/10 rounded-full blur-3xl" />
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                Animasiya dünyası ilə daha yaxından tanış olmağa nə
                deyirsən?{" "}
              </h2>

              <p className="text-lg text-[#FDF5AA]/80 max-w-md leading-relaxed mb-8">
                Partnyoru olduğumuz “ANIMAFILM Beynəlxalq Animasiya Festivalı”
                səni unikal animasiya texnikalarını və bənzərsiz hekayələri kəşf
                etməyə dəvət edir.{" "}
              </p>

              <a
                href="https://www.instagram.com/reel/DOS64BcjH8u/?utm_source=ig_web_copy_link&igsh=bWZ1cmN0d3pkZDZo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3 bg-[#FDF5AA] text-[#3d4b2f] rounded-full font-bold shadow-lg hover:scale-105 transition-all duration-300"
              >
            Instagram
                <span>→</span>
              </a>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 border border-[#FDF5AA]/30 rounded-[2rem] rotate-3" />
              <div className="absolute -inset-5 border border-white/10 rounded-[2rem] -rotate-3" />

              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-4 shadow-2xl">
                <div className="flex gap-2 mb-4 px-2">
                  <span className="w-3 h-3 rounded-full bg-[#FDF5AA]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#FDF5AA]/50" />
                  <span className="w-3 h-3 rounded-full bg-[#FDF5AA]/30" />
                </div>

                <video
                  src="/videos/animfilmi.mp4"
                  controls
                  className="w-full aspect-[9/12] object-cover rounded-[1.5rem]"
                />
              </div>
            </div>
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
