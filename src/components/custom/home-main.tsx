"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Star } from "lucide-react";
import { Button } from "../ui/button";

const HomeMain = () => {
  return (
    <div className="relative h-full justify-center flex items-center flex-col">
      <div className="flex items-center text-white w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeIn" }}
          className="flex-1 relative px-4 py-3"
        >
          <div className="w-3/4 flex flex-col gap-1 sm:gap-2 ">
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
            <div className="font-sans font-thin text-xs tracking-wide uppercase text-center">
              Customer Rating
            </div>
          </div>

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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeIn" }}
          className="flex-1 relative px-4 py-3"
        >
          <div className="w-3/4 ml-auto flex items-center flex-col gap-1 sm:gap-2 ">
            <Phone className="h-4 w-4" />
            <div className="font-sans font-thin text-xs tracking-wide uppercase text-center">
              <a
                href="https://api.whatsapp.com/send?phone=6281949477937&text=Halo%20WakeTrips%2C%20Saya%20ingin%20membeli%20paket%20liburan%20ke%20Belitung%20...%20"
                target="_blank"
                rel="noopener"
                className="font-serif text-gray-200"
              >
                +6281949477937
              </a>
            </div>
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
          </div>
        </motion.div>
      </div>
      <div className="flex-1">
        <motion.div
          animate={{ height: "100%" }}
          initial={{ height: "0%" }}
          transition={{ delay: 0.9, duration: 0.6, ease: "linear" }}
          className="w-[1px] bg-gray-300"
        />
      </div>

      <motion.div
        transition={{ delay: 0.5, duration: 0.6, ease: "easeIn" }}
        className="text-center my-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeIn" }}
          className={`mb-4 max-w-[25ch] font-light text-center font-sans text-lg md:text-2xl`}
        >
          Gerbang Anda menuju Petualangan di Belitung
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeIn" }}
        >
          <Button variant="outline" size="lg" className="uppercase">
            Mulai Jelajah
          </Button>
        </motion.div>
      </motion.div>
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
      <div className="relative grid grid-cols-2 text-white w-full px-4 py-4">
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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeIn" }}
          className="text-center font-sans font-thin text-xs tracking-wide uppercase"
        >
          Tentang Kami
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeIn" }}
          className="text-center font-sans font-thin text-xs tracking-wide uppercase"
        >
          Kenapa Pilih Kami
        </motion.div>
      </div>
    </div>
  );
};

export default HomeMain;
