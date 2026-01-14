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
  return (
    <header className="relative flex items-center justify-between px-10 py-4 bg-slate-900">
      <a href="#" className="flex flex-row items-center text-xl font-bold">
        <img
          src={Logo_Mob}
          alt="Logo_Mobile"
          className="flex md:hidden w-8 h-8 mr-2"
        />
        <img
          src={Logo_Desk}
          alt="Logo_Desktop"
          className="hidden md:flex w-26 h-20 mr-1"
        />
        <p>
          PLUMBING <span className="text-blue-400">SERVICES</span>
        </p>
      </a>

      <nav className="flex gap-6 text-lg">
        {LINKS.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="
        relative
        after:absolute after:left-0 after:-bottom-1
        after:h-0.5 after:w-full
        after:origin-left after:scale-x-0
        after:bg-white
        after:transition-transform after:duration-300 after:ease-out
        hover:after:scale-x-100
      "
          >
            {link.title}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <div className="flex items-center bg-blue-300 p-2 rounded-full w-12 h-12 justify-center">
          <img src={Phone_icon} alt="Phone_icon" className="h-8 w-6" />
        </div>
        <div>
          <p className="text-sm text-gray-300">Call us now:</p>
          <a
            href="tel:+12345678901"
            className="text-lg font-semibold text-white"
          >
            +1 (234) 567-8901
          </a>
        </div>
      </div>

      <button
        className="
    relative overflow-hidden
    bg-orange-500 px-5 py-2 rounded-md
    transition-all duration-300
    hover:shadow-[0_0_20px_rgba(249,115,22,0.7)]
  "
      >
        <span className="relative z-10">Get a Quote</span>

        <span
          className="
      pointer-events-none absolute inset-0
      bg-linear-to-r from-orange-400 to-orange-600
      opacity-0 transition-opacity duration-300
      hover:opacity-100
    "
        />
      </button>
      <span className="pointer-events-none absolute bottom-0 left-1/2 h-px w-4/5 -translate-x-1/2 bg-linear-to-r from-transparent via-white to-transparent" />
    </header>
  );
}
