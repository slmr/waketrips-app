"use client";

import Reveal from "@/components/custom/reveal";
import { Button } from "@/components/ui/button";

const ContactUsInformation = () => {
  return (
    <div className="container mt-10">
      <div className="flex flex-col items-center justify-center">
        <div className="vertical-divider" />
        <Reveal wrapper hidden={{ y: -50 }}>
          <h1 className="font-serif text-3xl text-center mb-0">Call Us</h1>
        </Reveal>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="mt-6 tracking-widest border-slate-500 px-16"
        >
          <a
            href="https://api.whatsapp.com/send?phone=62819#0007937&text=Halo%20WakeTrips%2C%20Saya%20ingin%20membeli%20paket%20liburan%20ke%20Belitung%20...%20"
            target="_blank"
            rel="noopener"
          >
            +6281949477937
          </a>
        </Button>
        <div className="vertical-divider" />
      </div>
    </div>
  );
};

export default ContactUsInformation;
