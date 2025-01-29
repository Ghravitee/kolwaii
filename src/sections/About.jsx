import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";
import Features from "./Features";

const About = () => {
  // Set up the in-view hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  return (
    <section
      ref={ref} // Attach the Intersection Observer reference
      className="max-w-[1250px] mx-auto py-6 lg:py-8 px-4"
      id="about"
    >
      {/* Heading with Typewriter Effect */}
      <h1 className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
        {inView && ( // Render the Typewriter effect only when in view
          <Typewriter
            words={[" The Sovereign’s Tools"]}
            loop={1}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={5000}
            cursor={true}
          />
        )}
      </h1>

      <Features />
    </section>
  );
};

export default About;
