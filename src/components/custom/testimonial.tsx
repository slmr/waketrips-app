"use client";

import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { Dancing_Script } from "next/font/google";
import { MoveLeft, MoveRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Reveal from "./reveal";

const signatureFont = Dancing_Script({ subsets: ["latin"] });

const items = [
  {
    description:
      "Gatau lagi mau ngomong apa sama tour and travel agent yang 1 ini,gak ada kekurangan sama sekali pokoknya oke bgt ini,.. Guide Ramah sekali,penginapan oke,pokoknya WakeTrips Rekomended banget buat kalian yg mau Holiday ke Belitung.",
    author: "Robertha",
  },
  {
    description:
      "Very Recommended Tour Dari pelayanan, guide, transport semuanya. Sukses terus WakeTrips Belitong...",
    author: "Sunarya",
  },
  {
    description:
      "Sangat memuaskan! Tour guide sangat ramah, sangat baik! recommend banget deh. cuman memang, awalnya ada terkendala di proses pemesanan sedikit. tp, semuanya berjalan lancar. sukses terus WakeTrips Belitung",
    author: "Arya",
  },
  {
    description:
      "Liburan di Belitung sangat memuaskan karena tour guide nya asli orang Belitung jadi bener - bener tau tempat - tempat wisata di Belitung dan yang pasti pelayanannya super bagus. Wait me back again ya Belitung.",
    author: "Wahyu Andreas",
  },
];

const Rating = () => {
  return (
    <div className="flex items-center space-x-1 text-yellow-500">
      {[1, 2, 3, 4, 5].map((rate) => (
        <Star
          key={rate}
          size={30}
          strokeWidth={0.5}
          fill="currentColor"
          absoluteStrokeWidth
        />
      ))}
    </div>
  );
};
const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className="mb-10">
      <Reveal wrapper hidden={{ y: -50 }}>
        <h1 className="text-center text-3xl font-serif mb-6">
          From our travellers
        </h1>
      </Reveal>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          <Reveal
            className="absolute"
            hidden={{ width: "0%" }}
            visible={{ width: "100%" }}
          >
            <motion.div className="bg-gray-300 h-[1px]" />
          </Reveal>
          {items.map((item) => (
            <div key={item.author} className="keen-slider__slide px-4">
              <div className="h-full flex flex-col justify-center items-center gap-7 border-l border-r px-6 py-6">
                <Rating />
                <p className="text-center font-sans font-thin leading-relaxed tracking-wider">
                  {item.description}
                </p>
                <h2
                  className={`${signatureFont.className} text-3xl text-yellow-500`}
                >
                  {item.author}
                </h2>
              </div>
            </div>
          ))}
          <Reveal
            className="absolute bottom-0 right-0"
            hidden={{ width: "0%" }}
            visible={{ width: "100%" }}
          >
            <motion.div className="bg-gray-300 h-[1px]" />
          </Reveal>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="flex justify-center items-center gap-4 mt-4">
          <Button
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
            className="rounded-full"
            variant="secondary"
            size="icon"
          >
            <MoveLeft className="h-4 w-4" strokeWidth={1} absoluteStrokeWidth />
          </Button>
          <Button
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
            className="rounded-full"
            variant="secondary"
            size="icon"
          >
            <MoveRight
              className="h-4 w-4"
              strokeWidth={1}
              absoluteStrokeWidth
            />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
