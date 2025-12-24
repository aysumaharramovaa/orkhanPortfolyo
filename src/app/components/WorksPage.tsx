"use client";

import Image from "next/image";
import { useState } from "react";


const projects = [
  {
    id: 1,
    name: "Yemək Yeyəndə Nə İzləyək ?",
    instagramLink:
      "https://www.instagram.com/p/DNfMeltt2zI/?igsh=MXZvcjRtbjJ2Mzh0Mg%3D%3D&img_index=1",
    imageUrl: "/food.jpg",
  },
  {
    id: 2,
    name: "Bakı Kinoteatrlarında Nə İzləyək ?",
    instagramLink:
      "https://www.instagram.com/p/DM2BaYbtGnL/?igsh=NTNpa2UxNTdvdWZl",
    imageUrl: "/kino.jpg",
  },
  {
    id: 3,
    name: "Həftəsonunu Harda Keçirək?",
    instagramLink:
      "https://www.instagram.com/p/DNVJUJttupy/?img_index=9&igsh=MTM3ZWZ6aHFsMWlmeg%3D%3D",
    imageUrl: "/eleven.jpg",
  },
  {
    id: 4,
    name: "NƏSƏ etməlisən, amma heç cürə başlaya bilmirsən?",
    instagramLink:
      "https://www.instagram.com/p/DMsCh69N0xV/?igsh=OHVuenp3bHo4ejEx",
    imageUrl: "/ten.jpg",
  },
  {
    id: 5,
    name: "Artıq Eyni Zövqü Verməyən Şeylər",
    instagramLink:
      "https://www.instagram.com/p/DLmRX5eNE3C/?igsh=aGI2eDhpOTFjajBs&img_index=10",
    imageUrl: "/one.jpg",
  },
  {
    id: 6,
    name: "gen-z love",
    instagramLink:
      "https://www.instagram.com/p/DKzJOrztb9B/?igsh=MXRwY256ODByYXVtbw%3D%3D",
    imageUrl: "/two.jpg",
  },
  {
    id: 7,
    name: "Vaxtında Qədrini Bilmədiyimiz Şeylər",
    instagramLink:
      "https://www.instagram.com/p/DK1XgxZNP5A/?img_index=2&igsh=Y2oyemIyOTBjZXZ5",
    imageUrl: "/three.jpg",
  },
  {
    id: 8,
    name: "Dostlar Günü",
    instagramLink:
      "https://www.instagram.com/p/DKq9ce3NPU3/?igsh=MTI1c3hlYWhpMW40aA%3D%3D",
    imageUrl: "/four.jpg",
  },
  {
    id: 9,
    name: "25trend & DIV Academy",
    instagramLink:
      "https://www.instagram.com/p/DLovQrftcJg/?igsh=MTgzdDBoczJieG9ibg%3D%3D",
    imageUrl: "/five.jpg",
  },
  {
    id: 10,
    name: "Qızmar Günlərdə Həyat Qurtaran Şeylər",
    instagramLink:
      "https://www.instagram.com/p/DMKOZIftu1z/?img_index=2&igsh=NDRlZHliM2lzZHFq",
    imageUrl: "/six.jpg",
  },
  {
    id: 11,
    name: "'AzTube'da Nə Izləyək?",
    instagramLink:
      "https://www.instagram.com/p/DK4OBjqNx3Z/?img_index=1&igsh=MTFlbWZ0NG14d2xnYw%3D%3D",
    imageUrl: "/seven.jpg",
  },
  {
    id: 12,
    name: "Yayda İzləməli Olduğunuz Filmlər",
    instagramLink:
      "https://www.instagram.com/p/DKwJVoTNsfh/?img_index=5&igsh=MXU3MTYzYWJrYTNxMw%3D%3D",
    imageUrl: "/eight.jpg",
  },
  {
    id: 13,
    name: "Ürəyində Nəsə Küsülüsən, Çünki...",
    instagramLink:
      "https://www.instagram.com/p/DKgpj4Vtsu3/?igsh=cWF2cG92a2N5dmZt",
    imageUrl: "/nine.jpg",
  },
  {
    id: 14,
    name: "Həftəsonunu Harda Keçirək?",
    instagramLink:
      "https://www.instagram.com/p/DPTZKt1DD9x/?utm_source=ig_web_copy_link&igsh=MXJ0eXppZ2Z4ejVueA==",
    imageUrl: "/harda.jpg",
  },
  {
    id: 15,
    name: "Qurban Qurbanov",
    instagramLink:
      "https://www.instagram.com/p/DPRuaN5DGlQ/?utm_source=ig_web_copy_link&igsh=MWNzZW1hZm1jZmticg==",
    imageUrl: "/qurbanqurbanov.jpg",
  },
  {
    id: 16,
    name: "Bu Ay Kimin Konsertinə Gedək?",
    instagramLink:
      "https://www.instagram.com/p/DPRAE-pDBRD/?utm_source=ig_web_copy_link&igsh=MWt5ZXBrcmxrd3h3MQ==",
    imageUrl: "/buay.jpg",
  },
  {
    id: 17,
    name: "Anime Sevməyənlər Üçün 9 Şah Əsər",
    instagramLink:
      "https://www.instagram.com/p/DPJJMYrjIVl/?utm_source=ig_web_copy_link&igsh=czBndG8yOHJvbWp3",
    imageUrl: "/anime.png",
  },
  {
    id: 18,
    name: "Yemək Yeyəndə Nə İzləyək ?",
    instagramLink:
      "https://www.instagram.com/p/DPBS7HVDPEh/?utm_source=ig_web_copy_link&igsh=bTNiMWVzN2RrbmU5",
    imageUrl: "/yemek2.jpg",
  },
  {
    id: 19,
    name: "Sadəcə Bir Anlıq Xoşbəxtlik Verən Şeylər",
    instagramLink:
      "https://www.instagram.com/p/DO8Iz_gDG2O/?utm_source=ig_web_copy_link&igsh=MTZyNDZydDd1Ync1dA==",
    imageUrl: "/xosbextlik.jpg",
  },
  {
    id: 20,
    name: "Yayda İzləməli Olduğunuz Filmlər",
    instagramLink:
      "https://www.instagram.com/p/DOvglB_DJ93/?utm_source=ig_web_copy_link&igsh=N3NyeXI3azBoODBu",
    imageUrl: "/nesee.jpg",
  },
  {
    id: 21,
    name: "Peşmanlıq",
    instagramLink:
      "https://www.instagram.com/p/DOs0NZuDODI/?utm_source=ig_web_copy_link&igsh=MXRrcWl2amx2Njhncw==",
    imageUrl: "/pesmanliq.jpg",
  },
  {
    id: 22,
    name: "Kiçik Görünən, Amma Kiçik Olmayan Şeylər",
    instagramLink:
      "https://www.instagram.com/p/DOX4rSxDLH4/?utm_source=ig_web_copy_link&igsh=MWtiZGlwZXo3Y2Q0cQ==",
    imageUrl: "/kicik.jpg",
  },
  {
    id: 23,
    name: "Xoşbəxt Olmağın Xəritəsi",
    instagramLink:
      "https://www.instagram.com/p/DOVedbqjBM7/?utm_source=ig_web_copy_link&igsh=MTVld283cm1iNzF1aw==",
    imageUrl: "/xerite.jpg",
  },
  {
    id: 24,
    name: "Tədbirdə Davranış Qaydaları",
    instagramLink:
      "https://www.instagram.com/p/DOQQTFTDHE-/?utm_source=ig_web_copy_link&igsh=MWliOG02eW96dno4dg==",
    imageUrl: "/boolood.jpg",
  },
  {
    id: 25,
    name: "Həyatında NƏSƏ Sevgi Çatışmır, Çünki...",
    instagramLink:
      "https://www.instagram.com/p/DNsNV5NWM2i/?utm_source=ig_web_copy_link&igsh=c2twd3lqMzRvOWNx",
    imageUrl: "/sevgi.jpg",
  },
  {
    id: 26,
    name: "AzTube'da Nə İzləyək?",
    instagramLink:
      "https://www.instagram.com/p/DN0DBSmWBmG/?utm_source=ig_web_copy_link&igsh=a2FmNWxmNWxzbmdw",
    imageUrl: "/aztube.jpg",
  },
];


