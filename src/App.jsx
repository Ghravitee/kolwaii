import About from "./sections/About";
// import Access from "./sections/Access";
// import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Roadmap from "./sections/Roadmap";
import Support from "./sections/Support";
// import Works from "./sections/Works";
import { useEffect, useRef, useState } from "react";
import theme from "./assets/theme.mp3";
import Statement from "./sections/Statement";
import PoweredBy from "./sections/PoweredBy";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // State to track loading
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    // Attempt to autoplay the audio
    if (audioElement) {
      audioElement.muted = false; // Unmute the audio
      audioElement
        .play()
        .then(() => setIsPlaying(true)) // Audio successfully played
        .catch((err) => {
          console.error("Audio autoplay failed:", err);
        });
    }
  }, []); // Run once on component mount

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
      setIsPlaying(!isPlaying);
    }
  };

  // Simulate all assets loading, including the video
  const handleAssetsLoaded = () => {
    setIsLoaded(true); // Set loading to false when assets are ready
  };

  return (
    <div>
      {/* Loader */}
      {!isLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-[1000]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
          <p className="absolute top-3/4 text-lg">Loading...</p>
        </div>
      )}
      {/* Background music */}
      <audio autoPlay loop ref={audioRef} id="audio">
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
        {isPlaying ? "Mute" : "Unmute"}
      </button>
      {/* Sections */}
      <Hero onAssetsLoaded={handleAssetsLoaded} />
      <PoweredBy />
      <About />
      {/* <Access />
      <Works /> */}
      <Statement />
      <Roadmap />
      {/* <FAQ /> */}
      <Support />
      <Footer />
    </div>
  );
};

export default App;
