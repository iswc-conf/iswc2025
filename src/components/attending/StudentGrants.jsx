import './attending.css'

export const StudentGrants = () => {
    return (
        <div>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>

            <div className="container mx-auto px-4 lg:px-8 lg:pb-12 mt-12">
                <h1 className="text-3xl font-bold text-center text-[#e94607]">Student Grants</h1>

                <p>If you are a student interested in attending ISWC 2025, you may be eligible to apply for travel grants to support the costs of travel and lodging. This year, travel grants are funded by the Semantic Web Science Association (SWSA).</p>

                <br />
                <h2 className="h2-border-bottom">Funding Disclaimer</h2>
                <p>Please note that this is a form of financial support, not an award or prize. It is intended to assist students who do not have other means of covering their travel-related expenses. If your institution is able to fully fund your trip, we kindly ask that you refrain from applying, so that the limited resources can be directed to those with genuine financial need.</p>

                <br />
                <h2 className="h2-border-bottom">Eligibility Criteria</h2>
                <p>
                    You must currently be a student at a higher education institution; and have an ISWC 2025 submission that has been accepted to either the doctoral consortium, the main conference, workshops, tutorials, the poster/demo session, or the Semantic Web challenge (you may have submissions to more than one of these categories). If additional funds are available, we will also consider supporting students who do not have papers at the conference.
                </p>

                <br />
                <h2 className="h2-border-bottom">Selection Criteria</h2>
                <ul className="ul-disc lg:text-lg">
                    <li>Priority to students with papers in the doctoral symposium and the main track</li>
                    <li>Priority to students from underrepresented groups</li>
                    <li>Students with posters, demos, workshops, tutorials, and Semantic Web challenge papers if money is left</li>
                    <li>Students without a paper if there is money left</li>
                </ul>

                <br />
                <h2 className="h2-border-bottom">Application Process</h2>
                <ul className='ul-disc lg:text-lg'>
                    <li>Fill out and submit the ISWC 2025 Student Travel Award Application Form on <a href='https://easychair.org/conferences/?conf=iswc2025'>easychair</a>, choosing “Student Grants” when making a new submission</li>
                    <li>Ask your supervisor to email the student grants chairs using the following email address <i>iswc2025-students@easychair.org</i>, confirming that you are a current student under their supervision and that you will be attending ISWC 2025. The subject of the email should be <i>{'“ISWC 2025 Student Travel Award Application Verification for {YOUR FULL NAME}”'}</i>. The text should read <i>{'“I confirm that {YOUR FULL NAME} is a student that is currently under my supervision at {INSTITUTION NAME} and that they will be attending ISWC 2025 to present work that they completed under my supervision. {SUPERVISOR NAME}”'}</i></li>
                </ul>

                <br />
                <h2 className="h2-border-bottom">Timeline</h2>
                <ul className='ul-disc lg:text-lg'>
                    <li>Application opening date: July 9th 2025</li>
                    <li>Deadline for submission: Sep 15th 2025 (or earlier if funds are no longer available)</li>
                    <li>Notification of results: Sep 30th 2025 (latest)</li>
                </ul>

                <br />
                <h2 className="h2-border-bottom">Terms and Conditions</h2>
                <ul className='ul-disc lg:text-lg'>
                    <li>Attend the conference</li>
                    <li>Reimbursement after the conference</li>
                    <li>Keep all receipts</li>
                </ul>

                <br />
                <h2 className="h2-border-bottom">Student Grants and Activities Chairs</h2>
                <p>Contact: iswc2025-students@easychair.org</p>

                <br />
                <p>Ines Akaichi - Vienna University of Economics and Business, Vienna, Austria</p>

                <br />
                <p>Atsuko Yamaguchi - Tokyo City University, Tokyo, Japan</p>
            </div>
        </div>
    )
}