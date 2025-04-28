// import { Reveal } from "../components/Reveal";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

const Support = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.5, // Trigger when 50% of the element is visible
  });
  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-gray-800 via-black to-gray-900 text-white py-12 px-6 lg:py-16 lg:px-20"
    >
      {/* Container */}
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}

        {inView && (
          <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight boldonse-regular">
            <Typewriter
              words={["Enlist in the Protocol"]}
              loop={1}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={5000}
              cursor={false}
            />
          </h2>
        )}

        <p className="text-gray-300 text-lg lg:text-xl mt-4">
          Early adopters gain priority access to beta features and shape Aiiko’s
          evolution. Survival in her realm requires ambition.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
          {/* Join Alpha Testing */}
          <a
            href="https://t.me/aiikoai_sol"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-lg font-semibold bg-purple-600 hover:bg-purple-700 rounded-lg shadow-lg transition duration-300"
          >
            Join Alpha Testing
          </a>
          {/* Twitter Link */}
          <a
            href="https://x.com/aiikoai?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-lg font-semibold text-purple-500 border border-purple-500 hover:bg-purple-500 hover:text-white rounded-lg shadow-lg transition duration-300"
          >
            Follow on Twitter
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="relative mt-12">
        {/* Glowing Circles */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-600 opacity-30 blur-xl rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600 opacity-30 blur-xl rounded-full"></div>
      </div>
    </section>
  );
};

export default Support;
