import { motion } from "framer-motion";
import aiiko from "../assets/Aiiko-real.webp";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  zoomIn,
} from "../utils/motion.ts"; // Assuming you export your variants from a file

const Works = () => {
  return (
    <section id="works" className="max-w-[1250px] mx-auto py-6 lg:py-8 pl-4">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 justify-between items-start gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left section */}
        <motion.div className="" variants={slideInFromLeft(0.2)}>
          <h2 className="text-Dark-Blue font-bold text-[2rem] mb-6 max-w-[25rem] mx-auto lg:mx-0 text-center lg:text-left">
            How Aiiko works
          </h2>
          <p className="text-Dark-Grayish-Blue mb-6 lg:mb-8 lg:max-w-[25rem] text-center lg:text-left">
            Start Your Journey with Kolwaii in{" "}
            <span className="font-bold">3 Simple Steps</span>
          </p>
          <motion.img
            src={aiiko}
            alt=""
            className="w-[80%] mx-auto lg:m-0 blur-lg"
            variants={zoomIn(0.3, 0.5)}
          />
        </motion.div>

        {/* Right section */}
        <div className="flex flex-col gap-10 pl-4 lg:pl-0">
          {/* Step 1 */}
          <motion.div
            className="hidden lg:flex gap-6 items-start"
            variants={slideInFromRight(0.4)}
          >
            <div className="bg-Purple-Accent rounded-3xl flex justify-center items-center px-5 py-1">
              <h3 className="text-Very-Pale-Red">01</h3>
            </div>
            <div>
              <h3 className="text-Dark-Blue font-bold mb-4 text-[1.5rem]">
                Choose Your Access Plan
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <span className="font-bold">Token-Based Access:</span> Upon
                  launch of the token Holders of{" "}
                  <span className="font-bold">50,000 tokens</span> will unlock
                  the feature of private one-on-one DMs inside Telegram 24/7.
                </li>
                <li>
                  <span className="font-bold">Subscription Plan:</span> For
                  those who missed out of the token launch and don’t hold any
                  tokens an alternative monthly subscription at{" "}
                  <span className="font-bold">40 USDC/month</span> is offered
                  for unlimited private text chats inside Telegram 24/7.
                </li>
                <li>
                  <span className="font-bold">Goddess Experience:</span> Pay 5
                  USDC/minute for premium voice notes and live conversations.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="hidden lg:flex gap-6 items-start"
            variants={slideInFromRight(0.6)}
          >
            <div className="bg-Purple-Accent rounded-3xl flex justify-center items-center px-5 py-1">
              <h3 className="text-Very-Pale-Red">02</h3>
            </div>
            <div>
              <h3 className="text-Dark-Blue font-bold mb-4 text-[1.5rem]">
                Verify Payment or Token Holdings
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  Submit proof of token holdings or USDC payment to our Telegram
                  admin to gain access.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="hidden lg:flex gap-6 items-start"
            variants={slideInFromRight(0.8)}
          >
            <div className="bg-Purple-Accent rounded-3xl flex justify-center items-center px-5 py-1">
              <h3 className="text-Very-Pale-Red">03</h3>
            </div>
            <div>
              <h3 className="text-Dark-Blue font-bold mb-4 text-[1.5rem]">
                Unlock your purchase
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  Gain private access to Kolwaii for personalized chats, voice
                  notes, and soon-to-come AR/VR immersive dates.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="hidden lg:block -rotate-45 absolute -z-10 md:right-[80%] -bottom-[80%] w-full h-[70%] bg-Bright-Red opacity-10 rounded-r-full"
        variants={slideInFromTop}
      />
    </section>
  );
};

export default Works;
