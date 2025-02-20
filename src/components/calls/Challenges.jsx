import React from "react";
export const Challenges = () => {
    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>
            <br />
            <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">Call for Challenges Proposals</p>
                <div className="text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2">
                    <p>
                        A great way to advance the state of the art in a given domain is to create competition. We invite you to propose an ISWC 2025 Challenge, in which you define an open competition on a problem of your choice within the Semantic Web domain.
                    </p>

                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Important Dates</h2>
                    <ul>
                        <li>Challenge proposal submission due: <strong>March 4th, 2025</strong></li>
                        <li>Notification of challenge acceptance: <strong>March 16th, 2025</strong></li>
                    </ul>
                    <p>All deadlines are 23:59 AoE (Anywhere on Earth).</p>

                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Topics</h2>
                    <p>For ISWC 2025, Challenge proposals are invited for any challenge involving Semantic Web tasks, including but not limited to:</p>
                    <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                        <li>Ontology and knowledge graph alignment</li>
                        <li>Ontology and knowledge graph quality assurance (QA)</li>
                        <li>Knowledge graph construction and refinement</li>
                        <li>Graph embeddings and graph neural networks</li>
                        <li>Query and reasoning scalability</li>
                        <li>Open information extraction</li>
                        <li>Neurosymbolic reasoning</li>
                        <li>Semantic Web and data mining</li>
                        <li>Semantic Web, machine learning, and neuro-symbolic AI</li>
                        <li>Link prediction</li>
                        <li>Question answering</li>
                        <li>Stream processing and reasoning</li>
                        <li>Semantic table understanding</li>
                        <li>Agents (especially using neuro-symbolic methods) and agentic workflows</li>
                        <li>Retrieval Augmented Generation (RAG)</li>
                    </ul>
                    <p>Recent Challenge examples can be found at:</p>
                    <ul>
                        <li><a href="https://iswc2023.semanticweb.org/semantic-web-challenges/" target="_blank" rel="noopener noreferrer">ISWC 2023 Semantic Web Challenges</a></li>
                        <li><a href="https://iswc2022.semanticweb.org/index.php/challenges/" target="_blank" rel="noopener noreferrer">ISWC 2022 Challenges</a></li>
                        <li><a href="https://iswc2021.semanticweb.org/challenges" target="_blank" rel="noopener noreferrer">ISWC 2021 Challenges</a></li>
                    </ul>


                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Proposal Stage</h2>
                    <p>
                        ISWC 2025 will run multiple challenges with the aim of evaluating and comparing software solutions for the Semantic Web and Knowledge Graphs in a systematic way. To propose a challenge, you are required to:
                    </p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li>Specify a task to be addressed.</li>
                        <li>Provide an evaluation dataset.</li>
                        <li>Define evaluation measures to compare the performance of participating systems.</li>
                    </ul>

                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Showcase Stage</h2>
                    <p>
                        At ISWC 2025, each challenge will receive one slot during the main conference, where organizers present the challenge, participating systems with accepted solutions, and announce the winner. At least one organizer must register and be present at the conference. Participants have the option to present their systems during the poster and demo session. Winners will receive a certificate.
                    </p>

                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Proposal Submission Guidelines</h2>
                    <p>
                        Proposals for challenges should be concise (2–4 pages) and include:
                    </p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li>Names and affiliations of the organizers.</li>
                        <li>Description of the challenge, including its relevance to the Semantic Web community.</li>
                        <li>Process for selecting, acquiring, and preparing data for training and evaluation, with conditions of availability. Describing data in relation to the FAIR principles is recommended.</li>
                        <li>Procedure for evaluating the performance of systems, including metrics and availability of evaluation software.</li>
                        <li>A timeline based on the provided template for all challenges.</li>
                        <li>Expected number of participants with supporting evidence (e.g., expression of interests, forum discussions, attendance in previous editions).</li>
                        <li>Plan for dissemination of the challenge (targeted mailing lists, social media, etc.).</li>
                        <li>Any other relevant information, including previous evaluations for the proposed challenge.</li>
                    </ul>


                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Selection Criteria</h2>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li>Relevance to the Semantic Web community.</li>
                        <li>Potential number of interested participants.</li>
                        <li>Rigor and transparency of task description and evaluation procedure.</li>
                    </ul>
                    <p>
                        Please submit through EasyChair and select the track “Challenge-Proposal”.
                        <a href="https://easychair.org/conferences/?conf=iswc2025" style={{ color: '#e94607' }} target="_blank">Submit Proposal</a>
                    </p>

                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Requirements upon Acceptance</h2>
                    <p>
                        Accepted challenges will need to adhere to the following requirements:
                    </p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li>Challenge Web Page: Organizers must prepare a challenge web page with detailed participation instructions, format, and timelines.</li>
                        <li>Timeline for Deadlines: Organizers are encouraged to adhere to the indicative timeline for challenges provided by ISWC.</li>
                        <li>Participation Requirements: At least one challenge organizer must register for the conference by the early bird registration deadline and attend the challenge in person.</li>
                    </ul>

                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Timeline Template for Challenge Organizers</h2>
                    <p>
                        The tentative timeline template for organizing a Challenge is as follows (all deadlines are 23:59 AoE):
                    </p>
                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li>Website & first call for participation - Mar 16th</li>
                        <li>Release datasets - Mar 30th</li>
                        <li>Release of Test Set (optional) - May 16th</li>
                        <li>Submission of Systems - June 28th</li>
                        <li>System Results - July 19th</li>
                        <li>Notification of Acceptance - July 19th</li>
                    </ul>
                    <p>
                        Note: The deadlines and mostly the dataset release deadline and system submission deadline can be flexibly adjusted according to the challenge, especially if the challenge includes several evaluation rounds (e.g., http://www.cs.ox.ac.uk/isg/challenges/sem-tab/2020/index.html).
                    </p>

                    <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Semantic Web Challenge Chairs</h2>
                    <p>
                        Contact: <a href="mailto:iswc2025-challenge@easychair.org">iswc2025-challenge@easychair.org</a>
                    </p>
                    <p>
                        <b>Mayank Kejriwal</b> - University of Southern California, United States
                    </p>
                    <p>
                        <b>Pablo Mendes</b> - Upwork, United States
                    </p>
                </div>
            </div>
        </>
    );
}

export default Challenges;