export default function WorksPage() {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleSeeMore = () => setVisibleCount((prev) => prev + 8);

  return (
    <>
   
      <h2 className="text-3xl text-[#e3e1c9] font-bold text-center my-8">
        Content stories created for <b>25TREND</b>
      </h2>

      <section className="overflow-hidden py-10">
        <div className="grid gap-6 px-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.slice(0, visibleCount).map((project, i) => (
            <a
              key={project.id}
              href={project.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-4 text-[#5c6d40] shadow-lg flex flex-col justify-between cursor-pointer transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl animate-[scaleUp_0.6s_ease-out_forwards]"
              style={{
                backgroundColor: "#e3e1c9",
                animationDelay: `${i * 0.15}s`,
              }}
            >
              <Image
                src={project.imageUrl}
                alt={project.name}
                width={250}
                height={250}
                className="rounded-md mb-4 w-full object-cover"
              />
              <p className="font-semibold">- {project.name}</p>
            </a>
          ))}
        </div>

        {visibleCount < projects.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleSeeMore}
              className="px-6 py-2 bg-[#e3e1c9] text-[#5c6d40] rounded-lg shadow hover:bg-[#c9c491] transition-all duration-300"
            >
              See More
            </button>
          </div>
        )}

        <style jsx>{`
          @keyframes scaleUp {
            0% {
              transform: scale(0.9);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </section>
    </>
  );
}
