"use client";

import Image from "next/image";
import React from "react";

const ArkaPartaGallery: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center my-8">
        <span className="block md:inline">Powerful stories told through words</span>{" "}
        <b className="block md:inline text-[#e3e1c9]">ArkaParta</b>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <Image src="/sup1.jpg" alt="sup 1" width={400} height={300} className="w-full h-auto rounded-lg" />
        <Image src="/sup2.jpg" alt="sup 2" width={400} height={300} className="w-full h-auto rounded-lg" />
        <Image src="/sup3.jpg" alt="sup 3" width={400} height={300} className="w-full h-auto rounded-lg" />
        <Image src="/sup4.jpg" alt="sup 4" width={400} height={300} className="w-full h-auto rounded-lg" />
        <Image src="/sup5.jpg" alt="sup 5" width={400} height={300} className="w-full h-auto rounded-lg" />
        <Image src="/sup6.jpg" alt="sup 6" width={400} height={300} className="w-full h-auto rounded-lg" />
      </div>

      <div className="w-full h-screen flex items-center justify-center p-5 mb-8">
        <Image
          src="/tapmaca.jpg"
          alt="Tapmaca"
          width={800}
          height={300}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Image src="/tapmaca (1).jpg" alt="tapmaca 1" width={400} height={300} className="w-full h-auto rounded-lg" />
        <Image src="/tapmaca (2).jpg" alt="tapmaca 2" width={400} height={300} className="w-full h-auto rounded-lg" />
        <Image src="/tapmaca (3).jpg" alt="tapmaca 3" width={400} height={300} className="w-full h-auto rounded-lg" />
      </div>
    </section>
  );
};

export default ArkaPartaGallery;
