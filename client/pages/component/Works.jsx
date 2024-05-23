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
          // className="grid grid-cols-2 lg:grid-cols-3 gap-5 custom-scrollbar overflow-y-scroll h-[23rem] w-full"
          className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 custom-scrollbar overflow-y-scroll h-[23rem] w-full"
        >
          <div className="rounded-xl bg-[#2A3038] dark:bg-[#2A3038] w-52 h-[160px] px-3 flex items-center justify-center">
            <img
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              src="/Group33.png"
              alt="works"
              className="rounded-xl w-full h-full"
            />
          </div>

          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038] w-52 h-[160px] p-3 flex items-center justify-center">
            <img
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              src="/Group34.png"
              alt="works"
              className="rounded-xl w-full h-full"
            />
          </div>
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038] w-52 h-[160px] px-3 py-1 flex items-center justify-center">
            <img
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              src="/Group35.png"
              alt="works"
              className="rounded-xl w-full h-full"
            />
          </div>
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038] w-52 h-[160px] p-3 flex items-center justify-center">
            <img
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              src="/Group36.png"
              alt="works"
              className="rounded-xl w-full h-full"
            />
          </div>
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038] w-52 h-[160px] px-3 flex items-center justify-center">
            <img
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              src="/Group37.png"
              alt="works"
              className="rounded-xl w-full h-full"
            />
          </div>
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038] w-52 h-[160px] p-3 flex items-center justify-center">
            <img
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              src="/Group38.png"
              alt="works"
              className="rounded-xl w-full h-full"
            />
          </div>
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038] w-52 h-[160px] px-3 flex items-center justify-center">
            <img
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              src="/frame10.png"
              alt="works"
              className="rounded-xl w-full h-full"
            />
          </div>
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038] w-52 h-[160px] p-3 flex items-center justify-center">
            <img
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              src="/Frame12.png"
              alt="works"
              className="rounded-xl w-full h-full"
            />
          </div>
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038] w-52 h-[160px] p-3 flex items-center justify-center">
            <img
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              src="/Frame11.png"
              alt="works"
              className="rounded-xl w-full h-full"
            />
          </div>
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038] w-52 h-[160px] p-3 flex items-center justify-center">
            <img
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              src="/group39.png"
              alt="works"
              className="rounded-xl w-full h-full"
            />
          </div>
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038] w-52 h-[160px] p-3 flex items-center justify-center">
            <img
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              src="/group40.png"
              alt="works"
              className="rounded-xl w-full h-full"
            />
          </div>
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038] w-52 h-[160px] p-3 flex items-center justify-center">
            <img
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              src="/group41.png"
              alt="works"
              className="rounded-xl w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
