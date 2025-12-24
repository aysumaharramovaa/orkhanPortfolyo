"use client";

import Image from "next/image";

export default function CollabWorks() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-4xl text-[#e3e1c9] font-bold mb-8 text-center">
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
            {/* Ölçü DƏYİŞMƏYİB */}
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-110 object-cover"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
