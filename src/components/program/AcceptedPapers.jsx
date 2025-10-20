import React from "react";
import { useState, useRef } from "react";
import { doctoralConsortium } from "./accepted/docoralConsortium";
import { researchTrack } from "./accepted/researchTrack";
import { resourceTrack } from "./accepted/resourceTrack";
import { inuseTrack } from "./accepted/inuseTrack";
import { industryTrack } from "./accepted/industryTrack"
import { posters } from "./accepted/posters"
import { demos } from "./accepted/demos"
import spotlight from "./accepted/spotnet.png"


export const AcceptedPapers = () => {
    const [openIndexes, setOpenIndexes] = useState([]);
    const detailRefs = useRef([]);
    const toggleDetail = (index) => {
        setOpenIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };
    const scrollToDetails = (idx) => {
        if (detailRefs.current[idx]) {
            detailRefs.current[idx].scrollIntoView({ behavior: "smooth", block: "start" });
            toggleDetail(idx);
        }
    };

    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center"></div>
            <br />
            <div className="flex flex-col pt-10 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:px-32 px-8 overflow-visible">

                {/* DC */}
                <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8">
                    <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">Doctoral Consortium</p>
                    <div className="mb-6">
                        <table className="border-collapse text-left text-sm lg:text-base table-fixed grid-no-grow">
                            <thead>
                                <tr className="bg-[#f8f8f8] text-[#e94607] font-bold border-b">
                                    <th className="p-4 border border-gray-300 grid-no-grow w-3/4">Title</th>
                                    <th className="p-4 border border-gray-300 grid-no-grow w-1/4">Authors</th>
                                </tr>
                            </thead>
                            <tbody>
                                {doctoralConsortium.map((paper, idx) => (
                                    
                                    <tr key={`dc-${idx}`} className="border-b align-top">
                                        <td
                                            className="p-4 border border-gray-200 font-semibold text-[#e94607] cursor-pointer hover:underline align-top"
                                            onClick={() => toggleDetail(`dc-${idx}`)}
                                        >
                                            <div className="flex items-start gap-2">
                                                <span className={`inline-block transform transition-transform ${openIndexes.includes(`dc-${idx}`) ? "rotate-90" : "rotate-0"}`}>
                                                    ▶
                                                </span>
                                                <div className="flex-1">
                                                    {paper.title}
                                                    {openIndexes.includes(`dc-${idx}`) && (
                                                        <div className="mt-2 text-gray-800 text-sm whitespace-pre-line">
                                                            {paper.abstract}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 border border-gray-200 align-top">{paper.authors}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Research */}
                <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8">
                    <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">Research Track</p>
                    <div className="mb-6">
                        <table className="border-collapse text-left text-sm lg:text-base table-fixed grid-no-grow">
                            <thead>
                                <tr className="bg-[#f8f8f8] text-[#e94607] font-bold border-b">
                                    <th className="p-4 border border-gray-300 grid-no-grow w-3/4">Title</th>
                                    <th className="p-4 border border-gray-300 grid-no-grow w-1/4">Authors</th>
                                </tr>
                            </thead>
                            <tbody>
                                {researchTrack.map((paper, idx) => (
                                    <tr key={`research-${idx}`} className="border-b align-top">
                                        <td
                                            className="p-4 border border-gray-200 font-semibold text-[#e94607] cursor-pointer hover:underline align-top"
                                            onClick={() => toggleDetail(`research-${idx}`)}
                                        >
                                            <div className="flex items-start gap-2">
                                                <span className={`inline-block transform transition-transform ${openIndexes.includes(`research-${idx}`) ? "rotate-90" : "rotate-0"}`}>
                                                    ▶
                                                </span>
                                                <div className="flex-1">
                                                    {paper.title}
                                                    {openIndexes.includes(`research-${idx}`) && (
                                                        <div className="mt-2 text-gray-800 text-sm whitespace-pre-line">
                                                            {paper.abstract}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 border border-gray-200 align-top">{paper.authors}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                {/* Resource */}
                <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8">
                    <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">Resource Track</p>
                    <div className="mb-6">
                        <table className="border-collapse text-left text-sm lg:text-base table-fixed grid-no-grow">
                            <thead>
                                <tr className="bg-[#f8f8f8] text-[#e94607] font-bold border-b">
                                    <th className="p-4 border border-gray-300 grid-no-grow w-3/4">Title</th>
                                    <th className="p-4 border border-gray-300 grid-no-grow w-1/4">Authors</th>
                                </tr>
                            </thead>
                            <tbody>
                                {resourceTrack.map((paper, idx) => (
                                    <tr key={`resource-${idx}`} className="border-b align-top">
                                        <td
                                            className="p-4 border border-gray-200 font-semibold text-[#e94607] cursor-pointer hover:underline align-top"
                                            onClick={() => toggleDetail(`resource-${idx}`)}
                                        >
                                            <div className="flex items-start gap-2">
                                                <span className={`inline-block transform transition-transform ${openIndexes.includes(`resource-${idx}`) ? "rotate-90" : "rotate-0"}`}>
                                                    ▶
                                                </span>
                                                <div className="flex-1">
                                                    {paper.spotlight && (
                                                        <img
                                                            src={spotlight} // Use the imported image variable
                                                            alt="Spotlight Paper"
                                                            className="w-4 h-4 mr-2 inline-block" // Apply desired styling (width, height, margin)
                                                        />
                                                    )}
                                                    {paper.title}
                                                    {openIndexes.includes(`resource-${idx}`) && (
                                                        <div className="mt-2 text-gray-800 text-sm whitespace-pre-line">
                                                            {paper.abstract}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 border border-gray-200 align-top">{paper.authors}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* In Use */}
                <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8">
                    <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">In-Use Track</p>
                    <div className="mb-6">
                        <table className="border-collapse text-left text-sm lg:text-base table-fixed grid-no-grow">
                            <thead>
                                <tr className="bg-[#f8f8f8] text-[#e94607] font-bold border-b">
                                    <th className="p-4 border border-gray-300 grid-no-grow w-3/4">Title</th>
                                    <th className="p-4 border border-gray-300 grid-no-grow w-1/4">Authors</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inuseTrack.map((paper, idx) => (
                                    <tr key={`inuse-${idx}`} className="border-b align-top">
                                        <td
                                            className="p-4 border border-gray-200 font-semibold text-[#e94607] cursor-pointer hover:underline align-top"
                                            onClick={() => toggleDetail(`inuse-${idx}`)}
                                        >
                                            <div className="flex items-start gap-2">
                                                <span className={`inline-block transform transition-transform ${openIndexes.includes(`inuse-${idx}`) ? "rotate-90" : "rotate-0"}`}>
                                                    ▶
                                                </span>
                                                <div className="flex-1">
                                                    {paper.title}
                                                    {openIndexes.includes(`inuse-${idx}`) && (
                                                        <div className="mt-2 text-gray-800 text-sm whitespace-pre-line">
                                                            {paper.abstract}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 border border-gray-200 align-top">{paper.authors}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Industry */}
                <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8">
                    <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">Industry Track</p>
                    <div className="mb-6">
                        <table className="border-collapse text-left text-sm lg:text-base table-fixed grid-no-grow">
                            <thead>
                                <tr className="bg-[#f8f8f8] text-[#e94607] font-bold border-b">
                                    <th className="p-4 border border-gray-300 grid-no-grow w-3/4">Title</th>
                                    <th className="p-4 border border-gray-300 grid-no-grow w-1/4">Authors</th>
                                </tr>
                            </thead>
                            <tbody>
                                {industryTrack.map((paper, idx) => (
                                    <tr key={`industry-${idx}`} className="border-b align-top">
                                        <td
                                            className="p-4 border border-gray-200 font-semibold text-[#e94607] cursor-pointer hover:underline align-top"
                                            onClick={() => toggleDetail(`industry-${idx}`)}
                                        >
                                            <div className="flex items-start gap-2">
                                                <span className={`inline-block transform transition-transform ${openIndexes.includes(`industry-${idx}`) ? "rotate-90" : "rotate-0"}`}>
                                                    ▶
                                                </span>
                                                <div className="flex-1">
                                                    {paper.title}
                                                    {openIndexes.includes(`industry-${idx}`) && (
                                                        <div className="mt-2 text-gray-800 text-sm whitespace-pre-line">
                                                            {paper.abstract}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 border border-gray-200 align-top">{paper.authors}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Posters */}
                <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8">
                    <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">Posters</p>
                    <div className="mb-6">
                        <table className="border-collapse text-left text-sm lg:text-base table-fixed grid-no-grow">
                            <thead>
                                <tr className="bg-[#f8f8f8] text-[#e94607] font-bold border-b">
                                    <th className="p-4 border border-gray-300 grid-no-grow w-3/4">Title</th>
                                    <th className="p-4 border border-gray-300 grid-no-grow w-1/4">Authors</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posters.map((paper, idx) => (
                                    <tr key={`poster-${idx}`} className="border-b align-top">
                                        <td
                                            className="p-4 border border-gray-200 font-semibold text-[#e94607] cursor-pointer hover:underline align-top"
                                            onClick={() => toggleDetail(`poster-${idx}`)}
                                        >
                                            <div className="flex items-start gap-2">
                                                <span className={`inline-block transform transition-transform ${openIndexes.includes(`poster-${idx}`) ? "rotate-90" : "rotate-0"}`}>
                                                    ▶
                                                </span>
                                                <div className="flex-1">
                                                    {paper.id}: {paper.title}
                                                    {openIndexes.includes(`poster-${idx}`) && (
                                                        <div className="mt-2 text-gray-800 text-sm whitespace-pre-line">
                                                            {paper.abstract}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 border border-gray-200 align-top">{paper.authors}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                
                {/* Demos */}
                <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8">
                    <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">Demos</p>
                    <div className="mb-6">
                        <table className="border-collapse text-left text-sm lg:text-base table-fixed grid-no-grow">
                            <thead>
                                <tr className="bg-[#f8f8f8] text-[#e94607] font-bold border-b">
                                    <th className="p-4 border border-gray-300 grid-no-grow w-3/4">Title</th>
                                    <th className="p-4 border border-gray-300 grid-no-grow w-1/4">Authors</th>
                                </tr>
                            </thead>
                            <tbody>
                                {demos.map((paper, idx) => (
                                    <tr key={`demo-${idx}`} className="border-b align-top">
                                        <td
                                            className="p-4 border border-gray-200 font-semibold text-[#e94607] cursor-pointer hover:underline align-top"
                                            onClick={() => toggleDetail(`demo-${idx}`)}
                                        >
                                            <div className="flex items-start gap-2">
                                                <span className={`inline-block transform transition-transform ${openIndexes.includes(`demo-${idx}`) ? "rotate-90" : "rotate-0"}`}>
                                                    ▶
                                                </span>
                                                <div className="flex-1">
                                                    {paper.id}: {paper.title}
                                                    {openIndexes.includes(`demo-${idx}`) && (
                                                        <div className="mt-2 text-gray-800 text-sm whitespace-pre-line">
                                                            {paper.abstract}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 border border-gray-200 align-top">{paper.authors}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AcceptedPapers;
