import React from "react";

export const WorkshopsTutorials = () => {
    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>
            <br />
            <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">Call for Workshops, Dagstuhl Style, and Tutorials
                </p>
                <div className="text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2">
                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">CALL for WORKSHOPS</h2>

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
                        <li>Workshop program with list of accepted papers available online: <b>July 29, 2025</b></li>
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
                        <li><strong>Workshop website and CfP available online:</strong> May 2, 2025</li>
                        <li><strong>Workshop paper submissions:</strong> July 11, 2025</li>
                        <li><strong>Workshop paper acceptance notification and accepted papers published on website:</strong> August 28, 2025</li>
                    </ul>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Workshop Chairs</h3>
                    <p>Blerina Spahiu - University of Milano-Bicocca, Italy</p>
                    <p>Juan Sequeda - data.world, USA</p>

                    <p>
                        Contact: <a href="mailto:iswc2025-ws@easychair.org" style={{ color: '#e94607' }}>iswc2025-ws@easychair.org</a>
                    </p>




                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">CALL for Dagstuhl Style Workshops</h2>

                    <p>
                        Inspired by the Special Session at ISWC 2024 and the Dagstuhl Seminar model, these workshops are designed to encourage in-depth discussions on challenges or emerging topics within a half-day or full-day event format. The goal is to create a collaborative and open environment for brainstorming and exploring new directions, similar to the spirit of Dagstuhl Seminars. These workshops will prioritize dynamic discussions and the presentation of fresh ideas and ongoing research, rather than requiring participants to submit papers or give formal presentations.
                    </p>
                    <p>
                        Proposers should focus on assembling a diverse group of core participants who are expected to attend this workshop, including senior researchers, early-career researchers, and practitioners. The workshop will be open to all attendees of the conference. The workshop structure should enable open dialogue and interdisciplinary exchange, ensuring an optimal group size for meaningful interaction. While shorter than traditional Dagstuhl Seminars, these workshops should emulate their emphasis on fostering creativity, collaboration, and innovation in a relaxed yet focused setting. This is ultimately a WORKshop.
                    </p>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Submission Guidelines</h3>
                    <p>
                        Workshop proposals should be submitted via EasyChair at <a href="https://easychair.org/conferences/?conf=iswc2025" style={{ color: '#e94607' }}>https://easychair.org/conferences/?conf=iswc2025</a>.
                    </p>
                    <p>
                        Submissions must be in English and formatted as a single PDF document no longer than 4 (four) pages, adhering to the LNCS guidelines. Detailed formatting instructions are available at <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" style={{ color: '#e94607' }}>Springer’s Author Instructions</a>.
                    </p>

                    <p>
                        The Dagstuhl-style workshops proposal should include the following sections:
                        <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                            <li><b>Workshop Title and Acronym</b></li>
                            <li><b>Workshop Type:</b> Indicate whether the workshop is novel or established.</li>
                            <li><b>Proposed Length:</b> Specify whether the workshop will be half-day or full-day.</li>
                            <li><b>Abstract:</b> Provide a concise 200-word summary describing the purpose of the workshop.</li>
                            <li><b>Topics:</b> Specify the topics of interest that will be covered. Proposals should focus on a specific and selective theme, more narrow than the main conference's broader scope. Proposals with significant thematic overlap with others may be merged or rejected.</li>
                            <li><b>Chairs:</b> Provide the names, affiliations, email addresses, homepages, and short biographies of each chair. Highlight their expertise in the workshop topic and their experience organizing relevant events. Proposals should have multiple chairs (ideally from different institutions) to ensure diverse perspectives. A maximum of five organizers is recommended, with a balance of junior and senior researchers.</li>
                            <li><b>Organisational Requirements:</b>  List any specific equipment needed beyond standard projectors (e.g., poster stands, boards, markers). Workshop proposers are encouraged to bring their own materials if necessary, as equipment availability will be confirmed with local organizers.</li>
                            <li><b>Motivation and Objectives:</b> Highlight the key challenges or emerging topics the workshop seeks to address. Explain the importance and timeliness of the topic for the Semantic Web, Knowledge Graph, and related communities.</li>
                            <li><b>Expected Results/Outcomes:</b> Explain what are the expected results and outcomes of this workshop, and how you expect to achieve them.</li>
                            <li><b>Workshop Format:</b> Describe the structure of the workshop. Dagstuhl-style workshops should prioritize open discussions, brainstorming, and collaborative sessions rather than formal presentations. For example, are there a set of research questions that the organizers would like to cover? Or are the topics based on position statements submitted by expected attendees? Or is this an <a href="https://en.wikipedia.org/wiki/Open_space_technology" target="_blank" style={{ color: '#e94607' }}>Open Spaces</a> approach? Provide a tentative schedule showcasing activities like group discussions, breakout sessions, and plenary dialogues.</li>
                            <li><b>Target Audience and Participation:</b> Specify the intended mix of participants, including senior researchers, early-career researchers, and practitioners. Explain how diverse expertise and perspectives will contribute to the workshop’s success.</li>
                        </ul>
                    </p>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Requirements upon Acceptance</h3>
                    <p>Accepted Dagstuhl-style workshops, will need to adhere to the following requirements:</p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li><strong>Workshop Web Page:</strong> The page should emphasize the open, interactive format and highlight the key challenges or topics to be discussed.</li>
                        <li><strong>Timeline for Deadlines:</strong> Organizers should adhere to the indicative timeline for internal workshop deadlines provided by ISWC. Workshops can allow for a maximum deadline extension of one week. These strict deadlines are necessary to align with the overall conference organization.</li>
                        <li><strong>Organizational Responsibilities:</strong> Organizers should document outcomes through collaborative reports or summaries to share insights with the wider community.</li>
                        <li><strong>Participation Requirements:</strong> At least one workshop organizer must register for the conference by the early bird registration deadline and attend the workshop in person. Organizers are expected to play an active role in facilitating discussions and ensuring productive engagement among participants.</li>
                        <li><strong>Cancellation Policy:</strong>  Workshops may be canceled at the discretion of the workshop and tutorial track chairs if:
                            <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                                <li>Organizers fail to register by the early registration deadline.</li>
                                <li>In the case of Dagstuhl-style workshops, cancellations may also occur if the proposed participant pool lacks sufficient diversity or representation from the intended communities.</li>
                            </ul>
                        </li>
                    </ul>



                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Important Dates</h3>
                    <p>All deadlines are 23:59 Anywhere on Earth (AoE).</p>
                    <ul className="list-disc ml-6">
                        <li>Submission deadline: July 1, 2025</li>
                        <li>Notification to proposers: July 11, 2025</li>
                        <li>Workshop website online: July 25, 2025</li>
                        <li>Workshop days: November 2-3, 2025</li>
                    </ul>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Workshop Chairs</h3>
                    <p><b>Blerina Spahiu</b> - University of Milano-Bicocca, Italy</p>
                    <p><b>Juan Sequeda</b> - data.world, USA</p>
                    <p>Contact: <a href="mailto:iswc2025-ws@easychair.org" style={{ color: '#e94607' }}>iswc2025-ws@easychair.org</a></p>




                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">CALL for TUTORIALS</h2>

                    <p>
                        The International Semantic Web Conference 2025 is pleased to announce the Call for Tutorials. Continuing the tradition of excellence, the 2025 edition will feature a comprehensive tutorial program serving the diverse interests and expertise of our audience. These tutorials aim to provide attendees with insights into foundational and cutting-edge topics, practical applications, and the latest advancements in Semantic Web, Knowledge Graphs, and Linked Data technologies.
                    </p>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Important Dates</h3>
                    <p>All deadlines are 23:59 Anywhere on Earth (AoE).</p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-light">
                        <li>Submission deadline: <b>May 20, 2025</b></li>
                        <li>Notification to proposers: <b>June 10, 2025</b></li>
                        <li>Tutorial website online: <b>July 8, 2025</b></li>
                        <li>Materials available on the website (if any): <b>August 8, 2025</b></li>
                        <li>Tutorial days: <b>November 2-3, 2025</b></li>
                    </ul>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Tutorial Topic and Format</h3>
                    <p>
                        Tutorials are an excellent opportunity for participants to expand their expertise in a subject area: for early-career researchers, they can serve as a gateway to foundational or advanced topics, particularly those tied to research methodologies and Semantic Web technologies. For experienced researchers, tutorials can provide an avenue to refine their knowledge, acquire specialized skills, or explore new methodologies that enhance their existing research areas. For industry practitioners, these sessions can offer insights and the foundational tools needed to kickstart innovative projects and applications.
                    </p>
                    <p>
                        For ISWC attendees, we envision tutorials of the following types:
                    </p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li>Tutorials introducing core concepts and established practices in Semantic Web and Knowledge Graph domains (e.g., RDF, OWL, SPARQL, SHACL, and linked data principles) or foundational research methodologies (e.g., FAIR principles, Open Science practices).</li>
                        <li>Tutorials exploring intersections between Semantic Web/Knowledge Graph technologies and other fields (e.g., big data, machine learning, generative AI) to examine how they complement each other and the potential for innovative applications.</li>
                        <li>Tutorials focusing on cutting-edge trends, specific tools, or applications within the Semantic Web and Knowledge Graph space.</li>
                    </ul>
                    <p>
                        The tutorials will be held during the pre-conference days, November 2nd and 3rd, divided into four slots each day (9:00-10:40, 11:10-12:50, 14:10-15:50, 16:20-18:00). The following formats are proposed for tutorials programs:
                    </p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li><b>Half-day tutorials:</b> Two slots in either the morning or afternoon, ideal for concise, targeted introductions to a topic.</li>
                        <li><b>Full-day tutorials:</b> Covering all four slots with three breaks, designed for in-depth exploration of topics or interconnected themes, similar to a condensed course.</li>
                        <li><b>Special sessions:</b> Highly focused tutorials lasting a single slot, perfect for niche topics of significant relevance or timeliness, often led by recognized experts or authoritative figures in the field.</li>
                    </ul>
                    <p>
                        Tutorials should be dynamic and engaging, avoiding exclusively lecture-based formats. At least half of the session time should involve interactive elements, such as hands-on activities, group discussions, or collaborative exercises.
                    </p>


                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Review Criteria</h2>
                    <p className="text-md lg:text-lg font-light">
                        Tutorials proposals will be evaluated based on their quality and appeal to a broad segment of the Semantic Web and Knowledge Graph community. Proposals should meet the following standards:
                    </p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-light">
                        <li>The tutorial topic aligns with the general scope of the conference.</li>
                        <li>The proposal clearly defines a specific focus on a technology, challenge, or application.</li>
                        <li>There is compelling evidence of substantial interest within the community.</li>
                        <li>The proposed format integrates interactive or collaborative elements.</li>
                        <li>The tutorial fits within the broader program, offering complementary insights and avoiding significant overlap with other accepted sessions (mergers may be suggested for similar proposals).</li>
                    </ul>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Submission Instructions</h3>
                    <p>
                        Tutorial proposals should be submitted via EasyChair at <a href="https://easychair.org/conferences/?conf=iswc2025" style={{ color: '#e94607' }}>https://easychair.org/conferences/?conf=iswc2025</a>.
                    </p>
                    <p>
                        Submissions must be in English and formatted as a single PDF document no longer than 4 pages, adhering to the LNCS guidelines. Detailed formatting instructions are available at <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" style={{ color: '#e94607' }}>Springer’s Author Instructions</a>.
                    </p>
                    <p>
                        All tutorial proposals should include the following sections:
                    </p>

                    <ul className="list-disc list-inside text-md lg:text-lg font-light">
                        <li><b>Content, format, and program:</b></li>
                        <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                            <li>
                                <strong>Title and acronym:</strong> Provide a concise, descriptive title and an appropriate acronym for the tutorial.
                            </li>
                            <li>
                                <strong>Abstract:</strong> A 200-word summary highlighting the tutorial's purpose, goals, and core content.
                            </li>
                            <li>
                                <strong>Detailed description:</strong> Include an overview of the tutorial's content, the expected learning outcomes, and a description of the presentation and interaction style (e.g., hands-on, discussion-based, lecture).
                            </li>
                            <li>
                                <strong>Motivation:</strong> Explain why the topic is timely and particularly relevant for ISWC participants. Address how this tutorial differentiates itself from or complements similar tutorials at other events.
                            </li>
                            <li>
                                <strong>Format:</strong> Specify the tutorial length (full day, half day, or special session) with a clear justification for the chosen format. If proposing a full-day session, explain why a half-day format would not suffice.
                            </li>
                            <li>
                                <strong>Schedule:</strong> Provide a detailed timeline of the tutorial program, breaking it into specific slots. Proposers are encouraged to structure the program in self-contained slots to enable participants to switch between tutorials during breaks if needed.
                            </li>
                        </ul>
                        <li>
                            <strong>Tutorial type and intended audience:</strong>
                            <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                                <li>Type: Indicate whether the tutorial is introductory, specialized/advanced, application/tool-focused, or domain-specific.</li>
                                <li>Level: Specify the level of the tutorial (beginner, intermediate, advanced).</li>
                                <li>Target Audience: Define the intended audience, including the estimated number of participants and their profiles.</li>
                                <li>Prerequisites: Outline any prior knowledge or skills required for attendees to fully engage with the tutorial content.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Presenters’ information:</strong>
                            <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                                <li>Provide the name, affiliation, email address, homepage, and a brief biography (one paragraph) for each presenter.</li>
                                <li>Highlight each presenter’s expertise in the tutorial topic, their teaching background, and prior experience with tutorials or similar events.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Materials:</strong>
                            Describe the materials to be used during the tutorial (e.g., slides, handouts, software, online resources). Indicate when the materials will be made available and under what conditions (e.g., openly licensed, restricted to attendees, time-limited access).
                        </li>
                        <li>
                            <strong>Previous editions and related events (if applicable):</strong>
                            Provide links to previous editions of the tutorial or similar events, along with materials from those sessions. Include data such as the number of attendees and feedback received to justify the continuation of the tutorial in 2025.
                        </li>
                        <li>
                            <strong>Other requirements:</strong>
                            Specify any audio-visual or technical needs, such as specific software, hardware, or internet access. Mention any special room setups or additional requirements needed to facilitate the tutorial.
                        </li>
                    </ul>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Requirements Upon Acceptance</h3>

                    <p className="text-md lg:text-lg font-light">
                        Accepted tutorials will be required to create a dedicated tutorial webpage that provides detailed information about the program and any relevant materials that participants may need to download or review prior to or during the event. The suggested timeline for setting up the webpage is outlined in the “Important dates” section.
                    </p>
                    <p>For tutorials involving software or online services, the following guidelines are strongly recommended:</p>

                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li>
                            Clear prerequisites and step-by-step instructions for downloading/installing software or registering for online services should be made available on the tutorial webpage well in advance. This ensures participants have sufficient time to prepare before the tutorial begins.
                        </li>
                        <li>
                            Allocate time at the beginning of the tutorial to guide participants through any necessary installation or registration processes. Organisers should not assume that all attendees will arrive fully prepared.
                        </li>
                        <li>
                            Develop a contingency plan to address potential issues such as limited Wi-Fi bandwidth (e.g., providing USB drives with large files) or the unavailability of online services (e.g., pre-recorded videos of demonstrations).
                        </li>
                    </ul>

                    <p className="text-md lg:text-lg font-light">
                        All tutorial presenters are required to register for the conference by the early bird registration deadline and attend the tutorial in person.
                    </p>
                    <p>
                        The tutorial and workshop track chairs reserve the right to cancel tutorials if the organisers fail to complete the registration process in a timely manner.
                    </p>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Tutorial Chairs</h3>
                    <p><b>Blerina Spahiu</b> - University of Milano-Bicocca, Italy</p>
                    <p><b>Juan Sequeda</b> - data.world, USA</p>
                    <p className="text-md lg:text-lg font-light">
                        Contact: <a href="mailto:iswc2025-ws@easychair.org" style={{ color: '#e94607' }}>iswc2025-ws@easychair.org</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default WorkshopsTutorials;
