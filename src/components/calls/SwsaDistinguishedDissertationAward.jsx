import React from "react";
import SWSAImage from "../attending/semantic_web_science_association.png"

export const SwsaDistinguishedDissertationAward = () => {
    return (
        <div>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>

            <div className="container mx-auto px-4 lg:px-8 lg:pb-12 mt-12">
                <h1 className="text-3xl font-bold text-center text-[#e94607]">SWSA Distinguished Dissertation Award</h1>
            </div>

            <div className="flex justify-center mt-8 mb-8">
                <img
                    src={ SWSAImage }
                    alt="Semantic Web Science Association"
                    className="w-full max-w-3xl rounded-xl shadow-md"
                />
            </div>

            <br />
            <p>The Semantic Web Science Association (SWSA) invites applications for the 2025 SWSA Distinguished Dissertation Award. </p>
            <p>The award will be presented during ISWC 2025.</p>
            <br />

            <p>Eligibility: </p>
            <p>Eligible doctoral dissertations are those that present innovative research results related to the combination of semantics, data, and the Web, which have been awarded a PhD strictly between January 01, 2024 and June 30, 2025, and which have not previously been nominated for this award. The selection of the dissertation will be based on the originality, significance, and impact of the work. Evidence of such impact includes (but is not limited to) publications at highly selective conferences and journals in the field.</p>
            <br />

            <p>Award committee: </p>
            <p>The award committee, which will comprise two members of SWSA and a number of external experts, will be the final arbiter in the decision process. The award committee may decide to consult additional external assessors and reserves the right not to award the prize if the applications do not meet the expected quality level.</p>
            <br />

            <p>The award:</p>
            <p>The award includes a certificate and a 1000 euros payment. A free registration to ISWC 2025 will also be covered. In addition, IOS Press will invite the winner to publish the dissertation as a book in the "Studies on the Semantic Web" series.</p>

            <br />
            <h2>HOW TO APPLY</h2>
            <p>Please refer to the application guidelines and instructions on the <a href="https://swsa.semanticweb.org/content/swsa-distinguished-dissertation-award" target="_blank" rel="noopener noreferrer">SWSA page</a></p>
        </div>
    )
}