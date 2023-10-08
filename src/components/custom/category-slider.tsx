"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MoveLeft, MoveRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import Reveal from "./reveal";
import { motion } from "framer-motion";

const CycleDotsSvg = () => {
  return (
    <motion.svg
      whileHover={{
        rotate: [0, 360],
        transition: {
          rotate: {
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
          },
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="216"
      height="216"
      fill="none"
    >
      <circle
        cx="108"
        cy="108"
        r="107"
        stroke="#fff"
        strokeDasharray="0.1 10"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </motion.svg>
  );
};
const items = [
  {
    description: "Hemat",
    image: "/assets/images/paket/bg-paket-1.jpg",
  },
  {
    description: "Regular",
    image: "/assets/images/paket/bg-paket-2.jpg",
  },
  {
    description: "Keluarga",
    image: "/assets/images/paket/bg-paket-3.jpg",
  },
  {
    description: "Honeymoon",
    image: "/assets/images/paket/bg-paket-3.jpg",
  },
  {
    description: "One Day Trip",
    image: "/assets/images/paket/bg-paket-5.jpg",
  },
];

const CategorySlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    renderMode: "performance",
    slides: {
      spacing: 18,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="bg-category-section pt-16 ">
      <div className="text-white">
        <Reveal>
          <h1 className="text-2xl font-serif text-center mb-6">Paket Wisata</h1>
        </Reveal>
        <Reveal transition={{ delay: 0.4, duration: 0.5 }}>
          <p className="text-center font-sans font-thin tracking-wide leading-relaxed mb-6 px-6 text-gray-300">
            Kami menyediakan banyak pilihan paket wisata untuk memenuhi liburan
            menyenangkan anda.
          </p>
        </Reveal>
      </div>
      <hr className="border-slate-500 mb-3" />
      <div className="relative text-white">
        <div ref={sliderRef} className="keen-slider">
          {items.map((item) => (
            <div key={item.description} className="keen-slider__slide">
              <div className="aspect-[2/3] scale-95">
                <Image src={item.image} alt={item.description} fill />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div whileHover={{ scale: 1.2 }} className="z-20">
                    <p className="text-center font-serif text-3xl">
                      {item.description}
                    </p>
                    <div className="absolute z-10 inset-center">
                      <CycleDotsSvg />
                    </div>
                  </motion.div>
                </div>

                <div className="h-full backdrop-sepia-0 bg-black/20" />
              </div>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
              className="rounded-full absolute top-1/2 -translate-y-1/2 left-5"
              variant="secondary"
              size="icon"
            >
              <MoveLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
              className="rounded-full absolute top-1/2 -translate-y-1/2 right-5"
              variant="secondary"
              size="icon"
            >
              <MoveRight className="h-4 w-4" />
            </Button>
          </>
        )}
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
  );
};

export default CategorySlider;
