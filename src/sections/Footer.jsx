import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import nariLabs from "../assets/nari.jpg";

// import { Reveal } from "../components/Reveal";

const Footer = () => {
  return (
    <footer className="w-full px-6 pt-10 pb-4 mt-auto " id="contact">
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-y-6">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Aiiko
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <a
            href={"/"}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href={"/"}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <FaTelegramPlane size={20} />
          </a>
          <a
            href={"https://discord.gg/ZrPGS4vg"}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <FaDiscord size={20} />
          </a>
          <a
            href="https://github.com/nari-labs/dia"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <img src={nariLabs} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
