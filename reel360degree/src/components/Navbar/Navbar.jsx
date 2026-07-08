import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../public/pic1.png"

const navItems = [
  { name: "Home", link: "#" },
  { name: "Services", link: "#services" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scroll
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className=" flex h-20 w-[100%] items-center justify-between px-6 lg:px-10">
        <img src={logo} alt="Logo" className="h-20 w-auto" />

        <ul className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="text-sm font-medium text-gray-300 transition hover:text-white"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button className="hidden rounded-full border border-white px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-black lg:block">
          Let's Talk
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-white lg:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="bg-black/95 backdrop-blur-xl lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 px-6 py-5 text-lg text-white"
              >
                {item.name}
              </a>
            ))}

            <div className="p-6">
              <button className="w-full rounded-full bg-white py-3 font-semibold text-black">
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}