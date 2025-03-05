"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ThemeSwitchBtn from "@/components/layout/buttons/ThemeSwitchBtn";

export default function About() {
  return (
    <div className="w-full h-full relative px-[5vw] flex flex-col justify-center items-center xl:flex-row xl:justify-center 2xl:justify-evenly gap-y-12 gap-x-10 p-6">
      <div className="flex flex-col items-center xl:items-start gap-10">
        <div className="flex flex-col items-center xl:items-start gap-5">
          <h1 className="text-center lg:max-w-[1000px] 2xl:max-w-none lg:text-left text-4xl md:text-5xl lg:text-7xl px-1 font-normal tracking-tight">
            Hello! I am{" "}
            <div className="font-black text-primary dark:animate-rgb">
              Dr Anuradha Pradhan
            </div>
          </h1>
          <p className="text-center xl:text-left text-lg lg:text-xl xl:text-2xl px-2 font-medium max-w-[600px] tracking-wide">
            Eye care specialist |{" "}
            <strong className=" text-primary capitalize dark:animate-rgb">
              MS Ophthalmology
            </strong>
          </p>
        </div>
        <div className="flex gap-6">
          <button>Email </button>
          <button>About Me</button>
          <ThemeSwitchBtn />
        </div>
      </div>

      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl border ">
          <div className="relative w-full">
            <CardItem className="w-full">
              <Image
                src="https://res.cloudinary.com/pr4dhan/image/upload/v1741085038/bg_d2exh4.jpg"
                height="1000"
                width="1000"
                className="h-120 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem translateZ="80" className="w-full absolute top-0 left-0">
              <Image
                src="https://res.cloudinary.com/pr4dhan/image/upload/v1741082606/top_fgrj24.png"
                height="1000"
                width="1000"
                className="h-120 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
