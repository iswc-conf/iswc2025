import React from "react";
export const About = () => {
    return (
        <>
            <div className="flex justify-center item-center flex-col pb-0 lg:pb-4 mb-4 lg:my-6  lg:h-[14rem] lg:px-16 px-6">
                <p className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide"><span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Abo</span>ut the conference</p>
                <p className=" text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2">
                    ISWC2024 is the premier international forum, for the Semantic Web / Linked Data Community. ISWC2024 will bring together researchers, practitioners, and industry specialists to discuss, advance, and shape the future of semantic technologies. Every year ISWC offers five exciting and fruitful days that you definitely don’t want to miss!
                </p>
                <br/>
                <p className=" text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2">
                    ISWC2024 will be an in-person conference. We are looking forward to meeting you in Baltimore in November 2024.
                </p>
                <br/>
                <p className=" text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2">
                    We are looking forward to your participation in the ISWC2024 Conference!
                </p>
                <br/>
                <p className=" text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2">
                    Registration and in-person attendance are mandatory for at least one author of accepted papers, demos, tutorials, and workshops. Failure to register will result in the removal of the paper from the proceedings. 
                </p>
            </div>
        </>
    );
}