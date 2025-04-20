"use client";

import { useEffect, useState } from "react";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import LogoLight from "@/assets/logo.png";
import LogoDark from "@/assets/logo-dark.png";
import ThemeSwitchBtn from "@/components/layout/buttons/ThemeSwitchBtn";
import BottomCornerNav from "@/components/ui/BottomCornerNav";
import AppoitmentBtn from "@/components/layout/buttons/AppoitmentBtn";
import useHeader from "../hooks/useHeader";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // State for desktop menu visibility
  const [isVisible, setIsVisible] = useState(pathname !== "/");

  // State for mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update desktop visibility when path changes
  useEffect(() => {
    setIsVisible(pathname !== "/");
  }, [pathname]);

  // Toggle desktop menu visibility
  const toggleDesktopMenu = () => {
    setIsVisible(!isVisible);
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const { scrollHeaderBg } = useHeader();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <div
        className={`w-full h-[60px] z-[1000] fixed top-0 transition-all duration-300 ${
          scrollHeaderBg || isMobileMenuOpen
            ? "bg-white dark:bg-black shadow-sm"
            : ""
        }`}
      ></div>
      <header className="container h-[60px] w-full z-[1000] fixed top-0 left-[50%] translate-x-[-50%] px-[8vw] flex justify-between items-center">
        <Link
          href="/"
          id="brand"
          className="flex items-center gap-4 [&>h1]:hover:text-primary dark:[&>h1]:hover:text-primary-light"
        >
          <div aria-label="tsukiwa-logo" className="rounded-full p-1 w-[40px] ">
            <Image
              className="hidden dark:block"
              priority
              loading="eager"
              src={LogoLight}
              alt="my logo"
              width={40}
              height={40}
            />
            <Image
              className="block dark:hidden"
              priority
              loading="eager"
              src={LogoDark}
              alt="my logo"
              width={40}
              height={40}
            />
          </div>
          <h1
            aria-label="dranuradha"
            className="relative hidden sm:block font-bold text-sm xl:text-base "
          >
            Dr Anuradha Pradhan
          </h1>
        </Link>
        <nav className="flex flex-end items-center gap-4 h-full">
          {/* Desktop Navigation Menu - Only visible on larger screens */}
          <div className="hidden sm:block">
            {isVisible && (
              <div>
                <nav className="flex items-center gap-4 h-full">
                  <Link
                    href="/"
                    className="flex items-center gap-4 hover:text-primary dark:hover:text-primary-light"
                  >
                    <h1 className="relative block font-medium text-sm xl:text-base">
                      Home
                    </h1>
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center gap-4 hover:text-primary dark:hover:text-primary-light"
                  >
                    <h1 className="relative block font-medium text-sm xl:text-base">
                      About
                    </h1>
                  </Link>
                  <Link
                    href="/expert"
                    className="flex items-center gap-4 hover:text-primary dark:hover:text-primary-light"
                  >
                    <h1 className="relative block font-medium text-sm xl:text-base">
                      Expertise
                    </h1>
                  </Link>
                </nav>
              </div>
            )}
          </div>
          <AppoitmentBtn/>
          {/* Mobile Menu Toggle Button */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => {
                // On desktop, toggle the desktop menu
                if (window.innerWidth >= 640) {
                  toggleDesktopMenu();
                }
                // On mobile, toggle the mobile menu
                else {
                  toggleMobileMenu();
                }
              }}
              className="px-2 py-1 bg-white dark:bg-black text-black dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle navigation menu"
            >
              {isVisible || isMobileMenuOpen ? <FaBarsStaggered /> : <FaBars />}
            </button>
          </div>
          <div className="hidden sm:block">
          <ThemeSwitchBtn />
          </div>
        </nav>
      </header>

      <div className="block sm:hidden">
        <BottomCornerNav />
      </div>
    </>
  );
}
