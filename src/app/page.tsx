"use client";
import { useState } from "react";
import Image from "next/image";

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
    title: "Netflix gözləyə bilər, dəniz isə yox  (İnteqrasiya)",
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

const reasons = [
  {
    title: "Özünü yaxşı tanımırsan",
    info: "Nə istədiyini bilmirsən, hədəflərin yoxdur. Düşündükcə fikirlərin arasında itirsən. Sənə nə lazım olduğunu düşünmək belə yorur. Uzaq durmaq ən yaxşı alternativdir sanırsan. Ona görə heç nə etmirsən.",
  },
  {
    title: "Bir dəfə sınadın, alınmadı",
    info: "Və bu bir dəfə sənin üçün kifayət etdi. İndi yenidən başlamaq fikri səni həm qorxudur, həm də bezdirir. Elə düşünürsən ki, həvəsin təkrar qırılacaq. İçində yenidən başlayacaq cəsarət qıvılcımını tapmırsan.",
  },
  {
    title: "Motivasiyan yoxdu",
    info: "Özünü tənbəl, iradəsiz, həvəsiz biri kimi görürsən. Gözləyirsən ki, bir gün içindən bir enerji gəlsin, hər şeyi dəyişdirəcək bir “klik” olsun. Amma o gözlədikcə gəlmir. Günlər keçir, dəyişən bir şey olmur. Motivasiya üçün hədəflər, səni addımladacaq məqsədlər olmalıdır. Sənsə bunlara sahib olmaq belə istəmirsən.",
  },
  {
    title: "Hələ “vaxtı deyil” deyə düşünürsən",
    info: "Əslində tam vaxtıdır. Telefonda gündə 5 saat, düşüncələrdə isə 10 saat keçirirsən. Sadəcə real addım atmaq istəmirsən. Çünki içində bir yer bilir ki, oaddım hər şeyi dəyişə bilər. Həyatının tempi tamam fərqli şəkildə irəliləyə bilər. Və sən buna hazır hiss etmirsən.",
  },
  {
    title: "Sənə “inanıram” deyən olmayıb",
    info: "Heç kim sənin potensialını görməyib. Hətta özün belə fərqində deyilsən. Kiminsə bir dəfə “sən edə bilərsən” deməsi bəlkə də hər şeyi dəyişərdi. Amma o söz heç vaxt gəlməyib. Bəzən özgüvənli olmaq həqiqətən həyatı asanlaşdırır.",
  },
  {
    title: "Zamanı düzgün bölə bilmirsən",
    info: "Görməli olduğun işlər çoxdur. Hər şeyi birdən etməyə çalışırsan. Fikirlərin bir-birinə dəyir, enerjin boşa dağılıb gedir. Birini etməyə qərar verdikdə, digər şeylər haqda nigaran qalırsan.",
  },
  {
    title: "Qorxursan",
    info: "Sənə elə gəlir ki, sən geridə qalmısan. Dünya sanki axırıncı qatara minib gedib. Sən isə dayanacaqda oturub baxırsan. Amma özünün fərqinə varmalı və başlamalısan.",
  },
  {
    title: "Özünü itirmisən",
    info: "Çox fikirləşmisən, çox hiss etmisən, çox susmusan. İndi isə nə düşünəcəyini, nə hiss edəcəyini bilmirsən. Ətraf sakitdir. İçin isə doludur. Və sən bu doluluqda nə edəcəyini bilmədiyindən eləcə dayanırsan.",
  },
  {
    title: "Məntiqinlə hisslərin toqquşur",
    info: "Qəlbinin səsinimi yoxsa məntiqinimi dinləməli olduğunu bilmirsən. Sanki içində iki insan var və hər birinin istəkləri başqadı. Həyatı axışına buraxa bilmədiyindən ortada qalmısan. Amma artıq seçim etmək vaxtıdır.",
  },
];

export default function Portfolio() {
  const [isPaused, setIsPaused] = useState(false);

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

        <h2 className="text-3xl font-bold text-center my-8">
          Content stories created for <b>25TREND</b>
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
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  width={250}
                  height={250}
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

        <section className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-4xl font-bold mb-10 text-center">
            25TREND x Aviasales
          </h2>
          <h3 className="text-2xl font-semibold mb-6 text-center text-[#ededed]">
            Bakıda səyahət və kəşf ediləcək möhtəşəm anlar ✈️ <br />
            NƏSƏ Səyahət Üçün Ürəyin Gedir, Çünki...
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {slides1.map(({ title, info }, idx) => (
              <div
                key={idx}
                className="bg-[#456882] border border-[#D2C1B6]/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer text-[#F9F3EF]"
              >
                <h4 className="text-xl font-bold mb-3 text-[#F9F3EF]">
                  {title}
                </h4>
                {info && (
                  <p className="text-sm leading-relaxed text-[#D2C1B6]">
                    {info}
                  </p>
                )}
              </div>
            ))}
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
            <p className="text-indigo-600 font-semibold text-lg">
              25TREND x Aviasales
            </p>
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
          NƏSƏ Etmək Üçün Heç Nə Etmirsən, Çünki...
        </h2>

        <div className="bg-[#113F67] min-h-screen py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {reasons.map(({ title, info }, i) => (
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

        <div className="mt-12 max-w-xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">
            NƏSƏ etməlisən, amma heç cürə başlaya bilmirsən?
          </p>
          <p className="text-[#D2C1B6] dark:text-gray-200">
            Heç nə etmirsən, amma niyə etmədiyini də tam bilmirsən. Səbəbləri
            var. Əslində hamımızda var. Sadəcə bunlara ilişib qalmaq bizi daha
            daha geri atır. Bu post - sən tərpənənə qədər sənin yerinə
            danışacaq.
          </p>
        </div>
      </section>
    </div>
  );
}
