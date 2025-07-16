import React from "react";
import './attending.css';
export const Registration = () => {
    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>

            <div className="container mx-auto px-4 lg:px-8 lg:pb-12 mt-12">
                <h1 className="text-3xl font-bold text-center text-[#e94607]">Registration</h1>
                <br/>

                <p>After reviewing the conditions below, please proceed with your registration by clicking the "Register" button at the bottom of the page.</p>

                <h3 className="text-xl font-semibold mt-4 mb-1">Main Conference</h3>
                <table className="w-full mb-6 border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 border"></th>
                            <th className="p-2 border">Early Fee<br />(to Sep. 16th, 2025)</th>
                            <th className="p-2 border">Regular Fee<br />(to Oct. 31st, 2025)</th>
                            <th className="p-2 border">Onsite Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2 border">Regular</td>
                            <td className="p-2 border">110,000 JPY</td>
                            <td className="p-2 border">125,000 JPY</td>
                            <td className="p-2 border">145,000 JPY</td>
                        </tr>
                        <tr>
                            <td className="p-2 border">Academic*</td>
                            <td className="p-2 border">95,000 JPY</td>
                            <td className="p-2 border">110,000 JPY</td>
                            <td className="p-2 border">130,000 JPY</td>
                        </tr>
                        <tr>
                            <td className="p-2 border">Student</td>
                            <td className="p-2 border">70,000 JPY</td>
                            <td className="p-2 border">85,000 JPY</td>
                            <td className="p-2 border">105,000 JPY</td>
                        </tr>
                    </tbody>
                </table>

                <p className="mb-6 italic">
                    * <b>Academic registration</b> refers to persons that are affiliated with a University or Research Institute.
                    It does not refer to persons from industry for whom the Regular registration fee applies.
                </p>

                <h3 className="text-xl font-semibold mt-4 mb-1">Pre-conference Days, Nov. 2-3 (Workshops/Tutorials/Ph.D. Symposium)</h3>
                <p>Additional Fee:          30,000 JPY</p>

                <h3 className="text-xl font-semibold mt-4 mb-1">Additional Gala Dinner Ticket for an Accompanying Persons</h3>
                <p>Fee:          10,000 JPY</p>


                <p><b>Note</b></p>
                <ul className="list-disc list-inside mb-6">
                    <li>A <b>"Pre-conference Days, Nov 2-3 (Workshops/Tutorials/Ph.D. Symposium) Only"</b> registration option is not available.</li>
                    <li>If you wish to attend the Workshops, Tutorials, or Ph.D. Symposium sessions, please ensure you select both the appropriate <b>Main Conference Registration fee</b> and the<b>Pre-conference Days (Nov. 2-3) fee</b>, and proceed with payment accordingly.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Main Conference Registration includes:</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Access to all main conference sessions (4–6 November 2025)</li>
                    <li>Lunch and coffee breaks during the main conference (4–6 November)</li>
                    <li>Conference materials</li>
                    <li>Posters & Demos session and reception on Tuesday, 4 November 2025</li>
                    <li>Gala Dinner on Wednesday, 5 November 2025</li>
                    <li>Access to the exhibition area</li>
                </ul>


                <h2 className="text-2xl font-semibold mt-6 mb-2">Pre-conference Days option includes:</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Access to Workshops/Tutorials/Ph.D. Symposium sessions (2–3 November 2025)</li>
                    <li>Lunch and coffee breaks during both days (2–3 November)</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Additional Gala Dinner Ticket for an Accompanying Persons includes:</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Gala Dinner (Wednesday, 5 November 2025)</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Terms & Conditions</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>All registration fees are listed in Japanese Yen (JPY/￥) and include tax.</li>
                    <li>Payment in any other currency will not be accepted.</li>
                    <li>The applicable fee is based on the date of receipt of both the registration request and payment. If either is received after midnight (Japan Standard Time) on the relevant deadline date, the higher fee will apply.</li>
                    <li>A confirmation email including a <b>receipt</b> and a <b>QR code</b> will be sent after your registration is completed.</li>
                    <li>Please present the <b>QR code</b> at the registration desk at the conference venue.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Payment Details</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Registration fees can be paid by credit card.</li>
                    <li>Accepted cards: VISA, MasterCard, American Express, and JCB.</li>
                    <li>Payment is confirmed at the time of registration.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Cancellation & Alteration Policy</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>All cancellations or changes must be made in writing via email to: <b>iswc2025-reg@easychair.org</b></li>
                    <li>
                        Cancellation fees apply as follows:
                        <ul className="ul-circle list-inside ml-6 mt-2">
                            <li>Until September 2, 2025: A refund will be issued after deducting a 6% processing fee from the total registration fee.</li>
                            <li>From September 3, 2025 onward: No refund will be issued</li>
                        </ul>
                    </li>
                </ul>

                <div className="text-center">
                    <a
                        href="https://app.payvent.net/embedded_forms/show/6856133c004fb3266a6f163a?locale=en"
                        target="_blank"
                        className="inline-block bg-[#e94607] text-white font-bold text-lg py-3 px-8 rounded-lg shadow-md hover:bg-[#c83c06] transition-colors duration-300"
                    >
                        Register
                    </a>
                </div>


            </div>
        </>
    );
}

export default Registration;
