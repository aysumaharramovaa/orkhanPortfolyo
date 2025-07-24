"use client";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Artıq Eyni Zövqü Verməyən Şeylər",
    instagramLink:
      "https://www.instagram.com/p/DLmRX5eNE3C/?igsh=aGI2eDhpOTFjajBs&img_index=10",
    imageUrl: "/one.jpg",
  },
  {
    id: 2,
    name: "gen-z love",
    instagramLink:
      "https://www.instagram.com/p/DKzJOrztb9B/?igsh=MXRwY256ODByYXVtbw%3D%3D",
    imageUrl: "/two.jpg",
  },
  {
    id: 3,
    name: "Vaxtında Qədrini Bilmədiyimiz Şeylər",
    instagramLink:
      "https://www.instagram.com/p/DK1XgxZNP5A/?img_index=2&igsh=Y2oyemIyOTBjZXZ5",
    imageUrl: "/three.jpg",
  },
  {
    id: 4,
    name: "Dostlar Günü",
    instagramLink:
      "https://www.instagram.com/p/DKq9ce3NPU3/?igsh=MTI1c3hlYWhpMW40aA%3D%3D",
    imageUrl: "/four.jpg",
  },
  {
    id: 5,
    name: "25trend & DIV Academy",
    instagramLink:
      "https://www.instagram.com/p/DLovQrftcJg/?igsh=MTgzdDBoczJieG9ibg%3D%3D",
    imageUrl: "/five.jpg",
  },
  {
    id: 6,
    name: "Qızmar Günlərdə Həyat Qurtaran Şeylər",
    instagramLink:
      "https://www.instagram.com/p/DMKOZIftu1z/?img_index=2&igsh=NDRlZHliM2lzZHFq",
    imageUrl: "/six.jpg",
  },
  {
    id: 7,
    name: "'AzTube'da Nə Izləyək?",
    instagramLink:
      "https://www.instagram.com/p/DK4OBjqNx3Z/?img_index=1&igsh=MTFlbWZ0NG14d2xnYw%3D%3D",
    imageUrl: "/seven.jpg",
  },
  {
    id: 8,
    name: "Yayda İzləməli Olduğunuz Filmlər",
    instagramLink:
      "https://www.instagram.com/p/DKwJVoTNsfh/?img_index=5&igsh=MXU3MTYzYWJrYTNxMw%3D%3D",
    imageUrl: "/eight.jpg",
  },
  {
    id: 9,
    name: "Ürəyində Nəsə Küsülüsən, Çünki...",
    instagramLink:
      "https://www.instagram.com/p/DKgpj4Vtsu3/?igsh=cWF2cG92a2N5dmZt",
    imageUrl: "/nine.jpg",
  },
];

const data = [
  {
    id: 1,
    title: "25TREND x APAR RIDE",
    slides: [
      {
        id: 1,
        subtitle: "Kuryer işləmək",
        info: "İnfo : Nə beyninin ətini yeyən o müdürə, nə də hər səhər ütülənməli olan kostyuma ehtiyacın var. Pul qazanmağın ən sərbəst, ən pedallı versiyası budur.",
      },
      {
        id: 2,
        subtitle: "Tıxacdan qaçmaq (yenə tıxacdayam)",
        info: " İnfo : Tıxacdan nəfəsimizin kəsildiyi şəhərdə velosiped bir nəqliyyat yox, bir xilas yoludur. Həm cibə qənaət edə bilərsən, həm də dostuna “beş dəqiqəyə ordayam” sözünün həqiqi versiyasını yaşada bilərsən.",
      },
      {
        id: 3,
        subtitle: "Şəhəri qarış-qarış gəzmək (İnteqrasiya)",
        info: "İnfo : Maşın keçməyən dar keçidlər, məhəllə arası yollarla fərqinə belə varmadığın məkanları kəşf edə bilərsən. Düzgün velosipedi seçmək isə məhz bizim əlimizdədir.",
      },
       {
        id: 4,
        subtitle: "Stressini azaltmaq ",
        info: "İnfo : Yorğun bir iş həftəsinin yükünü ruhunu daha da çərçivəyə salmadan, yavaş-yavaş, pedalla azalda bilərsən. Qulağında isə həmin o musiqi.",
      },
       {
        id: 5,
        subtitle: "Sevgilinlə romantik anlar yaşamaq (ayrıldı)",
        info: "İnfo : “Görüşəndə hara gedək?” sualına ən rahat cavabı məhz budur. Əmin ol, klassik axşam yeməyi formatından bu dəfə daha uzaqda olacaqsan.",
      },
      {
        id: 6,
        subtitle: "Dostlarla birlikdə yarışmaq ",
        info: "İnfo : Söhbət Formula 1-dən getməsə də, dostlarını bu dəfə həqiqətən qabağına ala bilərsən. Həyəcan və əyləncə məhz yanında olan o beyinsiz ilə daha ləzzətli olacaq.",
      },
      {
        id: 7,
        subtitle: "Fiziki məşq etmək",
        info: "İnfo : Axı əzələ yandırmaq üçün idman zalları şərt deyil. Şəhərin özü sənin məşq meydanın ola bilər. ",
      },
      {
        id: 8,
        subtitle: "Saatlıq icarə verərək pul qazanmaq (batdı) (İnteqrasiya)",
        info: "İnfo : Sürmədiyin saatlarda velosiped işləsə necə olar? Yaxşı fikirdir, amma nəzərə almalısan ki, sektorda da yekamonlar çoxdur. ",
      },
       {
        id: 9,
        subtitle: "Spontan gəzintilər etmək (Birbaşa İnteqrasiya) ",
        info: "İnfo : Heç bir planı qurulmamış o səhərin ən gözəl versiyası məhz budur. Bunun üçün isə “APAR Ride”ın aylıq abunəlik paketləri ilə nə vaxt istəsən, o an yola çıxa bilərsən.",
      },



    ],
  },
];

