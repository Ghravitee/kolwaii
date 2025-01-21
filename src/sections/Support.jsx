import { Reveal } from "../components/Reveal";

const Support = () => {
  return (
    <section className="max-w-[1250px] mx-auto py-6 lg:py-8 px-4">
      <div className="flex flex-col items-center gap-4">
        <Reveal>
          <h2 className="text-[2.3rem] text-center font-bold text-white mb-4">
            We’re Here to Help.
          </h2>
        </Reveal>
        <Reveal>
          <p>
            Directly message our admin inside our Telegram group for assistance
            with payments or access.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Support;
