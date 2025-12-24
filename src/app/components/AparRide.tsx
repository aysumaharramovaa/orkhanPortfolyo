"use client";

import React from "react";

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

const AparRide: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl text-[#e3e1c9] font-bold mb-10 text-center">
        25TREND x APAR RIDE
      </h2>

      <h3 className="text-2xl font-semibold mb-6 text-center text-[#ededed]">
        Bakıda velosipedlə edilə biləcək şeylər 🚴
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {slides.map(({ title, info }, idx) => (
          <div
            key={idx}
            className="bg-[#89986D] border border-[#89986D] rounded-2xl p-6 shadow-md
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                       ease-in-out group cursor-pointer"
          >
            <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-[#b3ada8] transition">
              {title}
            </h4>
            <p className="text-[#e3e1c9] group-hover:text-[#f0eeeb] transition">
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
          tam sənə uyğun bir yol axtarırdınsa — artıq tapmısan.
          <br />
          <span className="font-semibold">APAR RIDE</span> ilə günü dolğun keçirmək mümkündür.
          Qrafik yox, əhvalın sənə yol göstərsin. 🧡
        </p>

        <p className="text-[#dad6bc] font-semibold text-lg">
          25TREND x AparRide
        </p>
      </div>
    </section>
  );
};

export default AparRide;
