import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  
  return (
    <div className="fixed max-w-5xl mx-auto top-0 left-0 right-0 z-[100] bg-opacity-100">
      <div className="flex max-w-5xl mx-auto items-center justify-between  lg:py-4 py-2">
        <div>
          <img src="/bg.png" className="w-[70px] h-[50px]" alt="logo" />
        </div>

        <div className="hidden xl:flex lg:flex md:flex text-white">
          <ul className="flex flex-row items-center gap-5 list-none cursor-pointer">
            <li className=" font-bold">Home</li>
            <li>About Me</li>
            <li>Works</li>
            <li>Contact</li>
            <li>Home</li>
          </ul>
        </div>

        <div className="hidden xl:flex lg:flex md:flex md:px-9">
          <button
            type="button"
            class="inline-flex items-center px-3 py-2 text-[10px] font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            DOWNLOAD CV
            <span class="inline-flex items-center justify-center w-3 h-3 ms-3 text-xs font-semibold text-gray-800 rounded-full">
              <img src="/vector.png" alt="vector" />
            </span>
          </button>
        </div>

        <div className="flex md:hidden xl:hidden lg:hidden p-5">
          <svg
            class="w-5 h-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </div>
        {/* {toggle && (
        <motion.div
          whileInView={{ x: [300, 0] }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <HiX onClick={() => setToggle(false)} />
          <ul>
            {["home", "about", "work", "skills", "contact"].map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )} */}
      </div>
    </div>
  );
}
