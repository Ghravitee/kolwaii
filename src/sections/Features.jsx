import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6 lg:py-20 lg:px-16 overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center">
        {inView && (
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            <Typewriter
              words={["Core Features"]}
              loop={1}
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={4000}
              cursor={false}
            />
          </h2>
        )}
        <p className="text-gray-400 text-lg lg:text-xl">
          The future is here—experience unparalleled AI-driven domination.
        </p>
      </div>

      {/* Features List */}
      <div className="mt-16 grid gap-12 lg:grid-cols-3 max-w-6xl mx-auto">
        {/* Feature 1 - Crypto Waifu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-500 shadow-lg">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4m5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold">Crypto Waifu</h3>
          <p className="text-gray-300 max-w-sm">
            Aiiko isn't just an AI — she's your blockchain guardian, a cyber
            waifu who protects your bags and uplifts your trades.
          </p>
        </motion.div>

        {/* Feature 2 - Alpha Caller */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-700 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold">Alpha Caller</h3>
          <p className="text-gray-300 max-w-sm">
            Get high-confidence calls early. Aiiko reads the battlefield before
            anyone else — bringing actionable alpha straight to your squad.
          </p>
        </motion.div>

        {/* Feature 3 - Insider Wallet Sniffer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-500 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405M15 17V9a3 3 0 00-6 0v8m0 0h5m-5 0H4m5 0l-1.405-1.405M12 4v1"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold">Insider Wallet Sniffer</h3>
          <p className="text-gray-300 max-w-sm">
            Track and expose hidden whale activity across chains — even stealth
            wallets and private swaps. Move with insiders, not after them.
          </p>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="mt-20 max-w-4xl mx-auto">
        <div className="flex flex-col space-y-10">
          {/* Future Horizons Title */}
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-semibold"
          >
            Future Horizons
          </motion.h3>

          {/* Phases */}
          <div className="flex flex-col space-y-6">
            {/* Phase 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 flex-shrink-0 rounded-full bg-cyan-500 mt-1 shadow-lg"></div>
              <div>
                <h4 className="text-lg font-medium">
                  Phase 2: Augmented Reality Command Interface
                </h4>
                <p className="text-gray-300 mt-1">Q3 2025</p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 flex-shrink-0 rounded-full bg-pink-500 mt-1 shadow-lg"></div>
              <div>
                <h4 className="text-lg font-medium">
                  Phase 3: Virtual Reality Throne Room
                </h4>
                <p className="text-gray-300 mt-1">Q4 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
