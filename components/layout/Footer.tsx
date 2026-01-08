"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="text-base flex items-center justify-center flex-row gap-6 md:gap-10 mb-2">
          <li>
            <Link
              href="./"
              className="text-stone-600 dark:text-stone-400 hover:text-stone-800 font-bold dark:hover:text-stone-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-stone-600 dark:text-stone-400 hover:text-stone-800 font-bold dark:hover:text-stone-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/expert"
              className="text-stone-600 dark:text-stone-400 hover:text-stone-800 font-bold dark:hover:text-stone-200"
            >
              Expertise
            </Link>
          </li>
        </ul>
        <span className="text-sm text-stone-600 dark:text-stone-400 text-center block">
          © {new Date().getFullYear()}
          <a href="https://www.anuradhapradhan.com/">
            {" "}
            Dr Anuradha Pradhan.
          </a>{" "}
          All rights reserved.
        </span>
      </div>
      <h1
        className="
          max-w-7xl mx-auto text-center 
          font-black leading-none
          text-transparent bg-clip-text
          dark:text-transparent dark:bg-clip-text
          bg-gradient-to-b
          from-[#a0a0a0] via-[#e8e8e8] to-[#ffffff]
          dark:from-[#8c8c8c] dark:via-[#2b2b2b] dark:to-[#010101]
          opacity-90
          text-[clamp(2rem,6vw,7rem)]
          -z-[1]"
      >
        DrAnuradhaPradhan
      </h1>
    </footer>
  );
}
