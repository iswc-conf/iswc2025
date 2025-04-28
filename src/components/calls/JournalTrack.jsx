import React from "react";
export const JournalTrack = () => {
    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>
            <br />
            <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">Call for Journal Track Sessions Proposals</p>

                <div className="text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2">

                    <p>ISWC 2025 is iterating on the historical Journal Track. This year, we are soliciting a call for (journal track) sessions. These sessions will be held during the main track of the conference.</p>

                    <p>We want to facilitate cross-pollination between sub-communities, as well as overall strengthen the ties and pipelines between ISWC and the journals that serve our community.</p>

                    <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>


                    <p>This track is open to any journal related to the Semantic Web or the principled use of related artifacts (e.g., ontologies, semantics, or semantic technologies). Proposal authors should be editors of the journal, and if they are not editors in chief, then should be submitted under their auspices.</p>

                    <h2 className="text-2xl font-semibold mb-4">Session Format Guidance</h2>

                    <p>A session should be considered to be 90 minutes long. The session’s internal organization is up to the proposer. However, we encourage that the session proposal has a coherent theme, or that the Editors have otherwise curated a selection of timely, impactful, or prescient papers from their journal’s recent issues.</p>

                    <h3 style={{ color: '#e94607' }} className="text-md font-medium mt-3">Proceedings</h3>

                    <p>To encourage participation and otherwise facilitate attendance, there is capacity for inclusion in the ISWC proceedings and event – beyond the presentation during the proposed session.</p>

                    <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                        <li>Journal Spotlight – Companion Proceedings</li>
                        <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                            <li>This is an optional venue, where the proposers may opt-in so that presenters may have some publication, which allows for attendance. Ideally, all presenters would provide a contextualization of their presented journal article. Ideally, the proposers (i.e., the editors) would provide an editorial-style introduction which discusses the entire session and its context.</li>
                            <li>This is currently anticipated to be a CEUR volume.</li>
                        </ul>
                        <li>First-come, first-serve slots at the Poster & Demo session</li>
                        <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                            <li>This must be communicated clearly, so that space can be reserved.</li>
                        </ul>
                    </ul>

                    <h2 className="text-2xl font-semibold mb-4">Review Criteria</h2>

                    <p>The organizing committee will consider the organization of the session, as well as the selected papers for presentation and discussion. Therefore, proposers <strong>must ensure unfettered access to the selected papers</strong> both during the review process and to attendees of the conference (at least during the conference duration). All submissions will be evaluated along the following review criteria:</p>

                    <h3 className="text-xl font-semibold mb-2">Scientific and Community Impact and Relevance</h3>
                    <ul className="list-disc list-inside space-y-2 mb-6">
                        <li>How did the collection break new ground?</li>
                        <li>How did the collection fill important gaps?</li>
                        <li>How did the collection otherwise advance the state of the art?</li>
                        <li>Is the collection of papers of interest to society in general?</li>
                        <li>What impact has this collection of papers had, scientifically and socially?</li>
                        <li>Is the collection relevant to the Semantic Web community, in particular along its emphasized themes for ISWC 2025?</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Availability</h3>
                    <ul className="list-disc list-inside space-y-2 mb-6">
                        <li>Are the selected papers available for attendees of the proposed session to read without a paywall?</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Attendance</h3>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>Is at least one author of each of the selected papers confirmed to attend ISWC 2025?</li>
                        <li>Is at least one editor confirmed to attend ISWC 2025?</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mb-4">Submission Details</h2>
                    <ul className="list-disc list-inside space-y-2 mb-8">
                        <li>All papers and abstracts must be submitted electronically via <a href="https://easychair.org/conferences/?conf=iswc2025" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">EasyChair</a> (choose \"Journal Session Proposals\").</li>
                        <li>Proposals must not exceed <b>4 pages (excluding references). Proposals that exceed the page limit will be rejected without review</b>.</li>
                        <li>All submissions must be in English.</li>
                        <li>Submissions must be in PDF or HTML formatted in the CEURART 1-column style (LNCS is no longer valid).</li>
                        <li>The title should use emphasizing capitalized style, and submissions must not include page numbers.</li>
                        <li>For HTML submission guidance, see the <a href="https://iswc2025.semanticweb.org/#/guidelines/html-submission" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">HTML Submission Guide</a>.</li>
                        <li><b>ISWC 2025 submissions for the journal track are necessarily not anonymous.</b></li>
                        <li>At least one proposer must register for the conference and chair the session.</li>
                        <li><b>At least one author of each selected paper must register for the conference and present the paper.</b></li>
                    </ul>

                    <h2 className="text-2xl font-semibold mb-4">Important Dates</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Journal Track Session Proposals Due:</strong> June 30, 2025</li>
                        <li><strong>Notifications to Proposers:</strong> July 17, 2025</li>
                        <li>All deadlines are 23:59 AoE (Anywhere on Earth).</li>
                    </ul>

                </div>
            </div>
        </>
    );
}

export default JournalTrack;