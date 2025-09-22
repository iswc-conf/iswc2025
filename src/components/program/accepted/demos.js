const demos = [
    {
        id: 'D1',
        title: "Introducing GPTKB to the Semantic Web",
        authors: "Yujia Hu, Tuan-Phong Nguyen, Shrestha Ghosh, Moritz Müller and Simon Razniewski",
        abstract: "Knowledge bases (KBs) are a cornerstone of the Semantic Web, yet they still struggle with scale and scope, and their construction and curation still involve a lot of manual effort. Large language models (LLMs) have recently emerged as powerful tools for a range of tasks, yet their potential for automated KB construction is still poorly understood.  In this demonstrator, we showcase GPTKB, a methodology and KB entirely built from GPT-4.1. GPTKB is constructed by massive-recursive LLM knowledge materialization (Hu et al., 2025), using over 9M API calls for $14,000 to construct a 100M-triple knowledge base with over 6M entities.  Our demonstration focuses on two use cases: (i) Link-based KG exploration and (ii) SPARQL-based analysis and comparison to Wikidata. The GPTKB demonstrator is accessible at https://gptkb.org."
    },
    {
        id: 'D2',
        title: "metis: AI Agent Platform for Human-AI Interaction with Knowledge Graphs",
        authors: "Linn Aung, Aaron Eberhart, Peter Haase, Nicolas Heist, Liubov Kovriguina, David Lamprecht and Nazanin Mashhaditafreshi",
        abstract: "We present metis, an AI agent platform, that assists users with semantic modeling, search, and discovery across knowledge graphs. It combines the conversational capabilities of Large Language Models (LLMs) with the precision of semantic knowledge graphs, integrating seamlessly with the functionalities of the metaphactory platform, such as semantic search and visualization. metis delivers AI agents that provide generative power, semantic precision & contextual, explainable insights."
    },
    {
        id: 'D3',
        title: "LifeGraph 5: A SPARQL-ing User Interface for Advanced Multimodal Lifelog Querying",
        authors: "Florian Ruosch and Luca Rossetto",
        abstract: "Lifelogging, the practice of recording parts of the subjective daily life, generates rich, multimodal data, but poses significant challenges for efficient retrieval. Building upon the LifeGraph series of knowledge graph-based lifelog retrieval systems, this paper presents the fifth iteration, which introduces a novel user interface to facilitate intuitive and powerful querying of lifelogs from multimodal knowledge graphs. We showcase how this frontend, powered by our custom MediaGraph store MeGraS, seamlessly exposes and leverages SPARQL capabilities. Through interactive demonstration scenarios, we illustrate how users can easily construct complex and expressive queries that also include advanced features such as similarity-based search, near-duplicate detection, and dynamic content extraction, all the while using native SPARQL syntax. This work highlights LifeGraph 5's user-centric design and MeGraS's role in bridging gaps between complex knowledge graph operations and accessible multimodal lifelog exploration."
    },
    {
        id: 'D4',
        title: "Towards Reliable Compositional Behavior in QALD Systems",
        authors: "David Maria Schmidt, Raoul Schubert and Philipp Cimiano",
        abstract: "Accompanying the Research Track paper \"CompoST: A Benchmark for Analyzing the Ability of LLMs To Compositionally Interpret Questions in a QALD Setting\", we investigate how compositionality is approached in our compositional question answering over linked data (QALD) pipeline \"NeoDUDES\". This way, we point out how some of the limitations of large language models (LLMs) w.r.t. compositional interpretation of QALD questions can be dealt with by combining LLMs with symbolic methods. In our demo, we show detailed intermediate results from the NeoDUDES pipeline, underlining how the strengths of neural and symbolic approaches can be combined in a fine-grained, compositional pipeline to tackle compositional tasks in a more reliable fashion."
    },
    {
        id: 'D5',
        title: "Demonstrating MinMod: A Large-scale Knowledge Graph of Historical Mining Data",
        authors: "Craig Knoblock, Binh Vu, Basel Shbita, Pothula Punith Krishna and Namrata Sharma",
        abstract: "We demonstrate MinMod, one of the largest knowledge graphs of historical mining data. MinMod is built using scalable machine learning methods to extract hundreds of thousands of records from mining reports, databases, and tables in articles and to normalize and integrate the results into a unified knowledge graph. MinMod also provides tools that enable end-users to explore, curate, and leverage the data to support the prediction of new sources of critical minerals. In this demo, we walk through the process of data extraction and integration into MinMod, demonstrate data exploration and curation, and showcase tools such as the Grade & Tonnage model that assist scientists in mineral assessments."
    },
    {
        id: 'D6',
        title: "CHeCLOUD—the Cultural Heritage Linked Open Data Cloud",
        authors: "Gabriele Tuozzo, Maria Angela Pellegrino and Antonio Lieto",
        abstract: "Cultural Heritage (CH) data have become increasingly prominent within the Semantic Web, yet dataset discoverability remains limited due to fragmentation across platforms and lack of a standard platform to give visibility to published data. This demo paper presents the main features of CHeCLOUD (Cultural Heritage Linked Open Data Cloud): the first domain-specific subcloud of the Linked Open Data Cloud specifically devoted to aggregate and enhance access to Knowledge Graphs (KGs) and ontologies related to CH. CHeCLOUD provides a centralized catalog of 192 curated CH KGs and ontologies and compute a FAIR score for each of them, relying on a automatic and periodic assessment of KGHeartBeat. CHeCLOUD currently offers RESTful APIs, metadata browsing, and interactive graph visualizations to support FAIR evaluation. Additionally, CHeCLOUD features a semi-automated submission pipeline that engages users and maintainers through GitHub-based workflows. CHeCLOUD aims to foster reuse, interoperability, and findability within the CH community, while offering a reusable infrastructure to support similar thematic hubs across other domains.  CHeCLOUD URL: http://isislab.it:12280/CHe-cloud/ Demo video: https://shorturl.at/6o0EZ GitHub repository: https://github.com/GabrieleT0/CHe-CLOUD CHeCLOUD REST APIs: https://github.com/GabrieleT0/CHe-CLOUD/tree/main/WebApp"
    },
    {
        id: 'D7',
        title: "It's About Time: Time Functions for Comparing Partial and Floating Time Literals in SPARQL",
        authors: "Ieben Smessaert, Julián Rojas and Pieter Colpaert",
        abstract: "Working with temporal data on the Semantic Web remains challenging due to SPARQL’s limited support for comparing time literals of different data types and handling floating times without explicit time zones. These issues are especially problematic when dealing with partial time literals (such as xsd:date, xsd:gYearMonth, or xsd:gYear) and floating times, both of which are common in real-world knowledge graphs like Wikidata. To showcase the relevance and urgency of the problem, we gathered and reviewed existing discussions, specifications, draft proposals, and examples from deployed knowledge graphs, providing a consolidated starting point for further community dialogue. We then proposed a solution in the form of a set of SPARQL extension functions—Time Functions—designed to reinterpret time literals as time intervals, enabling consistent and type-agnostic temporal comparisons. These functions are formally described using the Function Ontology (FnO), and implemented in the Comunica query engine, with a publicly available demo application that allows users to interactively explore and test the functions. The demo includes curated example queries that highlight both the limitations of existing SPARQL behavior and how the Time Functions enable more accurate filtering and sorting of temporal data. In addition to providing a technical proposal, we advocate for improved temporal data publishing practices, urging data providers to use accurate data types and explicit time zones to support reliable temporal reasoning in the open-world context of RDF."
    },
    {
        id: 'D8',
        title: "Building Questions and Queries Datasets for Knowledge Graphs: a Demo of Q²Forge",
        authors: "Yousouf Taghzouti, Franck Michel, Tao Jiang, Louis Felix Nothias and Fabien Gandon",
        abstract: "In this paper, we present a demo of how Q²Forge addresses the challenge of generating competency questions and corresponding SPARQL queries for any target Knowledge Graph. It iteratively validates those queries with human feedback and LLM as a judge. Q²Forge is open source, generic, extensible and modular. The demo shows the complete pipeline from competency question formulation to query evaluation, supporting the creation of reference question-query sets."
    },
    {
        id: 'D9',
        title: "Fraw: Sampling-Based Approximate Query Processing for Federations of SPARQL endpoints",
        authors: "Erwan Boisteau-Desdevises, Thi Hoang Thi Pham, Gabriela Montoya, Brice Nédelec, Hala Skaf-Molli and Pascal Molli",
        abstract: "SPARQL federation engines allow users to query multiple SPARQL endpoints as if all RDF data were available through a single virtual endpoint. However, executing complex SPARQL queries over federations while main- taining fast response times remains a major challenge. In this demonstration, we present Fraw, a SPARQL federation engine that supports sampling-based approximate query processing. This approach is particularly useful in scenarios where response time is essential and approximate results are acceptable. We showcase the effectiveness of our engine through an interactive SPARQL query autocompletion use case, where users receive timely suggestions during query authoring, despite the complexity of federated querying."
    },
    {
        id: 'D10',
        title: "Continuation Queries: Embracing Timeouts on Public SPARQL Endpoints",
        authors: "Thi Hoang Thi Pham, Gabriela Montoya, Brice Nédelec, Hala Skaf-Molli and Pascal Molli",
        abstract: "Public SPARQL endpoints, such as Wikidata, provide essential access points to large-scale knowledge graphs. However, they often suffer from strict timeouts that prevent the retrieval of complete query results. This demonstration presents the first public deployment of PASSAGE, a SPARQL query engine that guarantees query completeness through continuation queries. Instead of failing upon timeout, PASSAGE returns partial results along with a SPARQL continuation query capable of retrieving the missing results. These continuation queries can be chained iteratively until complete results are obtained. For this demo, attendees can interact with a PASSAGE loaded with 13B triples from Wikidata 2025, and observe in details its operation during their query execution."
    },
    {
        id: 'D11',
        title: "Are those URIs so cool? URI Resolution and Content Negotiation in Ontology Repositories",
        authors: "Clement Jonquet, Imad Eddine Bourouche and Syphax Bouazzouni",
        abstract: "The Semantic Web relies on persistent, resolvable, and negotiable URIs. However, many ontology URIs fail to meet these expectations, whether for identifying the ontologies themselves or the entities they contain. This paper presents an analysis of more than 1900 URIs from two major ontology repositories (aka. Semantic Artefact Catalogues) –AgroPortal and BioPortal— revealing that 54% of ontology URIs are not resolvable and that 92% do not support HTTP content negotiation. In response, we introduce a suite of tools and infrastructure enhancements developed within AgroPortal to diagnose and address URI management challenges at no cost for ontology developers and end users. Our approach offers a standalone diagnostic tool, the generation of \"twin URIs\" that support resolution and negotiation, and mechanisms to enable HTTP redirection. This system applies both to ontology URIs and to content URIs within ontologies. For the latter, our infrastructure returns –in four syntaxes— only the RDF statements directly related to the resource in question, not the complete source file. We demonstrate the entire system through the AgroPortal web interface and services (http://agroportal.lirmm.fr)."
    },
    {
        id: 'D12',
        title: "GenKD: Generative Knowledge Discovery through Knowledge Graphs and Large Language Models",
        authors: "Fouad Zablith, Shadi Youssef and Mathieu D'Aquin",
        abstract: "With the continuous growth of data published on the web, knowledge discovery is getting increasingly challenging. This challenge is mainly driven by the knowledge discovery process that often requires the continuous aggregation and exploration of questions and patterns that span local and external knowledge sources. This work investigates the facilitation of knowledge discovery over distributed sources of knowledge on the web. We present GenKD, a Generative Knowledge Discovery framework that leverages the semantic interconnectedness of knowledge graphs, and the generative capabilities of Large Language Models (LLMs). GenKD enables, through a user-AI collaborative process, the automatic generation of relevant questions, executable queries, and visualizations to uncover patterns from local and external knowledge graph sources. We demonstrate the feasibility of the proposed framework through a case study in the context of bee colonies and stressors."
    },
    {
        id: 'D13',
        title: "DBLPLink 2.0 - An Entity Linker for the DBLP Scholarly Knowledge Graph",
        authors: "Debayan Banerjee, Tilahun Taffa and Ricardo Usbeck",
        abstract: "In this work we present an entity linker for DBLP's 2025 version of RDF-based Knowledge Graph. Compared to the 2022 version, DBLP now considers publication venues as a new entity type called dblp:Stream. In the earlier version of DBLPLink, we trained KG-embeddings and re-rankers on a dataset to produce entity linkings. In contrast, in this work, we develop a zero-shot entity linker using LLMs using a novel method, where we re-rank candidate entities based on the log-probabilities of the \"yes\" token output at the penultimate layer of the LLM."
    },
    {
        id: 'D14',
        title: "TIB AIssistant: a Platform for AI-Supported Research Across Research Life Cycles",
        authors: "Allard Oelen and Sören Auer",
        abstract: "The rapidly growing popularity of adopting Artificial Intelligence (AI), and specifically Large Language Models (LLMs), is having a widespread impact throughout society, including the academic domain. AI-supported research has the potential to support researchers with tasks across the entire research life cycle. In this work, we demonstrate the TIB AIssistant, an AI-supported research platform providing support throughout the research life cycle. The AIssistant consists of a collection of assistants, each responsible for a specific research task. In addition, tools are provided to give access to external scholarly services. Generated data is stored in the assets and can be exported as an RO-Crate bundle to provide transparency and enhance reproducibility of the research project. We demonstrate the AIssistant's main functionalities by means of a sequential walk-through of assistants, interacting with each other to generate sections for a draft research paper. In the end, with the AIssistant, we lay the foundation for a larger agenda of providing a community-maintained platform for AI-supported research."
    },
    {
        id: 'D15',
        title: "Interactive Analysis of Knowledge Graph Validation Results with the SHACL Dashboard",
        authors: "Johannes Mäkelburg, Zenon Zacouris, Jin Ke and Maribel Acosta",
        abstract: "Validating knowledge graphs (KGs) ensures their quality and reliability in real-world applications. The Shapes Constraint Language (SHACL) has emerged as a recommended standard for validating RDF KGs, by defining structured constraints. Many organizations leverage SHACL validation and its reports to detect problems, guide corrections, and improve data quality. Yet, large-scale KGs often produce extensive validation reports, making manual analysis infeasible. To address this challenge, we present SHACL Dashboard, a novel online tool for visualization and multidimensional analysis of SHACL validation reports. It provides an interactive user interface featuring detailed violation summaries, analytical plots, and fine-grained insights into individual constraints. These functionalities enable users to efficiently understand validation results, identify problematic areas, and take precise corrective actions on their data. A demo version of the SHACL Dashboard is available online at https://purl.org/shacl-dashboard."
    },
    {
        id: 'D16',
        title: "ASK-DBLP: Answering Questions over DBLP",
        authors: "Tilahun Abedissa Taffa, Patrick Neises, Stefan Ollinger, Patrick Westphal, Marcel R. Ackermann, Debayan Banerjee and Ricardo Usbeck",
        abstract: "The scholarly knowledge graph (KG) - DBLP is currently serving as a source of structured information for the computer science community. Like most KGs, DBLP provides users with a SPARQL endpoint interface, which enables users to write a SPARQL query. However, not every user is familiar with the SPARQL syntax and the KG schema. Also, the publicly available KG question answering systems over DBLP are not robust enough to reflect the newest changes in the dblp schema. Hence, we propose ASK-DBLP, which allows users to write natural language questions, converts the question to SPARQL, and provides an answer. In the process, ASK-DBLP advises users to reformulate their questions if the question is not sufficiently clear. Besides, it allows users to select the correct entities among the candidate linked entities and update the generated SPARQL accordingly. The resulting SPARQL query can also be modified by the user. Once editing is done, the query can be evaluated, and the results will be shown. In the meantime, if the user confirms the correctness of the SPARQL and the answer, ASK-DBLP updates the training set for further SPARQL generation improvement. ASK-DBLP achieves a competitive performance over the DBLP-QuAD benchmark. The current deployed version of ASK-DBLP is found at~\\url{https://ask-dblp.nliwod.org}."
    },
    {
        id: 'D17',
        title: "An AI Pipeline for Scientific Literacy and Discovery: a Demonstration of Perspicacité-AI integration with Knowledge Graphs",
        authors: "Lucas Pradi, Tao Jiang, Matthieu Feraud, Madina Bekbergenova, Yousouf Taghzouti and Louis Felix Nothias",
        abstract: "Keeping up with the rapid pace of publishing is becoming an increasingly challenging task. Moreover, the interdisciplinary nature of research poses significant challenges for both students and academics. In this demo, we present Perspicacité-AI Expanded Pipeline: an agentic workflow powered by LLMs that leverages bibliographic knowledge graphs, local and web-based scientific literature searches. The demo highlights how this approach lowers the entry barrier for new researchers and eliminates manual curation of reference lists. The end result is high-quality reports with citations tailored to users' inquiries."
    },
    {
        id: 'D18',
        title: "Towards a novel interface for cinematographic places",
        authors: "Andrea Nasi, Diego Magro and Vincenzo Lombardo",
        abstract: "Archives and commercial platforms usually present films as bibliographic resources, with basic attributes such as director, actors, year of production, and language. The film story is often limitedly represented through a synopsis or a short summary of the plot. Our project focuses on a relevant though neglected element of the story: the film places, intended as the narrative places, i.e. the places where the events of the narrative occur, and the displayed locations, i.e. the places that represent the narrative places in the film. The real-world counterparts of film places, once represented in film archives and commercial platforms, could have an impact on practical activities, such as location management, film tourism, the history of urbanism, and cultural archives. This paper presents the demo of the RevIS (Revisualising Italian Silentscapes, 1896-1922) project, for the exploration of the cinematic productions of Italian silent cinema of the early twentieth century. Digital maps display a parallel view of film narrative places and displayed locations, while users can browse the film sequences and access the individual scenes. The dual-map metaphor allows for fleshing out the connection between the plot sequences and the places and relies upon an ontology-based metadata model we have devised for the digital archive of films and places. We also report on a preliminary evaluation of the demo interface, with promising results and expected criticisms."
    },
    {
        id: 'D19',
        title: "GRASP: Generic Reasoning And SPARQL Generation across Knowledge Graphs - Demo System",
        authors: "Sebastian Walter and Hannah Bast",
        abstract: "GRASP is the first zero-shot approach for SPARQL-based question answering that, in principle, works for arbitrary given RDF knowledge graphs. In this work, we present and describe a prototypical demo system that implements the GRASP approach. The system also supports general question answering and follow-up questions. We also provide additional evaluations on the IMDb knowledge graph and the TEXT2SPARQL challenge."
    },
    {
        id: 'D20',
        title: "LLMDapCat: An LLM-based Data Catalogue System for Data Sharing and Exploration",
        authors: "Shang Ferheng Karim, Aisha Kelifa, Amanda Marie Holsæter Kjær, Shanshan Jiang, Sondre Sørbø and Dumitru Roman",
        abstract: "Good data catalogues are essential for effective data sharing and discovery to cope with the rapid expansion of datasets and scientific literature available on the Web. In this paper, we present LLMDapCAT, an LLM-based metadata and data catalogue system that exploits Large Language Models (LLMs) and Retrieval Augmented Generation (RAG) for efficient data profiling, sharing, and exploration. We demonstrate how the system serves both data providers and consumers: on the one hand, it allows providers to automatically generate standardized and semantically accurate metadata from scientific papers using an LLM and RAG-based pipeline, and to publish them in the catalogue system; on the other hand, it enables consumers to browse available datasets and explore them in chat-like Q&A sessions using an external LLM service. The system can be applied to curate custom domain-specific scientific databases that facilitate search, understanding, and exploration of domain-specific datasets."
    },
    {
        id: 'D21',
        title: "Towards Queryable Verifiable Credentials",
        authors: "Gertjan De Mulder, Ruben Dedecker, Ben De Meester and Pieter Colpaert",
        abstract: "With initiatives like the European Digital Identity Wallet, the exchange of verifiable data via digital credentials using digital wallets is reaching mainstream adoption. As digital wallets gain adoption and the ecosystem grows, the current limits to query verifiable data from them in terms of flexibility and interoperability surface: digital credentials can only be directly queried based on JSON keys, thus hampering support for internationalization and alternative semantics. With this work, we present a practical approach to leverage Semantic Web technologies to combine the expressiveness of RDF with the semantic nature of W3C’s recommended Verifiable Credentials and existing wallet protocols like OID4VP. We enable using SPARQL queries to request specific claims within the OID4VP protocol, which are evaluated over the combined RDF representation of the wallet credentials, to return Verifiable Presentations that contain the requested claims using selective disclosure. We applied named graphs with blank node graph names to ensure a uniform and globally unique connection between credential claims and their credential and proof graphs when storing credentials in a wallet Knowledge Graph. To retrieve which claims need to be selectively disclosed from their original credentials, we applied an initial conversion from RDF triple predicates to JSONPath pointers, thus currently supporting only a subset of SPARQL expressivity. Through the addition of a SPARQL query in the OID4VP authorization flow, we enable semantically enriched query evaluation over the stored credentials, opening the way to semantic alignment of multilingual vocabularies and similar ontologies used in different online ecosystems. Future work is needed to improve SPARQL support to query over complex claim requirements, both for mapping the query to JSONPath pointers, and for addressing metadata requirements for requested claims."
    },
    {
        id: 'D22',
        title: "Decentralized based Generative AI Framework with Solid",
        authors: "Ahmad Cahyono Adi, Dhea Anggita and Kabul Kurniawan",
        abstract: "Generative AI (GenAI) application becomes increasingly an integral part of daily life, accelerating tasks and enhancing human productivity. As these Large Language Models (LLMs) platforms grow more personalized by learning from increasingly large volume of user (personal) data, it raises significant privacy, trust, and data ownership concerns. Current LLMs applications typically require users to store their personal data centrally on their own propiertary architecture, leading to fragmented user’s data and siloed accross individual platforms. This not only making it difficult to transfer user’s preferences or conversation histories to other GenAI platforms of their choice, but also limits their ability to switch across different GenAI platforms due to their monolitic design. To address these challenges, we propose a decentralized GenAI architecture that provide users full control over their data and privacy through Solid, a standardized interoperable personal data storage framework. We demonstrate a prototype system that integrate multiple LLMs within a single framework without requiring users to centrally store their personal data. We evaluate the system along three dimensions: retrieval-augmented generation (RAG)-based answer quality, multi-turn conversation coherence and qualitative LLMs comparison. Evaluation results show that the framework maintains high-quality responses and coherent conversations, while enabling flexible, cross-model personalization"
    },
    {
        id: 'D23',
        title: "LOAMA: Low-code ODRL Access Management Application",
        authors: "Wout Slabbinck, Lennert De Rouck, Joachim Van Herwegen, Wouter Termont, Beatriz Esteves and Ruben Verborgh",
        abstract: "State of the art authorization mechanisms have so far focused on dealing with data management, while leaving policy management and enforcement as an afterthought. Considering that the latter are of the utmost importance to deal not only with low-level technical requirements, but also crucial to deal with legal or economic requirements, we introduce LOAMA, the Low-code ODRL Access Management Application, which can be used to manage ODRL policies in decentralized settings through an Authorization Server. In this paper, beyond a demonstration of the LOAMA User Interface, we provide a overview of the LOAMA architecture, which is based on the User-Managed Access (UMA) specifications. LOAMA abstracts the complexity of managing policies, by providing a tool that people not familiar with policy languages can use the manage their preferences when it comes to access management. Future works includes the expansion of the LOAMA UI to support further ODRL constraints, e.g., to express purpose-based or temporal usage control policies."
    },
    {
        id: 'D24',
        title: "SynSem-Align (Demo): Ontology-Driven KG Extraction via Syntactic Candidate Mining and Paraphrase-Based Equivalence Filtering",
        authors: "Rikuto Sasaki, Masahito Yasui and Kazuhiro Takeuchi",
        abstract: "While Large Language Models (LLMs) are powerful for information extraction, the reliability of their output remains a challenge, making human supervision essential. We introduce SynSem-Align, a support tool where LLMs and humans collaborate on knowledge extraction. Our approach integrates three core components: (1) Ontology-Driven filtering to suggest relevant extraction patterns, (2) Syntactic Candidate Mining to precisely identify knowledge candidates using a CKY-based approach over dependency structures, and (3) Paraphrase-Based Equivalence Filtering using an LLM for semantic validation. This integrated workflow enables users to transparently and reliably construct knowledge graphs, demonstrating a practical path towards verifiable knowledge extraction that balances automation with human oversight."
    }
];

export { demos };