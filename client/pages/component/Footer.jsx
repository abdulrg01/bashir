import {
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { TbBrandDiscord } from "react-icons/tb";

export default function Footer() {
  return (
    <div className="w-full mt-48">
      <div className="h-[250px] bg-[#00ADB5] dark:bg-[#00ADB5] w-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center relative">
          <img src="/group20.png" className="w-[500px]" alt="group20" />

          <div className="style">
            <div className="flex flex-row gap-3 items-center">
              <a href="#" target="_blank">
                <span className="w-6 h-6 text-xl bg-slate-600 dark:bg-slate-900 text-slate-100 dark:text-slate-100 rounded-full inline-flex items-center justify-center hover:text-gray-100 cursor-pointer hover:translate-y-2 transition-all duration-300">
                  <TbBrandDiscord className="w-3 h-3" />
                </span>
              </a>
              <a href="#" target="_blank">
                <span className="w-6 h-6 text-xl bg-slate-600 dark:bg-slate-900 text-slate-100 dark:text-slate-100  rounded-full inline-flex items-center justify-center hover:text-gray-100 cursor-pointer hover:translate-y-2 transition-all duration-300">
                  <SlSocialInstagram className="w-3 h-3" />
                </span>
              </a>
              <a href="#" target="_blank">
                <span className="w-6 h-6 text-xl bg-slate-600 dark:bg-slate-900 text-slate-100 dark:text-slate-100  rounded-full inline-flex items-center justify-center hover:text-gray-100 cursor-pointer hover:translate-y-2 transition-all duration-300">
                  <SlSocialTwitter className="w-3 h-3" />
                </span>
              </a>
              <a href="#" target="_blank">
                <span className="w-6 h-6 text-xl bg-slate-600 dark:bg-slate-900 text-slate-100 dark:text-slate-100  rounded-full inline-flex items-center justify-center hover:text-gray-100 cursor-pointer hover:translate-y-2 transition-all duration-300">
                  <SlSocialLinkedin className="w-3 h-3" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-10 items-start mt-28 tracking-wider font-normal mb-10 dark:text-gray-300 text-[12px] md:p-0 p-4">
        <div>
          <h1>
            Send me a message or connect on <span className="dark:text-[#088B94] cursor-pointer">Linkedin</span> and let’s discuss how I can
            help you.
          </h1>
        </div>

        <div className="w-full flex flex-row items-center justify-between dark:text-gray-400">
          <p>© 2020-2024</p>
          <p>Handcrafted by me Bash</p>
        </div>
      </div>
    </div>
  );
}
