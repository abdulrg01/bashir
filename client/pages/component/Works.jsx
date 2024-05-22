import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Works() {
  return (
    <div
      className="dark:bg-[#1D222A] bg-[#1D222A] overflow-hidden relative pt-16 z-50"
      id="Works"
    >
      <div className="relative flex items-center justify-center -top-16 bg-[#222831]">
        <h1 className="style text-3xl font-extrabold dark:text-white">
          Recent Works
        </h1>
        <div className="flex items-center justify-center">
          <img className="w-[250px] h-[40px]" src="/works.png" alt="works" />
        </div>
      </div>

      {/* cards */}
      <div className="padding-container max-container mx-auto">
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-5 custom-scrollbar overflow-y-scroll h-[23rem]"
        >
          <img
            whileHover={{ opacity: [0, 1] }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
            src="/Group33.png"
            alt="works"
            className="w-52 h-[140px] bg-[#2A3038] dark:bg-[#2A3038] rounded-xl px-6 py-2"
          />
          <img
            whileHover={{ opacity: [0, 1] }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
            src="/Group34.png"
            alt="works"
            className="w-52 h-[140px] bg-[#2A3038] dark:bg-[#2A3038] rounded-xl px-6 py-2"
          />
          <img
            whileHover={{ opacity: [0, 1] }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
            src="/Group35.png"
            alt="works"
            className="w-52 h-[140px] bg-[#2A3038] dark:bg-[#2A3038] rounded-xl px-6 py-2"
          />
          <img
            whileHover={{ opacity: [0, 1] }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
            src="/Group36.png"
            alt="works"
            className="w-52 h-[140px] bg-[#2A3038] dark:bg-[#2A3038] rounded-xl px-6 py-2"
          />
          <img
            whileHover={{ opacity: [0, 1] }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
            src="/Group37.png"
            alt="works"
            className="w-52 h-[140px] bg-[#2A3038] dark:bg-[#2A3038] rounded-xl px-6 py-2"
          />
          <img
            whileHover={{ opacity: [0, 1] }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
            src="/Group38.png"
            alt="works"
            className="w-52 h-[140px] bg-[#2A3038] dark:bg-[#2A3038] rounded-xl px-6 py-2"
          />
          <img
            whileHover={{ opacity: [0, 1] }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
            src="/frame.png"
            alt="works"
            className="w-52 h-[140px] bg-[#2A3038] dark:bg-[#2A3038] rounded-xl px-6 py-2"
          />
          <img
            whileHover={{ opacity: [0, 1] }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
            src="/group10.png"
            alt="works"
            className="w-52 h-[140px] bg-[#2A3038] dark:bg-[#2A3038] rounded-xl px-6 py-2"
          />
          <img
            whileHover={{ opacity: [0, 1] }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
            src="/group11.png"
            alt="works"
            className="w-52 h-[140px] bg-[#2A3038] dark:bg-[#2A3038] rounded-xl px-6 py-2"
          />
        </motion.div>
      </div>
    </div>
  );
}
