// import { motion } from "framer-motion";

// const Statement = () => {
//   return (
//     <section className="py-12 px-6 lg:py-16 lg:px-16">
//       <div className="lg:text-center text-left">
//         <motion.h1
//           initial={{ opacity: 0, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeIn" }}
//           viewport={{ once: true }}
//           className="text-2xl lg:text-4xl font-bold tracking-wide mb-4 boldonse-regular"
//         >
//           AIIKO is not just another token — she’s a new weapon in crypto.
//         </motion.h1>

//         <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
//           At $100K market cap, wallets holding 0.25%+ of $AIIKO will be snapped
//           for lifetime access to Aiiko’s Caller Bot. At $1M+ market cap, access
//           becomes gated — holders will need 0.25% $AIIKO to enter. But this
//           isn’t just about early calls. Aiiko tracks insider wallets in
//           real-time — even those using permaswaps and cloaking. Using advanced
//           breadcrumb tracing and Metasleuth APIs, Aiiko follows insider
//           movements before they pump or dump — giving holders the ability to
//           move with whales, not behind them. For the first time, normal holders
//           will operate with insider timing — not leftovers. More $AIIKO = deeper
//           access, enhanced wallet tracking, and future AI unlocks.
//         </p>

//         <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
//           And Aiiko doesn’t just call — she will live on Telegram as your AI
//           crypto companion, ready to chat, drop intel, and evolve with the
//           community.
//         </p>

//         <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
//           Beware of copycats! The real cyberqueen is coming.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Statement;

import { motion } from "framer-motion";

const Statement = () => {
  return (
    <section className="py-16 px-6 lg:py-20 lg:px-24 bg-black">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl lg:text-3xl font-bold tracking-tight text-white mb-8 leading-normal boldonse-regular"
        >
          AIIKO is not just another token — she’s a new weapon in crypto.
        </motion.h1>

        <div className="space-y-8 text-gray-300 text-lg md:text-xl leading-relaxed">
          <p>
            At $100K market cap, wallets holding 0.25%+ of $AIIKO will be
            snapped for lifetime access to Aiiko’s Caller Bot. At $1M+ market
            cap, access becomes gated — holders will need 0.25% $AIIKO to enter.
          </p>

          <p>
            But this isn’t just about early calls. Aiiko tracks insider wallets
            in real-time — even those using permaswaps and cloaking. Using
            advanced breadcrumb tracing and Metasleuth APIs, Aiiko follows
            insider movements before they pump or dump — giving holders the
            ability to move with whales, not behind them.
          </p>

          <p>
            For the first time, normal holders will operate with insider timing
            — not leftovers. More $AIIKO = deeper access, enhanced wallet
            tracking, and future AI unlocks.
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold text-white mt-12"
          >
            Meet Aiiko — your crypto AI companion.
          </motion.h2>

          <p>
            Aiiko doesn’t just call — she will live on Telegram as your AI
            crypto companion, ready to chat, drop intel, and evolve with the
            community.
          </p>

          <p className="text-pink-400 font-semibold">
            Beware of copycats! The real cyberqueen is coming!.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statement;
