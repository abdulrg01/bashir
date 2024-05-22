import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <img src="/navLogo.png" width={50} height={30} alt="logo" />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex text-white">
        {["Home", "About Me", "Works", "Contact"].map((link, index) => (
          <Link
            href={`#${link}`}
            key={index}
            className="regular-16 text-white flexCenter cursor-pointer pb-1.5  transition-all hover:font-bold"
          >
            {link}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <a
          href="https://firebasestorage.googleapis.com/v0/b/contactme-2970e.appspot.com/o/Bashir's%20Resume.pdf?alt=media&token=21a8e337-51c6-40b7-91a1-b0aece7756bf"
          target="_blank"
          className="flexCenter gap-3 px-3 py-2 text-[10px] font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          <button type="submit" className=" whitespace-nowrap">
            DOWNLOAD CV
          </button>
          <img className="w-3 h-3" src="/vector.png" alt="vector" />
        </a>
      </div>

      <div
        className={`${
          toggle
            ? "hidden"
            : "inline-block cursor-pointer lg:hidden p-5 text-black dark:text-white"
        }`}
        onClick={() => setToggle(true)}
      >
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
      {toggle && (
        <motion.div
          whileInView={{ x: [300, 0] }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          class="justify-between items-center w-full lg:hidden p-5"
        >
          <svg
            class="w-5 h-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            onClick={() => setToggle(false)}
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
          <ul class="flex flex-col mt-4 font-medium lg:hidden lg:mt-0">
            {["Home", "About Me", "Works", "Skills", "Contact"].map((item) => (
              <li
                key={item}
                class="block py-2 pr-4 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
              >
                <Link href={`#${item}`} onClick={() => setToggle(false)}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
