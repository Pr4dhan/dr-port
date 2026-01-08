"use client";

import Image from "next/image";
// import { useState, useEffect } from "react";
import Footer from "@/components/layout/Footer";
import EmblaCarousel from "@/components/ui/EmblaCarousel";

const slides = [
  {
    src: "https://res.cloudinary.com/pr4dhan/image/upload/c_crop,w_800,h_300,g_auto,e_improve,e_sharpen/v1767512452/1c_ecdv4z.jpg",
    text: "Oculoplasty Surgery",
  },
  {
    src: "https://res.cloudinary.com/pr4dhan/image/upload/c_crop,w_800,h_300,g_auto,e_improve,e_sharpen/v1767512148/1b_dt6sqm.jpg",
    text: "Cataract Treatment",
  },
  {
    src: "https://res.cloudinary.com/pr4dhan/image/upload/c_crop,w_800,h_300,g_auto,e_improve,e_sharpen/v1767512148/1a_jcu8ly.jpg",
    text: "Retina Surgery",
  },
  // {
  //   src: "https://res.cloudinary.com/pr4dhan/image/upload/v1741926162/s4_esktsk.svg",
  //   text: "Glaucoma Treatment",
  // },
  // {
  //   src: "https://res.cloudinary.com/pr4dhan/image/upload/v1741926160/s5_jjcldb.svg",
  //   text: "Eye Checkup & Consultation",
  // },
];

export default function Expert() {
  return (
    <>
      <div className="flex flex-col justify-center w-full text-center mb-12 xl:justify-center pt-24 text-3xl text-black dark:text-white font-bold">
        <div className="text-2xl md:text-4xl text-stone-800 dark:text-stone-200 font-semibold mb-4">
          My Expertise
        </div>

        <p className="text-base md:text-xl text-stone-700 dark:text-stone-300 mx-auto max-w-4xl p-4 text-justify">
          With over a decade of experience as an Eye Specialist, I specialize in
          advanced eye care and precision surgical techniques. My passion lies
          in restoring vision and enhancing aesthetics through Oculoplasty,
          Cataract, and DCR surgeries.
        </p>
      </div>
      <div className="max-w-lg p-6 flex flex-col items-center sm:max-w-full sm:flex-row sm:justify-center space-y-4 text-3xl text-black dark:text-white font-bold">
        <div className="flex justify-center items-center w-full max-w-[320px] 2xl:max-w-[420px] sm:mr-10 xl:mr-20">
          <Image
            className="object-cover rounded-lg"
            src="https://res.cloudinary.com/pr4dhan/image/upload/v1741928833/oplas_ayomhs.webp"
            alt="Oculoplasty"
            width={320}
            height={320}
            layout="intrinsic"
          />
        </div>
        <div className="max-w-lg p-6 flex flex-col items-start space-y-4 bg-white dark:bg-zinc-950 rounded-lg shadow-sm dark:shadow-gray-800">
          <div className="text-xl font-bold text-stone-700 dark:text-stone-300">
            Oculoplasty and Cosmetic Eye Surgery
          </div>
          <div className="text-sm font-normal whitespace-normal text-justify text-stone-700 dark:text-stone-300">
            As an Oculoplasty expert, I specialize in the diagnosis and surgical
            treatment of eyelid, lacrimal (tear duct), and orbital disorders. My
            focus is on enhancing both the function and aesthetic appearance of
            your eyes.
          </div>
          <br></br>
          {/* <div className="text-xl font-bold text-black dark:text-white">
            Super Specialization in Oculoplasty
          </div>
          <div className="text-sm font-normal whitespace-normal text-justify text-gray-700 dark:text-gray-300">
            With 8 years of expertise in Oculoplasty, eyelid surgeries, orbital
            trauma management, and lacrimal disorders are specialized in,
            ensuring both functional and aesthetic eye care.
          </div> */}
        </div>
      </div>

      <div className="max-w-lg p-6 flex flex-col-reverse items-center sm:max-w-full sm:flex-row sm:justify-center space-y-4 text-3xl text-black dark:text-white font-bold">
        <div className="max-w-lg p-6 flex flex-col items-start space-y-4 bg-white dark:bg-zinc-950 rounded-lg shadow-sm dark:shadow-gray-800">
          <div className="text-xl font-bold text-stone-700 dark:text-stone-300">
            Advanced Cataract Surgery
          </div>
          <div className="text-sm font-normal whitespace-normal text-justify text-stone-700 dark:text-stone-300">
            I am highly skilled in performing advanced cataract surgery,
            utilizing techniques like phacoemulsification and premium
            intraocular lens implants to restore clear vision with the highest
            levels of precision and safety.
          </div>
          {/* <div className="text-xl font-bold text-black dark:text-white">
            Super Specialization in Oculoplasty
          </div>
          <div className="text-sm font-normal whitespace-normal text-justify text-gray-700 dark:text-gray-300">
            With 8 years of expertise in Oculoplasty, eyelid surgeries, orbital
            trauma management, and lacrimal disorders are specialized in,
            ensuring both functional and aesthetic eye care.
          </div> */}
        </div>
        <div className="flex justify-center items-center w-full max-w-[320px] 2xl:max-w-[420px] mb-4 sm:mb-0 sm:ml-10 xl:ml-20">
          <Image
            className="object-cover rounded-lg"
            src="https://res.cloudinary.com/pr4dhan/image/upload/v1741928833/catrac_hqmlm4.jpg"
            alt="Cataract"
            width={320}
            height={320}
            layout="intrinsic"
          />
        </div>
      </div>

      <div className="max-w-lg p-6 flex flex-col items-center sm:max-w-full sm:flex-row sm:justify-center space-y-4 text-3xl text-black dark:text-white font-bold">
        <div className="flex justify-center items-center w-full max-w-[320px] 2xl:max-w-[420px] sm:mr-10 xl:mr-20">
          <Image
            className="object-cover rounded-lg"
            src="https://res.cloudinary.com/pr4dhan/image/upload/v1741928832/dcr_lhcopa.webp"
            alt="DCR"
            width={320}
            height={320}
            layout="intrinsic"
          />
        </div>
        <div className="max-w-lg p-6 flex flex-col items-start space-y-4 bg-white dark:bg-zinc-950 rounded-lg shadow-sm dark:shadow-gray-800">
          <div className="text-xl font-bold text-stone-700 dark:text-stone-300">
            Dacryocystorhinostomy Surgery
          </div>
          <div className="text-sm font-normal whitespace-normal text-justify text-stone-700 dark:text-stone-300">
            With extensive experience in DCR surgery, I effectively treat
            blocked tear ducts, ensuring proper tear drainage and providing
            relief from excessive tearing and related discomfort.
          </div>
          {/* <div className="text-xl font-bold text-black dark:text-white">
            Super Specialization in Oculoplasty
          </div>
          <div className="text-sm font-normal whitespace-normal text-justify text-gray-700 dark:text-gray-300">
            With 8 years of expertise in Oculoplasty, eyelid surgeries, orbital
            trauma management, and lacrimal disorders are specialized in,
            ensuring both functional and aesthetic eye care.
          </div> */}
        </div>
      </div>

      <div className="w-full flex items-center justify-center py-10">
        <div className="relative w-full max-w-[70rem] px-4">
          <EmblaCarousel slides={slides} />
        </div>
      </div>
      <Footer />
    </>
  );
}

