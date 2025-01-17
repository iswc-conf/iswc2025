import React from "react";
import { Timeline } from "../components/timeline";

const ImportandDates = () => {
    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
                {/* <img src={logo} className="w-[64px] h-[64px] mr-4" alt="Logo" /> */}
            </div>
            <div className="container mx-center px-4 lg:px-8 mt-12">
                <div class="text-white mt-8  bg-[#e94607] w-2/3 py-2 text-center rounded-lg text-lg font-semibold transition  ">
                    Important Dates
                </div>
                {/* About Content */}
                <div className="bg-white p-6 lg:p-12 rounded-lg shadow-md">
                    <Timeline />
                </div>
            </div>
        </>
    );
};


export default ImportandDates;
