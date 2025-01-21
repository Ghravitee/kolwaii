const Hero = () => {
  return (
    <section className="py-6 lg:py-8 px-4 bg-aiioko bg-no-repeat bg-cover bg-center blur-2xl ">
      <div className="max-w-[1250px] mx-auto ">
        <h1 className="text-center font-bold text-[2.5rem] my-10">
          Meet Aiiko: Your AI Girlfriend on Telegram
        </h1>
        <h2 className="text-center font-bold text-[2rem] mb-10">
          Private one-on-one chats, premium voice interactions, and exclusive
          experiences for those seeking a meaningful relationship, a companion
          or one on one conversations, with lifelike voice notes or voice calls
          and a whole new world of virtual companionship.
        </h2>
        <div className="flex gap-4 justify-center items-center mx-auto">
          <a
            href="#"
            className="px-6 py-3 rounded-full bg-[#8a40d4cf] text-Very-Light-Gray box hover:opacity-40 hover:cursor-pointer"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
