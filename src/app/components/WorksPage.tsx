"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 50,
    name: "Bu həftənin gedilməli olan ən yaxşı tədbirlərini sizin üçün seçtik.",
    instagramLink:
      "https://www.instagram.com/p/DYokvsVjjIY/?igsh=aXQ5bG9pcjY3YTJv",
    imageUrl: "/22may.jpg",
  },
  {
    id: 49,
    name: "Həftəsonuna rəng qatmağın tam zamanıdır!",
    instagramLink:
      "https://www.instagram.com/p/DY7ODCbjKwk/?igsh=bm94anl6MWNkMTBz",
    imageUrl: "/30may.jpg",
  },
  {
    id: 48,
    name: "İyunun bənzərsiz ab-havasını hansı sənətçilərin performansları ilə qarşılaya bilərik?",
    instagramLink:
      "https://www.instagram.com/p/DZPKZRNjqXj/?igsh=MTEyeTg3c2c4enk5cw%3D%3D",
    imageUrl: "/6konsert.jpg",
  },
  {
    id: 47,
    name: "Geridə qoyduğumuz musiqi həftəsi yerli pop səhnəsində sakit keçsə də, bir neçə sənətçi yeni relizlər ilə gündəmə düşməyi bacarıb.",
    instagramLink:
      "https://www.instagram.com/p/DZCySaODGD3/?igsh=MWhmZnRsNWZ4aTJucQ%3D%3D",
    imageUrl: "/295.jpg",
  },
  {
    id: 46,
    name: "Həftəiçi yorğunluğunu unudaraq həftəsonu rejmini aktivləşdirməyə hazırsınız?",
    instagramLink:
      "https://www.instagram.com/p/DZxP-JIjLUm/?igsh=MTE3bHdjMm4xd3kyeQ%3D%3D",
    imageUrl: "/21iyun.jpg",
  },
  {
    id: 45,
    name: "Qulaqlarımızı bu dəfə ötən həftə yayımlanan yeni relizlər ilə sevindirə bilərik!",
    instagramLink:
      "https://www.instagram.com/p/DZU2KhGDFj6/?igsh=b2ozbHlvZDN1cWZo",
    imageUrl: "/ayaz.jpg",
  },
  {
    id: 44,
    name: "Bu ay kinoteatrlar nümayiş olunan yeni filmlərlə yay mövsümünün bütün həyəcanını və fərqli emosiyalarını böyük ekrana daşıyır!",
    instagramLink:
      "https://www.instagram.com/p/DaU32kEDsII/?igsh=MWdobHI5ODBlbG9xcw%3D%3D",
    imageUrl: "/9iyul.jpg",
  },
  {
    id: 43,
    name: "İş günlərini geridə qoyub, həftəsonunun o azad və enerjili ab-havasına keçid etməyə tam hazırsınız?",
    instagramLink:
      "https://www.instagram.com/p/DaVLqapjogC/?igsh=MWM4cnMwNGJyaGg5Yg%3D%3D&img_index=1",
    imageUrl: "/4iyul.jpg",
  },
  {
    id: 42,
    name: "Korporativ mühitdə ciddiyətlə boğulmuş insanların nə demək istədiyini anlamağa çalışdıq.",
    instagramLink:
      "https://www.instagram.com/p/DY6lQhaDlej/?img_index=1&igsh=cW41dGlkZGdwdzdv",
    imageUrl: "/korporativ.jpg",
  },
  {
    id: 41,
    name: "Bu Yay Azı Bir Dəfə Etmək İstədiyimiz Şeylər",
    instagramLink:
      "https://www.instagram.com/p/DZW2BmmjiPz/?igsh=MWdmNW1yZzBiZjEzdQ%3D%3D&img_index=1",
    imageUrl: "/yay.jpg",
  },
  {
    id: 40,
    name: "Əslində olmayan, amma var kimi qəbul etdiyimiz şeylər",
    instagramLink:
      "https://www.instagram.com/p/DVvfsu9DBPK/?igsh=MTJqZXMzYmpzbGs4bA%3D%3D",
    imageUrl: "/eslindeolmayan.jpg",
  },
  {
    id: 39,
    name: "2026-da seçimlərinin arasındakı fərq",
    instagramLink:
      "https://www.instagram.com/p/DS_-W2TjKyp/?igsh=aHhhN3B0N2E2OGFl&img_index=1",
    imageUrl: "/secimlerim.jpg",
  },
  {
    id: 37,
    name: "Bu il səhv etdiyim şeylər",
    instagramLink:
      "https://www.instagram.com/p/DSmn70IjR2E/?igsh=NW0wbXcxZ29kaHZ3",
    imageUrl: "/builsehv.jpg",
  },
  {
    id: 36,
    name: "Sevginin Rəngarəng tonu",
    instagramLink:
      "https://www.instagram.com/p/DUu9S5fjArk/?img_index=1&igsh=eHkzd2IzNGdzNXYy",
    imageUrl: "/sevginintonu.jpg",
  },
  {
    id: 35,
    name: "Qadınların Lüğəti",
    instagramLink:
      "https://www.instagram.com/p/DVnjRdgDNj4/?igsh=MWc5Nm10MWtzNTl5MA%3D%3D",
    imageUrl: "/qadinlar.jpg",
  },
  {
    id: 34,
    name: "Gen-Z dili və ədəbiyyatı",
    instagramLink:
      "https://www.instagram.com/p/DW8W8ogjOXw/?img_index=2&igsh=MWt4em14czB6YWh3MA%3D%3D",
    imageUrl: "/genz.jpg",
  },
  {
    id: 33,
    name: "Bizi Qurtaracaq Kimi Görünüb Bataqlığa Salan Şeylər",
    instagramLink:
      "https://www.instagram.com/p/DW3ZGa2DGU4/?igsh=MWJ0NHp6ZWtvZm8zMg%3D%3D",
    imageUrl: "/biziqurtaracaqkimi.jpg",
  },
  {
    id: 32,
    name: "Nəsə özünü sevə bilmirsən, çünki...",
    instagramLink:
      "https://www.instagram.com/p/DXJSpshjHTa/?igsh=d20xeXVkNmRjZm9l",
    imageUrl: "/Deyəsənozunusevebilmirsen.jpg",
  },
  {
    id: 31,
    name: "İzləməli olduğun yeni yerli filmlər",
    instagramLink:
      "https://www.instagram.com/p/DXbWkCfjIHo/?img_index=1&igsh=MTZ0Z3RnYXp3aHB1dA%3D%3D",
    imageUrl: "/yerliizle.jpg",
  },
  {
    id: 30,
    name: "Yeni çıxan Ən Maraqlı Serialar",
    instagramLink:
      "https://www.instagram.com/p/DXq7VDaDCrn/?igsh=MTJuNW55Y3RqZHdsNA%3D%3D&img_index=4",
    imageUrl: "/serialamaenmaraqli.jpg",
  },
  {
    id: 38,
    name: "Kimə Nə alım deyə düşünənlər üçün secret santa",
    instagramLink:
      "https://www.instagram.com/p/DSZZgJnjBvi/?igsh=d2hib3FjN2MycG9l",
    imageUrl: "/kimenealim.jpg",
  },
  {
    id: 29,
    name: "Köhnə Mahnıların Yeni REMAKE-LƏRİ",
    instagramLink:
      "https://www.instagram.com/p/DWVyfOzjOUr/?igsh=ZzN1NDJ6bGlobWR2&img_index=1",
    imageUrl: "/mahnikohne.jpg",
  },
  {
    id: 28,
    name: "'AzTube-da izləməyə nələr var?",
    instagramLink:
      "https://www.instagram.com/p/DVBAoKIjAgH/?img_index=1&igsh=dXJ6bHNzaXoxNzV2",
    imageUrl: "/youtubeepost.jpg",
  },
  {
    id: 27,
    name: "Ağıllı olmağa çalışarkən, axmaq göründüyümüz şeylər",
    instagramLink:
      "https://www.instagram.com/p/DTZzuYsDDEX/?igsh=azhoc2E2MnBpeWM2",
    imageUrl: "/agilli.jpg",
  },
  {
    id: 1,
    name: "Yemək Yeyəndə Nə İzləyək ?",
    instagramLink:
      "https://www.instagram.com/p/DNfMeltt2zI/?igsh=MXZvcjRtbjJ2Mzh0Mg%3D%3D&img_index=1",
    imageUrl: "/food.jpg",
  },
  {
    id: 2,
    name: "'AzTube'da Nə İzləyək?",
    instagramLink:
      "https://www.instagram.com/p/DK4OBjqNx3Z/?img_index=1&igsh=MTFlbWZ0NG14d2xnYw%3D%3D",
    imageUrl: "/seven.jpg",
  },
  {
    id: 3,
    name: "Yemək Yeyəndə Nə İzləyək ?",
    instagramLink:
      "https://www.instagram.com/p/DPBS7HVDPEh/?utm_source=ig_web_copy_link&igsh=bTNiMWVzN2RrbmU5",
    imageUrl: "/yemek2.jpg",
  },
  {
    id: 4,
    name: "AzTube'da Nə İzləyək?",
    instagramLink:
      "https://www.instagram.com/p/DN0DBSmWBmG/?utm_source=ig_web_copy_link&igsh=a2FmNWxmNWxzbmdw",
    imageUrl: "/aztube.jpg",
  },
  {
    id: 5,
    name: "Yayda İzləməli Olduğunuz Filmlər",
    instagramLink:
      "https://www.instagram.com/p/DKwJVoTNsfh/?img_index=5&igsh=MXU3MTYzYWJrYTNxMw%3D%3D",
    imageUrl: "/eight.jpg",
  },
  {
    id: 6,
    name: "Bakı Kinoteatrlarında Nə İzləyək ?",
    instagramLink:
      "https://www.instagram.com/p/DM2BaYbtGnL/?igsh=NTNpa2UxNTdvdWZl",
    imageUrl: "/kino.jpg",
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
    name: "gen-z love",
    instagramLink:
      "https://www.instagram.com/p/DKzJOrztb9B/?igsh=MXRwY256ODByYXVtbw%3D%3D",
    imageUrl: "/two.jpg",
  },
  {
    id: 12,
    name: "Artıq Eyni Zövqü Verməyən Şeylər",
    instagramLink:
      "https://www.instagram.com/p/DLmRX5eNE3C/?igsh=aGI2eDhpOTFjajBs&img_index=10",
    imageUrl: "/one.jpg",
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
    name: "Həftəsonunu Harda Keçirək?",
    instagramLink:
      "https://www.instagram.com/p/DNVJUJttupy/?img_index=9&igsh=MTM3ZWZ6aHFsMWlmeg%3D%3D",
    imageUrl: "/eleven.jpg",
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
    name: "Həyatında NƏSƏ Sevgi Çatışmır, Çünki...",
    instagramLink:
      "https://www.instagram.com/p/DNsNV5NWM2i/?utm_source=ig_web_copy_link&igsh=c2twd3lqMzRvOWNx",
    imageUrl: "/sevgi.jpg",
  },
  {
    id: 25,
    name: "Tədbirdə Davranış Qaydaları",
    instagramLink:
      "https://www.instagram.com/p/DOQQTFTDHE-/?utm_source=ig_web_copy_link&igsh=MWliOG02eW96dno4dg==",
    imageUrl: "/boolood.jpg",
  },
  {
    id: 26,
    name: "NƏSƏ etməlisən, amma heç cürə başlaya bilmirsən?",
    instagramLink:
      "https://www.instagram.com/p/DMsCh69N0xV/?igsh=OHVuenp3bHo4ejEx",
    imageUrl: "/ten.jpg",
  },
];

