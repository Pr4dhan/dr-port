"use client";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center w-full text-center mb-12 xl:justify-center 2xl:justify-evenly pt-25 text-3xl text-black dark:text-white font-bold">
        <div className="text-4xl text-black dark:text-white font-semibold mb-4">
          About Me
        </div>
        <p className="text-xl text-gray-700 dark:text-gray-300 mx-auto max-w-4xl">
          With over 10 years of experience, I'm dedicated to providing expert
          eye care for clearer vision and better eye health.
        </p>
      </div>
      <div className="w-full h-full relative px-[5vw] flex flex-col justify-center items-start xl:flex-row xl:justify-center 2xl:justify-evenly gap-y-12 gap-x-10 text-3xl text-black dark:text-white font-bold">
        <div className="aspect-w-1 aspect-h-1">
          <Image
            className="object-cover rounded-lg"
            src="/port.jpeg"
            alt="Dr Anuradha Pradhan"
            width={320}
            height={320}
            layout="intrinsic"
          />
        </div>
        <div className="max-w-lg p-6 flex flex-col items-start space-y-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="text-xl font-bold text-black dark:text-white">
            MS Opthalmology
          </div>
          <div className="text-sm font-normal whitespace-normal text-justify text-gray-700 dark:text-gray-300">
            With over 10 years of experience, advanced ophthalmic care is
            specialized in to ensure optimal vision and eye health, with a focus
            on diagnosing and treating patients.
          </div>
          <div className="text-xl font-bold text-black dark:text-white">
            Super Specialization in Oculoplasty
          </div>
          <div className="text-sm font-normal whitespace-normal text-justify text-gray-700 dark:text-gray-300">
            With 8 years of expertise in Oculoplasty, eyelid surgeries, orbital
            trauma management, and lacrimal disorders are specialized in,
            ensuring both functional and aesthetic eye care.
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-screen items-center justify-center text-center xl:justify-center 2xl:justify-center text-3xl text-black dark:text-white font-bold space-y-8">
        <div className="text-4xl text-black dark:text-white font-semibold">
          Research Publication
        </div>
        <p className="text-xl text-gray-700 dark:text-gray-300 mx-auto max-w-4xl">
          With over 10 years of experience, I'm dedicated to providing expert
          eye care for clearer vision and better eye health.
        </p>
        <div className="w-full h-84 relative">
          <Image
            className="object-cover w-full h-full rounded-lg"
            src="/seminar.jpg"
            alt="Dr Anuradha Pradhan"
            layout="fill"
          />
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
            With over 10 years of experience, I'm dedicated to providing expert
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
            With over 10 years of experience, I'm dedicated to providing expert
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
            With over 10 years of experience, I'm dedicated to providing expert
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
            With over 10 years of experience, I'm dedicated to providing expert
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
            With over 10 years of experience, I'm dedicated to providing expert
            eye care for clearer vision and better eye health.
          </p>
        </div>
      </div>
    </>
  );
}
