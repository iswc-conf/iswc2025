import React from "react";
import Sponsor from "../components/Sponsors/Sponsor";
import organizers from "../components/assests/organizing/organizing"

const Committees = () => {
  return (
      <div className="flex justify-center">
        <div className="w-[80%] lg:px-8">
          <div className="flex justify-center items-center flex-col text-center" id="img">
            <Sponsor users={organizers} word="Organizing Committee" />
          </div>
        </div>
      </div>
  );
};

export default Committees;
