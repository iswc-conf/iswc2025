import React from "react";
import Sponsor from "../Sponsors/Sponsor";
import volunteers from "../assests/student_volunteer/volunteer"
import banner from "../assests/ISWC2025banner.webp"


const Volunteers = () => {
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
        <Sponsor users={volunteers} word="Student Volunteers" />
      </div>
    </>
  );
};

export default Volunteers;
