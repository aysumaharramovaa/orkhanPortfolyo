"use client";
import Image from "next/image";
import { useState } from "react";
import PostsGride from "./PostsGrid";

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

const slides = [
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
    title: "Saatlıq icarə verərək pul qazanmaq (batdı) ",
    info: "Sürmədiyin saatlarda velosiped işləsə necə olar? Yaxşı fikirdir, amma nəzərə almalısan ki, sektorda da yekamonlar çoxdur.",
  },
  {
    title: "Spontan gəzintilər etmək",
    info: "Heç bir planı qurulmamış o səhərin ən gözəl versiyası məhz budur. Bunun üçün isə “APAR Ride”ın aylıq abunəlik paketləri ilə nə vaxt istəsən, o an yola çıxa bilərsən.",
  },
];

const slides1 = [
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

const videos = [
  "/videos/zaman (1).mp4",
  "/videos/zaman (2).mp4",
  "/videos/zaman (3).mp4",
  "/videos/zaman (4).mp4",
  "/videos/zaman (5).mp4",
  "/videos/zaman (6).mp4",
  "/videos/zaman (7).mp4",
  "/videos/zaman (8).mp4",
  "/videos/zaman (9).mp4",
  "/videos/zaman (10).mp4",
  "/videos/zaman (11).mp4",
  "/videos/zaman (12).mp4",
  "/videos/zaman (13).mp4",
  "/videos/zaman (14).mp4",
  "/videos/zaman (15).mp4",
];

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
    <div className="bg-[#113F67]">
      <div className="min-h-screen text-[#FDF5AA] flex flex-col">
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-[#FDF5AA] ">
          <div className="text-center space-y-4">
            <h1
              className="text-5xl font-bold tracking-wide"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              Orkhan Gurbanli
            </h1>
            <p
              className="text-2xl text-[#58A0C8] font-medium"
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
                className="px-8 py-3 rounded-lg text-white bg-[#58A0C8] hover:bg-[#34699A] transition-colors"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                LinkedIn
              </a>

              <a
                href="mailto:orkhankhurban@gmail.com"
                className="px-8 py-3 rounded-lg text-white bg-[#58A0C8] hover:bg-[#34699A] transition-colors"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Email
              </a>
            </div>
          </div>
        </div>


<section className="my-10">
  <h2 className="text-3xl font-bold text-center mb-6">
    Carousel Posts
  </h2>
  <PostsGride />
</section>

        <h2 className="text-3xl font-bold text-center my-8">
          Content stories created for <b>25TREND</b>
        </h2>
        <section
          className="overflow-hidden py-10"
          // onMouseEnter={() => setIsPaused(true)}
          // onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`grid gap-6 px-6 animate-slide ${
              isPaused ? "paused" : ""
            } grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
          >
            {projects.slice(0, visibleCount).map((project, i) => (
              <a
                key={i}
                href={project.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-4 text-[#113F67] shadow-lg flex flex-col justify-between cursor-pointer transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl animate-[scaleUp_0.6s_ease-out_forwards]"
                style={{
                  backgroundColor: "#FDF5AA",
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

          {/* See More düyməsi */}
          {visibleCount < projects.length && (
            <div className="text-center mt-6">
              <button
                onClick={handleSeeMore}
                className="px-6 py-2 bg-[#FDF5AA] text-[#113F67] rounded-lg shadow hover:bg-[#c9c491] transition-all duration-300"
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

          {/* <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 25s linear infinite;
        }
        .paused {
          animation-play-state: paused !important;
        }
      `}</style> */}
        </section>

        <section className="bg-[#113F67] text-[#FDF5AA] py-10">
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

  <section className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Collab Works 
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                src: "/collab1.jpg",
                alt: "Collab 1",
                link: "https://www.instagram.com/p/DOnli-mDDMI/?igsh=b2ZzazIxMHdvZ3ls",
              },
              {
                src: "/collab2.jpg",
                alt: "Collab 2",
                link: "https://www.instagram.com/p/DOQQTFTDHE-/?igsh=MTBpMGQyeWthd2p2",
              },
              {
                src: "/collab3.jpg",
                alt: "Collab 3",
                link: "https://www.instagram.com/p/DLovQrftcJg/?igsh=MWUzdWRvdzZzaWlmbw==",
              },
              {
                src: "/collab4.jpg",
                alt: "Collab 4",
                link: "https://www.instagram.com/p/DLEyt5_NnB5/?igsh=c2doY29tajlidnp5",
              },
              {
                src: "/collab5.jpg",
                alt: "Collab 5",
                link: "https://www.instagram.com/p/DIoN54BNIDo/?igsh=MWFtMHBnbTZkZzZrMQ==",
              },
              {
                src: "/collab6.jpg",
                alt: "Collab 6",
                link: "https://www.instagram.com/p/DIf8ApONxdo/?igsh=MThzY2V0eXA1ZjUxbw==",
              },
              {
                src: "/collab7.jpg",
                alt: "Collab 7",
                link: "https://www.instagram.com/p/DJo2AcoI51C/?igsh=MWFkbDVqYjJob3Nveg==",
              },
               {
                src: "/collab8.jpeg",
                alt: "Collab 8",
                link: "https://www.instagram.com/reel/DSmTFo5jTjE/?igsh=MWo0cW1jb3RmY2N5ag==",
              },
               {
                src: "/collab9.jpeg",
                alt: "Collab 9",
                link: "https://www.instagram.com/reel/DR4B8eljNc-/?igsh=MWF1ajlxbWpscmI0bA==",
              },
  
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-110 object-cover"
                />
              </a>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-4xl font-bold mb-10 text-center">
            25TREND x APAR RIDE
          </h2>
          <h3 className="text-2xl font-semibold mb-6 text-center text-[#ededed]">
            Bakıda velosipedlə edilə biləcək şeylər 🚴
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {slides.map(({ title, info }, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#456882] to-[#4a5a67] border border-[#4a5a67] rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out group cursor-pointer"
              >
                <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-[#b3ada8] transition">
                  {title}
                </h4>
                <p className="text-[#cfcbc7] group-hover:text-[#f0eeeb] transition">
                  {info}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center max-w-xl mx-auto">
            <p className="text-lg mb-4">
              Bəs sən nə vaxt pedal çevirməyi planlayırsan? 🚴‍♂
            </p>
            <p className="text-[#F9F3EF] mb-6">
              Bəlkə də bu post o “ilk pedal” idi. Həm rahat, həm sərfəli, həm də
              tam sənə uyğun bir yol axtarırdınsa — artıq tapmısan. APAR RIDE
              ilə günü dolğun keçirmək mümkündür. Qrafik yox, əhvalın sənə yol
              göstərsin. 🧡
            </p>
            <p className="text-indigo-600 font-semibold text-lg">
              25TREND x AparRide
            </p>
          </div>
        </section>


        <section className="bg-[#113F67] text-[#FDF5AA] py-10 px-4">
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
              className="inline-block px-6 py-3 bg-[#FDF5AA] text-[#113F67] rounded-lg shadow hover:bg-[#c9c491] transition-colors"
            >
              Instagram Link
            </a>
          </div>
        </section>

        <h2 className="text-3xl font-bold text-center my-8">
          <span className="block md:inline">
            Powerful stories told through words
          </span>{" "}
          <b className="block md:inline">ArxaParta</b>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Image
            src="/sup1.jpg"
            alt="sup 1"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg"
          />
          <Image
            src="/sup2.jpg"
            alt="sup 2"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg"
          />
          <Image
            src="/sup3.jpg"
            alt="sup 3"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg"
          />
          <Image
            src="/sup4.jpg"
            alt="sup 4"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg"
          />
          <Image
            src="/sup5.jpg"
            alt="sup 5"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg"
          />
          <Image
            src="/sup6.jpg"
            alt="sup 6"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="w-full h-screen flex items-center justify-center p-5">
          <Image
            src="/tapmaca.jpg"
            alt="Tapmaca"
            className="max-w-full max-h-full object-contain"
            width={800}
            height={300}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Image
            src="/tapmaca (1).jpg"
            alt="tapmaca 1"
            className="w-full h-auto rounded-lg"
            width={400}
            height={300}
          />
          <Image
            src="/tapmaca (2).jpg"
            alt="tapmaca 2"
            className="w-full h-auto rounded-lg"
            width={400}
            height={300}
          />
          <Image
            src="/tapmaca (3).jpg"
            alt="tapmaca 3"
            className="w-full h-auto rounded-lg"
            width={400}
            height={300}
          />
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-4xl font-bold mb-8 text-center">
          25TREND x Aviasales
        </h2>

        <h3 className="text-2xl font-semibold mb-6 text-center text-[#ededed]">
          Bakıda səyahət və kəşf ediləcək möhtəşəm anlar ✈️ <br />
          NƏSƏ Səyahət Üçün Ürəyin Gedir, Çünki...
        </h3>

        <div className="bg-[#113F67] min-h-screen py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {slides1.map(({ title, info }, i) => (
              <div
                key={i}
                className={`p-6 rounded-lg shadow-lg cursor-pointer transition
          ${i % 2 === 0 ? "bg-[#D2C1B6]" : "bg-[#F9F3EF]"}`}
              >
                <h3 className="text-[#1B3C53] text-xl font-semibold mb-3">
                  {title}
                </h3>
                <p className="text-[#1B3C53]">{info}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center max-w-xl mx-auto">
          <p className="text-lg mb-4">
            Bəs sən neçə vaxtdır xəritəyə baxıb köçmək istədiyin ölkəni
            izləyirsən? 🌍
          </p>
          <p className=" mb-6 text-[#ededed]">
            Xəyallarını gerçəkləşdirmək üçün addım atmaq lazımdır. Bəlkə də bu
            postu görmək o “birinci addım”ın özü idi. Arzularına qovuşmaq üçün
            lazım olan tək şey Aviasales-də uyğun bileti tapmaqdır. Sonra
            çamadan, pasport, story və səni gözləyən komforlu bir səyahət. 🤠
          </p>
        </div>
      </section>

      <h2 className="text-4xl font-bold mb-8 text-center">
        Even after all this time, the reason for our laughter is still them!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {videos.map((video, i) => (
          <div key={i} className="rounded-xl shadow-lg overflow-hidden">
            <video
              src={video}
              controls
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      <footer className="w-full py-6 text-center text-sm text-gray-500">
        © 2025. All rights reserved.
      </footer>
    </div>
  );
}
