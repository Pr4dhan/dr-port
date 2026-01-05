"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Footer from "@/components/layout/Footer";

const slides = [
  {
    src: "https://res.cloudinary.com/pr4dhan/image/upload/c_crop,w_800,h_300,e_improve,e_sharpen/v1767498832/1c_xt01vv.jpg",
    text: "Oculoplasty Surgery",
  },
  {
    src: "https://res.cloudinary.com/pr4dhan/image/upload/c_crop,w_800,h_300,e_improve,e_sharpen/v1767498831/1ca_eigi7b.jpg",
    text: "Eye Checkup & Consultation",
  },
  {
    src: "https://res.cloudinary.com/pr4dhan/image/upload/c_crop,w_800,h_300,e_improve,e_sharpen/v1767498832/1cb_v67nuk.jpg",
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
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };
  return (
    <>
      <div className={"flex flex-col items-center"}>
        <div className="m-0 p-0 flex flex-col justify-center w-full text-center mb-12 xl:justify-center pt-25 text-3xl text-black dark:text-white font-bold">
          <div className="text-2xl md:text-4xl text-black dark:text-white font-semibold mb-4">
            About Me
          </div>

          <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 mx-auto max-w-4xl px-4 text-justify md:text-center">
            I bring more than a decade of experience as a skilled Eye
            Specialist, delivering expert eye care to enhance vision and promote
            long-term eye health.
          </p>
        </div>
        <div className="max-w-lg sm:p-6 pb-[10px] sm:pb-[2vw] md:pb-[3vw] lg:pb-[4vw] xl:pb-[5vw] flex flex-col items-center sm:max-w-full sm:flex-row sm:justify-center space-y-4 text-3xl text-black dark:text-white font-bold">
          <div className="flex justify-center items-center w-full max-w-[320px] 2xl:max-w-[420px] sm:mr-10 xl:mr-20">
            <Image
              className="object-cover rounded-lg"
              src="https://res.cloudinary.com/pr4dhan/image/upload/v1741926104/port_ttvnzz.jpg"
              alt="Dr Anuradha Pradhan"
              width={320}
              height={320}
              layout="intrinsic"
            />
          </div>
          <div className="max-w-lg p-6 flex flex-col items-start space-y-8 bg-white dark:bg-zinc-950 rounded-lg shadow-sm dark:shadow-gray-800">
            <div className="flex flex-row justify-center items-start">
              <div className="flex justify-center items-center w-full max-w-[64px] 2xl:max-w-[64px] mr-5">
                <Image
                  className="object-cover"
                  src="https://res.cloudinary.com/pr4dhan/image/upload/v1741928833/vimsar_dsxm1v.png"
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
                  With over 12 years of experience, advanced ophthalmic care is
                  specialized in to ensure optimal vision and eye health, with a
                  focus on diagnosing and treating patients.
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-start">
              <div className="flex justify-center items-center w-full max-w-[64px] 2xl:max-w-[64px] mt-2 mr-5">
                <Image
                  className="object-cover "
                  src="https://res.cloudinary.com/pr4dhan/image/upload/v1741928832/lvpie_dyog5b.jpg"
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
                  With about 10 years of expertise in Oculoplasty, eyelid
                  surgeries, orbital trauma management, and lacrimal disorders
                  are specialized in, ensuring both functional and aesthetic eye
                  care.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto aspect-video mt-4 sm:mt-0">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/YQ7CdZGyfXE?start=134"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="m-0 p-0 flex flex-col w-full min-h-[35vh] items-center justify-center text-center xl:justify-center 2xl:justify-center text-3xl text-black dark:text-white font-bold space-y-8">
          <div className="text-2xl md:text-4xl text-black dark:text-white font-semibold">
            Research Publication
          </div>
          <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 mx-auto max-w-4xl p-4 text-justify">
            I have an active presence in academics and research, with multiple
            papers published in renowned medical journals. My work focuses on
            contributing to innovation in ophthalmology.
          </p>
        </div>
        {/* corosel section */}
        <div className="m-0 p-0 max-w-[80rem] flex flex-col justify-evenly items-center">
          <div className="w-full flex items-center justify-center min-h-[60vh]">
            <div
              id="default-carousel"
              className="relative w-full max-w-[70rem] overflow-hidden"
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
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/35 dark:bg-black/35 p-3 rounded-full shadow-lg z-10 hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                ◀
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Slide"
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/35 dark:bg-black/35 p-3 rounded-full shadow-lg z-10 hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                ▶
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`w-10 h-1 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-blue-50 dark:bg-gray-700 scale-125"
                        : "bg-gray-500 dark:bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full relative px-[5vw] flex flex-col sm:flex-row justify-evenly items-start xl:flex-row xl:justify-center 2xl:justify-evenly gap-4 text-3xl text-black dark:text-white font-bold">
            <div className="flex flex-col items-start bg-white dark:bg-zinc-950 p-6 rounded-lg shadow-sm dark:shadow-gray-800">
              <div className="text-xl font-bold text-black dark:text-white">
                Research Publication
              </div>
              <div className="text-sm font-bold text-gray-700 dark:text-gray-300">
                DOI: 2020
              </div>
              {/* <div className="text-xl font-bold text-black dark:text-white">
                Oculoplasty
              </div>
              <div className="text-sm font-normal text-gray-700 dark:text-gray-300">
                LVPEI
              </div> */}
            </div>
            <div className="aspect-w-1 aspect-h-1 bg-white dark:bg-zinc-950 p-6 rounded-lg shadow-sm dark:shadow-gray-800">
              <div className="text-2xl text-black dark:text-white font-semibold">
                Infantile simple dacryops: clinicopathological correlation and
                immunocharacterization
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mx-auto max-w-4xl">
                Anuradha Pradhan, Devjyoti Tripathy, Ruchi Mittal
              </p>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/32709788/"
                className="text-sm text-gray-700 dark:text-gray-300 mx-auto max-w-4xl"
                target="_blank"
              >
                https://pubmed.ncbi.nlm.nih.gov/32709788
              </a>
            </div>
          </div>
          <br />

          <div className="w-full relative px-[5vw] flex flex-col sm:flex-row justify-evenly items-start xl:flex-row xl:justify-center 2xl:justify-evenly gap-4 text-3xl text-black dark:text-white font-bold">
            <div className="flex flex-col items-start bg-white dark:bg-zinc-950 p-6 rounded-lg shadow-sm dark:shadow-gray-800">
              <div className="text-xl font-bold text-black dark:text-white">
                Research Publication
              </div>
              <div className="text-sm font-bold text-gray-700 dark:text-gray-300">
                DOI: 2019
              </div>
              {/* <div className="text-xl font-bold text-black dark:text-white">
                Oculoplasty
              </div>
              <div className="text-sm font-normal text-gray-700 dark:text-gray-300">
                LVPEI
              </div> */}
            </div>
            <div className="aspect-w-1 aspect-h-1 bg-white dark:bg-zinc-950 p-6 rounded-lg shadow-sm dark:shadow-gray-800">
              <div className="text-2xl text-black dark:text-white font-semibold">
                Thyroid eye disease survey: An anonymous web-based survey in the
                Indian subcontinent
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mx-auto max-w-4xl">
                Anuradha Pradhan, Anasua Ganguly, Milind N Naik, Akshay
                Gopinathan Nair, Savari Desai, Suryasnata Rath
              </p>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/31821863/"
                className="text-sm text-gray-700 dark:text-gray-300 mx-auto max-w-4xl"
                target="_blank"
              >
                https://pubmed.ncbi.nlm.nih.gov/31821863
              </a>
            </div>
          </div>
          <br />

          <div className="w-full relative px-[5vw] flex flex-col sm:flex-row justify-evenly items-start xl:flex-row xl:justify-center 2xl:justify-evenly gap-4 text-3xl text-black dark:text-white font-bold ">
            <div className="flex flex-col items-start bg-white dark:bg-zinc-950 p-6 rounded-lg shadow-sm dark:shadow-gray-800">
              <div className="text-xl font-bold text-black dark:text-white">
                Research Publication
              </div>
              <div className="text-sm font-bold text-gray-700 dark:text-gray-300">
                DOI: 2016
              </div>
              {/* <div className="text-xl font-bold text-black dark:text-white">
                Oculoplasty
              </div>
              <div className="text-sm font-normal text-gray-700 dark:text-gray-300">
                LVPEI
              </div> */}
            </div>
            <div className="aspect-w-1 aspect-h-1 bg-white dark:bg-zinc-950 p-6 rounded-lg shadow-sm dark:shadow-gray-800">
              <div className="text-2xl text-black dark:text-white font-semibold">
                Tenzel’s: an adorable reconstruction surgery to create beautiful
                near normal eyelids.
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mx-auto max-w-4xl">
                Anuradha Pradhan, Ratan Deep Kumar Agrawalla, Sharmistha Behera,
                Pramod Kumar Sharma, Kanhei Charan
              </p>
              <a
                href="https://www.ijooo.org/article-details/3085/"
                className="text-sm text-gray-700 dark:text-gray-300 mx-auto max-w-4xl"
                target="_blank"
              >
                https://www.ijooo.org/article-details/3085
              </a>
            </div>
          </div>
          <br />
        </div>
      </div>

      <Footer />
    </>
  );
}
