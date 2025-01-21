import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Collapse } from "react-collapse";
import { faq } from "../data";
import { Reveal } from "../components/Reveal";

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleOpen = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <section id="faq" className="bg-[hsla(270,87%,15%,1)]">
      <div className="py-6 lg:py-8 px-4 md:max-w-[40rem] mx-auto flex flex-col gap-2 ">
        <Reveal>
          <h1 className="text-center font-bold text-[2.1rem] my-10">
            Frequently Asked Questions (FAQ)
          </h1>
        </Reveal>
        <Reveal>
          <h1 className="text-center font-bold text-[1.7rem] mb-6">
            Your Questions, Answered.
          </h1>
        </Reveal>
        {faq.map((item, index) => (
          <div
            key={index}
            className="border border-slate-800 backdrop-blur-xl flex flex-col items-center justify-between bg-Dark-Purple p-2 rounded-lg"
          >
            <div
              onClick={() => toggleOpen(index)}
              className="flex justify-between items-center font-bold text-xl p-5 cursor-pointer w-full"
            >
              {item.title}
              <button>
                <MdKeyboardArrowDown
                  size={20}
                  className={`${
                    openIndexes[index] ? "rotate-180" : ""
                  } duration-500 ease-in-out mx-auto`}
                />
              </button>
            </div>
            <Collapse isOpened={openIndexes[index]}>
              <div className="p-5">{item.content}</div>
            </Collapse>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
