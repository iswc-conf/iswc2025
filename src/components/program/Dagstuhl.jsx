import React from "react";
import { useState, useRef } from "react";

export const DagstuhlWorkshops = () => {
    const workshops = [
        {
            title: "Trust, Autonomy and Accountability in PKG-Based Agentic AI (TAPAI)",
            organizers: "John Domingue, Aidan Hogan, Luis-Daniel Ibanez, Oshani Seneviratne and Maria-Esther Vidal",
            website: "https://tapai-iswc25.github.io",
            social_medias: [
                {
                    social_media: "#TAPAI"
                }
            ]
        },
        {
            title: "Explainable AI using Ontologies and Knowledge Graphs",
            organizers: "Raghava Mutharaju and Manas Gaur",
            description: "",
            website: ""
        },
        {
            title: "Are Ontologies Still Relevant in the Era of LLMs?",
            organizers: "Raghava Mutharaju, Cogan Shimizu, and Valentina Tamma",
            description: "",
            website: ""
        },
        {
            title: "ReAGENT-SW: Realising Autonomous Generative agENTs for the Semantic Web",
            organizers: "Ora Lassila, Valentina Tamma, and Ilaria Tiddi",
            description: "",
            website: "https://reagent-sw.github.io/",
        }
    ];
    const [openIndexes, setOpenIndexes] = useState([]);
    const detailRefs = useRef([]);
    const toggleDetail = (index) => {
        setOpenIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index) // Close it if already open
                : [...prev, index] // Open it if closed
        );
    };

    const scrollToDetails = (idx) => {
        if (detailRefs.current[idx]) {
            detailRefs.current[idx].scrollIntoView({ behavior: "smooth", block: "start" });
            toggleDetail(idx); // Open the details
        }
    };

    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center"></div>
            <br />
            <div className="flex flex-col pt-10 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-8 tracking-wide text-center">
                    Accepted Dagstuhl Workshops
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse text-left text-sm lg:text-base">
                        <thead>
                            <tr className="bg-[#f8f8f8] text-[#e94607] font-bold border-b">
                                <th className="p-4 border border-gray-300 w-1/4">Dagstuhl Workshop Title</th>
                                <th className="p-4 border border-gray-300 w-1/4">Organizers</th>
                                {/* <th className="p-4 border border-gray-300 w-1/2">Description</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {workshops.map((ws, idx) => (
                                <tr key={idx} className="border-b">
                                    <td className="align-top p-4 border border-gray-200 font-semibold">
                                        <div onClick={() => scrollToDetails(idx)}
                                            className="hover:underline text-[#e94607]">
                                            <a target="_blank" href={ws.website || "#"}
                                                onClick={(e) => {
                                                    if (!ws.website) e.preventDefault(); // stops navigation
                                                }}>{ws.title}</a>
                                        </div>
                                    </td>
                                    <td className="align-top p-4 border border-gray-200">{ws.organizers}</td>
                                    {/* <td className="align-top p-4 border border-gray-200 whitespace-pre-line">{ws.description}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default DagstuhlWorkshops;
