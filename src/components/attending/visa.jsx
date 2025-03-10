import React from "react";
import './attending.css';
export const Visa = () => {
    return (
        <div>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>

            <div className="container mx-auto px-4 lg:px-8 lg:pb-12 mt-12">
                <h1 className="text-3xl font-bold text-center text-[#e94607]">VISA Information</h1>

                <h2 className="h2-border-bottom">Exemption of Visa (Short-Term Stay)</h2>
                <div className="mt-4 text-lg">
                    <p>Nationals of certain countries and regions are exempt from obtaining a visa for short-term stays in Japan. The list of exempt countries and further details on visa exemptions can be found on the official website of the Ministry of Foreign Affairs of Japan:</p>
                    <ul className="ul-disc lg:text-lg">
                        <li>
                            <a href="https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html">
                            Visa Exemptions for Short-Term Stay
                            </a>
                        </li>
                    </ul>
                    <p>If your country is not listed under the visa exemption agreement, or if you are unsure about your visa requirements, please check with your nearest Japanese embassy or consulate.
                    </p>
                </div>

                <br />
                <h2 className="h2-border-bottom">Visa Application Information for ISWC2025 Participants</h2>
                <div className="mt-4 text-lg">
                    <p>Visa support letters will only be issued to:</p>
                    <ol>
                        <li>Individuals known to the organization (notification from a member of <a href="https://iswc2025.semanticweb.org/#/organizing_committee">the organizing committee</a> is required).</li>
                        <li>Speakers or presenters at the conference.</li>
                        <li>Committee members.</li>
                        <li>Attendees who have paid the full registration fee.</li>
                    </ol>

                    <p>For attendees in the fourth category, we may request additional documents and/or certificates to verify the provided information and assess whether the applicant is expected to attend the scientific and technical conference. If we are not confident in the validity of the provided information or the likelihood of attendance, we will not issue an invitation letter.</p>
                </div>

                <br />
                <h2 className="h2-border-bottom">Visa Application Information</h2>
                <div className="mt-4 text-lg">
                    <p>Details on how to apply for a visa to enter Japan can be found on the following websites:</p>
                    <ul className="ul-disc lg:text-lg">
                        <li><a href="http://www.mofa.go.jp/j_info/visit/visa/">Ministry of Foreign Affairs of Japan – Visa Information</a></li>
                        <li><a href="http://www.mofa.go.jp/j_info/visit/visa/process/short.html">Visa Application Process – Short-Term Stay</a></li>
                    </ul>
                </div>

                <br />
                <h2 className="h2-border-bottom">Requesting a Visa Support Letter</h2>
                <div className="mt-4 text-lg">
                    <p>To request a visa support letter, please send an email to <a href="mailto:iswc2025-local@easychair.org">iswc2025-local@easychair.org</a> with the following information included in the body of the email:</p>
                    <ul className="ul-disc lg:text-lg">
                        <li><b>Full name</b>(as written in the passport)</li>
                        <li><b>Job title</b></li>
                        <li><b>Mailing address</b></li>
                        <li><b>Nationality</b></li>
                        <li><b>Date of birth</b></li>
                        <li><b>Gender</b> (Male/Female)</li>
                        <li><b>Are you a speaker/presenter?</b> (Yes or No)</li>
                        <li><b>Title of session/paper/workshop you are speaking/presenting at</b></li>
                        <li><b>Itinerary</b> (dates, planned activities, name of hotel)</li>
                        <li><b>Do you require a hard copy of the letter?</b> (Please note that hard copies will take additional processing time.)</li>
                    </ul>

                    <p>Electronic visa support letters will be issued promptly upon verification of paid registration. If you require an original signed letter via regular mail, you must request it in advance.</p>
                </div>

                <br />
                <h2 className="h2-border-bottom">Invitation Letter Details</h2>
                <div className="mt-4 text-lg">
                    <p>The invitation letter will include the following information:</p>
                    <ul className="ul-disc lg:text-lg">
                        <li>Conference dates, title, and location</li>
                        <li>The requester’s role (committee member, speaker, presenter, or attendee)</li>
                        <li>Confirmation that the requester has paid the full registration fee</li>
                    </ul>

                    <p><b>Note:</b> Invitation letters will not be issued to individuals who have not completed their registration payment.</p>
                </div>

                <br />
                <h2 className="h2-border-bottom">Contact Information</h2>
                <p>For any inquiries, please contact:</p>
                <p><a href="mailto:iswc2025-local@easychair.org">iswc2025-local@easychair.org</a></p>
                <p>Kouji Kozaki (Local Organizing Chairs)</p>
            </div>
        </div>
    );
};

export default Visa;