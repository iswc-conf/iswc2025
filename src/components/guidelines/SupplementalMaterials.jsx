import React from "react";

export const SupplementalMaterials = () => {
    return (
        <>
            <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 tracking-wide">
                    Supplemental Material Statement Guide
                </p>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Key Points:</h2>
                <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                    <li>All papers submitted to the ISWC 2025 Research and In-Use Tracks must include a Supplemental Material Statement (even if to explain why such material cannot be published in whole or part)</li>
                    <li>It is expected that supplemental material is made (anonymously) available to reviewers as part of the initial submission, in anticipation of the review process, not after.</li>
                    <li>Reviewers are not obliged to review supplemental material in detail. Papers should thus be self-contained.</li>
                </ul>

                <p>Please find more details below.</p>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Reproducibility</h2>
                <p>Reproducibility is a key goal of scientific research, referring to the ability to independently replicate or verify the results presented in scholarly publications. In the context of computer science, providing access to supplemental material, such as code, datasets, proofs, etc., greatly facilitates reproducibility. This not only supports the independent verification of results but can also increase the impact of a work by allowing other researchers to reuse and build upon such supplemental material. An important goal for ISWC is thus to continue improving the reproducibility of all papers.</p>
                
                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Supplemental vs. Paper Content</h2>
                <p>We expect all submissions to be self-contained to be self-contained, meaning that the body of the paper should provide a clear statement of their claims and clear argumentation regarding how these claims are substantiated by the results or theoretical arguments. This includes any details that are important for interpreting the results, which may include the specifications of the machines used for experiments, key statistics about datasets, important configurations or hyper-parameter settings, details about the metrics used, etc. In the case of theoretical papers, this would include proofs or sketches thereof for all theorems, lemmas, etc.</p>
                <p>Supplemental material then includes the resources needed to reproduce and verify the results reported in the paper that cannot feasibly be included in the paper itself. This may include source code, datasets, models, full versions of proofs, unaggregated experimental results, detailed configurations, documentation, and more besides.</p>
                <p>We strongly encourage authors to make supplemental material available under open licenses and in repositories that provide long-term availability (arXiv, Github, Zenodo, Figshare, etc.).</p>

                
                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Purpose of the Supplemental Material Statement</h2>
                <p>While it has become increasingly common for papers to include links to supplemental material to help verify the results they present, often this is done in an ad hoc manner that differs from paper to paper. In cases where supplemental material is not provided, it is sometimes not explicitly stated why this is the case.</p>

                <p>In order to make it easier for readers to find supplemental material, to understand what is provided and what is not provided, and why, we ask all authors to include a standardized Supplemental Material Statement at the end of their paper that:</p>
                <ul className="list-disc list-inside ml-6">
                    <li>lists all supplemental resources required to reproduce or otherwise verify the results presented in the paper;</li>
                    <li>points to locations where those resources can be found;</li>
                    <li>if applicable, justifies why certain resources cannot be made available (e.g., the privacy, technical or legal concerns involved), or indicates the conditions under which they can be made available (if any);</li>
                    <li>if applicable, states that no supplemental material is required for reproducibility or verification.</li>
                </ul>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Format of the Supplemental Material Statement</h2>
                <p>The Supplemental Material Statement should be placed at the end of the paper, just before the References (and before Acknowledgements, if present). It counts within the 15-page limit. It should be formatted as an inline paragraph with an italicized heading:</p>
                <p>Supplemental Material Statement: Source code is available …</p>
                <p>In LaTeX, this can be achieved with the markup:</p>
                <p>\\paragraph*&#123;Supplemental Material Statement:&#125; Source code is available …</p>
                <p>In Word, authors can simply replicate the formatting shown above.</p>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Content of the Supplemental Material Statement</h2>
                <p>The Supplemental Material Statement should point to the location of all supplemental resources made available for the purposes of reproducing or verifying the results presented in the paper. The authors must be careful to ensure that it is clear (either from the statement, or the resource linked from the statement) what versions, configurations, dependencies, steps, etc., are needed to reproduce the results of the paper using these resources. Some example templates of statements to include are:</p>

                <ul className="list-disc list-inside ml-6">
                    <li>Source code for our System X is available from …</li>
                    <li>Datasets X, Y, Z are available from …</li>
                    <li>Query sets X, Y, Z are available from …</li>
                    <li>Full proofs of Theorems X, Y, Z can be accessed from …</li>
                    <li>Source code for Baselines X, Y, Z is available from …</li>
                    <li>The raw data used to generate Figure X, Y and Tables A, B are available from …</li>
                </ul>
                <p>Pointers to resources can be provided either directly in the text, as footnotes, or as bibliographical references; for example:</p>
                <ul className="list-disc list-inside ml-6">
                    <li>Source code for MyRDF is available from Github.1</li>
                    <li>Source code for MyRDF is available from Github [1].</li>
                    <li>Source code for MyRDF is available from Github at https://github.com/anonauthor/MyRDF.</li>
                </ul>

                <p>If multiple resources are available at one location, statements can be combined, for example, to state that “Datasets A, B and query sets X, Y are available from …”.</p>

                <p>In case supplemental resources are submitted via EasyChair, we ask that authors mention this, but also mention how the resources will be made available after review (without specifying a specific location). For example:</p>

                <ul className="list-disc list-inside ml-6">
                    <li>Full proofs of Theorem X and Y are attached with the submission in EasyChair and, if accepted, will be published on arXiv in an extended version of the paper.</li>
                </ul>

                <p>In such cases, the authors of accepted papers are expected to update the statement accordingly for the camera-ready version.</p>

                <p>In case a resource cannot be published, we ask that the authors to clarify this in the statement, summarize why it cannot be published, and include details about the conditions under which the resource can be accessed (if any); for example:</p>

                <ul className="list-disc list-inside ml-6">
                    <li>Source code for our System X cannot be made available due to plans to commercialize the software.</li>
                    <li>Dataset X cannot be made available as it incorporates private user data. However, an anonymized version may be made available, for the sole purpose of replicating the results of this paper, upon contact with the authors.</li>
                </ul>

                <p>In the case of a completely self-contained work with no supplemental material (e.g., a theoretical paper with full proofs in the body of the paper), it is sufficient to write:</p>

                <ul className="list-disc list-inside ml-6">
                    <li>No supplemental material is required for reproducibility or verification.</li>
                </ul>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Examples of Supplemental Material Statement</h2>

                <p><b>Example 1:</b></p>
                <p>Supplemental Material Statement: Source code for MyRDF and the queries used in Section 4 are available from Github1. Full proofs of Theorems 1 and 2 are attached with the submission on EasyChair and, if accepted, will be published on arXiv in an extended version of the paper. The MyPublications ontology is available from Zenodo [4]. The MyHealth dataset cannot be made available as it incorporates private user data.</p>

                <hr/>

                <p>1 https://github.com/anonauthor/MyRDF</p>
                <p>References</p>
                <p>...</p>
                <p>[4] Anonymous Authors. MyPublications Dataset. Zenodo doi:10.5281/zenodo.12345678. (2022) https://doi.org/10.5281/zenodo.4035223</p>
                <p>...</p>

                <p><b>Example 2:</b></p>
                <p>Supplemental Material Statement: No supplemental material is required for reproducibility or verification.</p>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Review of the Supplemental Material Statement</h2>

                <p>Papers without a supplemental material statement may be rejected without review.</p>
                <p>Reviewers will be asked to review the supplemental material statement in order to verify that it does not omit discussion of any resources that would be necessary to reproduce or verify the results of the paper, that the resources are indeed available at the locations indicated, and that all reasonable efforts have been made to make all supplemental material available.</p>
                <p>Reviewers are not obliged to review the content of the supplemental material in detail; for this reason, it is important that the paper be self-contained. However, reviewers should be able to access the supplemental material during the review process and are welcome to make comments about the material. This means that authors must provide reviewers access to the supplemental material from the original submission. This supplemental material should not reveal the identity of the authors.</p>
                <p>There are multiple ways in which supplemental material can be made available anonymously, including uploading the material to EasyChair (up to 100MB), using anonymous Github accounts,  suppressing author details from Figshare or Zenodo repositories until after review, etc.</p>

            </div>
        </>
    );
}

export default SupplementalMaterials;
