import React from "react";
import { About } from "../components/about";
import banner from "../components/assests/ISWC2025banner.webp"

const AboutPage = () => {
    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
                {/* <img src={logo} className="w-[64px] h-[64px] mr-4" alt="Logo" /> */}
            </div>
            <div className="container mx-auto px-4 lg:px-8 mt-12">
                {/* Banner Image */}
                <div className="w-full mb-8 flex justify-center">
                    <img
                        src={ banner }
                        alt="ISWC 2025 Banner"
                        className="w-full h-auto object-cover max-w-screen-lg min-h-[200px]"
                    />
                </div>

                {/* About Content */}
                <div className="bg-white p-6 lg:p-12 rounded-lg shadow-md">
                    <About />
                </div>
            </div>
        </>
    );
};


export default AboutPage;
