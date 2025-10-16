import React from "react";
import { useState, useRef } from "react";

export const DC = () => {
    const program = [
        {
            time: "9:00 – 10:30",
            label: "Session 1 · AM",
            items: [
                {
                    type: "keynote",
                    speaker: "Heiko Paulheim",
                    title:
                        "How I ended up rejecting my own paper (and other things I learned on the way)",
                },
                {
                    type: "talk",
                    speaker: "Sarah Rebecca Ondraszek",
                    title:
                        "Viewsari: Enabling New Perspectives on the Renaissance with a Knowledge Graph of Giorgio Vasari’s The Lives",
                },
                {
                    type: "talk",
                    speaker: "Simon Burbach",
                    title:
                        "A Knowledge-Guided Hybrid Learning Framework for Semantic Constraint Integration in Time Series Models",
                },
                { type: "break", title: "Coffee Break" },
            ],
        },
        {
            time: "11:00 – 12:30",
            label: "Session 2 · AM",
            items: [
                {
                    type: "talk",
                    speaker: "Jenifer Tabita Ciuciu-Kiss",
                    title:
                        "Attributes, Taxonomies and Semantic alignment for Automated Research Software Classification",
                },
                {
                    type: "talk",
                    speaker: "Gabriele Tuozzo",
                    title:
                        "Quality Without Borders: A Modular Approach to Unified Knowledge Graph Assessment",
                },
                {
                    type: "talk",
                    speaker: "Alexis Ellis",
                    title: "SLAi: Symbolic Language for Artificial Intelligence Systems",
                },
                {
                    type: "talk",
                    speaker: "Sarah T. Bachinger",
                    title:
                        "Examining the Representation of Uncertainty in Knowledge Graphs for Copolymer Chemistry",
                },
                { type: "break", title: "Lunch" },
            ],
        },
        {
            time: "1:30 – 3:00",
            label: "Session 1 · PM",
            items: [
                {
                    type: "talk",
                    speaker: "Javad Saeedizade",
                    title: "Large Language Models as Assistants for Ontology Engineering",
                },
                {
                    type: "talk",
                    speaker: "Maxime Haurel",
                    title:
                        "Extracting problem-solving knowledge from LLMs with reasoning abilities",
                },
                {
                    type: "talk",
                    speaker: "Fernando Spadea",
                    title:
                        "Enhancing Recommendation Systems Using Large Language Models and Personalized Knowledge Graphs",
                },
                {
                    type: "talk",
                    speaker: "Kelsey Rook",
                    title:
                        "Open Knowledge Extraction from Dialogue Using In-Context Learning",
                },
                { type: "break", title: "Coffee Break" },
            ],
        },
        {
            time: "3:30 – 5:00",
            label: "Session 3 · PM",
            items: [
                {
                    type: "panel",
                    speakers: ["Lise Stork", "Sabrina Kirrane", "Elena Simperl"],
                    title: "I wish I knew that … during my PhD",
                    subtitle: "AMA Panelists plus DC Chairs",
                },
            ],
        },
    ];

    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center"></div>
            <br />
            <div className="flex flex-col pt-10 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-8 tracking-wide text-center">
                    Doctoral Consortium
                </p>


                {/* Keynote Section */}
                <section className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                    <div className="p-6 sm:p-8">
                        <div className="flex items-start gap-4">
                            {/* <div className="h-16 w-16 shrink-0 rounded-full bg-zinc-100 ring-1 ring-zinc-200 flex items-center justify-center text-xl font-semibold text-zinc-700">
                                HP
                            </div> */}
                            <div className="min-w-0">
                                <h2 className="text-2xl font-bold tracking-tight">
                                    Keynote Speaker · Heiko Paulheim
                                </h2>
                                <p className="mt-1 text-sm text-zinc-500">
                                    Full Professor for Data Science, University of Mannheim
                                </p>
                                <p className="mt-4 leading-relaxed text-zinc-800">
                                    Heiko Paulheim is a Full Professor for Data Science at the
                                    University of Mannheim. His group conducts various projects
                                    around knowledge graphs, yielding, among others, the public
                                    knowledge graphs WebIsALOD, CaLiGraph, and DBkWik. Moreover, his
                                    group is concerned with using knowledge graphs in machine
                                    learning, which has led to the development of the widespread
                                    RDF2vec method for knowledge graph embeddings, and with projects
                                    on using such technologies in various domains, such as
                                    manufacturing or medical diagnosis. In the recent past, Heiko
                                    Paulheim has also been leading projects which are concerned with
                                    ethical, societal, and legal aspects of AI, including the
                                    KareKoKI investigating the impact of price-setting AIs on
                                    antitrust legislation, and the ReNewRS project on ethical news
                                    recommenders.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                                
                <br/>
                {/* Program Section */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight">Program</h2>
                    <div className="grid gap-6">
                        {program.map((session, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-zinc-200 bg-white shadow-sm"
                            >
                                <div className="flex items-baseline justify-between border-b border-zinc-100 px-6 py-4">
                                    <h3 className="text-lg font-semibold text-zinc-900">
                                        {session.label}
                                    </h3>
                                    <time className="text-sm text-zinc-500">{session.time}</time>
                                </div>
                                <ul className="grid gap-3 p-4 sm:p-6">
                                    {session.items.map((item, j) => (
                                        <li
                                            key={j}
                                            className={`rounded-xl p-4 shadow-sm ${item.type === "keynote"
                                                    ? "border border-amber-200 bg-amber-50"
                                                    : item.type === "panel"
                                                        ? "border border-indigo-200 bg-indigo-50"
                                                        : item.type === "break"
                                                            ? "border border-zinc-100 bg-zinc-50 text-center text-zinc-600 p-3"
                                                            : "border border-zinc-200 bg-white"
                                                }`}
                                        >
                                            {item.type === "break" ? (
                                                item.title
                                            ) : (
                                                <>
                                                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                                        <div
                                                            className={`font-medium ${item.type === "keynote"
                                                                    ? "text-amber-900 font-semibold"
                                                                    : item.type === "panel"
                                                                        ? "text-indigo-900 font-semibold"
                                                                        : "text-zinc-900"
                                                                }`}
                                                        >
                                                            {item.type === "keynote"
                                                                ? `Keynote · ${item.speaker}`
                                                                : item.type === "panel"
                                                                    ? "Panel"
                                                                    : item.speaker}
                                                        </div>
                                                        <div
                                                            className={`text-xs uppercase tracking-wide ${item.type === "keynote"
                                                                    ? "text-amber-700"
                                                                    : item.type === "panel"
                                                                        ? "text-indigo-700"
                                                                        : "text-zinc-400"
                                                                }`}
                                                        >
                                                            {item.type === "keynote"
                                                                ? "Keynote"
                                                                : item.type === "panel"
                                                                    ? "Discussion"
                                                                    : `Talk ${j + 1}`}
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={`mt-1 ${item.type === "keynote"
                                                                ? "text-amber-900"
                                                                : item.type === "panel"
                                                                    ? "text-indigo-900"
                                                                    : "text-zinc-700"
                                                            }`}
                                                    >
                                                        {item.title}
                                                    </div>
                                                    {item.speakers && (
                                                        <div className="mt-1 text-indigo-800">
                                                            {item.speakers.join(", ")}
                                                        </div>
                                                    )}
                                                    {item.subtitle && (
                                                        <div className="mt-1 text-indigo-700 text-sm">
                                                            {item.subtitle}
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <footer className="pt-4 text-sm text-zinc-500">
                    Schedule subject to minor changes. Times are local.
                </footer>


            </div>
        </>
    );
};

export default DC;
