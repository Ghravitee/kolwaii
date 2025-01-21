import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  slideInFromTop2,
  fadeIn,
} from "../utils/motion"; // Adjust the import path as needed

const Roadmap = () => {
  return (
    <section id="roadmap">
      <motion.section
        variants={fadeIn("up", "tween", 0.2, 0.8)}
        initial="hidden"
        animate="show"
      >
        <div className=" text-white py-8">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <motion.div
              variants={slideInFromLeft(0.2)}
              initial="hidden"
              animate="visible"
              className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8"
            >
              <p className="text-[1.3rem] font-bold text-[#8a40d4cf] uppercase tracking-loose">
                Roadmap
              </p>
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                Long-Term Vision (Year 2 and Beyond)
              </p>
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
                      <p className="mb-3 text-base text-[#8a40d4cf]">
                        Continuous Innovation
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        AI Evolution
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 mb-3">
                        <span className="font-bold">Aiiko</span> will evolve
                        continuously, integrating advancements in natural
                        language processing, emotional intelligence, and
                        personalized learning to provide users with an
                        ever-improving experience.
                      </p>

                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Feature Refinement
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Regular updates and user-driven refinements will enhance
                        <span className="font-bold">Aiiko</span> features,
                        ensuring an engaging and adaptive platform.
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
                      <p className="mb-3 text-base text-[#8a40d4cf]">
                        Strategic Partnerships
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Brand Collaborations
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 mb-3">
                        Exclusive partnerships with brands in fashion,
                        entertainment, and travel will bring in-app rewards,
                        unique user experiences, and cross-promotional
                        opportunities.
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Influencer Marketing
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 mb-3">
                        Collaborations with influencers will expand Aiiko’s
                        reach and create organic buzz, engaging new and diverse
                        audiences.
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Technology Integrations
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Future integrations with platforms like AR/VR systems
                        and other emerging technologies will enrich the user
                        experience.
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
                        Global Expansion
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Multilingual Support
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 mb-3">
                        Aiiko will expand its capabilities to serve a global
                        audience, offering multilingual chat options and
                        seamless international payment processing.
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Cultural Adaptation
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Features and interactions will be tailored to resonate
                        with diverse cultural preferences across different
                        regions.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
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
                  </motion.div>
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
