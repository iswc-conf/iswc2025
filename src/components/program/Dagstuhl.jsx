import React from "react";
import { useState, useRef } from "react";

export const DagstuhlWorkshops = () => {
    const workshops = [
        {
            title: "Trust, Autonomy and Accountability in PKG-Based Agentic AI (TAPAI)",
            organizers: "John Domingue, Aidan Hogan, Luis-Daniel Ibanez, Oshani Seneviratne and Maria-Esther Vidal",
            description: "This workshop will address how personal knowledge graphs (PKGS) can help to engender trust, autonomy and accountability in the context of agentic artificial intelligence. The question of how AI agents could leverage personal data to provide higher levels of automation and personalization for users has not been well-explored. While foundational models can be trained on public corpora of text, the recent emergence of computer-using agents, personal agents, etc., raise questions about how the user’s personal data can be used, and concerns about how they could be abused, in such a setting. Can AI agents be trusted with personal and potentially highly-sensitive user information? How can users maintain autonomy over their personal data in such a setting? How can AI agents and providers be held accountable when personal data are abused? In this session, we will address research questions regarding the use of PKGs to provide users with enhanced control and safety guarantees regarding how AI agents access and use their personal data.",
            website: "https://tapai-iswc25.github.io",
            social_medias: [
                {
                    social_media: "#TAPAI"
                }
            ]
        },
        {
            title: "Are Ontologies Still Relevant in the Era of LLMs?",
            organizers: "Raghava Mutharaju, Cogan Shimizu, and Valentina Tamma",
            description: "Ontologies are one of the key mechanisms for capturing domain knowledge in the form of important concepts and the relationships between them. It requires time, effort, and expertise to build the ontologies. They have been proven to be effective for applications involving data integration, question answering, recommendations, and explanation generation. However, Large Language Models (LLMs) trained on massive amounts of data are another source of knowledge. They are able to find interesting statistical patterns, memorize, and answer questions. On the other hand, they struggle with consistency and are prone to hallucinations. Given these trade-offs between ontologies and LLMs, in this workshop, we would like to explore three key questions -- a) applications/tasks that need grounded and high-quality curated knowledge in the form of ontologies (and LLMs just do not work in these cases), b) applications/tasks that were traditionally making use of ontologies but can now be handled very well by LLMs, and c) applications/tasks that need a combination of ontologies and LLMs. Discussion around these topics can drive future research and would also be very helpful for researchers new to the field.",
            website: ""
        },
        {
            title: "ReAGENT-SW: Realising Autonomous Generative agENTs for the Semantic Web",
            organizers: "Ora Lassila, Valentina Tamma, and Ilaria Tiddi",
            description: "The original vision of the Semantic Web, articulated in the seminal Scientific American article by Berners-Lee, Hendler, and Lassila, placed autonomous agents at the heart of the Web’s evolution: agents capable of discovering, reasoning over, and acting upon structured, linked data to assist users, automate tasks, collaborate across services, and facilitate knowledge-driven decision-making. These agents were conceived as proactive participants in a globally distributed, machine-readable ecosystem. However, two decades later and despite significant progress in ontologies, reasoning technologies, and the creation of a vast Linked Data cloud, autonomous agents that truly reason with and act upon structured knowledge remain elusive. The recent emergence of generative AI systems has revived interest in this vision; introducing new capabilities for communication, abstraction, and interaction, although often lacking semantic grounding, verifiability, or goal-driven autonomy. This Dagstuhl-style workshop aims to bring together researchers and practitioners to critically examine how recent developments can be harnessed to revisit and realise the agent-focussed vision of the Semantic Web. Through discussion that integrates relevant disciplines across the Semantic Web, artificial intelligence, multi-agent systems, and robotics, we will explore what opportunities generative AI introduces for autonomous agents capable of semantically grounded, context-aware, and interoperable decision-making, what challenges remain, and how we can build such agents - both in digital spaces and real-world environments.",
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
                    Accepted Dagstuhl-style Workshops
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse text-left text-sm lg:text-base">
                        <thead>
                            <tr className="bg-[#f8f8f8] text-[#e94607] font-bold border-b">
                                <th className="p-4 border border-gray-300 w-1/4">Workshop Title</th>
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
                                            {ws.title}
                                        </div>
                                    </td>
                                    <td className="align-top p-4 border border-gray-200">{ws.organizers}</td>
                                    {/* <td className="align-top p-4 border border-gray-200 whitespace-pre-line">{ws.description}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <br />
                {workshops.map((ws, idx) => (
                    <div key={idx} ref={(el) => (detailRefs.current[idx] = el)} id={`details-${idx}`} className="p-4 border rounded-lg">
                        <div
                            onClick={() => toggleDetail(idx)}
                            className="flex items-center gap-2 p-2 rounded"
                        >
                            <span className={`transform transition-transform ${openIndexes.includes(idx) ? "rotate-90" : "rotate-0"}`} >
                                »
                            </span>
                            <span className="font-bold text-[#e94607] hover:underline">
                                {ws.title}
                            </span>

                        </div>
                        {openIndexes.includes(idx) && <div className="mt-2">
                            <h2>Organizers</h2>
                            <p>{ws.organizers}</p>
                            <br />
                            <h2>Description</h2>
                            <p>{ws.description}</p>
                            {ws.website && (
                                <>
                                    <br />
                                    <h2>Website</h2>
                                    <p>
                                        <a href={ws.website} target="_blank" rel="noopener noreferrer">
                                            {ws.website}
                                        </a>
                                    </p>
                                </>
                            )}
                            {
                                ws.social_medias && (
                                    <>
                                        <br />
                                        <h2>Social Media</h2>
                                        {
                                            ws.social_medias.map((sm, idx) => (
                                                <>
                                                    <p>
                                                        <a href={sm.social_media_url} target="_blank" rel="noopener noreferrer">
                                                            {sm.social_media}
                                                        </a>
                                                    </p>
                                                </>
                                            ))
                                        }
                                    </>
                                )
                            }
                        </div>}
                    </div>
                ))}

                
            </div>
        </>
    );
};

export default DagstuhlWorkshops;
