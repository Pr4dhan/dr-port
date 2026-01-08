"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeSwitchBtn from "@/components/layout/buttons/ThemeSwitchBtn";

const BottomCornerNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/expert", label: "Expertise" },
    { href: "/appointment", label: "Book Appointment" },
  ];

  return (
    <>
      {/* FAB Toggle Button */}
      <button
        onClick={toggleMenu}
        className="fixed bottom-6 right-6 z-[1000] w-12 h-12 rounded-full bg-stone-800 text-white shadow-lg flex items-center justify-center transition-colors hover:bg-primary/90 dark:bg-stone-200 dark:hover:bg-primary-light/90 dark:text-black"
        aria-label="Toggle Navigation"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Slide-Up Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
            className="fixed bottom-0 left-0 right-0 z-[999] bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 shadow-2xl px-8 pt-6 pb-10"
          >
            <nav className="flex flex-col items-start gap-4">
              {links.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    className={`w-full text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "bg-stone-200 dark:bg-stone-900 font-bold text-stone-800 dark:text-stone-200"
                        : "text-stone-800 dark:text-stone-200 hover:text-primary dark:hover:text-primary-light"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
              <div onClick={closeMenu} className="p-1 border-2 rounded-full">
                <ThemeSwitchBtn />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomCornerNav;
