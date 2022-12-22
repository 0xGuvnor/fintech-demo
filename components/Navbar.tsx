import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { AnimatePresence, motion, Variants } from "framer-motion";

const themeVariant: Variants = {
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", duration: 0.5 } },
  exit: { y: 50, opacity: 0, transition: { duration: 0.1 } },
  hover: { scale: 1.5 },
  tap: { scale: 30, y: 250, x: -250 },
};

const container: Variants = {
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", duration: 0.5 } },
  exit: { x: 50, opacity: 0, transition: { duration: 0.1 } },
};

const menuContainer: Variants = {
  hidden: { x: 50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 10,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
  exit: { x: 50, opacity: 0, transition: { type: "spring", duration: 0.2 } },
};

const menuItem: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.3 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.1 } },
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [menuToggle, setMenuToggle] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 flex items-center justify-center w-screen px-6 sm:px-16">
      <div className="w-full lg:max-w-7xl">
        <div className="flex items-center justify-between w-full py-6">
          <img src="/logo.svg" alt="Logo" className="w-32 h-8" />

          {/* Expanded menu items on desktop */}
          <ul className="items-center justify-end flex-1 hidden space-x-4 list-none sm:flex">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="text-sm text-white cursor-pointer hover:underline underline-offset-4 hover:opacity-75 hover:decoration-teal-400"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <AnimatePresence mode="wait" initial={false}>
              <motion.li
                key={theme === "light" ? "lightMode" : "darkMode"}
                variants={themeVariant}
                initial="hidden"
                animate="show"
                exit="exit"
                whileHover="hover"
                whileTap="tap"
                onClick={() =>
                  theme === "light" ? setTheme("dark") : setTheme("light")
                }
                className="cursor-pointer"
              >
                {theme === "light" ? "🌞" : "🌚"}
              </motion.li>
            </AnimatePresence>
          </ul>

          {/* Menu bar on mobile */}
          <div className="flex items-center justify-end flex-1 sm:hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={menuToggle ? "menuOpen" : "menuClose"}
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
                onClick={() => setMenuToggle((prev) => !prev)}
                className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer hover:bg-gray-600/50"
              >
                {menuToggle ? (
                  <div className="relative">
                    <img
                      src="/close.svg"
                      alt="Menu Icon"
                      className="object-contain w-7 h-7"
                    />

                    <motion.ul
                      key="menuContainer"
                      variants={menuContainer}
                      className="absolute list-none -right-5 flex flex-col p-2 mx-4 my-2 bg-gradient-to-b from-base-300/50 to-base-200/50 top-8 min-w-[140px] rounded-xl items-center justify-center space-y-1"
                    >
                      <motion.li
                        key={"themeToggle"}
                        onClick={() =>
                          theme === "light"
                            ? setTheme("dark")
                            : setTheme("light")
                        }
                        className="w-full py-1 text-center rounded hoverr:bg-teal-400/80"
                      >
                        {theme === "light" ? "🌞" : "🌚"}
                      </motion.li>
                      {navLinks.map((link) => (
                        <motion.li
                          key={link.id}
                          variants={menuItem}
                          className="w-full py-1 text-base text-center text-white rounded hover:bg-teal-400/80"
                        >
                          <a href={`#${link.id}`}> {link.title}</a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                ) : (
                  <img
                    src="/menu.svg"
                    alt="Menu Icon"
                    className="object-contain w-7 h-7"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
