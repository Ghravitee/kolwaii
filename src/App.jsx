import About from "./sections/About";
import Access from "./sections/Access";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Roadmap from "./sections/Roadmap";
import Support from "./sections/Support";
import Works from "./sections/Works";

const App = () => {
  return (
    <div>
      <div className="bg-aiioko bg-no-repeat bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Access />
      <Works />
      <Roadmap />
      <FAQ />
      <Support />
      <Footer />
    </div>
  );
};

export default App;
