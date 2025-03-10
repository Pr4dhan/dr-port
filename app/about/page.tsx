"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Fotter from "@/components/layout/Fotter";

const slides = [
  { src: "/port.jpeg", text: "Oculoplasty Surgery" },
  { src: "/port.jpeg", text: "Cataract Treatment" },
  { src: "/port.jpeg", text: "Retina Surgery" },
  { src: "/port.jpeg", text: "Glaucoma Treatment" },
  { src: "/port.jpeg", text: "Eye Checkup & Consultation" },
];

export default function Abour() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };
  return (
    <>
      <div className="flex flex-col justify-center w-full text-center mb-12 xl:justify-center pt-25 text-3xl text-black dark:text-white font-bold">
        <div className="text-4xl text-black dark:text-white font-semibold mb-4">
          About Me
        </div>

        <p className="text-xl text-gray-700 dark:text-gray-300 mx-auto max-w-4xl">
          With over 10 years of experience, I am dedicated to providing expert
          eye care for clearer vision and better eye health.
        </p>
      </div>
      <div className="max-w-lg p-6 flex flex-col items-center sm:max-w-full sm:flex-row sm:justify-center space-y-4 text-3xl text-black dark:text-white font-bold">
        <div className="flex justify-center items-center w-full max-w-[320px] 2xl:max-w-[420px] sm:mr-10 xl:mr-20">
          <Image
            className="object-cover rounded-lg"
            src="/port.jpeg"
            alt="Dr Anuradha Pradhan"
            width={320}
            height={320}
            layout="intrinsic"
          />
        </div>
        <div className="max-w-lg p-6 flex flex-col items-start space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="flex flex-row justify-center items-start">
            <div className="flex justify-center items-center w-full max-w-[64px] 2xl:max-w-[64px] mr-5">
              <Image
                className="object-cover"
                src="/vimsar.png"
                alt="Vimsar"
                width={64}
                height={64}
                layout="intrinsic"
              />
            </div>
            <div>
              <div className="text-xl font-bold text-black dark:text-white">
                MS Opthalmology
              </div>
              <div className="text-sm font-normal whitespace-normal text-justify text-gray-700 dark:text-gray-300">
                With over 10 years of experience, advanced ophthalmic care is
                specialized in to ensure optimal vision and eye health, with a
                focus on diagnosing and treating patients.
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-start">
            <div className="flex justify-center items-center w-full max-w-[64px] 2xl:max-w-[64px] mt-2 mr-5">
              <Image
                className="object-cover "
                src="/lvpie.jpg"
                alt="Lvpie"
                width={64}
                height={64}
                layout="intrinsic"
              />
            </div>
            <div>
              <div className="text-xl font-bold text-black dark:text-white">
                Super Specialization in Oculoplasty
              </div>
              <div className="text-sm font-normal whitespace-normal text-justify text-gray-700 dark:text-gray-300">
                With 8 years of expertise in Oculoplasty, eyelid surgeries,
                orbital trauma management, and lacrimal disorders are
                specialized in, ensuring both functional and aesthetic eye care.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-screen items-center justify-center text-center xl:justify-center 2xl:justify-center text-3xl text-black dark:text-white font-bold space-y-8">
        <div className="text-4xl text-black dark:text-white font-semibold">
          Research Publication
        </div>
        <p className="text-xl text-gray-700 dark:text-gray-300 mx-auto max-w-4xl">
          With over 10 years of experience, I am dedicated to providing expert
          eye care for clearer vision and better eye health.
        </p>
        <div className="w-full flex items-center justify-center min-h-[60vh]">
          <div
            id="default-carousel"
            className="relative w-full max-w-[80rem] overflow-hidden"
          >
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                    index === currentIndex
                      ? "opacity-100 scale-100 translate-x-0"
                      : "opacity-0 scale-95 translate-x-10"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt="Expertise Image"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-transparent text-white text-center py-6">
                    {slide.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Slider controls */}
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white dark:bg-black p-3 rounded-full shadow-lg z-10 hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white dark:bg-black p-3 rounded-full shadow-lg z-10 hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              ▶
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-500 scale-125"
                      : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full relative px-[5vw] flex flex-col justify-center items-start xl:flex-row xl:justify-center 2xl:justify-evenly gap-y-12 gap-x-10 text-3xl text-black dark:text-white font-bold">
        <div className="flex flex-col items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="text-xl font-bold text-black dark:text-white">
            MS Opthalmology
          </div>
          <div className="text-sm font-normal text-gray-700 dark:text-gray-300">
            VIMSAR
          </div>
          <div className="text-xl font-bold text-black dark:text-white">
            Oculoplasty
          </div>
          <div className="text-sm font-normal text-gray-700 dark:text-gray-300">
            LVPEI
          </div>
        </div>
        <div className="aspect-w-1 aspect-h-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="text-4xl text-black dark:text-white font-semibold">
            Research Publication
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mx-auto max-w-4xl">
            With over 10 years of experience, I am dedicated to providing expert
            eye care for clearer vision and better eye health.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="w-full h-full relative px-[5vw] flex flex-col justify-center items-start xl:flex-row xl:justify-center 2xl:justify-evenly gap-y-12 gap-x-10 text-3xl text-black dark:text-white font-bold">
        <div className="flex flex-col items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="text-xl font-bold text-black dark:text-white">
            MS Opthalmology
          </div>
          <div className="text-sm font-normal text-gray-700 dark:text-gray-300">
            VIMSAR
          </div>
          <div className="text-xl font-bold text-black dark:text-white">
            Oculoplasty
          </div>
          <div className="text-sm font-normal text-gray-700 dark:text-gray-300">
            LVPEI
          </div>
        </div>
        <div className="aspect-w-1 aspect-h-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="text-4xl text-black dark:text-white font-semibold">
            Research Publication
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mx-auto max-w-4xl">
            With over 10 years of experience, I am dedicated to providing expert
            eye care for clearer vision and better eye health.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="w-full h-full relative px-[5vw] flex flex-col justify-center items-start xl:flex-row xl:justify-center 2xl:justify-evenly gap-y-12 gap-x-10 text-3xl text-black dark:text-white font-bold">
        <div className="flex flex-col items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="text-xl font-bold text-black dark:text-white">
            MS Opthalmology
          </div>
          <div className="text-sm font-normal text-gray-700 dark:text-gray-300">
            VIMSAR
          </div>
          <div className="text-xl font-bold text-black dark:text-white">
            Oculoplasty
          </div>
          <div className="text-sm font-normal text-gray-700 dark:text-gray-300">
            LVPEI
          </div>
        </div>
        <div className="aspect-w-1 aspect-h-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="text-4xl text-black dark:text-white font-semibold">
            Research Publication
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mx-auto max-w-4xl">
            With over 10 years of experience, I am dedicated to providing expert
            eye care for clearer vision and better eye health.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="w-full h-full relative px-[5vw] flex flex-col justify-center items-start xl:flex-row xl:justify-center 2xl:justify-evenly gap-y-12 gap-x-10 text-3xl text-black dark:text-white font-bold">
        <div className="flex flex-col items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="text-xl font-bold text-black dark:text-white">
            MS Opthalmology
          </div>
          <div className="text-sm font-normal text-gray-700 dark:text-gray-300">
            VIMSAR
          </div>
          <div className="text-xl font-bold text-black dark:text-white">
            Oculoplasty
          </div>
          <div className="text-sm font-normal text-gray-700 dark:text-gray-300">
            LVPEI
          </div>
        </div>
        <div className="aspect-w-1 aspect-h-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="text-4xl text-black dark:text-white font-semibold">
            Research Publication
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mx-auto max-w-4xl">
            With over 10 years of experience, I am dedicated to providing expert
            eye care for clearer vision and better eye health.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="w-full h-full relative px-[5vw] flex flex-col justify-center items-start xl:flex-row xl:justify-center 2xl:justify-evenly gap-y-12 gap-x-10 text-3xl text-black dark:text-white font-bold">
        <div className="flex flex-col items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="text-xl font-bold text-black dark:text-white">
            MS Opthalmology
          </div>
          <div className="text-sm font-normal text-gray-700 dark:text-gray-300">
            VIMSAR
          </div>
          <div className="text-xl font-bold text-black dark:text-white">
            Oculoplasty
          </div>
          <div className="text-sm font-normal text-gray-700 dark:text-gray-300">
            LVPEI
          </div>
        </div>
        <div className="aspect-w-1 aspect-h-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <div className="text-4xl text-black dark:text-white font-semibold">
            Research Publication
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mx-auto max-w-4xl">
            With over 10 years of experience, I am dedicated to providing expert
            eye care for clearer vision and better eye health.
          </p>
        </div>
      </div>
      <Fotter />
    </>
  );
}
