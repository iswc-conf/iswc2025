import React from "react";

export const PriorPublicationMultipleSubmission = () => {
    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>
            <br/>
            <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 tracking-wide">
                    Prior Publications and Simultaneous Submissions
                </p>

                <div className="text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2 overflow-auto">

                <p>
                ISWC 2025 will not accept research/resource/in-use papers that, at the time of submission, are under review for or have already been published in, or accepted for publication, in a journal or another conference. Prior submissions to workshops are acceptable, provided that the authors avoid self-plagiarism, hold sufficient rights to publish overlapping content in the proceedings, and significantly extend it with 30% of novel work. The conference organizers may share information on submissions with other venues to ensure that this rule is not violated.
                </p>

                <div style={{ marginBottom: '20px' }}></div>

                <p>
                Depositing articles to preprint servers is allowed. However, Research Track submissions must adhere to the following policy (inspired by <a href="https://www.aclweb.org/adminwiki/index.php/ACL_Policies_for_Review_and_Citation"  target="_blank" style={{ color: '#e94607' }}>ACL’s policy</a>): 
                </p>

                <div style={{ marginBottom: '20px' }}></div>

                <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                <li><em>Anonymized</em> preprints within the anonymity period are allowed. Please note that some preprint servers such as Arxiv do not support this option. </li>
                <li>
                <em>Non-anonymized</em> preprints before the anonymity period are allowed. The anonymity period starts on April 30th, 2025 (one week before abstract submission) and ends on June 17th, 2025 (deadline review). We encourage authors to wait to post non-anonymized preprints until after the anonymity period has ended.
                </li>
                <li>
                If a <em>non-anonymized</em> preprint version exists, authors should not cite it and are asked not to publicize it further during the anonymity period, as the submitted paper should be as anonymous as possible.
                </li>
                </ul>
                </div>
            </div>    
        </>
    );
}

export default PriorPublicationMultipleSubmission;
