import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const textSlideInVariant = (direction) => ({
  hidden: {
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  },
});

const buttonHoverVariant = {
  hover: {
    scale: 1.1,
    opacity: 0.8,
    transition: { duration: 0.3 },
  },
};

const Hero = () => {
  return (
    <section className="py-6 lg:py-8 px-4 ">
      <div className="max-w-[1250px] mx-auto">
        <motion.h1
          className="text-center font-bold text-[2.5rem] my-10"
          variants={textSlideInVariant("left")}
          initial="hidden"
          animate="visible"
        >
          Meet Aiiko: Your AI Girlfriend on Telegram
        </motion.h1>
        <motion.h2
          className="text-center font-bold text-[2rem] mb-10"
          variants={textSlideInVariant("right")}
          initial="hidden"
          animate="visible"
        >
          Private one-on-one chats, premium voice interactions, and exclusive
          experiences for those seeking a meaningful relationship, a companion
          or one-on-one conversations, with lifelike voice notes or voice calls
          and a whole new world of virtual companionship.
        </motion.h2>
        <motion.div
          className="flex gap-4 justify-center items-center mx-auto"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="#"
            className="px-6 py-3 rounded-full bg-[#8a40d4cf] text-Very-Light-Gray box hover:opacity-40 hover:cursor-pointer"
            variants={buttonHoverVariant}
            whileHover="hover"
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
