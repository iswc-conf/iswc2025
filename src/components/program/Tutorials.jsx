import React from "react";
import { useState, useRef } from "react";

export const AcceptedTutorials = () => {
    const tutorials = [
        {
            "title": "Shaping Knowledge and Interoperable Graphs",
            "organizers": "Jose Emilio Labra Gayo",
            "description": "",
            "website": "https://www.validatingrdf.com/tutorial/iswc2025/",
            "social_medias": []
        },
        {
            "title": "Testing Knowledge Graph Applications (TestKG)",
            "organizers": "Eduard Kamburjan, Tobias John, Einar Broch Johnsen and Dominic Steinhöfel",
            "description": "",
            "website": "https://edkamb.github.io/TestKG/",
            "social_medias": []
        },
        {
            "title": "Referring Expressions in Artificial Intelligence and Knowledge Representation Systems",
            "organizers": "David Toman",
            "description": "",
            "website": "https://cs.uwaterloo.ca/~david/iswc25/",
            "social_medias": []
        },
        {
            "title": "An Introduction to RDF and SPARQL 1.2 (RDF/SPARQL 1.2)",
            "organizers": "Ruben Taelman, Enrico Franconi, Pierre-Antoine Champin and Ora Lassila",
            "description": "",
            "website": "https://www.w3.org/Talks/2025/iswc-tutorial-rdfsparql-12/",
            "social_medias": []
        },
        {
            "title": "OWL or SHACL: A Beginner’s Guide to Making the Right Choice",
            "organizers": "Davide D'Amico and Tara Raafat",
            "description": "",
            "website": "https://semanticmasterclass.github.io/iswc2025/",
            "social_medias": [
                {
                    "social_media": "Tara Raafat LinkedIn",
                    "social_media_url": "https://www.linkedin.com/in/tara-raafat-phd-1038315"
                },
                {
                    "social_media": "Davide D'Amico LinkedIn",
                    "social_media_url": "https://www.linkedin.com/in/davide~damico"
                }
            ]
        },
        {
            "title": "Building Streaming and Cross-Environment Data Processing Pipelines with RDF-Connect",
            "organizers": "Ieben Smessaert, Arthur Vercruysse, Julián Rojas and Pieter Colpaert",
            "description": "",
            "website": "https://rdf-connect.github.io/Tutorial-ISWC2025/",
            "social_medias": [
                {
                    "social_media": "GitHub",
                    "social_media_url": "https://github.com/rdf-connect"
                }
            ]
        },
        {
            "title": "SODa WissKI Bits Tutorial: Ontology-Driven Semantic Modeling and FAIR Publishing with WissKI",
            "organizers": "Canan Hastik, Gudrun Schwenk and Mark Fichtner",
            "description": "",
            "website": "https://liascript.github.io/course/?https://raw.githubusercontent.com/soda-collections-objects-data-literacy/SODa_WissKI-ISWC25Bits/refs/heads/main/didacticConcept/SODa_WissKI-ISWC25Bits_didacticConcept.md#1",
            "social_medias": [
                {
                    "social_media": "SODa LinkedIn",
                    "social_media_url": "https://www.linkedin.com/company/soda-zentrum"
                },
                {
                    "social_media": "Fedihum Mastodon",
                    "social_media_url": "https://fedihum.org/@SODa"
                }
            ]
        },
        {
            "title": "GeoKG 2025 Introduction to geospatial knowledge graphs",
            "organizers": "Sergios Anestis Kefalidis, Manolis Koubarakis, Konstantinos Plas and Cogan Shimizu",
            "description": "",
            "website": "https://ai-team-uoa.github.io/GeoKG-2025-ISWC/",
            "social_medias": []
        },
        {
            "title": "QUALIDATA - Linked Data Quality in Practice",
            "organizers": "Gianluca Demartini, Maria Angela Pellegrino, Anisa Rula and Gabriele Tuozzo",
            "description": "",
            "website": "https://gabrielet0.github.io/QUALIDATA/",
            "social_medias": []
        },
        {
            "title": "Key Facets in Modern Knowledge Graph Representation Learning (KeyKGRL)",
            "organizers": "Joyce Whang",
            "description": "",
            "website": "https://bdi-lab.github.io/keykgrl_iswc2025/",
            "social_medias": []
        }
    ]

    const sponsored_tutorials = 
    [
        {
            "title": "AI4EIA: A Practical and Hands-on Guide to Enterprise Information Architecture - From AI-Driven Ontology Modeling to Knowledge Graph Insights via Conversational AI",
            "organizers": "metaphacts GmbH, Walldorf, Germany",
            "description": "",
            "website": "https://github.com/iswc-conf/iswc2025/blob/main/public/tutorials/2025_ISWC_Tutorial.pdf",
            "social_medias": []
        }
    ]

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
                    Accepted Tutorials
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse text-left text-sm lg:text-base">
                        <thead>
                            <tr className="bg-[#f8f8f8] text-[#e94607] font-bold border-b">
                                <th className="p-4 border border-gray-300 w-1/4">Tutorial Title</th>
                                <th className="p-4 border border-gray-300 w-1/4">Organizers</th>
                                {/* <th className="p-4 border border-gray-300 w-1/2">Description</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {tutorials.map((ws, idx) => (
                                <tr key={idx} className="border-b">
                                    <td className="align-top p-4 border border-gray-200 font-semibold">
                                        <a
                                            href={ws.website}
                                            className="hover:underline text-[#e94607] group inline-flex items-center"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>{ws.title}</span>
                                            <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                🔗
                                            </span>
                                        </a>
                                    </td>
                                    <td className="align-top p-4 border border-gray-200">{ws.organizers}</td>
                                    {/* <td className="align-top p-4 border border-gray-200 whitespace-pre-line">{ws.description}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <br/>
                <br/>

                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-8 tracking-wide text-center">
                    Sponsored Tutorials
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse text-left text-sm lg:text-base">
                        <thead>
                            <tr className="bg-[#f8f8f8] text-[#e94607] font-bold border-b">
                                <th className="p-4 border border-gray-300 w-1/4">Tutorial Title</th>
                                <th className="p-4 border border-gray-300 w-1/4">Organizers</th>
                                {/* <th className="p-4 border border-gray-300 w-1/2">Description</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {sponsored_tutorials.map((ws, idx) => (
                                <tr key={idx} className="border-b">
                                    <td className="align-top p-4 border border-gray-200 font-semibold">
                                        { <a
                                            href={ws.website}
                                            className="hover:underline text-[#e94607] group inline-flex items-center"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        > 
                                            <span>{ws.title}</span>
                                            <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                🔗
                                            </span>
                                         </a>}
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

export default AcceptedTutorials;
