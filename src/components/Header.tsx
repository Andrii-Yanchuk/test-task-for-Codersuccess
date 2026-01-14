import { useState } from "react";
import Logo_Desk from "../assets/logo-desk.png";
import Logo_Mob from "../assets/logo-mob.png";
import Phone_icon from "../assets/phone.png";

const LINKS = [
  { title: "Home", href: "#" },
  { title: "About", href: "#" },
  { title: "Services", href: "#" },
  { title: "Pricing", href: "#" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-6 py-4 md:px-10 bg-slate-900 text-white">
      {/* ЛОГОТИП */}
      <a
        href="#"
        className="flex flex-row items-center text-lg md:text-xl font-bold z-50"
      >
        <img
          src={Logo_Mob}
          alt="Logo"
          className="flex md:hidden w-8 h-8 mr-2"
        />
        <img
          src={Logo_Desk}
          alt="Logo"
          className="hidden md:flex w-26 h-20 mr-1"
        />
        <p className="leading-tight">
          PLUMBING <span className="text-blue-400">SERVICES</span>
        </p>
      </a>

      {/* ДЕСКТОПНА НАВІГАЦІЯ (ховається на мобільних) */}
      <nav className="hidden lg:flex gap-6 text-lg">
        {LINKS.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
          >
            {link.title}
          </a>
        ))}
      </nav>

      {/* КОНТАКТИ ТА КНОПКА */}
      <div className="flex items-center gap-4">
        {/* Телефон: текст ховаємо на мобільних, іконку залишаємо */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+12345678901"
            className="flex items-center bg-blue-500 p-2.5 rounded-full hover:bg-blue-400 transition-colors"
          >
            <img
              src={Phone_icon}
              alt="Call"
              className="h-5 w-5 md:h-6 md:w-6"
            />
          </a>
          <div className="hidden sm:block">
            <p className="text-xs text-gray-400">Call us now:</p>
            <a
              href="tel:+12345678901"
              className="inline-block text-base font-semibold transition-all hover:-translate-y-0.5"
            >
              +1 (234) 567-8901
            </a>
          </div>
        </div>

        {/* Кнопка: ховаємо на малих екранах */}
        <button className="hidden md:block relative overflow-hidden bg-orange-500 px-5 py-2 rounded-md hover:shadow-[0_0_20px_rgba(249,115,22,0.7)] transition-all">
          <span className="relative z-10">Get a Quote</span>
        </button>

        {/* БУРГЕР-МЕНЮ (Тільки для мобільних) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 z-50 focus:outline-none cursor-pointer"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* МОБІЛЬНЕ МЕНЮ (Overlay) */}
      <div
        className={`
        fixed inset-0 bg-slate-900 z-40 flex flex-col items-center justify-center gap-8 text-2xl transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        lg:hidden
      `}
      >
        {LINKS.map((link) => (
          <a key={link.title} href={link.href} onClick={() => setIsOpen(false)}>
            {link.title}
          </a>
        ))}
        <button className="bg-orange-500 px-8 py-3 rounded-md">
          Get a Quote
        </button>
      </div>

      <span className="pointer-events-none absolute bottom-0 left-1/2 h-px w-4/5 -translate-x-1/2 bg-linear-to-r from-transparent via-white to-transparent opacity-20" />
    </header>
  );
}
