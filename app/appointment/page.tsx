"use client";

// import Image from "next/image";
import React from "react";
import Footer from "@/components/layout/Footer";
import HospitalCard from "@/components/HospitalCard";

export default function Appointment() {
  return (

    <>
    <div className={"justify-center w-full px-1"}>
        <div className="flex flex-col justify-center items-center w-full text-center mb-12 xl:justify-items-center pt-25 text-3xl text-black dark:text-white font-bold">
          <div className="text-2xl md:text-4xl text-black dark:text-white font-semibold mb-4">
            Hospital Visit Schedule
          </div>

          <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 mx-auto max-w-4xl">
            Find the days and times when Dr. Anuradha Pradhan is available at listed hospitals
          </p>
        </div>
        <div className="w-full flex justify-center">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 justify-items-center max-w-5xl w-full">
            <HospitalCard
              name="Kar Vision Eye Hospital"
              imageUrl="https://res.cloudinary.com/pr4dhan/image/upload/v1745128981/KAra_arqohe.png"
              schedule="Mon to Sat: 9 AM to 5 PM"
              location="10, Janpath, Satya Nagar, Bhubaneswar, Odisha, 751007"
              phone=" (+91) 81143 88593"
              phone2=" (+91) 94387 94618"
              // isOpen={true}
            />
            
            <HospitalCard
              name="Shree Hospitals"
              imageUrl="https://res.cloudinary.com/pr4dhan/image/upload/v1745128982/shreeS_u0rkx0.png"
              schedule="Mon to Sat: 6 PM to 7 PM"
              location="246, Lewis Rd, BJB Nagar, Bhubaneswar, Odisha 751014"
              phone=" (+91) 90400 96460"
              phone2=" (+91) 90400 96450"
              // isOpen={false}
            />
          </div>
        </div>
        <footer className="w-full  md:pt-28">
        <Footer />
        </footer>
    </div>
    </>
  );
}
