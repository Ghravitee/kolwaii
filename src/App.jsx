import About from "./sections/About";
import Access from "./sections/Access";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Roadmap from "./sections/Roadmap";
import Support from "./sections/Support";
import Works from "./sections/Works";
import { useEffect, useRef, useState } from "react";
import theme from "./assets/theme.mp3";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null); // Create a reference for the audio element

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleUserInteraction = () => {
      if (audioElement) {
        audioElement.muted = false; // Unmute the audio
        audioElement
          .play()
          .then(() => setIsPlaying(true)) // Start audio and update state
          .catch((err) => {
            console.error("Audio play error:", err);
          });
      }

      // Remove event listeners after interaction
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };

    // Add event listeners for user interaction
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);

    return () => {
      // Clean up event listeners
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const toggleAudio = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play().catch((err) => {
          console.error("Error playing audio:", err);
        });
      }
      setIsPlaying(!isPlaying); // Toggle play/pause state
    }
  };

  return (
    <div>
      {/* Background music */}
      <audio autoPlay loop muted ref={audioRef} id="audio">
        <source src={theme} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Play/Pause Button */}
      <button
        onClick={toggleAudio}
        style={{
          margin: "10px",
          padding: "10px",
          fontSize: "16px",
          position: "fixed",
          top: "5px",
          right: "5px",
          zIndex: "100",
        }}
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>

      {/* Sections */}
      <Hero />
      {/* <About />
      <Access />
      <Works />
      <Roadmap />
      <FAQ />
      <Support />
      <Footer /> */}
    </div>
  );
};

export default App;
