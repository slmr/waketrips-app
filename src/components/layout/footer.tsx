import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Reveal from "../custom/reveal";

const Footer = () => {
  return (
    <footer className="bg-[#030922]  text-white">
      <div className="flex items-center justify-center py-12">
        <Reveal>
          <Link href="/">
            <Image
              src="/logo-white.svg"
              alt="WakeTrips"
              width={120}
              height={60}
            />
          </Link>
        </Reveal>
      </div>
      <div className="relative">
        <Reveal
          visible={{ width: "100%" }}
          hidden={{ width: "0%" }}
          transition={{ delay: 0.3, duration: 0.6, ease: "linear", origin: 1 }}
          className="absolute left-1/2 right-1/2 -translate-x-1/2 top-0 "
        >
          <div className="h-[1px] bg-slate-500" />
        </Reveal>
        <nav className="relative max-w-xl mx-auto px-4 py-8">
          <Reveal>
            <ul className="flex flex-wrap gap-10 justify-around items-center whitespace-nowrap uppercase font-mono text-xs tracking-widest">
              <li>
                <Link href="/">Destinations</Link>
              </li>
              <li>
                <Link href="/">Inspiration</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Why Us</Link>
              </li>
              <li>
                <Link href="/">Booking Conditions</Link>
              </li>
              <li>
                <Link href="/">Travel Insurance</Link>
              </li>
            </ul>
          </Reveal>
        </nav>
        <Reveal
          visible={{ width: "100%" }}
          hidden={{ width: "0%" }}
          transition={{ delay: 0.3, duration: 0.6, ease: "linear", origin: 1 }}
          className="absolute left-1/2 right-1/2 -translate-x-1/2 bottom-0 "
        >
          <div className="h-[1px] bg-slate-500" />
        </Reveal>
      </div>

      <div className="relative">
        <Reveal>
          <div className="grid grid-cols-2 whitespace-nowrap font-sans text-sm">
            <div className="p-4 md:p-10 flex flex-col items-center justify-center md:justify-self-end border-r border-slate-500">
              <span className="font-mono tracking-wider uppercase">
                Telepon/Wa
              </span>
              <a
                href="https://api.whatsapp.com/send?phone=6281949477937&text=Halo%20WakeTrips%2C%20Saya%20ingin%20membeli%20paket%20liburan%20ke%20Belitung%20...%20"
                target="_blank"
                rel="noopener"
                className="font-serif text-lg"
              >
                +6281949477937
              </a>
            </div>
            <div className="p-4 md:p-10 flex flex-col items-center justify-center md:justify-self-start">
              <span className="font-mono tracking-wider uppercase">Email</span>
              <a href="mailto: affri@gmail.com" className="font-serif text-lg">
                waketrips@gmail.com
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal
          visible={{ width: "100%" }}
          hidden={{ width: "0%" }}
          transition={{ delay: 0.3, duration: 0.6, ease: "linear", origin: 1 }}
          className="absolute left-1/2 right-1/2 -translate-x-1/2 bottom-0 "
        >
          <div className="h-[1px] bg-slate-500" />
        </Reveal>
      </div>
      <div className="p-8">
        <div className="flex justify-center items-center gap-8 mb-6">
          <a
            href="https://www.facebook.com/affrislmr"
            target="_blank"
            rel="noopener"
          >
            <Facebook className="w-5 h-5" strokeWidth={1} />
          </a>
          <a
            href="https://www.instagram.com/affri_i"
            target="_blank"
            rel="noopener"
          >
            <Instagram className="w-5 h-5" strokeWidth={1} />
          </a>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center uppercase font-sans text-xs tracking-widest">
          <div>
            <Link href="/">Cookies</Link>
          </div>
          <div>
            <Link href="/">Privacy</Link>
          </div>
          <div className="text-center">
            © 2023 WakeTrips. All rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
