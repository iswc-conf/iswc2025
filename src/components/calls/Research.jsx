import React from "react";

export const Research = () => {
    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>
            <br/>
            <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 tracking-wide">Research Track at ISWC 2025</p>

                <div className="text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2 overflow-auto">
                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Call for Research Track Papers</h2>
                    <p>
                        The International Semantic Web Conference is the premier venue for presenting fundamental research, innovative technology, and applications concerning semantics, data, and the Web.
                    </p>
                    <p>
                        The research track of ISWC 2025 solicits novel and significant research contributions addressing theoretical, analytical, and empirical aspects of the Semantic Web. We welcome work describing original and replicable research showing evidence of significant contribution to the Semantic Web.
                    </p>
                    <p>
                        All papers will be assessed by the track’s program committee. Each paper will be reviewed by at least three committee members, with a meta-review provided by a senior member. The review criteria used are outlined below.
                    </p>
                    <p>
                        As ISWC 2025 features multiple tracks, authors are asked to consult the calls of the other tracks to choose the track that best fits their contribution. The submission of the same work to multiple tracks (as well as other conferences) is not allowed and results in a rejection of the work without review.
                    </p>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Important information for authors:</h3>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li>Submissions are double-blind.</li>
                        <li>Papers are limited to 15 pages excluding references. Supplemental materials and annexes count toward the established page limit.</li>
                        <li>All submissions are expected to include a mandatory Supplemental Material Statement - such material includes links to code and data repositories. In case this is not possible, the statement must provide a justification.</li>
                        <li>Unless otherwise justified in the Supplemental Material Statement, we expect supplemental material to be provided anonymously with the submitted paper.</li>
                        <li>Pre-submission of abstracts is a strict requirement.</li>
                    </ul>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Important Dates</h3>
                    <p>Abstract submission due: <b>May 6th, 2025</b></p>
                    <p>Full paper submission due: <b>May 13th, 2025</b></p>
                    <p>Rebuttal: <b>June 17th - 20th, 2025</b></p>
                    <p>Notifications: <b>July 17th, 2025</b></p>
                    <p>Camera ready papers due: <b>July 31st, 2025</b></p>
                    <p>All deadlines are 23:59 AoE (anywhere on Earth)</p>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Topics of Interest</h3>
                    <p>We encourage papers that directly contribute to the advancement of the Semantic Web area. The relationship to the core area of the conference needs to be clearly described in the submitted work. Submissions beyond the scope will be desk-rejected. Topics in the Semantic Web area include, but are not limited to:</p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li>Ontologies and capturing knowledge including:
                            <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                                <li>Ontology Engineering and ontology patterns</li>
                                <li>Ontology modularity, mapping, merging, and alignment</li>
                                <li>Information extraction, knowledge graph construction</li>
                            </ul>
                        </li>
                        <li>Representation, management, and applications of Knowledge Graphs (including RDF and property graphs):
                            <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                                <li>Knowledge Representation and Reasoning</li>
                                <li>Search, query, integration, and analysis</li>
                                <li>Robust and scalable management</li>
                                <li>Information visualization and exploratory analysis</li>
                            </ul>
                        </li>
                        <li>Databases and ontology-based data access, integration and exchange on the Web</li>
                        <li>Knowledge graph centered Natural Language Processing, information retrieval, semantic analysis, and Large Language Models</li>
                        <li>Integration of the Semantic Web with:
                            <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                                <li>Machine learning, data mining, and neural symbolic reasoning</li>
                                <li>Generative AI (Large Language Models)</li>
                                <li>User interfaces, usability, and accessibility</li>
                                <li>Data integration, quality assurance, and data provenance</li>
                                <li>Social issues including trust, bias, fairness, privacy, security, and policy</li>
                            </ul>
                        </li>
                        <li>Web services, process management, social Web, and Internet of Things</li>
                        <li>Dynamic and streaming data, including complex event processing and stream reasoning</li>
                        <li>Software engineering, algorithms, and decentralized architectures</li>
                        <li>Specialized domains (geographical, biomedical, e-Science, multimedia, performing arts, public administration, cultural heritage, law, etc.)</li>
                        <li>Artificial Intelligence and hybrid approaches (including human-machine intelligence)</li>
                        <li>Semantic Web Agents including:
                            <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                                <li>Autonomous systems, including multi-agent systems and robotics</li>
                                <li>Architecture characteristics for autonomy exploiting KGs</li>
                                <li>Incomplete or conflicting knowledge, beliefs, and assumptions and KGs</li>
                                <li>Human-machine social interactions and KGs</li>
                                <li>Architecture characteristics for exploiting KGs autonomously</li>
                                <li>Development platforms and frameworks for exploiting KGs in an autonomous manner</li>
                                <li>Governance of autonomous agents on the Web</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Review Criteria</h3>
                    <p>Papers in this track will be reviewed according to the following criteria:</p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li>Originality and novelty</li>
                        <li>Relevance of the topic to the conference</li>
                        <li>Impact of the research contributions</li>
                        <li>Technical soundness</li>
                        <li>Rigor and reproducibility of the work (including evaluation)</li>
                        <li>Clarity and quality of presentation</li>
                        <li>Grounding in the literature</li>
                    </ul>

                    <p>Any submissions that are clearly out of scope, or have significant omissions with respect to these criteria may be subject to desk-rejection prior to a full review. Guidelines for reviewers are available here.</p>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Rebuttal</h3>
                    <p>Authors will have the chance to provide a response to the reviews during a rebuttal period that precedes the reviewer discussion period. The SPCs and PC Chairs will consider the authors' responses to the points raised by the reviewers.</p>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Supplemental Material Statement and Reproducibility</h3>
                    <p>Reproducibility is a key goal of scientific research. We require authors of all papers to include a statement at the end of their submission that facilitates the independent reproducibility or verification of the results presented (where relevant), pointing to where supplemental material can be found. These resources may include datasets, queries, code, proofs of results, configuration details, hyperparameters, etc., depending on the contributions of the paper. The statement should cover all of the resources necessary to reproduce or verify the results presented in the paper, indicating their persistent identifiers (e.g., DOI). In case certain resources cannot be made available (e.g., due to privacy, ethical, or financial concerns), the statement should include a justification of why this is the case. In case the paper is fully self-contained and does not have additional resources associated (e.g., a theoretical paper with full proofs contained in the body of the paper), a short statement can be provided arguing that the paper is self-contained.</p>

                    <h4 style={{ color: '#e94607' }} className="text-md font-medium mt-3">Submission Details</h4>
                    <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                        <li>Pre-submission of abstracts is a strict requirement.</li>
                        <li>All papers and abstracts have to be submitted electronically via EasyChair.</li>
                        <li>Submitted papers will be checked to ensure that they satisfy the submission criteria and are in scope with the aims of the conference, and if such violations are identified, then the submission may be subject to desk rejection without review.</li>
                        <li>Papers must provide a clear statement of their claims, argue how the results of the paper substantiate their claims, clarify any technical assumptions and/or known limitations, and provide a Supplemental Material Statement.</li>
                        <li>All research submissions must be in English, and no longer than 15 pages (excluding references).</li>
                        <li>Submissions must be either in PDF or HTML, formatted in the style of the Springer Publications format for Lecture Notes in Computer Science (LNCS). For details on the LNCS style, see Springer’s Author Instructions. For HTML submission guidance, please see the HTML submission guide.</li>
                        <li>Each submission must be original. Authors need to authorize the organizer to perform a plagiarism check of the paper.</li>
                        <li>Papers that exceed the page limit, violate the style or show any kind of plagiarism will be rejected without review.</li>
                        <li>Papers submitted to the research track will be subject to double-blind peer review and must conform to the instructions (detailed below) for double-blind review.</li>
                        <li>We encourage embedding metadata in the PDF/HTML to provide machine-readable links from the paper to resources.</li>
                        <li>Authors of accepted papers will be required to provide semantic annotations for the submission, which will be made available online. Details will be provided at the time of acceptance.</li>
                        <li>Accepted papers will be distributed to conference attendees and also published in the conference proceedings.</li>
                        <li>At least one author of each accepted paper must register for the conference and present the paper.</li>
                        <li>As in previous years, students will be able to apply for funding to support their travel to attend/register for the conference.</li>
                    </ul>


                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Instructions for Dual Anonymous Reviewing</h3>
                    <p>Reviewing for ISWC 2025 is dual-anonymous, i.e., the identities of the authors and reviewers are hidden. Both authors and reviewers are expected to make every effort to honor this process. Authors should do their best to ensure that the submission can be evaluated without it being obvious who wrote the paper, and reviewers should not undertake any investigation with the specific goal of revealing the authors’ identity.</p>

                    <p>To help with the double-blind reviewing process please ensure the following when submitting to ISWC 2025:</p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li>The first page, on which the paper body begins, should include the title and abstract but not the names or affiliations of the authors.</li>
                        <li>Remove any identifying information, including author names, from file names and ensure document properties are also anonymized.</li>
                        <li>Remove any identifying information from your paper resources such as datasets, models, or code (e.g., README and package files in code repositories, Zenodo deposits, etc.)</li>
                        <li>The references should include all published literature relevant to the paper. When referring to one’s own work, use the third person, rather than the first person. For example, say “Previously, Foo [4] showed that…,” rather than “In our previous work [4] we showed that…”</li>
                        <li>Try to avoid including any information that would identify the authors or their affiliations. Such information may be added to the final camera-ready version for publication.</li>
                        <li>Remove references to funding sources and/or acknowledgments. Such information should be included in the final camera-ready version for publication.</li>
                    </ul>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Supplemental Material</h3>
                    <p>The length of the main submission is strictly limited as indicated in the call for papers. However, authors may choose to also submit supplemental material, which may include proofs of theorems that are stated in the main paper, video demonstrations, data concerning experimental evaluations, source code, and so on. Note that submissions may reference the supplemental material for further details, but should be self-contained. Reviewers are instructed to make their evaluations based on the main submission and are not obligated to consult the supplemental material. Therefore, make sure that your submission stands on its own without them.</p>
                    <p>Please take care not to violate the blind review requirements in the supplemental material. You may make supplemental material available per one of the following options:</p>
                    <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                        <li><strong>OPTION 1:</strong> As an anonymized link to supplemental material included in the paper. This option may be used, in particular, in case the total size of the submission (paper+supplemental materials) exceeds 100MB. We recommend the use of Github, Zenodo, Figshare, or Dryad. Anonymous dataset submissions can be managed through Zenodo and Figshare without additional accounts; see, for example, <a href="https://github.com/dgraziotin/disclose-data-dbr-first-then-opendata" target="_blank" style={{ color: '#e94607' }}>this guide</a> by Daniel Graziotin. Code repository submissions may be anonymized through platforms like <a href="https://anonymous.4open.science/" target="_blank" style={{ color: '#e94607' }}>https://anonymous.4open.science/</a>.</li>
                        <li><strong>OPTION 2:</strong> As a second zipped folder uploaded via the EasyChair system; note that the total size of the submission (paper+supplemental materials) must not exceed 100MB.</li>
                    </ul>
                    <p>Supplemental material submitted at the time of submission for review will not be automatically published or posted if the paper is accepted for publication. Hence we expect authors of accepted papers choosing OPTION 2 to publish this material in one of the aforementioned repositories (or arXiv in the case of an extended version of the paper with proofs) and provide references to the supplemental material in the final camera-ready version of the paper.</p>
                    <p>In the case of both options, we strongly encourage making supplemental material available under open licenses and providing sufficient documentation to enable reproducibility.</p>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Prior Publication and Multiple Submissions</h3>
                    <p>ISWC 2025 will not accept research papers that, at the time of submission, are under review for or have already been published in, or accepted for publication, in a journal or another conference. Prior submissions to workshops are fine as long as the authors still hold sufficient rights to publish overlapping content in the proceedings. The conference organizers may share information on submissions with other venues to ensure that this rule is not violated. Submitting articles to preprint servers is allowed if it adheres to our Prior Publication Policy. It is the responsibility of the authors to review and ensure that they adhere to the ISWC Prior Publication and Multiple Submission Policy prior to submission.</p>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Research Track Chairs</h3>
                    <p>Contact: <a href="mailto:iswc2025-research@easychair.org">iswc2025-research@easychair.org</a></p>
                    <p><b>Daniel Garijo</b>, Universidad Politécnica de Madrid, Spain</p>
                    <p><b>Sabrina Kirrane</b>, Vienna University of Economics and Business, Austria</p>



                </div>
            </div>
        </>
    );
}

export default Research;
