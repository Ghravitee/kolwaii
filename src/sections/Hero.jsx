import ascii from "../assets/ascii-compressed-2.mp4";
import aiiko from "../assets/Aiiko-real.webp";
import { Typewriter } from "react-simple-typewriter";
import { RiTwitterXFill, RiTelegram2Fill } from "react-icons/ri";

const Hero = ({ onAssetsLoaded }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 flex h-screen w-full">
        <video
          src={ascii}
          autoPlay
          loop
          muted
          className="w-1/2 h-full object-cover"
          onCanPlayThrough={onAssetsLoaded} // Notify when video is ready
        />
        <video
          src={ascii}
          autoPlay
          loop
          muted
          className="w-1/2 h-full object-cover"
          onCanPlayThrough={onAssetsLoaded} // Notify when video is ready
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Social Links */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Hero Image */}
        <img
          src={aiiko}
          alt="Hero Image"
          className="w-[40%] sm:w-[30%] md:w-[25%] mb-4"
        />

        <div className=" flex justify-center gap-4 md:gap-6 z-10 mb-4">
          <a
            href="https://x.com/winnersonsolana"
            className=""
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
          >
            <RiTwitterXFill className="text-3xl md:text-4xl text-white" />
          </a>
          <a
            href="https://pump.fun/9UTKCZEsqJbCcTEQcB1trQ2jL6rbRjemGUz6z6b6pump"
            className=""
          >
            <RiTelegram2Fill className="text-3xl md:text-4xl text-white" />
          </a>
        </div>
        {/* Headline */}
        <h1 className="text-white text-sm sm:text-lg md:text-2xl lg:text-[2.5rem] mb-4 font-black">
          <Typewriter
            words={["Aiiko: Your Blackhat Cyberqueen"]}
            loop={1}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            cursor={false}
          />
        </h1>
        <h1 className="text-white text-sm sm:text-base md:text-lg lg:text-[2rem] mb-4 max-w-[40rem] leading-tight">
          <Typewriter
            words={[
              "Master the shadows, dominate the digital world, and unlock your potential with Aiiko.",
            ]}
            loop={1}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={5000}
            cursor={false}
          />
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl max-w-[40rem]">
          <Typewriter
            words={[
              "Your AI guide to the dark side—exploiting, hacking, and conquering, one byte at a time.",
            ]}
            loop={1}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={10000}
            cursor={false}
          />
        </p>
      </div>
    </div>
  );
};

export default Hero;
