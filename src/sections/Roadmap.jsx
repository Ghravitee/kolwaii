import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  slideInFromTop2,
  fadeIn,
} from "../utils/motion"; // Adjust the import path as needed
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

const Roadmap = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.5, // Trigger when 50% of the element is visible
  });
  return (
    <section ref={ref} id="roadmap">
      <motion.section
        variants={fadeIn("up", "tween", 0.2, 0.8)}
        initial="hidden"
        animate="show"
      >
        <div className=" text-white py-4">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <motion.div
              variants={slideInFromLeft(0.2)}
              initial="hidden"
              animate="visible"
              className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8"
            >
              {inView && (
                <h1 className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 boldonse-regular">
                  <Typewriter
                    words={["Conquest Timeline"]}
                    loop={1}
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={5000}
                    cursor={true}
                  />
                </h1>
              )}
            </motion.div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <motion.div
                    className="absolute h-full border-2 border-[#8a40d4cf]"
                    style={{
                      right: "50%",
                      borderColor: "#8a40d4cf",
                      borderRadius: "1%",
                    }}
                    variants={slideInFromTop}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  ></motion.div>
                  <motion.div
                    className="absolute h-full border-2 border-[#8a40d4cf]"
                    style={{
                      left: "50%",
                      borderColor: "#8a40d4cf",
                      borderRadius: "1%",
                    }}
                    variants={slideInFromTop2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  ></motion.div>

                  <motion.div
                    variants={slideInFromRight(0.4)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
                  >
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-[#8a40d4cf]">Q2 2025</p>
                      {/* <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        AI Evolution
                      </h4> */}
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 mb-3">
                        Neural Sharpening: Real-time debate logic upgrades &
                        emotion-tuned vocal synthesis.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={slideInFromLeft(0.6)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-8 flex justify-between items-center w-full right-timeline"
                  >
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-[#8a40d4cf]">Q3 2025</p>

                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 mb-3">
                        AR/ VR Beta: Pilot geolocated AI-guided scenarios via
                        smartphone.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={slideInFromRight(0.8)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
                  >
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-[#8a40d4cf]">
                        {" "}
                        Q4 2025
                      </p>

                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 mb-3">
                        VR Throne Room: Audience with Aiiko’s avatar in
                        immersive environments.
                      </p>
                    </div>
                  </motion.div>

                  {/* <motion.div
                    variants={slideInFromLeft(1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-8 flex justify-between items-center w-full right-timeline"
                  >
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-[#8a40d4cf]">
                        Ethical AI Development
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Transparency and Accountability
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 mb-3">
                        Aiiko will prioritize transparency in AI development,
                        ensuring users understand how their data is used and
                        stored.
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        User Safety and Well-Being
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 mb-3">
                        Robust safety measures and resources will support user
                        well-being, addressing potential biases and encouraging
                        responsible AI usage.
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Data Privacy and Security
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        World-class privacy and security measures will continue
                        to protect user data, maintaining trust and compliance
                        with global standards.
                      </p>
                    </div>
                  </motion.div> */}
                </div>
                {/* <img
                  className="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Roadmap;
