"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const collabs = [
  {
    src: "/collab1.jpg",
    alt: "Collab 1",
    link: "https://www.instagram.com/p/DOnli-mDDMI/?igsh=b2ZzazIxMHdvZ3ls",
    className: "md:col-span-2 md:row-span-3",
    position: "object-center",
  },
  {
    src: "/collab2.jpg",
    alt: "Collab 2",
    link: "https://www.instagram.com/p/DOQQTFTDHE-/?igsh=MTBpMGQyeWthd2p2",
    className: "",
  },
  {
    src: "/collab3.jpg",
    alt: "Collab 3",
    link: "https://www.instagram.com/p/DLovQrftcJg/?igsh=MWUzdWRvdzZzaWlmbw==",
    className: "",
  },
  {
    src: "/collab4.jpg",
    alt: "Collab 4",
    link: "https://www.instagram.com/p/DLEyt5_NnB5/?igsh=c2doY29tajlidnp5",
    className: "md:col-span-2 md:row-span-3",
    position: "object-top",
  },
  {
    src: "/collab5.jpg",
    alt: "Collab 5",
    link: "https://www.instagram.com/p/DIoN54BNIDo/?igsh=MWFtMHBnbTZkZzZrMQ==",
    className: "",
  },
  {
    src: "/collab6.jpg",
    alt: "Collab 6",
    link: "https://www.instagram.com/p/DIf8ApONxdo/?igsh=MThzY2V0eXA1ZjUxbw==",
    className: "",
  },
  {
    src: "/collab7.jpg",
    alt: "Collab 7",
    link: "https://www.instagram.com/p/DJo2AcoI51C/?igsh=MWFkbDVqYjJob3Nveg==",
    className: "",
  },
  {
    src: "/collab8.jpeg",
    alt: "Collab 8",
    link: "https://www.instagram.com/reel/DSmTFo5jTjE/?igsh=MWo0cW1jb3RmY2N5ag==",
    className: "md:col-span-2",
  },
  {
    src: "/collab9.jpeg",
    alt: "Collab 9",
    link: "https://www.instagram.com/reel/DR4B8eljNc-/?igsh=MWF1ajlxbWpscmI0bA==",
    className: "",
  },
];

export default function CollabBento() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-5xl font-bold text-[#e3e1c9]">Collab Works</h2>

        <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
          Some of the collaborations, events and projects I've been part of.
        </p>
      </div>

      <div className="grid auto-rows-[260px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {collabs.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: index * 0.05,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className={`group relative overflow-hidden rounded-[28px] ${item.className}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition" />

            <div className="absolute left-6 right-6 bottom-6 flex items-center justify-between">
              <div>
                <p className="text-zinc-300 text-sm">View on Instagram</p>
              </div>

              <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
