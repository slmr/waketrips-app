"use client";

import Reveal from "@/components/custom/reveal";
import { Separator } from "@/components/ui/separator";
import { BadgeDollarSign, HeartHandshake, Rocket } from "lucide-react";
import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <div className="pb-20 md:pt-10">
      <div className="flex items-center justify-center pt-10 pb-8">
        <Image src="/logo.svg" width={130} height={130} alt="Waketrips" />
      </div>
      <div className="mb-10 px-4">
        <p className="text-center text-2xl md:text-3xl leading-relaxed font-serif max-w-3xl mx-auto">
          Memandu Anda melewati keajaiban Pulau Belitung yang menawan. Jelajahi
          pantai putih bersih, formasi batuan yang menakjubkan dan perairan biru
          kehijauan sebening kristal yang akan membuat Anda terkagum-kagum.
        </p>
      </div>
      <div className="relative overflow-x-auto">
        <div className="relative flex max-w-fit gap-6 md:justify-center mx-auto  px-4 pb-2 bg-white z-20">
          <div className="flex flex-col gap-1 justify-center items-center flex-shrink-0 text-center w-40 h-40 rounded-full border-dashed border border-gray-300">
            <Rocket className="w-6 h-6 text-yellow-500" strokeWidth={1} />
            <h3 className="text-xl font-sans">Profesional</h3>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center flex-shrink-0 text-center w-40 h-40 rounded-full border-dashed border border-gray-300">
            <HeartHandshake
              className="w-6 h-6 text-yellow-500"
              strokeWidth={1}
            />
            <h3 className="text-xl font-sans">
              Layanan
              <br />
              Terbaik
            </h3>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center flex-shrink-0 text-center w-40 h-40 rounded-full border-dashed border border-gray-300">
            <BadgeDollarSign
              className="w-6 h-6 text-yellow-500"
              strokeWidth={1}
            />
            <h3 className="text-xl font-sans">
              Harga
              <br />
              Kompetitif
            </h3>
          </div>
        </div>
        <Separator className="hidden md:block absolute top-1/2 translate-y-1/2 z-10" />
      </div>
    </div>
  );
};

export default Introduction;
