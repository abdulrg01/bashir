import React from "react";
import ExperienceCard from "./ExperienceCard";

export default function About() {
  return (
    <div className="w-full relative">
      <div className="relative flex items-center justify-center -bottom-4 z-[70]">
        <h1 className="style text-xl font-extrabold dark:text-white">
          What I Do
        </h1>
        <div className="flex items-center justify-center">
          <img className="w-[250px] h-[40px]" src="/do.png" alt="do" />
        </div>
      </div>

      <div className="!bg-[#1D222A] relative z-50">
        <div className="flex items-center justify-center flex-wrap py-24 w-full">
          <ExperienceCard img="/Group1.png" title="Product Design" />
          <ExperienceCard img="/group2.png" title="UI/UX Design" />
          <ExperienceCard img="/group3.png" title="Icon Design" />
          <ExperienceCard img="/UX.png" title="Logo Design" />
        </div>
      </div>

      <div className="relative flex items-center justify-center -top-6 z-[70]">
        <h1 className="style text-xl font-extrabold dark:text-white">
          About Me
        </h1>
        <div className="flex items-center justify-center">
          <img className="w-[250px] h-[40px]" src="/me.png" alt="do" />
        </div>
      </div>

      <div className="absolute md:top-36 top-[50rem] md:mt-0 mt-52 z-50 xl:top-36 lg:top-36 sm:top-36">
        <img
          src="group5.png"
          className="md:w-[25rem] md:h-[50rem] xl:w-[25rem] xl:h-[50rem] lg:w-[25rem] lg:h-[50rem] w-[8rem] h-[18rem]"
          alt="group"
        />
      </div>

      <div className="flex items-center justify-center w-full relative z-[70] md:mt-0 mt-48">
        <img
          src="/Aboutme.png"
          className="md:w-[65rem] md:h-[30rem] h-[25rem]"
          alt="about me"
        />
      </div>
    </div>
  );
}
