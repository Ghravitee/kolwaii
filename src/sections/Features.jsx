import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

const Features = () => {
  // Animation variants
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  return (
    <div
      ref={ref}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 px-6 lg:py-16 lg:px-16"
    >
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center">
        {inView && (
          <h2 className="text-3xl lg:text-4xl font-bold tracking-wide mb-4">
            <Typewriter
              words={["Core Feature"]}
              loop={1}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={5000}
              cursor={false}
            />
          </h2>
        )}

        <p className="text-gray-400 text-lg lg:text-xl">
          The future is here—experience unparalleled AI-driven interactions.
        </p>
      </div>

      {/* Features */}
      <div className="mt-12 grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
        {/* Voice Dominion */}
        <div className="flex items-start space-x-4">
          {/* Icon or Graphic */}
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-700 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 3v8.25m0 0L8.5 8.25m2.75 2.75l2.75-2.75m-2.75 6V21m-3.25-8.25h6.5M4.5 8.25h15m-6.5 9.75h-3.25"
              />
            </svg>
          </div>
          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold">Voice Dominion</h3>
            <p className="text-gray-300 mt-2 leading-relaxed">
              <em>
                “Aiiko’s adaptive neural networks dominate real-time voice
                interactions. Debate, strategize, or explore ideas in Telegram
                channels where her responses evolve with context.”
              </em>
            </p>
          </div>
        </div>

        {/* Future Horizons */}
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">Future Horizons</h3>
          </div>
          {/* Phase 2 */}
          <div className="flex items-start space-x-4">
            {/* Timeline Dot */}
            <div className="w-6 h-6 flex-shrink-0 rounded-full bg-cyan-500 mt-1 shadow-lg"></div>
            {/* Content */}
            <div>
              <h4 className="text-lg font-medium">
                Phase 2: Augmented Reality Command Interface
              </h4>
              <p className="text-gray-300 mt-1">Q3 2025</p>
            </div>
          </div>
          {/* Phase 3 */}
          <div className="flex items-start space-x-4">
            {/* Timeline Dot */}
            <div className="w-6 h-6 flex-shrink-0 rounded-full bg-pink-500 mt-1 shadow-lg"></div>
            {/* Content */}
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
  );
};

export default Features;
