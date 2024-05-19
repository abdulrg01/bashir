import {
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";

import { TbBrandDiscord } from "react-icons/tb";
import Nav from "./Nav";

export default function Hero() {
  const style = {
    margin: " 0 auto",
    backgroundImage: `url(${"/heroBg.svg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="flex flex-col items-center w-screen">
      <div className="w-screen h-[360px]">
        <div className="h-screen relative">
          <div className=" w-screen h-[91%] md:h-[60%]" style={style}>
            <Nav />
            <div class="pt-24 grid max-w-5xl mx-auto xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 px-3">
              <div class="mr-auto place-self-center">
                <span className="max-w-2xl mb-4">
                  <img
                    src="/HELLO.png"
                    className="w-[700px] h-[130px]"
                    alt="hero"
                  />
                </span>

                <div className="max-w-2xl pt-5">
                  <h4 className="text-4xl font-bold dark:text-white">I'm </h4>
                  <h1 class="flex items-center text-5xl font-extrabold dark:text-white">
                    Bashir
                    <span class="text-[#00ADB5] text-5xl font-extrabold me-2 px-2.5 py-0.5 rounded dark:text-[#00ADB5] ms-2">
                      Ibrahim
                    </span>
                  </h1>
                  <div className="w-[150px] h-1 bg-[#00ADB5] my-4"></div>
                  <p>An experienced UI/UX</p>
                  <p>Designer</p>
                </div>
              </div>

              <div class="hidden sm:flex xl:flex lg:flex md:flex justify-end">
                <div className="flex flex-col items-center gap-6 dark:text-gray-900 text-gray-300">
                  <p className="text-sm rotate-90 tracking-wide text-black dark:text-white my-3 whitespace-nowrap">
                    Follow Me
                  </p>

                  <div className="w-[4px] h-28 dark:bg-[#00ADB5] bg-[#00ADB5]"></div>

                  <div className="flex flex-col gap-4">
                    <a
                      href="https://github.com/abdulrg01/dashboard.git"
                      target="_blank"
                    >
                      <span className="w-8 h-8 text-xl bg-slate-600 dark:bg-slate-700 text-slate-100 dark:text-slate-100  rounded-full inline-flex items-center justify-center hover:text-gray-100 cursor-pointer hover:translate-y-2 transition-all duration-300">
                        <TbBrandDiscord className="w-4 h-4" />
                      </span>
                    </a>
                    <a href="#" target="_blank">
                      <span className="w-8 h-8 text-xl bg-slate-600 dark:bg-slate-700 text-slate-100 dark:text-slate-100  rounded-full inline-flex items-center justify-center hover:text-gray-100 cursor-pointer hover:translate-y-2 transition-all duration-300">
                        <SlSocialInstagram className="w-4 h-4" />
                      </span>
                    </a>
                    <a href="#" target="_blank">
                      <span className="w-8 h-8 text-xl bg-slate-600 dark:bg-slate-700 text-slate-100 dark:text-slate-100  rounded-full inline-flex items-center justify-center hover:text-gray-100 cursor-pointer hover:translate-y-2 transition-all duration-300">
                        <SlSocialTwitter className="w-4 h-4" />
                      </span>
                    </a>
                    <a href="#" target="_blank">
                      <span className="w-8 h-8 text-xl bg-slate-600 dark:bg-slate-700 text-slate-100 dark:text-slate-100  rounded-full inline-flex items-center justify-center hover:text-gray-100 cursor-pointer hover:translate-y-2 transition-all duration-300">
                        <SlSocialLinkedin className="w-4 h-4" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative my-48 xl:my-48 lg:my-48 sm:my-48 w-full">
        <img src="/line.png" alt="line" />
        <div className="styleHero absolute z-10 top-[-120%] left-[51%] md:top-[-240%] md:left-[45%] xl:top-[-120%] xl:left-[53%] lg:top-[-120%] lg:left-[50%] sm:top-[-120%] sm:left-[50%] md:-mt-0 -mt-16 md:-ml-0 -ml-10 deo:top-[-60%] deo:left-[55%]">
          <img
            src="/bash.png"
            className="w-[180px] h-[180px] md:w-[300px] md:h-[400px] xl:w-[400px] xl:h-[500px] lg:w-[400px] lg:h-[500px] sm:w-[400px] sm:h-[500px]"
            alt="group"
          />
        </div>
      </div>

      <div className="w-[320px] md:-mt-72 md:-ml-[10rem] mr-[16rem] relative z-30 -mt-[10rem] mb-7 md:p-0 xl:-mt-72 xl:-ml-[26rem] lg:-mt-72 sm:-mt-72 sm:-ml-[26rem]">
        <p className="text-gray-400 font-semibold">"I always Say"</p>
        <p className="font-medium">
          Let’s work together 🤝🏾 to create a seamless user experience using
          tools 👨🏾‍💻 such as Figma/FigJam, Miro, and Adobe XD.
        </p>
      </div>
    </section>
  );
}
