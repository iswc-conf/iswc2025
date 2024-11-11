import React from "react";
import Sponsor from "../components/Sponsors/Sponsor";
import organizingC from "../components/assests/organizing/organizing"
import data from "../components/assests/committee.json";

const Committees = () => {
  const committee = data.committee_members;
  return (
    <div className="my-36 px-4 lg:px-36 ">
      <div className="m-2 lg:col-span-8 justify-center items-center]" id="img">
            <Sponsor users={organizingC} word="Organizing Committee" />
      </div>
    </div>
  );
};

export default Committees;
