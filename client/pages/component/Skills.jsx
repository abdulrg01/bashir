import React from "react";

export default function Skills() {
  return (
    <div className="mt-20 p-3">
      <div className="relative -top-5">
        <h1 className="absolute md:right-[37.5rem] right-52 tracking-widest -translate-x-[50] -translate-y-[50] bottom-1 text-xl font-extrabold dark:text-white">
          Skills
        </h1>
        <div className="flex items-center justify-center">
          <img className="w-[130px] h-[40px]" src="/skills.png" alt="skills" />
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-10 my-7">
        <div className="flex flex-col gap-3">
          <p className=" font-semibold">Figma</p>
          <p className=" font-semibold">Adobe Illustrator</p>
          <p className=" font-semibold">Adobe Photoshop</p>
          <p className=" font-semibold">HTML</p>
          <p className=" font-semibold">CSS</p>
        </div>

        <div className="flex flex-col gap-6">
          <img src="/group6.png" className="w-[300px]" alt="group6" />
          <img src="/group7.png" className="w-[300px]" alt="group7" />
          <img src="/group8.png" className="w-[300px]" alt="group8" />
          <img src="/group9.png" className="w-[300px]" alt="group9" />
          <img src="/group9.png" className="w-[300px]" alt="group9" />
        </div>
      </div>
    </div>
  );
}
