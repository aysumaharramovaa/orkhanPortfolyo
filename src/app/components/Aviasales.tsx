"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

type Slide = {
  title: string;
  info: string;
};

const slides1: Slide[] = [
  {
    title: "Ağız təamın artıq dəyişir",
    info: "Hər gün eyni dad? Yeni ölkələr və mətbəxlər ilə həm ağız təamını dəyişə, həm də rahat istirahət edə bilərsən.",
  },
  {
    title: "Ekzotik toy səni gözləyir",
    info: "Ən vacib günündə “Bəli” demək üçün sadəcə bir zal, dekor və musiqi deyil, unudulmaz səyahət planı da seçmək olar. Axı havadan sevgi qoxusu gəlir.",
  },
  {
    title: "Netflix gözləyə bilər, dəniz isə yox",
    info: "İstirahət yalnız Netflix və yataq deyil. Özünü günəşin, dənizin və sükutun qucağına ataraq xoşbəxtliyə sadəcə bir bilet uzaqlıqda ola bilərsən.",
  },
  {
    title: "Bəzən qohumları qısqandırmaq lazımdı",
    info: "Harda olduğun və hara getdiyinlə tez-tez maraqlanan qohumları təəccübləndirmək vaxtıdır. Sərin dəniz, isti qum və bir story paylaşımı.",
  },
  {
    title: "Xatirələri bir araya topla",
    info: "Bəzən sadəcə bir günün izi və soyuducunun üstündəki bir şəkil belə səni gülümsədə bilər. Maqnitlə yapışdırılmış o anlar isə keçmişdən gələn ən gözəl xatirədir.",
  },
  {
    title: "Gün batımı burdan başqa görünür",
    info: "Bəlkə də eyni günəşdir, amma başqa bir yerdə batanda daha fərqli hiss etdirir.",
  },
  {
    title: "Şəhər səninlə dəyişmir, amma səni dəyişir",
    info: "Hər gün eyni yerə gedirsən, amma içində nəsə solur. Bəzən yenilik üçün sən yox, getdiyin yer dəyişməlidir.",
  },
  {
    title: "Offline olmağa dəyər",
    info: "Bəzən sadəcə problemlərdən uzaqlaşaraq sakitliyə çəkilmək kifayətdir. Bu sakitliyin açarı isə yanına aldığın bir kitab və ən sevdiyin qəhvədə gizlənir.",
  },
  {
    title: "Arzuların səni gözləyir",
    info: "Səyahət etmək üçün dişlərini çox sıxdın və nəhayət bu artıq reallaşır. Çamadanın çoxdan hazırdır, playlist düzülüb, gedəcəyin şəhərin xəritəsi əzbərlənib. İndi isə təkcə bir addım qalır: ən sərfəli bileti tapmaq. Bunun üçün Aviasales var — çünki arzularına gedən yol bəzən sadəcə bir klik uzaqlıqda olur.",
  },
];

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setCurrent((prev) => (prev + 1) % slides1.length);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides1.length) % slides1.length);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides1.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      className={`relative overflow-hidden py-24 px-5 text-[#e3e1c9] ${notoSans.className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 bg-[#89986D]" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-[8%] top-[20%] w-[80%] h-[1px] border-t border-dashed border-[#e3e1c9]" />
        <div className="absolute left-[15%] top-[45%] w-[70%] h-[1px] border-t border-dashed border-[#e3e1c9]" />
        <div className="absolute left-[25%] top-[70%] w-[60%] h-[1px] border-t border-dashed border-[#e3e1c9]" />
      </div>

      <div className="absolute top-8 right-8 text-[90px] md:text-[150px] font-black text-[#e3e1c9]/10 leading-none">
        AVIA
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.35em] text-sm text-[#e3e1c9]/70 mb-4">
            Travel Moodboard
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            25TREND x Aviasales
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-[#e3e1c9]/30 rounded-full" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#e3e1c9]/20 rounded-full" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -30 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative bg-[#e3e1c9] text-[#3d4b2f] rounded-[3rem] p-8 md:p-12 shadow-2xl min-h-[420px] overflow-hidden"
              >
                <div className="absolute right-8 top-8 w-24 h-24 rounded-full border-2 border-dashed border-[#89986D]/40 flex items-center justify-center rotate-12">
                  <span className="text-xs font-black uppercase text-center leading-tight">
                    Travel <br /> Stamp
                  </span>
                </div>

                <div className="mb-10">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#89986D] text-[#e3e1c9] font-black mb-8">
                    {String(current + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-3xl md:text-5xl font-black leading-tight max-w-2xl">
                    {slides1[current].title}
                  </h3>
                </div>

                <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
                  {slides1[current].info}
                </p>

                <div className="flex items-center justify-between mt-12">
                  <button
                    onClick={() => {
                      setPaused(true);
                      prev();
                    }}
                    className="px-5 py-3 rounded-full border border-[#89986D]/40 hover:bg-[#89986D] hover:text-[#e3e1c9] transition"
                  >
                    ← Previous
                  </button>

                  <button
                    onClick={() => {
                      setPaused(true);
                      next();
                    }}
                    className="px-5 py-3 rounded-full bg-[#89986D] text-[#e3e1c9] hover:scale-105 transition"
                  >
                    Next →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {slides1.map((slide, i) => (
              <button
                key={slide.title}
                onClick={() => {
                  setPaused(true);
                  setCurrent(i);
                }}
                className={`aspect-square rounded-full border-2 border-dashed p-3 text-center transition-all duration-300 flex flex-col items-center justify-center ${
                  i === current
                    ? "bg-[#e3e1c9] text-[#3d4b2f] border-[#e3e1c9] scale-105 shadow-2xl"
                    : "bg-white/10 text-[#e3e1c9] border-[#e3e1c9]/35 hover:bg-white/20"
                }`}
              >
                <span className="text-xs font-black mb-1">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="text-[11px] md:text-xs font-bold leading-tight line-clamp-3">
                  {slide.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 h-1 bg-[#e3e1c9]/20 rounded-full overflow-hidden">
          <motion.div
            key={current}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6.5, ease: "linear" }}
            className="h-full bg-[#e3e1c9]"
          />
        </div>
      </div>
    </section>
  );
};

export default Carousel;