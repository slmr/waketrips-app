"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const EnquireNow = () => {
  return (
    <div className="bg-stone-100 pt-12 mx-4">
      <div className="relative overflow-hidden aspect-[3/2] -mx-4">
        <motion.div
          className=" w-full h-full"
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear", type: "tween" }}
        >
          <Image
            alt="Enquire Now"
            src="/assets/images/enquire-now-bg.jpg"
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
      <div className="p-8">
        <h4 className="text-2xl font-serif text-center mb-6">
          Mulailah merencanakan liburan bahagia Anda
        </h4>
        <p className="font-sans text-gray-500 text-center mb-6">
          Bicaralah dengan salah satu spesialis perjalanan kami
        </p>

        <div className="flex flex-col gap-4 items-center justify-center">
          <Button size="lg" className="w-full">
            Pesan Sekarang
          </Button>
          <Button size="lg" variant="outline" className="w-full" asChild>
            <a
              href="https://api.whatsapp.com/send?phone=6281949477937&text=Halo%20WakeTrips%2C%20Saya%20ingin%20membeli%20paket%20liburan%20ke%20Belitung%20...%20"
              target="_blank"
              rel="noopener"
            >
              Hubungi Kami
            </a>
          </Button>
        </div>
        <div className="flex justify-center items-center mt-4 gap-3">
          <div className="flex items-center justify-center">
            <Avatar>
              <AvatarImage
                src="/assets/images/cs-1.jpg"
                className="object-cover"
              />
              <AvatarFallback>CS1</AvatarFallback>
            </Avatar>
            <Avatar className="-ml-4">
              <AvatarImage
                src="/assets/images/cs-2.jpg"
                className="object-cover"
              />
              <AvatarFallback>CS2</AvatarFallback>
            </Avatar>
          </div>
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          <span className="font-mono text-sm uppercase">Available Now</span>
        </div>
      </div>
    </div>
  );
};

export default EnquireNow;
