"use client";

import { useEffect, useState } from "react";
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

const slides: Slide[] = [
  {
    title: "Kuryer işləmək",
    info: "Nə beyninin ətini yeyən o müdürə, nə də hər səhər ütülənməli olan kostyuma ehtiyacın var. Pul qazanmağın ən sərbəst, ən pedallı versiyası budur.",
  },
  {
    title: "Tıxacdan qaçmaq (yenə tıxacdayam)",
    info: "Tıxacdan nəfəsimizin kəsildiyi şəhərdə velosiped bir nəqliyyat yox, bir xilas yoludur. Həm cibə qənaət edə bilərsən, həm də dostuna “beş dəqiqəyə ordayam” sözünün həqiqi versiyasını yaşada bilərsən.",
  },
  {
    title: "Şəhəri qarış-qarış gəzmək",
    info: "Maşın keçməyən dar keçidlər, məhəllə arası yollarla fərqinə belə varmadığın məkanları kəşf edə bilərsən. Düzgün velosipedi seçmək isə məhz bizim əlimizdədir.",
  },
  {
    title: "Stressini azaltmaq",
    info: "Yorğun bir iş həftəsinin yükünü ruhunu daha da çərçivəyə salmadan, yavaş-yavaş, pedalla azalda bilərsən. Qulağında isə həmin o musiqi.",
  },
  {
    title: "Sevgilinlə romantik anlar yaşamaq (ayrıldı)",
    info: "“Görüşəndə hara gedək?” sualına ən rahat cavabı məhz budur. Əmin ol, klassik axşam yeməyi formatından bu dəfə daha uzaqda olacaqsan.",
  },
  {
    title: "Dostlarla birlikdə yarışmaq",
    info: "Söhbət Formula 1-dən getməsə də, dostlarını bu dəfə həqiqətən qabağına ala bilərsən. Həyəcan və əyləncə məhz yanında olan o beyinsiz ilə daha ləzzətli olacaq.",
  },
  {
    title: "Fiziki məşq etmək",
    info: "Axı əzələ yandırmaq üçün idman zalları şərt deyil. Şəhərin özü sənin məşq meydanın ola bilər.",
  },
  {
    title: "Saatlıq icarə verərək pul qazanmaq",
    info: "Sürmədiyin saatlarda velosiped işləsə necə olar? Yaxşı fikirdir, amma nəzərə almalısan ki, sektorda da yekamonlar çoxdur.",
  },
  {
    title: "Spontan gəzintilər etmək",
    info: "Heç bir planı qurulmamış o səhərin ən gözəl versiyası məhz budur. Bunun üçün isə “APAR Ride”ın aylıq abunəlik paketləri ilə nə vaxt istəsən, o an yola çıxa bilərsən.",
  },
];

export default function AparRideCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      next();
    }, 4500);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      className={`relative overflow-hidden py-24 px-5 bg-[#89986D] ${notoSans.className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute top-10 left-10 text-[160px] font-black text-[#e3e1c9]/10 leading-none">
        RIDE
      </div>

      <div className="absolute bottom-10 right-10 text-[120px] font-black text-[#e3e1c9]/10 leading-none">
        25
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-[#e3e1c9]/70 mb-4">
              Collaboration Story
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-[#e3e1c9] leading-tight">
              25TREND x <br />
              APAR RIDE
            </h2>
          </div>

          <p className="text-[#e3e1c9]/80 max-w-sm md:text-right leading-relaxed">
            Velosiped sürmək üçün səbəblər, şəhər ritmi və bir az da real həyat
            ironiyası.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_430px] gap-10 items-stretch">
          <div className="relative min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80, rotate: 3 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -80, rotate: -3 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative bg-[#e3e1c9] text-[#4d5f36] rounded-[2rem] p-8 md:p-12 shadow-2xl min-h-[360px] flex flex-col justify-between overflow-hidden"
              >
                <span className="absolute -right-6 -top-8 text-[140px] font-black text-[#89986D]/15">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <div className="w-14 h-1.5 bg-[#89986D] rounded-full mb-8" />

                  <h3 className="text-3xl md:text-5xl font-black leading-tight mb-8 max-w-2xl">
                    {slides[index].title}
                  </h3>

                  <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
                    {slides[index].info}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-10">
                  <span className="text-sm font-bold tracking-widest">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(slides.length).padStart(2, "0")}
                  </span>

                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setPaused(true);
                        prev();
                      }}
                      className="w-12 h-12 rounded-full border border-[#89986D]/40 hover:bg-[#89986D] hover:text-[#e3e1c9] transition"
                    >
                      ←
                    </button>

                    <button
                      onClick={() => {
                        setPaused(true);
                        next();
                      }}
                      className="w-12 h-12 rounded-full bg-[#89986D] text-[#e3e1c9] hover:scale-105 transition"
                    >
                      →
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute -z-10 inset-0 translate-x-5 translate-y-5 rounded-[2rem] border border-[#e3e1c9]/30" />
            <div className="absolute -z-20 inset-0 translate-x-10 translate-y-10 rounded-[2rem] border border-[#e3e1c9]/15" />
          </div>

          <div className="bg-[#e3e1c9]/10 border border-[#e3e1c9]/20 rounded-[2rem] p-5 backdrop-blur-md flex flex-col justify-center">
            <p className="text-[#e3e1c9]/70 text-xs uppercase tracking-[0.25em] mb-5">
              All reasons
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {" "}
              {slides.map((slide, i) => (
                <button
                  key={slide.title}
                  onClick={() => {
                    setPaused(true);
                    setIndex(i);
                  }}
                  className={`w-full text-left rounded-2xl px-4 py-2.5 transition ${
                    i === index
                      ? "bg-[#e3e1c9] text-[#4d5f36]"
                      : "bg-white/10 text-[#e3e1c9] hover:bg-white/20"
                  }`}
                >
                  <span className="block text-[11px] opacity-70 mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-semibold leading-snug">
                    {slide.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 h-1 bg-[#e3e1c9]/20 rounded-full overflow-hidden">
          <motion.div
            key={index}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4.5, ease: "linear" }}
            className="h-full bg-[#e3e1c9]"
          />
        </div>
      </div>
    </section>
  );
}
