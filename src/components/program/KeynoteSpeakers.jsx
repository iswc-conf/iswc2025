import React from "react";
import satoshi from "./keynote_speaker/satoshi_sekine.png";
import denny from "./keynote_speaker/Dr_Denny_Vrandecic.jpg";
import rachel from "./keynote_speaker/rachel_adams.png"

export const KeynoteSpeakers = () => {
    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center"></div>
            <br />
            <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">Keynote Speakers</p>
                <div className="text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2">
                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Satoshi Sekine</h2>
                    <img src={satoshi} alt="Satoshi Sekine" className="rounded-xl my-4 h-[500px]" />
                    <p>
                        Satoshi Sekine is a professor at the Large Language Model Research and Development Center at the National Institute of Informatics, Japan. He received PhD at New York University in 1998. He has been working on Natural Language Processing, in particular Information Extraction, Named Entity, Question Answering, and, most recently development of data for LLM, and other related topics. He has his own research venture, LanguagrCraft, and has been working with different companies as a regular employee or a visitor, including Panasonic, SONY-CSL, Microsoft Research, and Rakuten, among others.
                    </p>

                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Denny Vrandečić</h2>
                    <img src={denny} alt="Denny Vrandečić" className="rounded-xl my-4 h-[500px]" />
                    <p>
                        <a href="https://en.wikipedia.org/wiki/Denny_Vrande%C4%8Di%C4%87" target="_blank">Denny Vrandečić</a> is Head of Special Projects at the Wikimedia Foundation and visiting Professor at King’s College London. He leads the Abstract Wikipedia project, which aims to give many more people the ability to contribute to, collaborate on, and read knowledge in their own language. Previously, he was an ontologist for the Google Knowledge Graph and researcher in Google AI, founder of Wikidata, co-creator of Semantic MediaWiki, and a member of the Board of Trustees of the Wikimedia Foundation. He received his PhD from KIT on the topic of Ontology Evaluation. He previously worked at KIT, CNR, USC ISI, Wikimedia Deutschland, and Google. He received the Knowledge Graph Conference Lifetime Achievement Award in 2023 and was co-research track chair of ISWC in 2018.
                    </p>

                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Rachel Adams</h2>
                    <img src={rachel} alt="Rachel Adams" className="rounded-xl my-4 h-[500px]" />
                    <p>
                        <a href="https://www.globalcenter.ai/about/rachel-adams" target="_blank">Rachel Adams</a>, PhD, is the Founding CEO of the <a href="https://www.globalcenter.ai/" target="_blank">Global Centre on AI Governance</a>. She is the author of The New Empire of AI: The Future of Global Inequality (Polity Press, 2024). She is an Assistant Research Professor of the Leverhulme Center for the Future of Intelligence, University of Cambridge, and an Honorary Research Fellow of The Ethics Lab at the University of Cape Town. She holds degrees in English Literature, International Human Rights Law and Philosophy. Her PhD was published as a book: Transparency: New Trajectories in Law (Routledge, 2020).
                    </p>
                    <p>
                        Rachel previously served as the Director of AI and Global Programmes at Research ICT Africa. Before joining RIA, she spent five years at the Human Sciences Research Council (HSRC) of South Africa, where she led various projects on AI in Africa and was the lead author of the book Human Rights and the Fourth Industrial Revolution in South Africa (HSRC Press, 2021). Prior to her appointment at the HSRC, Rachel was the Senior Researcher for Civil and Political Rights at the South African Human Rights Commission.
                    </p>
                    <p>
                        Rachel serves on numerous international expert committees, including for UNESCO, the UN, UNDP, WEF, the Gates Foundation, and the Global Partnership on AI.

                    </p>
                </div>
            </div>
        </>
    );
}

export default KeynoteSpeakers;
