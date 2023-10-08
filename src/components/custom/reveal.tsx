"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";

interface RevealProps {
  children: JSX.Element;
  hidden?: any;
  visible?: any;
  transition?: any;
  className?: string;
}
const Reveal = ({
  children,
  hidden = { opacity: 0, y: 15 },
  visible = { opacity: 1, y: 0 },
  transition = { duration: 0.5, delay: 0.25 },
  className,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{ hidden, visible }}
      initial="hidden"
      animate={mainControls}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
