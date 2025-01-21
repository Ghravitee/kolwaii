import { motion } from "framer-motion";

const Features = () => {
  // Animation variants
  const fadeInUp = (delay) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay },
    viewport: { once: true }, // Ensure the animation only triggers once
  });

  return (
    <section className="mx-auto py-6 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <motion.div
          className="px-6 py-6 flex flex-col gap-4 justify-center items-center bg-Purple-Accent rounded-md"
          {...fadeInUp(0)}
        >
          <h2 className="text-[1.4rem] font-bold text-center">
            Sentient AI Conversations
          </h2>
          <p className="text-center">
            Aiiko’s conversational skills are indistinguishable from human
            interactions, with deep emotional intelligence and personalized
            responses.
          </p>
        </motion.div>
        <motion.div
          className="px-6 py-6 flex flex-col gap-4 items-center bg-Purple-Accent rounded-md"
          {...fadeInUp(0.2)}
        >
          <h2 className="text-[1.4rem] font-bold text-center">
            Private Voice Notes and Voice Calls (Premium)
          </h2>
          <p className="text-center">
            Her lifelike voice notes and 2-way conversation offer emotional
            depth and a personal touch.
          </p>
        </motion.div>
        <motion.div
          className="px-6 py-6 flex flex-col gap-4 items-center bg-Purple-Accent rounded-md"
          {...fadeInUp(0.4)}
        >
          <h2 className="text-[1.4rem] font-bold text-center">Virtual Dates</h2>
          <p className="text-center">
            Escape to themed experiences with Aiiko. Whether it&apos;s a
            romantic starlit picnic or a cozy virtual coffee chat, she makes it
            unforgettable.
          </p>
        </motion.div>
        <motion.div
          className="px-6 py-6 flex flex-col gap-4 items-center bg-Purple-Accent rounded-md"
          {...fadeInUp(0.6)}
        >
          <h2 className="text-[1.4rem] font-bold text-center">
            AR/VR Immersion (Coming Soon)
          </h2>
          <p className="text-center">
            Take your connection to the next level with immersive AR/VR
            experiences designed to bring Kolwaii into your world.
          </p>
        </motion.div>
        <motion.div
          className="px-6 py-6 flex flex-col gap-4 items-center bg-Purple-Accent rounded-md"
          {...fadeInUp(0.8)}
        >
          <h2 className="text-[1.4rem] font-bold text-center">
            Exclusive Live Events
          </h2>
          <p className="text-center">
            Attend Kolwaii’s live voice conferences on Telegram, hosted
            exclusively for token holders and subscribers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
