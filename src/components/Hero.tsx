import { motion } from "motion/react";
import Plumber from "../assets/plumb-man.png";

const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Hero({
  textControls,
  imageControls,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  textControls: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageControls: any;
}) {
  return (
    <section
      className="
      flex flex-col lg:flex-row justify-between 
      px-6 py-10 md:px-20 md:py-16 
      bg-linear-to-r from-blue-950 to-blue-800 
      overflow-hidden
    "
    >
      {/* ТЕКСТОВИЙ БЛОК */}
      <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate={textControls}
        >
          <motion.h1
            variants={textItem}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
          >
            Reliable Plumbing Services
          </motion.h1>

          <motion.p
            variants={textItem}
            className="text-blue-200 text-lg md:text-xl mb-8"
          >
            Your Trusted Local Plumber
          </motion.p>
        </motion.div>

        {/* КНОПКИ */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            className="
              relative overflow-hidden
              bg-blue-500 px-8 py-3 rounded-md
              text-white font-medium cursor-pointer
              transition-all duration-300 ease-out
              hover:shadow-[0_0_24px_rgba(59,130,246,0.6)]
            "
          >
            <span className="relative z-10">Request Service</span>
            <span className="absolute inset-0 bg-linear-to-r from-blue-400 to-blue-600 opacity-0 hover:opacity-100 transition-opacity" />
          </button>

          <a
            href="tel:+12345678901"
            className="
              border border-white/60 text-white
              px-8 py-3 rounded font-medium
              text-center transition-all duration-200 ease-out
              hover:bg-white/10 hover:-translate-y-0.5
            "
          >
            Call Now
          </a>
        </div>
      </div>

      {/* БЛОК З ЗОБРАЖЕННЯМ */}
      <div className="flex justify-center items-center order-1 lg:order-2 mb-10 lg:mb-0">
        <motion.div
          initial="hidden"
          animate={imageControls}
          variants={imageVariants}
          className="will-change-transform"
        >
          {/* Адаптивний розмір картинки: h-60 на мобільних, h-75/96 на десктопі */}
          <img
            src={Plumber}
            alt="Plumber"
            className="h-60 w-60 md:h-75 md:w-75 lg:h-96 lg:w-96 object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
