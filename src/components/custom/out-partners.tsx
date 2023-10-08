"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Reveal from "./reveal";

const partners = [
  {
    name: "Pesona Indonesia",
    image: "/assets/images/partners/wonderful-indonesia.png",
  },
  {
    name: "GoPro Hero",
    image: "/assets/images/partners/gopro.png",
  },
  {
    name: "Bank BCA",
    image: "/assets/images/partners/bank-bca.png",
  },
  {
    name: "Bank BNI",
    image: "/assets/images/partners/bank-bni.png",
  },
  {
    name: "Bank Mandiri",
    image: "/assets/images/partners/bank-mandiri.png",
  },
  {
    name: "Western Union",
    image: "/assets/images/partners/western-union.png",
  },
];
const OutPartners = () => {
  return (
    <div>
      <div className=" relative">
        <Reveal
          className="absolute"
          hidden={{ width: "0%" }}
          visible={{ width: "100%" }}
        >
          <motion.div className="bg-gray-300 h-[1px]" />
        </Reveal>
        <div className="py-6">
          <Reveal>
            <h1 className="text-center text-2xl font-serif ">Partner Kami</h1>
          </Reveal>
        </div>
        <Reveal
          className="absolute bottom-0 right-0"
          hidden={{ width: "0%" }}
          visible={{ width: "100%" }}
        >
          <motion.div className="bg-gray-300 h-[1px]" />
        </Reveal>
      </div>
      <div className="py-4">
        <div
          className="
        hidden md:flex
        px-4 py-10  flex-wrap mx-auto items-center justify-center gap-16"
        >
          {partners.map((partner) => {
            return (
              <Image
                key={partner.image}
                src={partner.image}
                alt={partner.name}
                width={130}
                height={50}
                style={{ objectFit: "cover" }}
              />
            );
          })}
        </div>
        <div className="py-4 block md:hidden">
          <Marquee speed={20} pauseOnHover style={{ overflowY: "hidden" }}>
            {partners.map((partner) => {
              return (
                <div
                  key={partner.name}
                  className="relative px-6 flex items-center justify-center border-r h-[50px]"
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={100}
                    height={50}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default OutPartners;
