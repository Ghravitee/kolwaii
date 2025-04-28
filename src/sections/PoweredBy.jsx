import { motion } from "framer-motion";
import breadcrumbs from "../assets/breadcrumbs.svg";
import metasleuth from "../assets/metasleuth.png";

// Example platforms
const platforms = [
  {
    name: "Breadcrumbs",
    icon: breadcrumbs,
    link: "https://breadcrumbs.app",
  },
  {
    name: "Metasleuth",
    icon: metasleuth,
    link: "https://metasleuth.io",
  },
];

const PoweredBy = () => {
  return (
    <section className="py-8 px-6">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Powered by
        </h3>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {platforms.map((platform, idx) => (
            <motion.a
              key={idx}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex flex-col items-center gap-4 group"
            >
              {/* Glowing ring */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                <motion.div
                  className=""
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <img
                  src={platform.icon}
                  alt={platform.name}
                  width={300}
                  height={300}
                  className=" relative z-10"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PoweredBy;
