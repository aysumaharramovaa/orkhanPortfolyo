import Image from "next/image";

const outfits = [
  {
    id: 1,
    title: "BASAT",
    image: "/emporium.jpeg",
    items: [
      {
        category: "Jacket",
        brand: "Diesel",
        name: "D-Kurz Jacket",
        price: 930,
        currency: "AZN",
        url: "https://www.emporium.az/en/products/diesel-d-kurz-jacket-347081",
      },
      {
        category: "Sweater",
        brand: "Diesel",
        name: "K-Valiam Wool Jumper",
        price: 405,
        currency: "AZN",
        url: "https://www.emporium.az/en/products/diesel-k-valiam-wool-jumper-347088",
      },
      {
        category: "Trousers",
        brand: "Diesel",
        name: "P-YE Cotton Twill Cargo Trousers",
        price: 465,
        currency: "AZN",
        url: "https://www.emporium.az/en/products/diesel-p-ye-cotton-twill-cargo-trousers-347080",
      },
      {
        category: "Boots",
        brand: "Diesel",
        name: "D-Hammer MB Ankle Boots",
        price: 475,
        currency: "AZN",
        url: "https://www.emporium.az/en/products/diesel-d-hammer-mb-ankle-boots-322236",
      },
      {
        category: "Beanie",
        brand: "Diesel",
        name: "K-ARAC Woolen Beanie",
        price: 175,
        currency: "AZN",
        url: "https://www.emporium.az/en/products/diesel-k-arac-woolen-beanie-339286",
      },
    ],
  },
];

export default function Outfit() {
  const outfit = outfits[0];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        <div>
          <h1 className="text-2xl font-bold text-white mb-5 tracking-wide">
            {outfit.title}
          </h1>

          <div className="space-y-4">
            {outfit.items.map((item) => (
              <div
                key={item.name}
                className="border-b border-white/15 pb-3"
              >
                <p className="text-[11px] uppercase tracking-widest text-white/60">
                  {item.category}
                </p>

                <h3 className="text-base font-semibold text-[#F8F5EC] mt-1">
                  {item.name}
                </h3>

                <p className="text-xs text-white/70">
                  {item.brand}
                </p>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-semibold text-[#F5EFD8]">
                    {item.price} {item.currency}
                  </span>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1 rounded-full bg-[#F5EFD8] text-[#5F694A] hover:bg-white transition-all duration-300"
                  >
                    View Product
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src={outfit.image}
            alt={outfit.title}
            width={560}
            height={620}
            className="rounded-2xl object-cover shadow-2xl"
            priority
          />
        </div>

      </div>
    </div>
  );
}