"use client";

import { useEffect, useState } from "react";
// import { NavLinks } from "@/components/ts/constants/navLinks";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import LogoLight from "@/assets/logo.png";
import LogoDark from "@/assets/logo-dark.png";
import ThemeSwitchBtn from "@/components/layout/buttons/ThemeSwitchBtn";
// import Dropdown from "@/components/layout/Dropdown";
// import Anchor from "@/components/layout/Anchor";
// import Version from "@/components/layout/Version";
import useHeader from "../hooks/useHeader";
// import LoadingSpinner from "@/components/layout/LoadingSpinner";
// import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";

export default function Header() {
  // Move visibility state to component level
  // const [isVisible, setIsVisible] = useState(false);
  // Get the current path
  const pathname = usePathname();

  // Initialize visibility state - hidden on home page, visible elsewhere
  const [isVisible, setIsVisible] = useState(pathname !== "/");
  const [isVisibleMobile, setIsVisibleMobile] = useState(false);

  // Update visibility when path changes
  useEffect(() => {
    setIsVisible(pathname !== "/");
  }, [pathname]);

  // Function to toggle visibility
  const toggleVisibilityMobile = () => {
    setIsVisibleMobile(!isVisibleMobile);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // const { isLinkActive, isMenuActive, scrollHeaderBg, toggleMenu, dropdown } = useHeader();
  const { scrollHeaderBg } = useHeader();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <div
        className={`w-full h-[60px] z-[1000] fixed top-0 transition-all duration-300 ${
          scrollHeaderBg ? "bg-white dark:bg-black shadow-sm" : ""
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
            className="relative hidden lg:block font-bold text-sm xl:text-base "
          >
            Dr Anuradha Pradhan
          </h1>
        </Link>
        <nav className="flex flex-end items-center gap-4 h-full">
          <div>
            {isVisible && (
              <div>
                <nav className="flex items-center gap-4 h-full">
                  <Link
                    href="/"
                    id="brand"
                    className="flex items-center gap-4 [&>h1]:hover:text-primary dark:[&>h1]:hover:text-primary-light"
                  >
                    <h1
                      aria-label="home"
                      className="relative hidden lg:block font-bold text-sm xl:text-base "
                    >
                      Home
                    </h1>
                  </Link>
                  <Link
                    href="/about"
                    id="brand"
                    className="flex items-center gap-4 [&>h1]:hover:text-primary dark:[&>h1]:hover:text-primary-light"
                  >
                    <h1
                      aria-label="about"
                      className="relative hidden lg:block font-bold text-sm xl:text-base "
                    >
                      About
                    </h1>
                  </Link>
                  <Link
                    href="/expert"
                    id="brand"
                    className="flex items-center gap-4 [&>h1]:hover:text-primary dark:[&>h1]:hover:text-primary-light"
                  >
                    <h1
                      aria-label="expertise"
                      className="relative hidden lg:block font-bold text-sm xl:text-base "
                    >
                      Expertise
                    </h1>
                  </Link>
                </nav>
              </div>
            )}
          </div>

          <div className="relative">
            {/* Button that triggers the toggle */}
            <button
              onClick={() => {
                toggleVisibility();
                toggleVisibilityMobile();
              }}
              className="px-2 py-1 bg-white dark:bg-black text-black dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isVisible || isVisibleMobile ? <FaBarsStaggered /> : <FaBars />}
            </button>

            {/* Dropdown menu that toggles visibility */}
            {isVisibleMobile && (
              <div className="relative block lg:hidden top-10 right-0 p-4 bg-white dark:bg-gray-800 border rounded shadow-lg z-50 min-w-[100px]">
                <nav className="flex flex-col items-start gap-4">
                  <Link
                    href="/"
                    className="w-full hover:text-primary dark:hover:text-primary-light"
                    onClick={toggleVisibilityMobile}
                  >
                    <span className="font-bold">Home</span>
                  </Link>
                  <Link
                    href="/about"
                    className="w-full hover:text-primary dark:hover:text-primary-light"
                    onClick={toggleVisibilityMobile}
                  >
                    <span className="font-bold">About</span>
                  </Link>
                  <Link
                    href="/expert"
                    className="w-full hover:text-primary dark:hover:text-primary-light"
                    onClick={toggleVisibilityMobile}
                  >
                    <span className="font-bold">Expertise</span>
                  </Link>
                </nav>
              </div>
            )}
          </div>

          <ThemeSwitchBtn />
        </nav>
      </header>
    </>
  );
}
