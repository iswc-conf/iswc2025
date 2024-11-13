import React from "react";
import Sponsor from "../components/Sponsors/Sponsor";
import organizers from "../components/assests/organizing/organizing"


const Committees = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col text-center" id="img">
        <Sponsor users={organizers} word="Organizing Committee" />
      </div>
    </>
  );
};

export default Committees;
