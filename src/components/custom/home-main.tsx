"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Star } from "lucide-react";
import { Button } from "../ui/button";
import Reveal from "./reveal";

const HomeMain = () => {
  return (
    <div className="relative h-full justify-center flex items-center flex-col">
      <div className="hidden md:flex items-center justify-between font-mono text-xs tracking-wider uppercase text-white w-full relative px-4 py-3">
        <motion.div
          animate={{ width: "100%" }}
          initial={{ width: "0%" }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: "linear",
            origin: 1,
          }}
          className="absolute left-1/2 right-1/2 -translate-x-1/2 bottom-0 h-[1px] bg-gray-300"
        />
        <Reveal>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center gap-0">
              {[1, 2, 3, 4, 5].map((rate) => (
                <Star
                  key={rate}
                  className="w-4 h-4"
                  strokeWidth={0.5}
                  fill="currentColor"
                />
              ))}
            </div>
            <div>Customer Rating</div>
          </div>
        </Reveal>
        <Reveal>
          <a
            href="https://api.whatsapp.com/send?phone=6281949477937&text=Halo%20WakeTrips%2C%20Saya%20ingin%20membeli%20paket%20liburan%20ke%20Belitung%20...%20"
            target="_blank"
            rel="noopener"
            className="flex items-center justify-end gap-4"
          >
            <div>Speak to our Expert</div>
            <Phone className="h-4 w-4" />
            +6281949477937
          </a>
        </Reveal>
      </div>
      <div className="flex-1">
        <motion.div
          animate={{ height: "100%" }}
          initial={{ height: "0%" }}
          transition={{ delay: 0.9, duration: 0.6, ease: "linear" }}
          className="w-[1px] bg-gray-300"
        />
      </div>

      <div className="text-center my-6">
        <Reveal wrapper hidden={{ y: -60 }}>
          <h1 className="font-serif text-3xl md:text-5xl text-center mb-3">
            Everyone Can Trip
          </h1>
        </Reveal>
        <Reveal>
          <p
            className={`mb-4 max-w-[22ch] mx-auto md:max-w-full text-center font-sans tracking-wide text-lg md:text-xl`}
          >
            Gerbang Anda Menuju Petualangan di Belitung
          </p>
        </Reveal>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeIn" }}
        >
          <Button
            variant="outline"
            size="lg"
            className="uppercase px-7 tracking-wider"
          >
            Mulai Jelajah
          </Button>
        </motion.div>
      </div>
      <div className="flex-1 relative">
        <motion.div
          animate={{ height: "100%" }}
          initial={{ height: "0%" }}
          transition={{
            delay: 0.9,
            duration: 0.6,
            ease: "linear",
          }}
          className="absolute bottom-0 w-[1px] bg-gray-300"
        />
      </div>
      <div className="hidden md:flex items-center justify-center gap-16 font-mono text-xs tracking-wider uppercase relative text-white w-full px-4 py-4">
        <motion.div
          animate={{ width: "100%" }}
          initial={{ width: "0%" }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: "linear",
            origin: 1,
          }}
          className="absolute left-1/2 right-1/2 -translate-x-1/2 top-0 h-[1px] bg-gray-300"
        />
        <Reveal>
          <div>Tentang Kami</div>
        </Reveal>
        <Reveal>
          <div>Harga Menjanjikan</div>
        </Reveal>
        <Reveal>
          <div>Reviews</div>
        </Reveal>
        <Reveal>
          <div>Kenapa Pilih Kami</div>
        </Reveal>
      </div>
    </div>
  );
};

export default HomeMain;
