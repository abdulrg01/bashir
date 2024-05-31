import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative" id="About Me">
      <div className="dark:bg-[#1D222A]">
        <div className="max-container mx-auto padding-container py-10 lg:mb-10  lg:py-20 xl:mb-20">
          <div className="relative flex items-center justify-center mb-10 xl-top-24 lg:-top-24 2xl:-top-24 -top-16">
            <h1 className="style text-4xl font-extrabold dark:text-white">
              What I Do
            </h1>
            <div className="flex items-center justify-center">
              <img className="w-[250px] h-[40px]" src="/do.png" alt="do" />
            </div>
          </div>

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            className="grid lg:grid-cols-4 grid-cols-2 gap-9 group"
          >
            <ExperienceCard img="/Group1.png" title="Product Design" />
            <ExperienceCard img="/UX.png" title="UI/UX Design" />
            <ExperienceCard img="/group2.png" title="Icon Design" />
            <ExperienceCard img="/group3.png" title="Logo Design" />
          </motion.div>

          <div className="relative flex items-center justify-center top-14 xl:top-24 lg:top-24 md:top-24 2xl:-bottom-24">
            <h1 className="style text-4xl font-extrabold dark:text-white">
              About Me
            </h1>
            <div className="flex items-center justify-center">
              <img className="w-[250px] h-[40px]" src="/me.png" alt="do" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute lg:bottom-5 xl:bottom-5 2xl:bottom-5">
        <img
          src="group5.png"
          className="lg:h-[55rem] lg:w-[25rem] md:w-[10rem] md:h-[24rem] w-[8rem] h-[18rem]"
          alt="group"
        />
      </div>

      <div className="max-container mx-auto padding-container">
        <div className="lg:flex hidden lg:items-center lg:justify-center w-full relative lg:z-[70] md:mt-0 mt-48">
          <img
            src="/Aboutme.png"
            className="md:w-[65rem] md:h-[30rem] h-[25rem]"
            alt="about me"
          />
        </div>

        <div className="lg:hidden xl:hidden 2xl:hidden flex flex-col md:flex-row gap-10 relative mt-64">
          <img src="/AboutMee.png" className="w-[400px]" alt="about me" />

          <p className=" text-base font-normal text-gray-500 dark:text-gray-200 max-w-sm">
            <span className="lg:w-[150px] w-[100px] h-1 bg-[#00ADB5] my-4"></span>
            I’m a UI UX designer, with 3-4 years of experience collaborating
            with product managers, developers, and other stakeholders to create
            user interface designs that enhance the usability and accessibility
            of the online learning platform. I leverage my skills in design
            systems, Figma, and user interviews to create wireframes and mockups
            that illustrate user interface designs and communicate design
            decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
