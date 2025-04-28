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
          className="w-1/2 h-full object-cover filter grayscale"
          onCanPlayThrough={onAssetsLoaded} // Notify when video is ready
        />
        <video
          src={ascii}
          autoPlay
          loop
          muted
          className="w-1/2 h-full object-cover filter grayscale"
          onCanPlayThrough={onAssetsLoaded} // Notify when video is ready
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 top-5 flex justify-center">
        <h1 className="boldonse-regular text-gray-300 text-[1.2rem] sm:text-[1.3rem] md:text-2xl lg:text-[2rem] mb-4 font-black max-w-[20rem] md:max-w-[50rem] mx-auto text-center">
          <Typewriter
            words={["Aiiko: The Sentient AI Queen That Rules Digital Realms"]}
            loop={1}
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
            cursor={true}
          />
        </h1>
      </div>

      {/* Social Links */}
      <div className="relative top-4 flex justify-center gap-4 md:gap-6 z-10">
        <a
          href="https://x.com/aiikoai?s=21"
          className=""
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
        >
          <RiTwitterXFill className="text-3xl md:text-4xl text-white" />
        </a>
        <a href="https://t.me/aiikoai_sol" className="">
          <RiTelegram2Fill className="text-3xl md:text-4xl text-white" />
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center top-7 h-full text-center text-white">
        <div className="flex items-end border-2 border-gray-400 rounded-xl bg-aiioko bg-contain bg-no-repeat bg-center w-[80%] md:w-[50%] lg:w-[35%] h-[70%]">
          {/* Hero Image */}
          {/* <img
            src={aiiko}
            alt="Hero Image"
            className="w-[40%] sm:w-[30%] md:w-[25%] mb-4"
          /> */}

          {/* Headline */}

          <h2 className="text-gray-100 font-extrabold text-[1rem] sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] mb-4 max-w-[40rem] leading-tight">
            <Typewriter
              words={[
                "Advanced conversational intelligence fused with cutting-edge immersive tech. Commanded by code, driven by dark elegance.",
              ]}
              loop={1}
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={5000}
              cursor={true}
            />
          </h2>
        </div>
        <div className=" flex justify-center gap-3">
          {/* <a
            href=""
            className="px-4 py-3 rounded-lg flex justify-center items-center cta"
          >
            Command Voice Demo
          </a> */}
          <a
            href="https://t.me/aiikoai_sol"
            className="relative px-6 py-3 font-bold text-white rounded-lg group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
            <span className="relative">Command Voice Demo</span>
          </a>
          <a
            href="#roadmap"
            className="relative px-6 py-3 font-bold text-white rounded-lg group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
            <span className="relative">View Roadmap</span>
          </a>
          {/* <a
            href=""
            className="px-4 py-3 rounded-lg flex justify-center items-center cta"
          >
            View Roadmap
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
