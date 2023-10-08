"use client";

import React from "react";
import Reveal from "./reveal";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
const listPopular = [
  {
    label: "Paket 2D1N",
    price: "650000",
    image: "/assets/images/paket/bg-paket-1.jpg",
    category: "Paket Hemat",
    time: "1 D",
  },
  {
    label: "Paket 2D2N",
    price: "850000",
    image: "/assets/images/paket/bg-paket-2.jpg",
    category: "Paket Hemat",
  },
  {
    label: "Paket 3D2N",
    price: "950000",
    image: "/assets/images/paket/bg-paket-3.jpg",
    category: "Paket Hemat",
  },
  {
    label: "Paket 4D2N",
    price: "120000",
    image: "/assets/images/paket/bg-paket-4.jpg",
    category: "Paket Hemat",
  },
  {
    label: "Paket 3D2N",
    price: "150000",
    image: "/assets/images/paket/bg-paket-5.jpg",
    category: "Paket Regular",
  },
  {
    label: "Paket 5D4N",
    price: "250000",
    image: "/assets/images/paket/bg-paket-6.jpg",
    category: "Paket Regular",
  },
];
const items = [
  {
    label: "Paket 2D1N",
    price: "650000",
    image: "/assets/images/paket/bg-paket-1.jpg",
    category: "Paket Hemat",
    time: "1 D",
  },
  {
    label: "Paket 2D2N",
    price: "850000",
    image: "/assets/images/paket/bg-paket-2.jpg",
    category: "Paket Hemat",
  },
  {
    label: "Paket 3D2N",
    price: "950000",
    image: "/assets/images/paket/bg-paket-3.jpg",
    category: "Paket Hemat",
  },
  {
    label: "Paket 4D2N",
    price: "120000",
    image: "/assets/images/paket/bg-paket-4.jpg",
    category: "Paket Hemat",
  },
  {
    label: "Paket 3D2N",
    price: "150000",
    image: "/assets/images/paket/bg-paket-5.jpg",
    category: "Paket Regular",
  },
  {
    label: "Paket 5D4N",
    price: "250000",
    image: "/assets/images/paket/bg-paket-6.jpg",
    category: "Paket Regular",
  },
  {
    label: "Paket 6D5N",
    price: "350000",
    image: "/assets/images/paket/bg-paket-7.jpg",
    category: "Paket Regular",
  },
];

const ListPackage = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <Reveal
          className="justify-self-end"
          hidden={{ width: "0%" }}
          visible={{ width: "100%" }}
        >
          <motion.div className="bg-gray-300 h-[1px]" />
        </Reveal>
        <Reveal>
          <h1 className="text-center text-2xl font-serif now whitespace-nowrap">
            Paket Populer
          </h1>
        </Reveal>
        <Reveal
          className="ustify-self-end"
          hidden={{ width: "0%" }}
          visible={{ width: "100%" }}
        >
          <motion.div className="bg-gray-300 h-[1px]" />
        </Reveal>
      </div>
      <div className="mt-4 mb-8 px-4">
        <Reveal transition={{ delay: 0.4, duration: 0.5 }}>
          <p className="text-center text-sm font-light font-sans">
            WakeTrips menyediakan berbagai macam pilihan paket wisata Belitung
            yang dapat disesuaikan dengan budget, fasilitas dan durasi
            perjalanan yang Anda inginkan.
          </p>
        </Reveal>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-3 px-4">
          {listPopular.map((item) => (
            <div key={item.label}>
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src={item.image}
                  fill
                  alt={item.label}
                  className="transition ease-in-out duration-700 hover:scale-105"
                />
              </div>
              <div className="pt-2 pb-4">
                <h3 className="mb-1 font-light">{item.label}</h3>
                <p className="text-xs font-thin text-gray-600 font-sans">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    maximumFractionDigits: 0,
                  }).format(Number(item.price))}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 mt-3">
          <Reveal
            className="justify-self-end"
            hidden={{ width: "0%" }}
            visible={{ width: "100%" }}
          >
            <motion.div className="bg-gray-300 h-[1px]" />
          </Reveal>
          <Reveal>
            <Button variant="outline" className="bg-transparent">
              View More
            </Button>
          </Reveal>
          <Reveal
            className="ustify-self-end"
            hidden={{ width: "0%" }}
            visible={{ width: "100%" }}
          >
            <motion.div className="bg-gray-300 h-[1px]" />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ListPackage;
