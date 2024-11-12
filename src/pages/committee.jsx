import React from "react";
import Sponsor from "../components/Sponsors/Sponsor";
import organizers from "../components/assests/organizing/organizing"

const Committees = () => {
  return (
    <div className="my-36 lg:px-36 ">
      <div className="flex justify-center item-center flex-col lg:mx-24 mx-6 mt-2" id="img">
            <Sponsor users={organizers} word="Organizing Committee" />
      </div>
    </div>
  );
};

export default Committees;
