import React from "react";
import { Timeline } from "../components/timeline";

const ImportandDates = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen"> {/* Ensures the content is centered vertically and horizontally on the page */}
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-x-0 mx-2 my-10 w-full max-w-6xl"> {/* Adjust max width as necessary */}
                    <div className="m-2 lg:col-span-8 flex flex-col justify-center items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
                        <div className="container mx-auto px-4 lg:px-8 mt-12">
                            <div className="text-white mt-8 bg-[#e94607] w-2/3 py-2 text-center rounded-lg text-lg font-semibold transition mx-auto">
                                Important Dates
                            </div>
                            {/* About Content */}
                            <div className="bg-white p-6 lg:p-12 rounded-lg shadow-md">
                                <Timeline />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};


export default ImportandDates;
