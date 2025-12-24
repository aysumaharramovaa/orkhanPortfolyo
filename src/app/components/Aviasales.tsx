"use client";

import React from "react";

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

const Aviasales: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-4xl text-[#e3e1c9] font-bold mb-8 text-center">
        25TREND x Aviasales
      </h2>

      <h3 className="text-2xl font-semibold mb-6 text-center text-[#ededed]">
        Bakıda səyahət və kəşf ediləcək möhtəşəm anlar ✈️ <br />
        NƏSƏ Səyahət Üçün Ürəyin Gedir, Çünki...
      </h3>

      <div className=" min-h-screen py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {slides1.map(({ title, info }, i) => (
            <div
              key={i}
              className={`p-6 rounded-lg shadow-lg cursor-pointer transition
          ${i % 2 === 0 ? "bg-[#e3e1c9]" : "bg-[#F9F3EF]"}`}
            >
              <h3 className="text-[#5c6d40] text-xl font-semibold mb-3">
                {title}
              </h3>
              <p className="text-[#5c6d40]">{info}</p>
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
          lazım olan tək şey Aviasales-də uyğun bileti tapmaqdır. Sonra çamadan,
          pasport, story və səni gözləyən komforlu bir səyahət. 🤠
        </p>
      </div>
    </section>
  );
};

export default Aviasales;
