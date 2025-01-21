import { motion } from "framer-motion";
import Icon1 from "../components/Icon1";
import Icon2 from "../components/Icon2";
import Icon3 from "../components/Icon3";

const Access = () => {
  const cardVariants = {
    left: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 },
    },
  };

  const cards = [
    {
      title: "Free Tier",
      description: "Basic interactions in the public telegram group",
      animation: "left",
      svg: <Icon1 />,
    },
    {
      title: "Subscriber Access ($40 USDC/month)",
      description: "Unlimited private one-on-one text chats",
      animation: "right",
      svg: <Icon2 />,
    },
    {
      title: "Token Access (50,000 Tokens)",
      description:
        "Equivalent to subscriber benefits but unlocked via token holdings.",
      animation: "left",
      svg: <Icon3 />,
    },
    {
      title: "Goddess Experience ($5 USDC/minute)",
      description:
        "Highly personalized voice notes for a deeper, premium connection.",
      animation: "right",
      svg: <Icon3 />,
    },
    {
      title: "AR/VR Access (Future Update)",
      description: "Exclusive announcements on immersive AR/VR interactions.",
      animation: "left",
      svg: <Icon3 />,
    },
  ];

  return (
    <section id="pricing">
      <div className="py-24 relative">
        <div className="absolute lg:h-[80%] h-full w-full top-0 bg-[hsla(270,87%,15%,1)] -z-10"></div>
        <div className="max-w-[1250px] mx-auto py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-manrope text-[2.3rem] text-center font-bold text-white mb-4">
              Suitable pricing plans
            </h2>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="group relative flex flex-col mx-auto w-full max-w-sm bg-[#11042B] border border-[#534F63] rounded-2xl shadow-2xl transition-all duration-300  p-8 xl:p-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants[card.animation]}
                transition={{ duration: 0.5 }}
              >
                <div className="border-b border-solid border-gray-200 pb-9 mb-9">
                  <div className="w-16 h-16 rounded-full bg-indigo-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-indigo-600">
                    {card.svg}
                  </div>
                  <h3 className="font-manrope text-2xl font-bold my-7 text-center text-white">
                    {card.title}
                  </h3>
                </div>
                <ul className="mb-12 space-y-6 text-left text-lg text-gray-600 group-hover:text-gray-900">
                  <li className="flex items-center space-x-3.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    <span className="text-white">{card.description}</span>
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Access;
