import React from "react";

export const Workshops = () => {
    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>
            <br />
            <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">Call for Workshops
                </p>
                <div className="text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2">
                    <p>
                        The ISWC conference serves as the premier venue for presenting groundbreaking research, innovative systems, and application results in areas such as the Semantic Web, Knowledge Graphs, and Linked Data. Each year, ISWC attracts high-quality submissions and participants from academia and industry, bringing together researchers from diverse fields including artificial intelligence, databases, natural language processing, machine learning, information systems, human-computer interaction, and web science. These experts explore and develop cutting-edge methods and technologies to enhance the way we access, interpret, and utilize information on the Web.
                    </p>
                    <p>
                        Workshops at ISWC play a critical role in fostering focused, intensive scientific exchange on specific topics aligned with the conference’s overarching themes. They provide a unique venue for exploring emerging ideas, discussing novel perspectives on established research, and engaging with related research communities. We encourage proposals for workshops that will inspire meaningful dialogue and collaboration among ISWC attendees, providing a platform to advance research and innovation in this dynamic field.
                    </p>
                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">
                        Important dates include:
                    </h3>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2">
                        <li>Submission deadline: <b>February 18, 2025</b></li>
                        <li>Notification to proposers: <b>March 11, 2025</b></li>
                        <li>Workshop website and CfP available online: <b>April 8, 2025</b></li>
                        <li>Workshop program with list of accepted papers available online: <b>August 29, 2025</b></li>
                        <li>Workshop days: <b>November 2-3, 2025</b></li>
                    </ul>
                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">
                        Workshop topics
                    </h3>
                    <p>
                        We invite proposals for four types of workshops, each designed to foster innovation and collaboration within the Semantic Web and Knowledge Graph community:
                    </p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li><strong>Novel:</strong> Workshops focused on emerging topics that are expected to gain importance in the Semantic Web and Knowledge Graph community in the coming years. Proposers should clearly articulate why the topic is becoming increasingly significant and demonstrate its potential to attract substantial submissions and participation. Proposals will be primarily evaluated based on the timeliness of the topic and its potential for future impact.</li>
                        <li><strong>Crossover:</strong> Workshops exploring the interplay and convergence between ISWC and other research communities (e.g., “X meets Semantic Web/Knowledge Graphs”). Proposers, ideally including representatives from both communities, must explain the relevance of connecting the two fields, outline common challenges, and highlight the value of fostering collaboration between them. Proposals will be assessed on their ability to bridge scientific communities and the value of the envisioned cross-disciplinary collaboration.</li>
                        <li><strong>Established:</strong> Workshops focusing on specific aspects of Semantic Web and Knowledge Graph research that have already demonstrated the ability to attract a significant number of submissions and participants, contributing meaningfully to scientific progress. Such proposals should justify the continuation of the workshop series, highlight its focused scope, and demonstrate its ongoing impact. Proposals will be evaluated based on the arguments for continuation and evidence of past success.</li>
                    </ul>
                    <p>Workshop proposals of all types are encouraged to promote the vitality and innovation of the Semantic Web and Knowledge Graph community.</p>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Review Criteria</h3>
                    <p>
                        Workshop proposals should focus on research topics that meet the following criteria:
                    </p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li>The topic aligns with the broader scope of ISWC 2025, emphasizing Semantic Web standards and technologies, knowledge representation, and graph data models as central elements.</li>
                        <li>The proposal demonstrates a clear emphasis on a specific technology, challenge, or application area.</li>
                        <li>The topic has the potential to engage a diverse and sufficiently broad audience, including participants beyond the typical ISWC community.</li>
                        <li>The workshop format is dynamic, engaging, and well-suited for the intended audience. It incorporates interactive sessions beyond traditional paper presentations, such as roundtables, debates, Q&A sessions, roadmapping, or hackathons.</li>
                    </ul>
                    <p>
                        The decision to accept or reject a workshop proposal will be based on its overall quality, relevance, and potential to appeal to a substantial portion of the Semantic Web and Knowledge Graph community. Additional considerations, such as overlap with other workshop proposals, will also influence the final decision.
                    </p>
                    {/* <p>
                    Workshop proposers are also invited to have a look at the <a href="LINK_TO_CALL_FOR_CHALLENGES" style={{ color: '#e94607' }}>Call for Challenges</a> and consider if they also want to submit a challenge proposal related to the workshop topics; proposers submitting to both tracks will be asked to explicitly indicate their coordinated intention.
                </p> */}

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Submission Guidelines</h3>
                    <p>
                        Workshop proposals should be submitted via EasyChair at <a href="https://easychair.org/conferences/?conf=iswc2025" style={{ color: '#e94607' }}>this link</a>.
                    </p>
                    <p>
                        Submissions must be in English and formatted as a single PDF document no longer than 4 pages, adhering to the LNCS guidelines. Detailed formatting instructions are available in <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" style={{ color: '#e94607' }}>Springer’s Author Instructions</a>.
                    </p>
                    <p>
                        All workshop proposals should include the following sections:
                    </p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li><strong>Workshop Title and Acronym</strong></li>
                        <li><strong>Workshop Type:</strong> Indicate whether the workshop is novel or established.</li>
                        <li><strong>Proposed Length:</strong> Specify whether the workshop will be half-day or full-day.</li>
                        <li><strong>Abstract:</strong> Provide a concise 200-word summary describing the purpose of the workshop.</li>
                        <li><strong>Topics:</strong> Specify the topics of interest that will be covered. Proposals should focus on a specific and selective theme, more narrow than the main conference's broader scope. Proposals with significant thematic overlap with others may be merged or rejected.</li>
                        <li><strong>Chairs:</strong> Provide the names, affiliations, email addresses, homepages, and short biographies of each chair. Highlight their expertise in the workshop topic and their experience organizing relevant events. Proposals should have multiple chairs (ideally from different institutions) to ensure diverse perspectives. A maximum of five organizers is recommended, with a balance of junior and senior researchers.</li>
                        <li><strong>Organisational Requirements:</strong> List any specific equipment needed beyond standard projectors (e.g., poster stands, boards, markers). Workshop proposers are encouraged to bring their own materials if necessary, as equipment availability will be confirmed with local organizers.</li>
                    </ul>
                    <p className="text-md lg:text-lg font-[300]">
                        For <b>novel</b>, <b>crossover</b>, and <b>established workshops</b>, include:
                    </p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li><strong>Workshop Format:</strong> For other workshop types, describe the structure and mix of events, such as paper presentations, invited talks, panels, demos, and discussions. Innovative formats are encouraged to foster rich interactions.</li>
                        <li><strong>Link to Challenges:</strong> Indicate if the workshop proposers are also submitting to the Call for Challenges.</li>
                        <li><strong>Review Policy:</strong> Specify the review process for contributions (e.g., open review, double-anonymous, single-anonymous).</li>
                        <li><strong>Publication Policy:</strong> Outline plans for preserving workshop outcomes, such as publishing papers in an online repository like CEUR or inviting selected papers to a journal special issue.</li>
                        <li><strong>Program Committee:</strong> Include a list of potential Program Committee members with affiliations. At least 50% of PC members should be confirmed. Diversity in gender, location, and institution is strongly encouraged, as well as efforts to include underrepresented and underserved groups.</li>
                    </ul>
                    <p>For <b>novel</b> and <b>crossover workshops</b>, include:</p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li><strong>Motivation:</strong>  Explain why the topic is timely and relevant to ISWC participants.</li>
                        <li><strong>Audience and Community:</strong>  Identify the target audience and estimate potential attendance. Demonstrate the existence of an interested community, referencing recent papers on the workshop's topic and explaining why it would attract submissions.
                        </li>
                    </ul>
                    <p>For <b>established workshops</b>, include:</p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li><strong>Continuation:</strong> Justify the continuation of the workshop. Highlight emerging topics, recent developments, or new challenges that make the workshop relevant.</li>
                        <li><strong>Past Workshops:</strong> Summarize the workshop series’ development over the past 3–5 years, including quantitative data on submissions, accepted papers, and attendance.</li>
                    </ul>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Requirements upon Acceptance</h3>
                    <p className="text-md lg:text-lg font-[300]">
                        Accepted workshops will need to adhere to the following requirements:
                    </p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li><strong>Workshop Web Page:</strong> Organizers must prepare a workshop web page with a detailed call for papers (where applicable) and information about the workshop's structure, format, and timelines.</li>
                        <li><strong>Timeline for Deadlines:</strong> Organizers should adhere to the indicative timeline for internal workshop deadlines provided by ISWC. Workshops can allow for a maximum deadline extension of one week. These strict deadlines are necessary to align with the overall conference organization.</li>
                        <li><strong>Organizational Responsibilities:</strong>
                            <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                                <li>
                                    Workshop organizers for novel, crossover, and established, are responsible for:

                                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                                        <li>Conducting the reviewing process for submitted contributions (if applicable).</li>
                                        <li>Publicizing their workshop to attract submissions and participation.</li>
                                        <li>Publishing proceedings (e.g., electronically on CEUR) for traditional workshop types.</li>
                                    </ul>
                                </li>
                                <li>
                                    While ISWC workshop and local chairs will assist with local arrangements, organizers are expected to handle these responsibilities independently.
                                </li>
                            </ul>
                        </li>

                        <li><strong>Participation Requirements:</strong>
                            At least one workshop organizer must register for the conference by the early bird registration deadline and attend the workshop in person.
                        </li>
                        <li><strong>Cancellation Policy:</strong>
                            Workshops may be canceled at the discretion of the workshop and tutorial track chairs if:

                            <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                                <li>The workshop receives an insufficient number of submissions.</li>
                                <li>Organizers fail to register by the early registration deadline.</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Timeline Template for Workshop Organizers</h3>
                    <p>
                        All workshops will adhere to a common timeline as follows (all deadlines are 23:59 AoE):
                    </p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li>Workshop website and CfP available online: <b>April 8, 2025</b></li>
                        <li>Workshop paper submissions: <b>August 2, 2025</b></li>
                        <li>Workshop paper acceptance notification and accepted papers published on website: <b>August 29, 2025</b></li>
                        <li>Workshop days: <b>November 2-3, 2025</b></li>
                    </ul>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Workshop Chairs</h3>
                    <p>Blerina Spahiu - University of Milano-Bicocca, Italy</p>
                    <p>Juan Sequeda - data.world, USA</p>

                    <p>
                        Contact: <a href="mailto:iswc2025-ws@easychair.org" style={{ color: '#e94607' }}>iswc2025-ws@easychair.org</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Workshops;
