"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const Bg = () => {
  const ref = useRef(null);
  const {scrollY} = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  const backgroundY = useTransform(scrollY, [0, 500], ["0%", "30%"]);
  const textY = useTransform(scrollY, [0, 500], ["0%", "60%"]);

  return (
    <div
      className="w-full h-screen overflow-hidden relative flex justify-center"
      ref={ref}
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          y: backgroundY,
        }}
      />
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url('Group 1 (2).png')`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          
        }}
      />
      <motion.h1
        className="text-white text-[8rem] font-;bold  translate-y-[150px]"
        style={{
          textShadow: `
            0 0 7px #fff,
            0 0 10px #fff,
            0 0 21px #0ff,
            0 0 42px #0ff,
            0 0 82px #0ff
          `,
          y: textY,
        }}
      >
        Neon Glow Text
      </motion.h1>
    </div>
  );
};

export default Bg;