type Project = (typeof projects)[number];

const projectMap = new Map(projects.map((project) => [project.id, project]));

const getProjectsByIds = (ids: number[]) =>
  ids
    .map((id) => projectMap.get(id))
    .filter((project): project is Project => Boolean(project));

const INITIAL_VISIBLE_COUNT = 4;

const projectGroups = [
  {
    title: "Weekend & Events",
    projectIds: [49, 46, 14, 18, 50, 16, 48, 43],
  },
  {
    title: "Movies • Series • YouTube",
    projectIds: [1, 3, 28, 2, 4, 30, 31, 5, 20, 6, 17, 44],
  },
  {
    title: "Music",
    projectIds: [29, 45, 47, 16, 48],
  },
  {
    title: "Lifestyle",
    projectIds: [41, 10, 8, 25, 35, 36],
  },
  {
    title: "Psychology & Self Growth",
    projectIds: [24, 32, 13, 19, 23, 21, 22, 26, 7, 12],
  },
  {
    title: "Relatable / Humor",
    projectIds: [40, 42, 27, 33, 39, 37, 34, 11],
  },
  {
    title: "Collaborations & Brand Works",
    projectIds: [9, 15],
  },
  {
    title: "Seasonal & Campaigns",
    projectIds: [38],
  },
];

