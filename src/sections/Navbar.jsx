import { useState } from "react";
import hamburger from "../assets/icon-hamburger.svg";
import iconClose from "../assets/icon-close.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="py-6 lg:py-10 max-w-[1200px] mx-auto">
      <nav className="hidden lg:flex justify-between items-center">
        <div>
          <p className="font-black text-[1.5rem]">AIIKO</p>
        </div>
        <ul className="flex gap-6 items-center text-black">
          <li>
            <a
              href="#about"
              className="text-white font-medium hover:text-Dark-Grayish-Blue hover:cursor-pointer"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="text-white font-medium hover:text-Dark-Grayish-Blue hover:cursor-pointer"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#works"
              className="text-white font-medium hover:text-Dark-Grayish-Blue hover:cursor-pointer"
            >
              How Aiiko Works
            </a>
          </li>
          <li>
            <a
              href="#roadmap"
              className="text-white font-medium hover:text-Dark-Grayish-Blue hover:cursor-pointer"
            >
              Roadmap
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-white font-medium hover:text-Dark-Grayish-Blue hover:cursor-pointer"
            >
              FAQ
            </a>
          </li>
        </ul>
        <a
          href="#"
          className="px-6 py-3 rounded-full bg-[#8a40d4cf] text-Very-Light-Gray box hover:opacity-40 hover:cursor-pointer"
        >
          Get Started
        </a>
      </nav>

      <nav className="lg:hidden flex items-center justify-between relative">
        <div className="flex lg:hidden gap-3 items-center justify-between px-6 py-4 w-full">
          <div>
            <p className="font-black text-[1.5rem]">AIIKO</p>
          </div>

          <img
            className="cursor-pointer"
            src={isOpen ? iconClose : hamburger}
            alt="This is the icon that opens the mobile navigation"
            width={isOpen ? 20 : 25}
            height={25}
            onClick={toggleNavigation}
          />
        </div>

        {isOpen && (
          <>
            {/* Dark wrapper background */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleNavigation}
            />
            <div className="absolute lg:hidden bg-white top-[5rem] z-50 w-[80%] mx-auto left-0 right-0 rounded-md">
              <ul className="flex flex-col gap-8 items-center barlow-semibold py-10">
                <li>
                  <a href="#about" className="text-black font-medium">
                    About
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-black font-medium">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#works" className="text-black font-medium">
                    How Aiiko Works
                  </a>
                </li>
                <li>
                  <a href="#roadmap" className="text-black font-medium">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-black font-medium">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
