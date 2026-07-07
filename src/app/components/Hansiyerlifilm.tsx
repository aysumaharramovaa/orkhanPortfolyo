import Image from "next/image";

export default function MovieCharacters() {
  const images = [
    "/hansiyerlifilm.jpg",
    "/hansiyerlifilm1.jpg",
    "/hansiyerlifilm2.jpg",
    "/hansiyerlifilm3.jpg",
    "/hansiyerlifilm4.jpg",
    "/hansiyerlifilm5.jpg",
    "/hansiyerlifilm6.jpg",
    "/hansiyerlifilm7.jpg",
    "/hansiyerlifilm8.jpg",
    "/hansiyerlifilm9.jpg",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-[#F7F4EA] mb-2">
        Məşhur Film Xarakterləri
      </h2>

      <p className="text-center text-white/70 text-sm mb-8">
        Yerli filmlərdə oynasaydılar necə görünərdilər?
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 hover:scale-[1.03] transition-all duration-300"
          >
            <Image
              src={image}
              alt={`Film ${index + 1}`}
              width={400}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}