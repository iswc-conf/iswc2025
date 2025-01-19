import React from "react";

export const ResourcesAvailability = () => {
    return (
        <>
            <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 tracking-wide">
                    Resources Availability Statement Guide
                </p>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Key Points:</h2>
                <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                    <li>All papers submitted to the ISWC 2025 Resources Track must include a resource availability statement. Papers without a resource availability statement may be desk rejected.</li>
                    <li>Resources must be available along with the initial submission, in anticipation of the review process.</li>
                    <li>Reviewers are requested to review the resource as well as the paper.</li>
                    <li>Papers should be self-contained.</li>
                </ul>
                <p>Please find more details below.</p>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Usability and Reproducibility</h2>
                <p>Usability of a resource as well as a clear understanding how a resource came about is a key component of progress in scientific research, to use such a resource competently in new research independently or to extend such a resource presented in scholarly publications. In the context of computer science, providing access to such material, such as ontologies, code, and datasets, greatly facilitates progress in research and reproducibility. This supports the independent verification of results, and can increase the impact of a work by allowing other researchers to reuse and build upon such resources. An important goal for ISWC is to continue improving the reproducibility of all papers, and usability and reusability of the resources described in the Resource track papers.</p>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Resources vs. Paper Content</h2>
                <p>All papers submitted to the ISWC 2025 Resources Track need to  be self-contained, meaning that the body of the paper should provide a clear statement of their claims and clear argumentation regarding how these claims are substantiated by evidence. This includes any details that are important for interpreting the resource, such as the specifications of the machines used for experiments on the resource, key statistics about datasets, important configurations or hyper-parameter settings, details about the metrics used, details about how data was collected, etc.</p>
                <p>The resource must include the materials reported in the resources paper that cannot feasibly be included in the paper itself. Please refer to the “Resources of interest” section of the CfP for this track for a list of categories of resources that may be suitable for this track. We strongly encourage authors to make the resource available under open licenses and in repositories that provide long-term availability and have a persistent URI (Zenodo, Figshare, institutional repository, etc.). See the “Availability” section of the Resources Track CfP for details</p>


                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Purpose of the Resource Availability Statement</h2>
                <p>While it has become increasingly common for papers to include links to supplemental material to help verify the results they present, often this is done in an ad hoc manner that differs from paper to paper, even in Resources Track papers.</p>
                <p>To make it easier for readers to find the resource, to understand what is provided and what is not provided, and why, we ask all authors to include a standardized Resource Availability Statement at the end of their paper that:</p>
                <ul className="list-disc list-inside ml-6">
                    <li>lists all resources presented in the paper;</li>
                    <li>points to locations where those resources can be found;</li>
                    <li>if applicable, justifies why certain resources cannot be made available (e.g., the privacy, technical or legal concerns involved), or indicates the conditions under which they can be made available (if any).</li>
                </ul>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Format of the Resource Availability Statement</h2>
                <p>The Resource Availability Statement should be placed at the end of the paper, just before the References (and before Acknowledgements, if present). It counts within the 15 page limit. It should be formatted as an inline paragraph with an italicized heading:</p>
                <p>Resource Availability Statement:Source code is available …</p>
                <p>In LaTeX, this can be achieved with the markup:</p>
                <p>\\paragraph*&#123;Resource Availability Statement:&#125; Source code is available …</p>
                <p>In Word, authors can simply replicate the formatting shown in the box above.</p>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Content of Resource Availability Statements</h2>
                <p>The Statement should point to the location of all resources made available as presented in the paper. The authors must be careful to ensure that it is clear (either from the statement, or the resource linked from the statement) what versions, configurations, dependencies, steps, etc., are needed to use the resource. Some example templates of statements to include are:</p>
                <ul className="list-disc list-inside ml-6">
                    <li>Source code for our System X is available from …</li>
                    <li>Datasets X, Y, Z are available from …</li>
                    <li>Query sets X, Y, Z are available from …</li>
                    <li>Source code for Baselines X, Y, Z is available from …</li>
                    <li>The raw data used to generate Figure X, Y and Tables A, B are available from …</li>
                </ul>
                <p>Pointers to resources can be provided either directly in the text of the statement, as footnotes, or as bibliographical references; for example:</p>

                <ul className="list-disc list-inside ml-6">
                    <li>Source code for OurX is available from Github.1</li>
                    <li>Source code for OurX is available from Github [1].</li>
                    <li>Source code for OurX is available from Github at https://github.com/ThisIsUs/OurX.</li>
                </ul>
                <p>If multiple resources are available at one location, statements can be combined, for example: “Datasets A, B and query sets X, Y are available from …”. As per CfP, resources must not be submitted via EasyChair. In the unlikely case that a resource cannot be published openly, the authors must clarify this in the statement, summarizing why it cannot be published, and include details about the conditions under which the resource can be accessed; for example:</p>

                <ul className="list-disc list-inside ml-6">
                    <li>Source code for our System X cannot be made available due to plans to commercialize the software.</li>
                    <li>Dataset X cannot be made available as it incorporates private user data. However, a suitably anonymized version may be made available under a licence, upon contact with the authors.</li>
                </ul>


                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Examples of Resource Availability Statements</h2>
                <p>Resource Availability Statement: Source code for OurX and the queries used in Section 4 are available from Github1. The OurOntoX ontology is available from Zenodo [4]. The MyHealth dataset cannot be made available as it incorporates private user data.</p>
                <hr/>
                <p>1 https://github.com/ThisIsUs/OurX</p>
                <p>References</p>
                <p>...</p>
                <p>[4] This, I.U. OurOntoX Ontology. Zenodo doi:10.5281/zenodo.12345678. (2022) https://doi.org/10.5281/zenodo.4035223</p>
                <p>...</p>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Review of the Resource Availability Statement</h2>
                <p>Papers without a resource availability statement may be desk rejected.</p>
                <p>Reviewers will be asked to review the Resource Availability Statement in order to verify that it does not omit any resources that are presented as novel resources in the paper, that the resources are indeed available at the locations indicated, and that all reasonable efforts have been made to make all relevant material available.</p>
                <p>Reviewers are expected to review the content of the material. Nonetheless, it is important that the paper is self-contained, reporting on the resource and the context of its creation (refer to the full list of criteria in the CfP). Reviewers thus have to be able to access the resource during the review process, and are expected to make comments about the material. This means that authors must provide reviewers access to the resource from the original submission. Since this track is NOT anonymous, revealing the identity of the authors is expected.</p>
            </div>
        </>
    );
}

export default ResourcesAvailability;
