import React from "react";

import guha from "./guha.png";

export const Panel = () => {
    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>
            <br />
            <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">ISWC2025 Panel
                </p>
                <div className="text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2">

                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Reimagining Knowledge: The Future and Relevance of Symbolic Representation in the Age of LLMs</h2>

                    <p>As large language models (LLMs) continue to reshape the landscape of artificial intelligence, the role of symbolic representation, once central to knowledge modeling and reasoning, faces renewed scrutiny and exciting possibilities.</p>
                    <p>This panel, "Reimagining Knowledge: The Future and Relevance of Symbolic Representation in the Age of LLMs," brings together leading thinkers at the intersection of machine learning, knowledge engineering, and AI in the broader sense to explore the evolving relationship between symbolic and machine-learning paradigms. Through a multidisciplinary dialogue, panelists will examine whether symbolic structures remain essential for interpretability, reasoning, and alignment in modern AI systems or if they are being eclipsed by the impressive but opaque capabilities of LLMs.</p>

                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Panel Chair</h2>

                    <p><a href="https://en.wikipedia.org/wiki/Ramanathan_V._Guha" target="_blank" style={{'color': '#e94607'}}>Ramanathan V. Guha</a></p>

                    <img src={guha} alt="Ramanathan V. Guha" className="rounded-xl my-4 h-[300px]" />

                    <p><b>Ramanathan V. Guha</b> recently joined Microsoft as CVP and Technical Fellow. Earlier, he spent time at <a href="https://en.wikipedia.org/wiki/Google" target="_blank" style={{'color': '#e94607'}}>Google</a>, <a href="https://www.research.ibm.com/labs/almaden/" target="_blank" style={{'color': '#e94607'}}>IBM Almaden</a>, <a href="https://en.wikipedia.org/wiki/Netscape" target="_blank" style={{'color': '#e94607'}}>Netscape</a>, <a href="https://en.wikipedia.org/wiki/Apple_Advanced_Technology_Group" target="_blank" style={{'color': '#e94607'}}>Apple ATG</a>, and <a href="https://en.wikipedia.org/wiki/Microelectronics_and_Computer_Technology_Corporation" target="_blank" style={{'color': '#e94607'}}>MCC</a>. He also started multiple companies, including Epinions and Alpiri.</p>

                    <p>Guha is the creator of widely used web standards such as RSS, RDF, and Schema.org. His research interests include Knowledge Representation, Structured data on the Web, Trust networks, and Web Monetization.</p>

                    <p>At Microsoft, he recently conceived and developed <a href="https://news.microsoft.com/source/features/company-news/introducing-nlweb-bringing-conversational-interfaces-directly-to-the-web/" target="_blank" style={{'color': '#e94607'}}>NLWeb</a>.</p>

                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Panelists:</h2>

                    <p>To be announced.</p>

                </div>
            </div>
        </>
    );
}

export default Panel;