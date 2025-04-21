"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import EmailBtn from "@/components/layout/buttons/EmailBtn";
import ContactBtn from "@/components/layout/buttons/ContactBtn";

export default function Home() {
  return (
    <div className="w-full max-w-xl[90rem] h-full flex-box sm:flex flex-col xl:flex-row justify-center items-center gap-10 pt-20 xl:pt-30">
      <div className="flex flex-col items-center xl:items-start gap-10 text-center xl:text-left">
        <div className="flex flex-col items-center xl:items-start gap-5">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight lg:leading-[4.5rem] max-w-[1000px]">
            Dr Anuradha Pradhan
          </h1>

          <p className="text-lg lg:text-xl xl:text-2xl font-medium tracking-wide max-w-[700px] xl:mt-1">
            MBBS |{" "}
            <strong className="text-primary capitalize dark:animate-rgb">
              MS Ophthalmology
            </strong>
            <p className="text-lg lg:text-xl xl:text-2xl font-medium tracking-wide max-w-[700px] px-4 md:px-0">
            Fellowship in Oculoplasty, Ocular-aesthetic and Oncology
          </p>
            
          </p>
          

          <p className="text-base lg:text-lg xl:text-xl font-normal tracking-wide leading-relaxed max-w-[700px] xl:mt-2 xl:pr-20 px-2 md:px-6 xl:pl-0">
            Expert in Cataract, Oculoplasty and DCR Surgery, focused on
            precision and advanced eye care.
          </p>
        </div>

        <div className="flex gap-6 xl:mt-1">
          <EmailBtn href="mailto:Dr Anuradha Pradhan <info@anuradhapradhan.com>" />
          <ContactBtn href="about" />
        </div>
      </div>

      <CardContainer className="inter-var max-w-[400px] md:pl-4">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl border-3">
          <div className="relative w-full">
            <CardItem className="w-full">
              <Image
                src="https://res.cloudinary.com/pr4dhan/image/upload/v1741085038/bg_d2exh4.jpg"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem translateZ="80" className="w-full absolute top-0 left-0">
              <Image
                src="https://res.cloudinary.com/pr4dhan/image/upload/v1741082606/top_fgrj24.png"
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
