import React from "react";

export const Tutorials = () => {
    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>
            <br />
            <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">Call for Tutorials
                </p>
                <div className="text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2">
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

export default Tutorials;
