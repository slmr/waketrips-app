"use client";

import { cx } from "class-variance-authority";
import { Transition, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: JSX.Element;
  hidden?: any;
  visible?: any;
  transition?: Transition;
  className?: string;
  containerClassName?: string;
  wrapper?: boolean;
  style?: any;
}
const Reveal = ({
  children,
  hidden = { opacity: 0, y: 15 },
  visible = { opacity: 1, y: 0 },
  transition = { duration: 0.5, delay: 0.25 },
  className,
  containerClassName,
  wrapper = false,
  style,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  if (wrapper) {
    return (
      <div ref={ref} className={cx("overflow-hidden", containerClassName)}>
        <motion.div
          variants={{ hidden, visible }}
          initial="hidden"
          animate={mainControls}
          transition={transition}
          className={className}
          style={style}
        >
          {children}
        </motion.div>
      </div>
    );
  }
  return (
    <motion.div
      ref={ref}
      variants={{ hidden, visible }}
      initial="hidden"
      animate={mainControls}
      transition={transition}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