export default function WorksPage() {
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>(
    Object.fromEntries(
      projectGroups.map((group) => [group.title, INITIAL_VISIBLE_COUNT])
    )
  );

  const handleSeeMore = (groupTitle: string) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [groupTitle]: prev[groupTitle] + INITIAL_VISIBLE_COUNT,
    }));
  };

  return (
    <>
      <h2 className="text-3xl text-[#e3e1c9] font-bold text-center my-8">
        Content stories created for <b>25TREND</b>
      </h2>

      <section className="overflow-hidden py-10">
        <div className="space-y-14 px-6">
          {projectGroups.map((group) => {
            const groupProjects = getProjectsByIds(group.projectIds);
            const visibleProjects = groupProjects.slice(
              0,
              visibleCounts[group.title]
            );

            return (
              <div key={group.title}>
                <h3 className="text-2xl text-[#e3e1c9] font-bold mb-6">
                  {group.title}
                </h3>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {visibleProjects.map((project, i) => (
                    <a
                      key={`${group.title}-${project.id}`}
                      href={project.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-4 text-[#5c6d40] shadow-lg flex flex-col justify-between cursor-pointer transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl animate-[scaleUp_0.6s_ease-out_forwards]"
                      style={{
                        backgroundColor: "#e3e1c9",
                        animationDelay: `${i * 0.08}s`,
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

                {visibleCounts[group.title] < groupProjects.length && (
                  <div className="text-center mt-6">
                    <button
                      onClick={() => handleSeeMore(group.title)}
                      className="px-6 py-2 bg-[#e3e1c9] text-[#5c6d40] rounded-lg shadow hover:bg-[#c9c491] transition-all duration-300"
                    >
                      See More
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

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