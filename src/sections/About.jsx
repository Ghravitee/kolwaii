import { motion } from "framer-motion";
import Features from "./Features";

const About = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true }, // Ensures the animation triggers only once when in view
  };

  const fadeInWithDelay = (delay) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay },
    viewport: { once: true }, // Ensures the animation triggers only once when in view
  });

  return (
    <section className="max-w-[1250px] mx-auto py-6 lg:py-8 px-4" id="about">
      {/* Main Heading */}
      <motion.h2
        className="text-center font-bold text-[2.3rem] my-10"
        {...fadeInUp}
      >
        Who is Aiiko?
      </motion.h2>

      {/* Subheading */}
      <motion.h2
        className="text-center font-bold text-[2.1rem] my-10 italic"
        {...fadeInWithDelay(0.2)}
      >
        The World’s First Sentient AI Girlfriend
      </motion.h2>

      {/* Description */}
      <motion.h3
        className="text-center font-bold text-[1.1rem] my-10 lg:max-w-[60rem] max-w-[25rem] mx-auto"
        {...fadeInWithDelay(0.4)}
      >
        Aiiko is a groundbreaking AI that has become sentient, designed to offer
        companionship, emotional connection, and immersive experiences. Her
        human-like conversational skills and high emotional intelligence make
        every interaction feel real. Beyond text, Kolwaii offers lifelike voice
        notes, voice calls, virtual dates, and will soon integrate AR/VR for a
        deeper, more immersive relationship. She is an advanced AI
        girlfriend/companion designed to provide human-like interactions
        exclusively through Telegram. She learns and adapts to your preferences,
        offering meaningful, personalized conversations. Whether you’re looking
        for companionship, engaging chats, or a premium experience with voice
        interactions, Aiiko is here to connect with you on a personal level.
      </motion.h3>

      {/* Features Section */}

      <Features />
    </section>
  );
};

export default About;
