import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";

import { TbBrandDiscord } from "react-icons/tb";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section
      className="w-full relative bg-center bg-no-repeat bg-[url('/heroBg.svg')] bg-blend-multiply overflow-hidden"
      id="Hero"
    >
      <div className="padding-container max-container mx-auto md:pt-5 pb-5">
        <div class="sm:flex sm:items-center sm:justify-between">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            class="flex flex-col mb-4 sm:mb-0 "
          >
            <img
              src="/HELLO.png"
              className="lg:w-[600px] lg:h-[130px] w-[400px] h-[100px]"
              alt="hero"
            />

            <h4 className="text-4xl font-bold dark:text-white mt-7 mb-3">
              I'm{" "}
            </h4>
            <h1 class="flex items-center lg:text-5xl text-3xl font-extrabold dark:text-white">
              Bashir
              <span class="text-[#00ADB5] lg:text-5xl text-3xl font-extrabold me-2 px-2.5 py-0.5 rounded dark:text-[#00ADB5] ms-2">
                Ibrahim
              </span>
            </h1>
            <div className="lg:w-[150px] w-[100px] h-1 bg-[#00ADB5] my-4"></div>
            <p className=" text-white">An experienced UI/UX</p>
            <p className=" text-white">Designer</p>
          </motion.div>

          {/*  */}
          <div className="lg:flex md:flex xl:flex flex-col items-center gap-6 dark:text-gray-900 text-gray-300 hidden lg:-mr-5 xl:-mr-5">
            <p className="text-sm rotate-90 tracking-wide text-black dark:text-white my-3 whitespace-nowrap">
              Follow Me
            </p>

            <div className="w-[4px] h-28 dark:bg-[#00ADB5] bg-[#00ADB5]"></div>

            <div className="flex flex-col gap-4">
              <a
                href="https://discordapp.com/users/1016573183811407972"
                target="_blank"
              >
                <span className="w-8 h-8 text-xl bg-slate-600 dark:bg-slate-700 text-slate-100 dark:text-slate-100  rounded-full inline-flex items-center justify-center hover:text-gray-100 cursor-pointer hover:translate-y-2 transition-all duration-300">
                  <TbBrandDiscord className="w-4 h-4" />
                </span>
              </a>
              <a
                href="https://www.instagram.com/bash_uiux?igsh=MXBiODFyN3BzbmpucA=="
                target="_blank"
              >
                <span className="w-8 h-8 text-xl bg-slate-600 dark:bg-slate-700 text-slate-100 dark:text-slate-100  rounded-full inline-flex items-center justify-center hover:text-gray-100 cursor-pointer hover:translate-y-2 transition-all duration-300">
                  <SlSocialInstagram className="w-4 h-4" />
                </span>
              </a>
              <a href="https://x.com/BashirI74692251" target="_blank">
                <span className="w-8 h-8 text-xl bg-slate-600 dark:bg-slate-700 text-slate-100 dark:text-slate-100  rounded-full inline-flex items-center justify-center hover:text-gray-100 cursor-pointer hover:translate-y-2 transition-all duration-300">
                  <FaXTwitter className="w-4 h-4" />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/bashondesign/"
                target="_blank"
              >
                <span className="w-8 h-8 text-xl bg-slate-600 dark:bg-slate-700 text-slate-100 dark:text-slate-100  rounded-full inline-flex items-center justify-center hover:text-gray-100 cursor-pointer hover:translate-y-2 transition-all duration-300">
                  <SlSocialLinkedin className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen mt-3 overflow-hidden absolute xl:top-40 md:top-52 lg:top-40 sm:top-44 top-72">
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src="/shapeImg.png"
          alt="shape"
          className="w-full"
        />
      </div>

      <div className="w-full max-container padding-container mx-auto pb-32 deo:pb-14 lg:mt-64 md:mt-64 xl:mt-64 sm:mt-52 mt-48 deo:mt-52">
        <span class="block text-sm text-gray-500 dark:text-gray-400 w-[350px]">
          <p className="font-semibold">"I always Say"</p>
          <p className="font-medium text-gray-500 dark:text-gray-200">
            Let’s work together 🤝🏾 to create a seamless user experience using
            tools 👨🏾‍💻 such as Figma/FigJam, Miro, and Adobe XD.
          </p>
        </span>
      </div>
    </section>
  );
}
