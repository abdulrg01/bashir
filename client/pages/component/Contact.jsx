import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_w0n9o3a";
    const templateId = "template_vzyx1xc";
    const publicKey = "a2XcFjDERbJ6OrvlZ";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "bashondesign",
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response);
        setName("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div
      className="padding-container max-container mx-auto md:pt-5 overflow-hidden relative"
      id="Contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-5">
        <div className="flex md:items-start lg:items-start xl:items-start 2xl:items-start flex-col gap-10 mt-24 items-center">
          <h1 class="md:text-2xl lg:text-4xl xl:text-4xl text-4xl font-bold dark:text-white">
            Got a project in
            <span class="text-[#00ADB5] font-bold rounded dark:text-[#00ADB5] md:text-2xl lg:text-4xl xl:text-4xl text-4xl lg:me-2 lg:px-2.5 lg:py-0.5 ms-2 mt-1">
              <br /> mind?
            </span>
          </h1>

          <div className="flex flex-row gap-5 flex-wrap">
            <img
              src="/Vector1.png"
              className="w-[90px] h-[100px]"
              alt="vector"
            />
            <img src="/Group13.png" className=" w-[150px]" alt="group" />
          </div>
        </div>

        <div>
          <div className="flex ml-14 mb-10">
            <img src="/keyboard.png" className="w-[80px]" alt="keyboard" />
          </div>

          <form onSubmit={sendEmail}>
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div class="col-span-2 sm:col-span-1">
                <label
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="name"
                >
                  {" "}
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  class="block w-full rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-[#2D333B] dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Name"
                  required
                />
              </div>

              <div class="col-span-2 sm:col-span-1">
                <label
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="email"
                >
                  {" "}
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="block w-full rounded-lg bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-[#2D333B] dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className="w-full">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="message"
              >
                Your message
              </label>
              <textarea
                name="message"
                rows="8"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-[#2D333B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <button
              type="submit"
              value="Send"
              className="dark:bg-[#00ADB5] bg-[#00ADB5] py-1 px-2.5 flex items-center justify-center rounded-3xl mt-3"
            >
              <span className="font-semibold text-[12px] text-white">
                {" "}
                send Message
              </span>
              <span>
                <img src="/send.png" className="w-4 h-4" alt="send" />
              </span>
            </button>
          </form>

          <div className="flex justify-end mr-10">
            <img src="/mail.png" className="w-8 h-8" alt="Vector" />
          </div>
        </div>
      </div>
    </div>
  );
}
