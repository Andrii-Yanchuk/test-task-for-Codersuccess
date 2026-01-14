import { motion } from "motion/react";
import Service_1 from "../assets/services-1.jpg";
import Service_2 from "../assets/services-2.jpg";
import Service_3 from "../assets/services-3.jpg";
import Service_4 from "../assets/services-4.jpg";

const services = [
  { title: "Emergency Repairs", icon: Service_1 },
  { title: "Drain Cleaning", icon: Service_2 },
  { title: "Water Heaters", icon: Service_3 },
  { title: "Leak Detection", icon: Service_4 },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // затримка між елементами
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60, // старт знизу
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut" as const,
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Services({ controls }: { controls: any }) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate={controls}
      viewport={{ once: true, amount: 0.3 }}
      className="relative grid grid-cols-4 px-20 py-14 bg-slate-800 overflow-hidden"
    >
      {/* верхній бордер */}
      <span className="pointer-events-none absolute top-0 left-1/2 h-px w-4/5 -translate-x-1/2 bg-linear-to-r from-transparent via-white to-transparent" />

      {/* нижній бордер */}
      <span className="pointer-events-none absolute bottom-0 left-1/2 h-px w-4/5 -translate-x-1/2 bg-linear-to-r from-transparent via-white to-transparent" />

      {services.map((s, i) => (
        <motion.div
          key={s.title}
          variants={item}
          className="relative flex flex-col items-center px-8 text-center"
        >
          {i !== 0 && (
            <span className="pointer-events-none absolute left-0 top-1/2 h-11/10 w-px -translate-y-1/2 bg-linear-to-b from-transparent via-white/60 to-transparent" />
          )}

          <img
            className="mb-4 h-40 rounded-4xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            src={s.icon}
            alt={s.title}
          />
          <p className="font-bold text-2xl cursor-pointer">{s.title}</p>
        </motion.div>
      ))}
    </motion.section>
  );
}
