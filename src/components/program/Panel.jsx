import React from "react";

import guha from "./guha.png";
import ora from "./ora.png";
import natasha from "./natasha.png";
import tara from "./tara.png";
import elena from "./elena.png";
import juan from "./juan.jpeg";

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

                    <p><a href="https://en.wikipedia.org/wiki/Natasha_Noy" target="_blank" style={{'color': '#e94607'}}>Natasha Noy</a></p>
                    <img src={natasha} alt="Natasha Noy" className="rounded-xl my-4 h-[300px]" />
                    <p>Natasha Noy, Research Scientist, Google</p>
                    <p>Natasha Noy is a Research Scientist at Google. She focuses on making structured data more accessible and usable. She is the team leader for Dataset Search, a web-based search engine for all datasets. Natasha worked at Stanford Center for Biomedical Informatics Research before joining Google, where she made significant contributions to ontology building and alignment, as well as collaborative ontology engineering.</p>

                    <p><a href="https://www.linkedin.com/in/tara-raafat-phd-1038315/" target="_blank" style={{'color': '#e94607'}}>Tara Raafat</a></p>
                    <img src={tara} alt="Tara Raafat" className="rounded-xl my-4 h-[300px]" />
                    <p>Tara Raafat, Head of Metadata and Knowledge Graph Strategy, CTO Office at Bloomberg LP</p>
                    <p>Tara Raafat is Head of Metadata and Knowledge Graph Strategy in Bloomberg’s CTO Office, where she leads the development of Bloomberg’s enterprise Knowledge Graph and semantic metadata strategy, aligning it with AI and data integration initiatives to advance next-generation financial intelligence. With over 15 years of expertise in semantic technologies, she has designed and implemented knowledge-driven solutions across multiple domains including but not limited to  finance, telemedicine, regulatory compliance, and insurance. </p>

                    <p><a href="https://www.linkedin.com/in/juansequeda/" target="_blank" style={{'color': '#e94607'}}>Juan Sequeda</a></p>
                    <img src={juan} alt="Juan Sequeda" className="rounded-xl my-4 h-[300px]" />
                    <p>Juan Sequeda, Principal Fundamental Researcher at ServiceNow</p>
                    <p>Juan Sequeda is a Principal Fundamental Researcher at ServiceNow, joining through the acquisition of data.world and previously the acquisition of Capsenta, a spin-off from his doctoral research. Juan’s research and industry work has been on the intersection of data and AI, with the goal of reliably creating knowledge from inscrutable data, specifically designing and building knowledge graphs for enterprise data and metadata management. Juan serves as a strategic and innovation bridge across Product, Engineering, Marketing, Sales, and Customer, ensuring technical insights are aligned with business value.
                    </p>

                    <p><a href="https://en.wikipedia.org/wiki/Elena_Simperl" target="_blank" style={{'color': '#e94607'}}>Elena Simperl</a></p>
                    <img src={elena} alt="Elena Simperl" className="rounded-xl my-4 h-[300px]" />
                    <p>Elena Simperl, Professor of Computer Science at King’s College London and Director of Research at the Open Data Institute</p>
                    <p>Elena Simperl is a Professor of Computer Science at King’s College London, where she co-directs the King's Institute for Artificial Intelligence. She is also the Director of Research at the Open Data Institute, a Fellow of the British Computer Society and the Royal Society of Arts, and a Hans Fischer Senior Fellow. Elena’s work is at the intersection between AI and social computing. She features in the top 100 most influential scholars in knowledge engineering of the last decade and the Women in AI 2000 ranking. Elena co-chairs the Croissant working group in ML Commons, developing an open standard to improve data portability, discovery and use in AI. She is the president of the Semantic Web Science Association.</p>

                </div>
            </div>
        </>
    );
}

export default Panel;