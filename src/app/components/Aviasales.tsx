"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    info: "İstirahət yalnız Netflix və yataq deyil. Özünü günəşin, dənizin və sükutun qucağına ataraq xoşbəxtliyə sadəcə bir bilet uzaqlığda ola bilərsən.",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides1.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrent(index);
    setPaused(true);
  };

  return (
    <section className="max-w-3xl mx-auto text-[#e3e1c9]">
      <h2 className="text-4xl font-bold mb-8 text-center">
        25TREND x Aviasales
      </h2>

      <div className="relative w-full h-64 md:h-60 lg:h-72 overflow-hidden">
        <AnimatePresence>
          {slides1.map((slide, index) =>
            index === current ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className="absolute w-full h-full p-6 rounded-lg shadow-lg cursor-pointer
                           flex flex-col justify-center"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-2xl text-[#F4F3EE] font-semibold mb-3">
                  {slide.title}
                </h3>
               <p className="text-xl text-[#e3e1c9]">{slide.info}</p>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides1.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-white" : "bg-[#9AAA7B]"
              }`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Carousel;
