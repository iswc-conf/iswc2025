import React from "react";
import Sponsor from "../components/Sponsors/Sponsor";
import organizers from "../components/assests/organizing/organizing"
import banner from "../components/assests/ISWC2025banner.webp"


const Committees = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col text-center" id="img">
        <div className="w-full mb-8 pt-16 relative">
          <img
            src={ banner }
            alt="Banner"
            className="w-full h-auto object-cover"
          />
        </div>
        <Sponsor users={organizers} word="Organizing Committee" />
      </div>
    </>
  );
};

export default Committees;
