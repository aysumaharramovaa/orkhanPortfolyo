"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    title: "Saatlıq icarə verərək pul qazanmaq (batdı)",
    info: "Sürmədiyin saatlarda velosiped işləsə necə olar? Yaxşı fikirdir, amma nəzərə almalısan ki, sektorda da yekamonlar çoxdur.",
  },
  {
    title: "Spontan gəzintilər etmək",
    info: "Heç bir planı qurulmamış o səhərin ən gözəl versiyası məhz budur. Bunun üçün isə “APAR Ride”ın aylıq abunəlik paketləri ilə nə vaxt istəsən, o an yola çıxa bilərsən.",
  },
];

export default function AparRideCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section className="max-w-4xl mx-auto px-4 py-20 text-center rounded-3xl">
      <h2 className="text-4xl font-bold text-[#e3e1c9] mb-12">
        25TREND x APAR RIDE
      </h2>

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.97 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            whileHover={{ scale: 1.02 }} 
            className="bg-[#9AAA7B] rounded-3xl p-10 shadow-xl min-h-[260px] flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              {slides[index].title}
            </h3>

            <p className="text-[#F4F3EE] text-lg leading-relaxed">
              {slides[index].info}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-10">
          <button
            onClick={prev}
            className="px-6 py-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
          >
            ←
          </button>
          <button
            onClick={next}
            className="px-6 py-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
          >
            →
          </button>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
