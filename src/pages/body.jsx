import React from "react";
import { Venue } from "../components/venue";
import { Guidelines } from "../components/Guidelines";
import { About } from "../components/about";
import { Timeline } from "../components/timeline";
import Sponsor from "../components/Sponsors/Sponsor";
import notableSpeakers from "../components/assests/notable speakers/notableSpeakers"
import organizingC from "../components/assests/organizing/organizing"
import { Hero } from "../components/Hero";
import { Link } from "react-router-dom";
import logo from "../components/assests/logo.png";

const Body = () => {
  return (
    <>
      <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
        {/* <img src={logo} className="w-[64px] h-[64px] mr-4" alt="Logo" /> */}
      </div>
      <Hero />
      <div className="flex justify-center items-center lg:mx-24 mx-6 mt-2">
        <div class="relative flex overflow-x-hidden">
          <div class="flex py-4 animate-marquee whitespace-nowrap">
            
          </div>
        </div>
      </div>
      <About />
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-x-0 mx-2 my-10 ">
        <div className="m-2 h-[500px] lg:col-span-4 flex flex-col justify-center items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          <div class="text-white mt-8  bg-[#33358c] w-2/3 py-2 text-center rounded-lg text-lg font-semibold transition  ">
            Important Dates
          </div>
          <Timeline />
        </div>
        {/* <div className="m-4 lg:col-span-3 w-90%  bg-[#33358c] flex justify-center items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          <Guidelines />
        </div> */}
        <div className="m-2 h-[500px] lg:col-span-4 flex flex-col items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          <div class="text-white mt-3  bg-[#33358c] w-2/3  py-2 text-center rounded-lg text-lg font-semibold transition  ">
            Announcements
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col justify-center items-center">

      </div>
      <div className="mx-auto" id="imp">
        <Sponsor users={notableSpeakers} word="International Advisory Board" />
        <Sponsor users={organizingC} word="Organizing Committee" />
      </div>
      {/* <hr className="my-10 w-[300px] mx-auto h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-25 dark:opacity-100" /> */}

      <Venue></Venue>
    </>
  );
};

export default Body;
