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
      <div className="pl-6 lg:px-20 3xl:px-0 max-container mx-auto">
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 custom-scrollbar overflow-y-scroll h-[23rem] pr-5 group"
        >
          {/* Each div width of w-72 */}
          <div className="rounded-xl bg-[#2A3038] dark:bg-[#2A3038] h-[200px] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 px-3">
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
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038]  h-[200px] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 p-3">
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
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038]  h-[200px] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 px-3 py-1">
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
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038]  h-[200px] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 p-3">
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
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038]  h-[200px] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 px-3 py-2">
            <img
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              src="/inPrgress.png"
              alt="works"
              className="rounded-xl w-full h-full"
            />
          </div>
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038]  h-[200px] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 p-3">
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
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038]  h-[200px] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 px-3">
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
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038]  h-[200px] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 p-3">
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
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038]  h-[200px] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 p-3">
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
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038]  h-[200px] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 p-3">
            <img
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              src="/Group39.png"
              alt="works"
              className="rounded-xl w-full h-full"
            />
          </div>
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038]  h-[200px] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 p-3">
            <img
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              src="/Group40.png"
              alt="works"
              className="rounded-xl w-full h-full"
            />
          </div>
          <div className="rounded-2xl bg-[#2A3038] dark:bg-[#2A3038]  h-[200px] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 p-3">
            <img
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              src="/Group41.png"
              alt="works"
              className="rounded-xl w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
