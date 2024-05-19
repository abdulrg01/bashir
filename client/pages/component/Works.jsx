import React from "react";

export default function Works() {
  return (
    <div className="my-16 dark:bg-[#1D222A] bg-[#1D222A]">
      <div className="">
        <div className="relative -top-5">
          <h1 className="absolute md:right-[25rem] right-52 tracking-wider -translate-x-[50] -translate-y-[50] bottom-1 text-xl font-extrabold dark:text-white">
            Recent Works
          </h1>
          <div className="flex items-center justify-center">
            <img className="w-[250px] h-[40px]" src="/works.png" alt="works" />
          </div>
        </div>

        {/* cards */}
        <div className="md:h-[20rem] max-w-[58rem] mx-auto custom-scrollbar overflow-y-scroll mt-5">
          <div className="gridD">
            <img
              src="/frame.png"
              alt="works"
              className="w-52 h-[140px] bg-[#2A3038] dark:bg-[#2A3038] rounded-xl p-6"
            />
            <img
              src="/group10.png"
              alt="works"
              className="w-52 h-[140px] bg-[#2A3038] dark:bg-[#2A3038] rounded-xl p-6"
            />
            <img
              src="/group11.png"
              alt="works"
              className="w-52 h-[140px] bg-[#2A3038] dark:bg-[#2A3038] rounded-xl p-6"
            />
            <img
              src="/frame.png"
              alt="works"
              className="w-52 h-[140px] bg-[#2A3038] dark:bg-[#2A3038] rounded-xl p-6"
            />
            <img
              src="/group10.png"
              alt="works"
              className="w-52 h-[140px] bg-[#2A3038] dark:bg-[#2A3038] rounded-xl p-6"
            />
            <img
              src="/group11.png"
              alt="works"
              className="w-52 h-[140px] bg-[#2A3038] dark:bg-[#2A3038] rounded-xl p-6"
            />
            <img
              src="/frame.png"
              alt="works"
              className="w-52 h-[140px] bg-[#2A3038] dark:bg-[#2A3038] rounded-xl p-6"
            />
            <img
              src="/group10.png"
              alt="works"
              className="w-52 h-[140px] bg-[#2A3038] dark:bg-[#2A3038] rounded-xl p-6"
            />
            <img
              src="/group11.png"
              alt="works"
              className="w-52 h-[140px] bg-[#2A3038] dark:bg-[#2A3038] rounded-xl p-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
