"use client";

import Reveal from "@/components/custom/reveal";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const EnquirySuccessTitle = () => {
  return (
    <div className="pt-10 md:pt-16 pb-10 md:pb-16 bg-secondary">
      <div className="container flex flex-col justify-center items-center">
        <Reveal hidden={{ y: 30 }} visible={{ y: 0 }} wrapper>
          <Badge
            variant="secondary"
            className="font-mono tracking-wider uppercase bg-white"
          >
            ENQUIRY RECEIVED
          </Badge>
        </Reveal>
        <div className="around-lines-grid my-3 md:my-5">
          <Reveal
            hidden={{ width: "0%" }}
            visible={{ width: "100%" }}
            className="justify-self-end"
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <motion.div className="bg-gray-300 h-[1px]" />
          </Reveal>
          <Reveal hidden={{ y: -60 }} wrapper>
            <h1 className="font-serif text-center text-4xl md:text-5xl">
              Thank you for your enquiry
            </h1>
          </Reveal>

          <Reveal
            hidden={{ width: "0%" }}
            visible={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <motion.div className="bg-gray-300 h-[1px]" />
          </Reveal>
        </div>
        <Reveal hidden={{ opacity: 0, y: 30 }}>
          <p className="font-sans text-sm tracking-wide mb-0">
            A member of our team will be in touch.
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default EnquirySuccessTitle;
