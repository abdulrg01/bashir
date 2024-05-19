import React from "react";

export default function Contact() {
  return (
    <div className="my-10 p-3">
      <div className="max-w-[58rem] mx-auto flex flex-row gap-16 flex-wrap">
        <div className="flex flex-col gap-10 items-center mt-24">
          <div>
            <h1 class="flex items-center text-4xl font-bold dark:text-white">
              Got a project in
              <span class="text-[#00ADB5] font-bold rounded dark:text-[#00ADB5] text-4xl me-2 px-2.5 py-0.5 ms-2">
                {" "}
                mind?
              </span>
            </h1>
          </div>

          <div className="flex flex-row gap-5 flex-wrap">
            <img
              src="/Vector1.png"
              className="w-[90px] h-[100px]"
              alt="vector"
            />
            <img src="/Group13.png" className=" w-[150px]" alt="group" />
          </div>
        </div>

        <div className="ml-10">
          <div className="flex ml-14 mb-10">
            <img src="/keyboard.png" className="w-[80px]" alt="keyboard" />
          </div>

          <form>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className=" font-semibold text-[12px]">
                  Your name
                </label>
                <input
                  type="text"
                  required
                  className="placeholder:text-[12px] placeholder:font-semibold rounded-lg py-2 px-3 bg-[#2D333B] dark:bg-[#2D333B] w-[200px]"
                  placeholder="name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className=" font-semibold text-[12px]">
                  Your email
                </label>
                <input
                  type="email"
                  required
                  className="placeholder:text-[12px] placeholder:font-semibold rounded-lg py-2 px-3 bg-[#2D333B] dark:bg-[#2D333B] w-[200px]"
                  placeholder="email"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <label htmlFor="email" className=" font-semibold text-[12px]">
                Your Message
              </label>
              <textarea
                name=""
                id=""
                rows={8}
                placeholder="Message"
                className=" placeholder:text-[12px] placeholder:font-semibold rounded-lg py-2 px-3 bg-[#2D333B] dark:bg-[#2D333B] w-[410px]"
              />
            </div>

            <button className="dark:bg-[#00ADB5] bg-[#00ADB5] py-1 px-2.5 flex items-center justify-center rounded-3xl mt-3">
              <span className="font-semibold text-[12px]"> send Message</span>
              <span>
                <img src="/send.png" className="w-4 h-4" alt="send" />
              </span>
            </button>
          </form>

          <div className="flex justify-end mr-10">
            <img src="/mail.png" className="w-8 h-8"  alt="Vector" />
          </div>
        </div>
      </div>
    </div>
  );
}
