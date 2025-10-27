import React from "react";
import satoshi from "./keynote_speaker/satoshi_sekine.png";
import denny from "./keynote_speaker/Dr_Denny_Vrandecic.jpg";
import rachel from "./keynote_speaker/rachel_adams.png"
import yuko from "./keynote_speaker/yuko_harayama.png"

export const KeynoteSpeakers = () => {
    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center"></div>
            <br />
            <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">Keynote Speakers</p>
                <div className="text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2">

                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Keynote Talk: Yuko Harayama</h2>
                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Human Society challenged by AI?</h2>

                    <p>The use of AI is becoming an everyday practice, with some people using it alongside their familiar search engine. The businesses and public sector organizations are experimenting and implementing these new technologies to improve the provision of products and services, as well as their internal operations.
                    As a result, AI systems are transforming society as a whole, and the full impact of this remains to be seen.
                    There are already many debates and policy discussions in place at national, regional and international levels, with different approaches ranging from legislation and guidelines to voluntary commitments. We are currently testing these tools.</p>
                    <p>In my presentation, I will briefly discuss my personal journey towards AI governance issues and attempt to provide a framework for considering the future interplay between AI and human society.</p>

                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Speaker's Bio</h2>
                    <img src={yuko} alt="Dr. Yuko Harayama" className="rounded-xl my-4 h-[500px]" />
                    <p>
                        Dr. Yuko Harayama serves as Secretary General of the Global Partnership on AI (GPAI) Tokyo Expert Support Center, where she leads international collaboration on artificial intelligence governance and policy. She currently holds positions as a trustee of Yamaguchi University and board member of Toray Industries.
                        Dr. Harayama brings extensive experience from senior roles across government, international organizations, and academia. She previously served as Executive Director for International Affairs at RIKEN and held key positions in Japan's Cabinet Office as Executive Member of the Council for Science, Technology and Innovation. Her international expertise was further developed during her tenure as Deputy Director of the Directorate for Science, Technology and Industry at the OECD. In academia, she was a professor at Tohoku University's Graduate School of Engineering for a decade.
                        She is a Légion d'Honneur recipient (Chevalier) and holds an honorary doctorate from the University of Neuchâtel. She is an International Fellow of the Royal Swedish Academy of Engineering Sciences and a Foundation Fellow of the International Science Council. She holds a doctorate in education and a doctorate in economics, both from the University of Geneva.
                    </p>

                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Keynote Talk: Satoshi Sekine</h2>
                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Building Safety on Large Language Model</h2>
                    <p>I will introduce the activities on AI Safety, mostly conducted at the Research and Development Center for Large Language Models, National Institute of Informatics (NII-LLMC). At our institute, we are developing LLM from scratch (i.e., from pre-training) in order to ensure transparency through elucidation of the learning principles of generative AI models, and carry out R&D that contributes to the advancement of generative AI models. Safety is one of the most crucial components, and the technologies to embody the safety will be educational for many industrial partners developing LLMs. We will introduce AnswerCarefully, a  dataset for promoting the safety and appropriateness of Japanese LLM outputs. The dataset consists of 1,800 pairs of questions and reference answers, where the questions require special attention in answering. It covers a wide range of risk categories established in prior English language datasets, but the data samples are original in that they are manually created to reflect the socio-cultural context of LLM usage in Japan. We show that using this dataset for instruction to fine-tune a Japanese LLM led to improved output safety without compromising the utility of general responses. We also report the results of a safety evaluation of 12 Japanese LLMs using this dataset as a benchmark. Finally, we describe the latest update on the dataset, which provides English translations and annotations of the questions, aimed at facilitating the derivation of similar datasets in different languages and regions. We will also introduce other activities, including the development of a misinformation and disinformation dataset, Jailbreak data set, fine-tuning and DPO tuning for safety, a large human evaluation experiment, and so on.</p>

                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Speakers's Bio</h2>
                    <img src={satoshi} alt="Satoshi Sekine" className="rounded-xl my-4 h-[500px]" />
                    <p>
                        Satoshi Sekine is a professor at the Large Language Model Research and Development Center at the National Institute of Informatics, Japan. He received PhD at New York University in 1998. He has been working on Natural Language Processing, in particular Information Extraction, Named Entity, Question Answering, and, most recently development of data for LLM, and other related topics. He has his own research venture, LanguagrCraft, and has been working with different companies as a regular employee or a visitor, including Panasonic, SONY-CSL, Microsoft Research, and Rakuten, among others.
                    </p>

                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Keynote Talk: Denny Vrandečić</h2>
                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Wikipedia and the Semantic Web - Celebrating 20 years of co-development, and the future</h2>
                    <p>In 2005, the very first papers proposed integrating Semantic Web technologies in the nascent Wikipedia ecosystem. This wasn’t just a convergence; it ignited two decades of mutual inspiration and benefit. From this crucible, the work in semantic wikis drew inspiration. Semantic MediaWiki particularly, which found global adoption at Google, Microsoft, NASA, and beyond. Wikipedia became the bedrock for pioneering knowledge graphs, including DBpedia, Freebase, and Yago. These pivotal experiences directly fueled the development of Google’s Knowledge Graph, a term that has since found ubiquitous adoption, and, critically, Wikidata, a project that has become an indispensable, living component of Wikipedia itself. With over half a million global contributors, Wikidata stands as the world’s most-edited wiki, powering one of, if not the, most widely-used public SPARQL endpoint. Its software, Wikibase, has spawned a federation of knowledge graphs, serving diverse domains from museums to language preservation. Furthermore, Wikidata’s evolution into lexicographic data (inspired by ontologies such as OntoLex and Lemon) laid the groundwork for projects such as Wikifunctions and Abstract Wikipedia, a vision first unveiled right here at ISWC 2018 and now an ocial Wikimedia Foundation project.</p>
                    <p>This takes us to the present and future: Abstract Wikipedia collaboratively confronts the inherent expressivity gap in knowledge graphs, while Wikipedia’s foundational role in training and the current use of language models can not be overstated. This creates a tantalising confluence of large language models and knowledge graphs, hinting at profound opportunities - and critical challenges - for Wikipedia, the Web, and beyond. As this rich history promises many more years of co-development and mutual inspiration, we will conclude with a forward-looking sketch of open research questions and exciting upcoming opportunities.</p>

                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Speakers's Bio</h2>
                    <img src={denny} alt="Denny Vrandečić" className="rounded-xl my-4 h-[500px]" />
                    <p>
                        <a href="https://en.wikipedia.org/wiki/Denny_Vrande%C4%8Di%C4%87" target="_blank">Denny Vrandečić</a> is Head of Special Projects at the Wikimedia Foundation and visiting Professor at King’s College London. He leads the Abstract Wikipedia project, which aims to give many more people the ability to contribute to, collaborate on, and read knowledge in their own language. Previously, he was an ontologist for the Google Knowledge Graph and researcher in Google AI, founder of Wikidata, co-creator of Semantic MediaWiki, and a member of the Board of Trustees of the Wikimedia Foundation. He received his PhD from KIT on the topic of Ontology Evaluation. He previously worked at KIT, CNR, USC ISI, Wikimedia Deutschland, and Google. He received the Knowledge Graph Conference Lifetime Achievement Award in 2023 and was co-research track chair of ISWC in 2018.
                    </p>


                </div>
            </div>
        </>
    );
}

export default KeynoteSpeakers;
