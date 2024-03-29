import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import ProfileCard from "./ProfileCard";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const themeHandler = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  return (
    <>
      <ProfileCard />
      <h3 className="my-4 text-3xl font-medium tracking-wider pt-14 font-kaushan">
        <span className="text-green">Artur </span>
        Zub
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-300 rounded-full dark:bg-dark-300">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-300 rounded-full dark:bg-dark-300"
        href="/public/artur_zub_cv.pdf"
        download="artur_zub_cv"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      <div className="flex justify-around w-9/12 my-5 text-green-500 jmx-auto md:w-full">
        <a
          href="https://github.com/lazarevartur"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/arturzub/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/artur_zub_8888/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      <div className="py-4 my-5 -mx-4 bg-gray-200 dark:bg-dark-200">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="w-6 h-6" />
          <span>Israel, Netanya</span>
        </div>
        <p className="my-2">viart.pro@gmail.com</p>
        <p className="my-2">0535408465</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full outline-none bg-gradient-to-r from-green to-blue-400"
        onClick={() => window.open("mailto:viart.pro@gmail.com")}
      >
        Send Email
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full outline-none bg-gradient-to-r from-green to-blue-400"
        onClick={themeHandler}
      >
        Toggle theme
      </button>
    </>
  );
};

export default Sidebar;
