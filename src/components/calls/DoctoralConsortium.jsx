import React from "react";
import { useRef } from "react";

export const DoctoralConsortium = () => {
    const submissionRef = useRef(null);

    const handleScroll = () => {
        submissionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>
            <br />
            <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">Call for Doctoral Consortium Submissions</p>
                <div className="text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2">
                    <p>
                        The ISWC 2025 Doctoral Consortium (DC) will take place as part of the <a href="https://iswc2025.semanticweb.org/" target="_blank" style={{ color: '#e94607' }}>24th International Semantic Web Conference</a>. This forum provides PhD students an opportunity to:
                        <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                            <li>present and discuss their research ideas in a supportive, formative and yet critical environment;</li>
                            <li>receive feedback from mentors, typically senior members of the Semantic Web research community, and peers;</li>
                            <li>and network and build collaborations with other members of the community.</li>
                        </ul>
                    </p>
                    <p>
                        The event is intended for students who have articulated a reasonably detailed research proposal, preferably supported by some preliminary results, but are not yet on the final stretch of their thesis, such that the feedback gathered at the DC will have a maximal impact. The aim is to support the students in refining their proposal and to suggest possible ways to improve their research plan and to achieve results with prospective greater impact.
                    </p>
                    <p>
                        The submissions to the Doctoral Consortium  should be structured like a research proposal (see “<a onClick={handleScroll} style={{ color: '#e94607' }}>Submission Details</a>” below). Please note that anything  that looks like a research paper will be rejected without review.
                    </p>
                    <p>
                        All proposals submitted to the Doctoral Consortium will undergo a rigorous review process. The reviewers will provide detailed and constructive feedback and select which submissions will be presented at the Doctoral Consortium. If accepted, students will have to register and attend the full day event.

                    </p>
                    <p>
                        We anticipate having student travel grants to cover some of the travel expenses to the conference.
                    </p>
                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Important Dates:</h3>
                    <p>All deadlines are 23:59 AoE (anywhere on Earth)</p>
                    <ul>
                        <li>Submissions Due: <b>June 3, 2025</b></li>
                        <li>Notifications: <b>July 8, 2025</b></li>
                        <li>Camera-ready Submissions Due: <b>September 11, 2025</b></li>
                        <li>Doctoral Consortium: <b>November 3, 2025</b></li>
                    </ul>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Topics of Interest:</h3>
                    <p>
                        We are the doctoral consortium of the ISWC. As such, submissions should broadly fit the topics of interest of the ISWC research track.
                    </p>
                    <div ref={submissionRef} id="submission-details">
                        <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Submission Details:</h3>
                        <p>
                            Students should submit a 7-page description of their PhD research proposal. All proposals have to be submitted electronically via the EasyChair conference submission system.
                        </p>
                        <p>
                            The submission should address the following questions:
                        </p>
                        <ol className="list-disc ml-16 text-md lg:text-lg font-[300]">
                            <li><b>Problem statement:</b> what is the problem that you are trying to solve?</li>
                            <li><b>Importance:</b> Why is this problem important and for whom? Who will benefit and who should care? What is the impact of solving this problem (for the research community, or society in general)?
                            </li>
                            <li><b>Related work:</b> Has a solution to this problem been attempted before and how?  If you are addressing an existing problem, what are the limitations of current solutions? What are you adding that is novel? Why? If not, have research efforts tried or solved similar, analogous problems? What can you learn from these efforts? </li>
                            <li><b>Research question(s) and hypotheses:</b> What research questions do you plan to explore? What hypotheses do you make in formulating your solution?</li>
                            <li><b>Preliminary results:</b> Do you have any preliminary results that inform your research questions or hypotheses?</li>
                            <li><b>Evaluation:</b> How will you know you’ve answered your question(s)? What are the methods you apply to test your hypotheses? Have you identified criteria to measure the degree of success of your solution?</li>
                            <li><b>Reflection and future work:</b> Are there any limitations in your approach? What are your planned next steps to complete your investigation?
                            </li>
                        </ol>
                    </div>

                    <p>Please aim to answer the above questions with as much detail as possible, especially questions 2 and 4. You should provide as much detail as possible to allow a knowledgeable reviewer from the Semantic Web community, but possibly not an expert in your topic, to assess the validity of your research contribution. All submissions should include references. References will not count towards the page limit. All submissions exceeding 7 pages will be rejected without review.</p>
                    <p><b>The student should be the sole author of the submission.</b> The supervisor(s) should be acknowledged at the end of the submission, together with a funding agency or any other party who supports or contributes to the research.</p>

                    <p>Submissions must use the new CEUR-ART style. For details on the CEUR-ART style, see <a href="https://ceur-ws.org/HOWTOSUBMIT.html" target="_blank" style={{ color: '#e94607' }}>Publishing at CEUR-WS.org</a>. For HTML submission guidance, please see the <a href="https://iswc2025.semanticweb.org/#/guidelines/html-submission" target="_blank" style={{ color: '#e94607' }}>HTML submission guide</a>. They must be submitted online via <a href="https://easychair.org/my/conference?conf=iswc2025" target="_blank" style={{ color: '#e94607' }}>EasyChair</a> (choosing the option: Doctoral Consortium), in PDF or HTML format.</p>

                    <p>DC Proceeding will be published with <a href="http://ceur-ws.org/" target="_blank" style={{ color: '#e94607' }}>CEUR-WS.org</a>.</p>

                    <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Doctoral Consortium Track Chairs:</h3>
                    <p><b>Abraham Bernstein</b> - University of Zurich, Switzerland</p>
                    <p><b>Natasha Noy</b> - Google Research, US</p>
                    <p>Contact: <a href="mailto:iswc2025-doctoral-consortium@easychair.org">iswc2025-doctoral-consortium@easychair.org</a></p>
                </div>
            </div>
        </>
    );
}

export default DoctoralConsortium;