export default function Portfolio() {
  const [isPaused, setIsPaused] = useState(false);
  const [openMainId, setOpenMainId] = useState<number | null>(null);
  const [openSlideIds, setOpenSlideIds] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleMain = (id: number) => {
    if (openMainId === id) {
      setOpenMainId(null);
      setOpenSlideIds({});
    } else {
      setOpenMainId(id);
      setOpenSlideIds({});
    }
  };

  const toggleSlide = (id: number) => {
    setOpenSlideIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  function handleClick(instagramLink: string) {
    window.open(instagramLink, "_blank");
  }

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
            <a
              href="https://www.linkedin.com/in/orkhan-gurbanli-405043297/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-3 rounded-lg text-white bg-[#58A0C8] hover:bg-[#34699A] transition-colors"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              LinkedIn
            </a>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center my-8">
          Powerful stories told through words
        </h2>
        <section
          className="overflow-hidden py-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex gap-6 px-6 animate-slide ${
              isPaused ? "paused" : ""
            }`}
            style={{ width: `${projects.length * 250}px` }}
          >
            {projects.map((project, i) => (
              <div
                key={i}
                onClick={() => handleClick(project.instagramLink)}
                className="min-w-[250px] max-w-[250px] rounded-lg p-4 text-[#113F67] shadow-lg flex flex-col justify-between cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                title="Instagram postuna bax"
                style={{ backgroundColor: "#FDF5AA" }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="rounded-md mb-4 w-full object-cover"
                />
                <p className="font-semibold">- {project.name}</p>
              </div>
            ))}
          </div>

          <style jsx>{`
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
          `}</style>
        </section>

       <div className="max-w-3xl mx-auto p-6">
  {data.map(({ id, title, slides }) => (
    <div
      key={id}
      className="border border-gray-300 rounded-lg mb-6 bg-white dark:bg-gray-900 shadow-md transition-all duration-300 hover:shadow-lg"
    >
      {/* Xarici Accordion */}
      <button
        onClick={() => toggleMain(id)}
        className="flex items-center justify-between w-full px-6 py-5 focus:outline-none text-gray-900 dark:text-gray-100 font-semibold text-lg"
      >
        <span>{title}</span>
        <span
          className={`transition-transform duration-300 text-gray-500 dark:text-gray-400 text-3xl font-bold select-none ${
            openMainId === id ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>

      {/* Xarici accordion içəriyi */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          openMainId === id ? "max-h-[1000px] py-5" : "max-h-0 py-0"
        }`}
      >
        {/* Daxili accordionlar */}
    {slides.map(({ id: slideId, subtitle, info }, index) => (
  <div
    key={slideId}
    className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4 bg-gray-50 dark:bg-gray-800"
  >
    <button
      onClick={() => toggleSlide(slideId)}
      className="flex items-center justify-between w-full px-5 py-3 focus:outline-none text-gray-800 dark:text-gray-300 font-medium text-md hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
    >
      <span className="flex items-center gap-2">
        <span className="text-sm text-gray-500 dark:text-gray-400">{`01/${index + 1}`}</span>
        {subtitle}
      </span>
      <span
        className={`transition-transform duration-300 text-gray-500 dark:text-gray-400 text-2xl font-bold select-none ${
          openSlideIds[slideId] ? "rotate-45" : "rotate-0"
        }`}
      >
        +
      </span>
    </button>

    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out px-5 text-gray-700 dark:text-gray-300 ${
        openSlideIds[slideId] ? "max-h-96 py-3" : "max-h-0 py-0"
      }`}
    >
      <p className="leading-relaxed">{info}</p>
    </div>
  </div>
))}

      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
