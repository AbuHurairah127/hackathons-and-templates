"use client";
import React from "react";
import { motion } from "framer-motion";

const TopText = () => {
  const animationVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="text-center py-24 text-[48px] sm:text-[56px] md:text-[64px] lg:text-[85px] font-bold px-5 md:px-12 lg:px-20 bg-gray-50">
      <motion.span
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.15 }}
        className=" text-center text-[48px] sm:text-[56px] md:text-[64px] lg:text-[85px] font-bold block"
        aria-hidden
      >
        {" Step UP your Style Game With FABThreads' Curated Collection."
          .split(" ")
          .map((word: string, i: number) => (
            <motion.span key={i} className="inline-block">
              <motion.span
                variants={animationVariants}
                className="inline-block"
                key={i}
              >
                {word}
              </motion.span>
              <span>&nbsp;</span>
            </motion.span>
          ))}
      </motion.span>
    </div>
  );
};

export default TopText;
