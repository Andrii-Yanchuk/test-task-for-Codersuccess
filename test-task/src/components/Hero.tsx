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
    <section className="flex flex-row justify-between px-20 py-5 bg-linear-to-r from-blue-950 to-blue-800">
      <div className="flex flex-col justify-center">
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate={textControls}
        >
          <motion.h1 variants={textItem} className="text-5xl font-bold mb-4">
            Reliable Plumbing Services
          </motion.h1>

          <motion.p variants={textItem} className="text-blue-200 mb-8">
            Your Trusted Local Plumber
          </motion.p>
        </motion.div>

        <div className="flex gap-4">
          <button
            className="
    relative overflow-hidden
    bg-blue-500 px-5 py-2 rounded-md
    cursor-pointer
    transition-all duration-300 ease-out
    hover:shadow-[0_0_24px_rgba(59,130,246,0.6)]
  "
          >
            <span className="relative z-10">Request Service</span>

            <span
              className="
      pointer-events-none absolute inset-0
      bg-linear-to-r from-blue-400 via-blue-500 to-blue-600
      opacity-0 transition-opacity duration-300 ease-out
      group-hover:opacity-100
    "
            />
          </button>
          <a
            href="tel:+12345678901"
            className="
    border border-white/60
    px-6 py-3 rounded
    cursor-pointer
    transition-all duration-200 ease-out
    hover:-translate-y-0.5 hover:shadow-md
  "
          >
            Call Now
          </a>
        </div>
      </div>

      <div className="flex justify-end items-center">
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="will-change-transform"
          animate={imageControls}
          variants={imageVariants}
        >
          <img src={Plumber} alt="Plumber" className="h-75 w-75" />
        </motion.div>
      </div>
    </section>
  );
}
