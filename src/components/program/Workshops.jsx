import React from "react";

export const Workshops = () => {
    const workshops = [
        {
            title: "3rd Knowledge Base Construction from Pre-trained Language Models Workshop",
            organizers: "Duygu Sezen Islakoğlu, Jan-Christoph Kalo, Simon Razniewski and Sneha Singhania",
            description: "Language models (LMs), such as chatGPT, BARD, and T5, have demonstrated remarkable outcomes in numerous AI applications. Research has shown that these models implicitly capture vast amounts of factual knowledge within their parameters, resulting in an impressive performance in knowledge-intensive applications. The seminal paper ``Language Models as Knowledge Bases?'' sparked interest in the spectrum between language models and knowledge graphs, leading to a diverse range of interesting research on the usage of LMs for knowledge base construction. This research includes: (1) utilizing pre-trained LMs for knowledge base completion and construction tasks, (2) performing information extraction tasks, like entity linking and relation extraction, and (3) utilizing knowledge graphs to support LM applications. In this third edition of the LM-KBC workshop, we aim to continue last year's very successful 2nd edition of the LM-KBC workshop."
        },
        {
            title: "20th International Workshop on Ontology Matching (OM-2025)",
            organizers: "Sven Hertling, Huanyu Li, Cassia Trojahn, Pavel Shvaiko, Oktie Hassanzadeh, Jérôme Euzenat and Ernesto Jimenez-Ruiz",
            description: "Ontology matching is a key interoperability enabler for the Semantic Web, as well as a useful technique in some classical data integration tasks dealing with the semantic heterogeneity problem. It takes ontologies as input and determines as output an alignment, that is, a set of correspondences between the semantically related entities of those ontologies. These correspondences can be used for various tasks, such as ontology merging, data interlinking, query answering or navigation over knowledge graphs. Thus, matching ontologies enables the knowledge and data expressed with the matched ontologies to interoperate. The workshop has the following goals: - To bring together leaders from academia, industry and user institutions to assess how academic advances are addressing real-world requirements. The workshop will strive to improve academic awareness of industrial and final user needs, and therefore, direct research towards those needs. Simultaneously, the workshop will serve to inform industry and user representatives about existing research efforts that may meet their requirements. The workshop will also investigate how the ontology matching technology is going to evolve, especially with respect to data interlinking, process matching, web table and knowledge graph matching tasks. - To conduct an extensive and rigorous evaluation of ontology matching and instance matching (link discovery) approaches through the OAEI (Ontology Alignment Evaluation Initiative) 2025 campaign. OAEI 2025, besides real-world specific matching tasks, will introduce a new Circular Economy track. Therefore, the ontology matching evaluation initiative itself will provide a solid ground for discussion of how well the current approaches are meeting business needs. - To examine similarities and differences from other, old, new and emerging, techniques and usages, such as process matching, web table matching or knowledge embeddings."
        },
        {
            title: "Workshop on Actionable Knowledge Representation and Reasoning for Robots (AKR≥)",
            organizers: "Michael Beetz, Philipp Cimiano, Ken Fukuda, Michaela Kümpel, Enrico Motta, Ilaria Tiddi, Jan-Philipp Töberg and Takanori Ugai",
            description: "We propose a second edition for the Actionable Knowledge Representation and Reasoning for Robots workshop, focused on how robots can perform common sense reasoning to make sense of their environment, parameterize their actions and plan accordingly. Current robots are challenged by the dynamic nature of these environments, which requires them to deal with new situations, tasks, objects and goals they might not have experience with. As robots can't be pre-programmed for all possible variations, it is an important question to investigate how they can be equipped with the ability to acquire and apply commonsense knowledge to improve their sensemaking capabilities and reason about task execution. This can lead to more versatile robots, as they can tackle novel situations through reasoning instead of retraining. Given the availability of many commonsense knowledge resources on the Web, and the ability of large language models to extract and generate knowledge, this is a timely research topic. Our workshop will combine classical workshop elements (presentation of contributed papers, invited speakers) with hands-on tutorials to learn how symbolic knowledge can be put into action in existing robot architectures. Based on last year's experience, we expect to get approximately 8 submissions and 20-30 workshop participants."
        },
        {
            title: "5th International Workshop on Scientific Knowledge Representation, Discovery, and Assessment (Sci-K 2025)",
            organizers: "Anna Jacyszyn, Andrea Mannocci, Francesco Osborne, Georg Rehm, Angelo Salatino, Sonja Schimmler and Lise Stork",
            description: "In the last decades, there has been a surge in the volume of published scientific articles and related research objects (e.g., data sets, software, models), a trend that is expected to continue. The Sci-K workshop aims to provide a forum for researchers and practitioners from different disciplines to present, educate from, and guide research related to scientific knowledge. Specifically, we foresee three main challenging themes. Representation. There is an urge for Scientific Knowledge Graphs (SKGs), that offer flexible, context-sensitive, fine-grained, and machine-actionable representations of scholarly knowledge that are simultaneously structured, interlinked, and semantically rich. The key challenge in this area is the development of ontologies and methodologies that can capture the conceptualisation, representation, and interoperability of scholarly knowledge across different SKGs. Discovery. It is crucial that scholarly information is easily findable, discoverable, and visible so that it can be mined and organised within SKGs. Current challenges are related to discovering and extracting entities and concepts, integrating information from heterogeneous sources, identifying duplicates, finding connections between entities, and identifying conceptual inconsistencies. Assessment. Due to the continuous growth in the volume of research outputs, we need reliable and comprehensive indicators of scientific impact and merit for the diverse scientific outputs and actors."
        },
        {
            title: "Wikidata Workshop",
            organizers: "Nicolas Ferranti, Marcelo de Oliveira Costa Machado, Jorao Gomes Junior, Simon Razniewski and Axel Polleres",
            description: "Wikidata, an open knowledge base maintained by the Wikimedia Foundation, plays a crucial role in structuring data for projects, such as Wikipedia and Wiktionary. Over the years, the Wikidata Workshop has addressed key challenges such as data quality, multilingualism, and collaborative knowledge graph dynamics. For its fifth edition, we expand the scope to include discussions on the intersection of Wikidata and Generative AI, while continuing to explore established topics. We welcome contributions on knowledge augmentation, data curation, reasoning, and the broader impact of generative AI on Wikidata. By bringing together researchers and practitioners, this workshop fosters discussions on the evolving role of knowledge graphs in an AI-driven world."
        },
        {
            title: "SeMatS 2025 – Second International Workshop on Semantic Materials Science",
            organizers: "Andre Valdestilhas, Huanyu Li, Patrick Lambrix and Harald Sack",
            description: "Advanced technological solutions are pivotal for leveraging data in innovative research, but compatibility issues in scientific data hinder progress. Interoperability and efficient data access are crucial, and the Semantic Web emerges as a powerful solution. Historically, the intersection between Semantic Web (SW) technologies, and Materials Science and Engineering (MSE) dates back before the formalization of the Semantic Web concept in 2001. For instance, the creation of the Plinius ontology in 1994 provided a language-independent conceptual construction kit for the chemical composition of materials. Recent conferences in the MSE domain, such as the FEMS-Euromat (European Congress and Exhibition on Advanced Materials and Processes) and MSE congress, show a significant increase in Semantic Web applications, with over ten SW-related presentations in 2022, more than 20 in 2023 and the previous edition of the SeMats workshop in 2024 counted 10 accepted contributions. This growing adoption prompts a focus on attracting participants at the intersection of both areas. Expanding Semantic Web technologies to the Materials Science domain can enhance research outcomes by enabling the uniform consideration of heterogeneous data. It improves traceability and reproducibility and facilitates automatable data management solutions. The primary objective of the proposed workshop is to gather works applying Semantic Web Technologies in Materials Science, making these technologies accessible to a broader community. The workshop aims to provide an overview of existing approaches, identify relevant works, and bring together Materials Science and Semantic Web stakeholders for collaboration and innovation. Join us in exploring the transformative possibilities of Semantic Web Technologies in Materials Science, paving the way for a more interconnected and efficient research landscape."
        },
        {
            title: "2nd International Workshop on Retrieval-Augmented Generation Enabled by Knowledge Graphs (RAGE-KG 2025)",
            organizers: "Daniil Dobriy, Sanju Tiwari, Jennifer D'Souza, Nandana Mihindukulasooriya and Francesco Osborne",
            description: "Retrieval-Augmented Generation Enabled by Knowledge Graphs (RAGE-KG) aims to explore the state of the art and go beyond in integrating Retrieval-Augmented Generation (RAG) with the Semantic Web infrastructure as well as the synergies between Large Language Models (LLMs) and the Linked Open Data (LOD) ecosystem. The workshop seeks to foster innovative RAG and GraphRAG architectures relying on Semantic Web standards and new approaches to make LOD usable by LLMs, enhancing their ability to generate reliable, verifiable and context-aware responses based on structured, decentralized and authoritative data sources. The workshop is majorly focused on techniques for fine-tuning, prompting and otherwise integrating LLMs with KGs. Additionally, it will examine the development and application of RAG architectures across various use cases and provide a platform to advance research and innovation in this dynamic field. Building on the success and strong attendance of the last year, this year's workshop will include dynamic elements: (a) Pecha Kucha presentations of scientific research -- the backbone of the workshop, (b) industry papers and guest speakers showcasing the real-world applications of the technology and (c) a structured research matchmaking session stimulating collaborations and producing vision statements which will be included in the proceedings."
        },
        {
            title: "16th Workshop on Ontology Design and Patterns (WOP 2025)",
            organizers: "Hande Kucuk McGinty, Cogan Shimizu, Valentina Presutti, Eva Blomqvist and Pascal Hitzler",
            description: "We propose the 16th edition of the Workshop on Ontology Design and Patterns (WOP). The workshop series covers issues related to quality in ontology design and ontology design patterns (ODPs) for data and knowledge engineering in Semantic Web. The increased attention to ODPs in recent years through their interaction with emerging trends of the Semantic Web, such as knowledge graphs, can be attributed to their benefit for knowledge engineers and Semantic Web developers. Such benefits come in the form of direct links to requirements, reuse, guidance, and better communication. The workshop's aim is thus not just: 1) providing an arena for discussing patterns, pattern-based ontologies, systems, datasets, but also 2) broadening the pattern community by developing its own ``discourse'' for discussing and describing relevant problems and their solutions. A recent development in the Semantic Web community is that the general idea of \"pattern\" has begun to appear in different but related forms, and at WOP 2025, we intend to continue to include these new trends. We propose a full-day workshop consisting of three parts: a keynote, presentations of contributed papers, and a community session discussing joint long-term initiatives, with break-out sessions addressing specific problems."
        },
        {
            title: "HAIBridge 2025: 1st Workshop on Bridging Hybrid Intelligence and the Semantic Web",
            organizers: "Alexis Ellis, Subhashini Ganapathy, Fjollë Novakazi and Cogan Shimizu",
            description: "The principled integration of Hybrid Intelligence (HI) -- which combines human and artificial intelligence -- with the Semantic Web presents novel opportunities for enhancing decision-making, knowledge representation, and collaborative problem-solving. This workshop promotes the exploration at the intersection of these domains, focusing on how semantic technologies (e.g., ontologies, knowledge graphs, and linked data) can improve the adaptability, explainability, and reasoning capabilities of hybrid intelligence systems. Topics include human-AI collaboration, trustworthy AI, context-aware knowledge management, and real-world applications in areas such as healthcare, finance, and smart cities. At \"Smarter Together: Bridging Hybrid Intelligence and the Semantic Web,\" participants will engage across disciplinary boundaries, fostering interdisciplinary collaboration toward more robust, intelligent, transparent, and ethical AI-driven systems. The workshop will generally consist of a keynote, interactive discussions and breakouts, and brief, but informative, state-of-the-art research presentations."
        }
    ];

    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center"></div>
            <br />
            <div className="flex flex-col pt-10 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-8 tracking-wide text-center">
                    Accepted Workshops
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse text-left text-sm lg:text-base">
                        <thead>
                            <tr className="bg-[#f8f8f8] text-[#e94607] font-bold border-b">
                                <th className="p-4 border border-gray-300 w-1/4">Workshop Title</th>
                                <th className="p-4 border border-gray-300 w-1/4">Organizers</th>
                                <th className="p-4 border border-gray-300 w-1/2">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {workshops.map((ws, idx) => (
                                <tr key={idx} className="border-b">
                                    <td className="align-top p-4 border border-gray-200 font-semibold">{ws.title}</td>
                                    <td className="align-top p-4 border border-gray-200">{ws.organizers}</td>
                                    <td className="align-top p-4 border border-gray-200 whitespace-pre-line">{ws.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Workshops;
