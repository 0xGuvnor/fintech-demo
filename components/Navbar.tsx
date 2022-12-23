import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { AnimatePresence, motion } from "framer-motion";
import {
  navContainer,
  navMenuContainer,
  navMenuItem,
  navVariant,
  themeVariant,
} from "../utils/motion";
import Image from "next/image";
import useIsScrolled from "../hooks/useIsScrolled";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [menuToggle, setMenuToggle] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isScrolled = useIsScrolled();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.nav
      variants={navVariant}
      initial="hidden"
      animate="show"
      className={`fixed top-0 z-50 flex items-center justify-center w-screen px-6 backdrop-blur-md sm:px-16 ${
        isScrolled &&
        "border-b border-accent transition-all ease-in-out duration-1000"
      }`}
    >
      <div className="w-full lg:max-w-7xl">
        <div className="flex items-center justify-between w-full py-6">
          <img src="/logo.svg" alt="Logo" className="w-32 h-8" />

          {/* Expanded menu items on desktop */}
          <ul className="items-center justify-end flex-1 hidden space-x-4 list-none sm:flex">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="text-sm cursor-pointer text-primary-content hover:underline underline-offset-4 hover:opacity-75 hover:decoration-teal-400"
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
          <div className="flex items-center justify-end flex-1 space-x-4 sm:hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.li
                key={theme === "light" ? "mobileLightMode" : "mobileDarkMode"}
                variants={themeVariant}
                initial="hidden"
                animate="show"
                exit="exit"
                whileHover="hover"
                whileTap="tap"
                onClick={() =>
                  theme === "light" ? setTheme("dark") : setTheme("light")
                }
                className="text-xl cursor-pointer"
              >
                {theme === "light" ? "🌞" : "🌚"}
              </motion.li>
            </AnimatePresence>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={menuToggle ? "menuOpen" : "menuClose"}
                variants={navContainer}
                initial="hidden"
                animate="show"
                exit="exit"
                onClick={() => setMenuToggle((prev) => !prev)}
                className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer hover:bg-gray-600/50"
              >
                {menuToggle ? (
                  <div className="relative">
                    <Image
                      src="/close.svg"
                      alt="Close Menu Icon"
                      width={28}
                      height={28}
                    />

                    <motion.ul
                      key="menuContainer"
                      variants={navMenuContainer}
                      className="absolute list-none -right-5 flex flex-col px-2 py-4 mx-4 my-2 bg-gradient-to-b from-neutral to-neutral-focus top-8 min-w-[140px] rounded-xl items-center justify-center space-y-1 z-50 border border-primary-content"
                    >
                      {navLinks.map((link) => (
                        <motion.li
                          key={link.id}
                          variants={navMenuItem}
                          className="w-full py-1 text-center rounded text-primary-content hover:bg-teal-400/80"
                        >
                          <a href={`#${link.id}`}> {link.title}</a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                ) : (
                  <Image
                    src="/menu.svg"
                    alt="Menu Icon"
                    width={28}
                    height={28}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
export default Navbar;
