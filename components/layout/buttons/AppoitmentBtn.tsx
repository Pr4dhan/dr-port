import React from "react";
import Link from "next/link";

const AppointmentBtn: React.FC = () => {
  return (
    <Link href="/appointment">
      <button className="px-3 py-2 text-xs sm:px-3 sm:py-1 sm:text-base rounded-full lg:rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-gray-500">
        Book Appointment
      </button>
    </Link>
  );
};

export default AppointmentBtn;