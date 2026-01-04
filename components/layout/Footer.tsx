"use client";
import Image from "next/image";
import Link from "next/link";
import LogoLight from "@/assets/logo.png";
import LogoDark from "@/assets/logo-dark.png";

export default function Footer() {
  return (
    <footer className="w-full py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center items-center">
            <Link
              href="/"
              id="brand"
              className="flex items-center gap-2 [&>h1]:hover:text-primary dark:[&>h1]:hover:text-primary-light"
            >
              <div aria-label="logo" className="rounded-full p-1 w-[32px]">
                <Image
                  className="hidden dark:block"
                  priority
                  loading="eager"
                  src={LogoLight}
                  alt="my logo"
                  width={32}
                  height={32}
                />
                <Image
                  className="block dark:hidden"
                  priority
                  loading="eager"
                  src={LogoDark}
                  alt="my logo"
                  width={32}
                  height={32}
                />
              </div>
              <h1
                aria-label="dranuradha"
                className="relative block font-bold text-xs xl:text-sm"
              >
                Dr Anuradha Pradhan
              </h1>
            </Link>
          </div>

          <ul className="text-base flex items-center justify-center flex-row gap-6 md:gap-10 py-6 mb-4 border-b border-gray-200">
            <li>
              <Link
                href="./"
                className="text-gray-500 hover:text-gray-900 font-bold dark:hover:text-gray-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-500 hover:text-gray-900 font-bold dark:hover:text-gray-100"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/expert"
                className="text-gray-500 hover:text-gray-900 font-bold dark:hover:text-gray-100"
              >
                Expertise
              </Link>
            </li>
          </ul>
          <span className="text-sm text-gray-500 text-center block">
            © {new Date().getFullYear()}
            <a href="https://www.anuradhapradhan.com/">
              {" "}
              Dr Anuradha Pradhan.
            </a>{" "}
            All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
