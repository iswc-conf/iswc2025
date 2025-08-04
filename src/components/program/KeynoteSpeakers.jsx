import React from "react";
import satoshi from "./keynote_speaker/satoshi_sekine.png";
import denny from "./keynote_speaker/Dr_Denny_Vrandecic.jpg";

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
                        Denny Vrandečić is Head of Special Projects at the Wikimedia Foundation and visiting Professor at King’s College London. He leads the Abstract Wikipedia project, which aims to give many more people the ability to contribute to, collaborate on, and read knowledge in their own language. Previously, he was an ontologist for the Google Knowledge Graph and researcher in Google AI, founder of Wikidata, co-creator of Semantic MediaWiki, and a member of the Board of Trustees of the Wikimedia Foundation. He received his PhD from KIT on the topic of Ontology Evaluation. He previously worked at KIT, CNR, USC ISI, Wikimedia Deutschland, and Google. He received the Knowledge Graph Conference Lifetime Achievement Award in 2023 and was co-research track chair of ISWC in 2018.
                    </p>
                </div>
            </div>
        </>
    );
}

export default KeynoteSpeakers;
