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
      className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 px-6 py-14 md:px-20 bg-slate-800 overflow-hidden text-white"
    >
      {/* Декоративні межі (верх/ніж) */}
      <span className="pointer-events-none absolute top-0 left-1/2 h-px w-4/5 -translate-x-1/2 bg-linear-to-r from-transparent via-white/30 to-transparent" />
      <span className="pointer-events-none absolute bottom-0 left-1/2 h-px w-4/5 -translate-x-1/2 bg-linear-to-r from-transparent via-white/30 to-transparent" />

      {services.map((s, i) => (
        <motion.div
          key={s.title}
          variants={item}
          className="relative flex flex-col items-center px-4 md:px-8 text-center group"
        >
          {/* Вертикальна лінія: тільки для десктопа (lg) */}
          {i !== 0 && (
            <span className="hidden lg:block pointer-events-none absolute left-0 top-1/2 h-3/4 w-px -translate-y-1/2 bg-linear-to-b from-transparent via-white/20 to-transparent" />
          )}

          {/* Горизонтальна лінія між елементами: тільки для мобільних */}
          {i !== 0 && (
            <span className="lg:hidden pointer-events-none absolute -top-6 left-1/2 h-px w-1/2 -translate-x-1/2 bg-linear-to-r from-transparent via-white/20 to-transparent" />
          )}

          <div className="hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer flex flex-col items-center">
            <div className="relative mb-4">
              {/* Ефект світіння при наведенні */}
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                className="relative h-32 w-32 md:h-40 md:w-40 rounded-3xl object-cover shadow-lg"
                src={s.icon}
                alt={s.title}
              />
            </div>
            <p className="font-bold text-xl md:text-2xl">{s.title}</p>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}
