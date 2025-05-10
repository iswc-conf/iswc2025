import React from "react";
export const Registration = () => {
    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>

            <div className="container mx-auto px-4 lg:px-8 lg:pb-12 mt-12">
                <h1 className="text-3xl font-bold text-center text-[#e94607]">Registration</h1>
                <br/>

                <p className="mb-4">The registration system is scheduled to open in late June.</p>
                <p>The registration fees are as follows:</p>

                <h3 className="text-xl font-semibold mt-4 mb-1">Full Conference</h3>
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

                <h3 className="text-xl font-semibold mt-4 mb-1">
                    Full Conference + Workshops/Tutorials/Ph.D. Symposium
                </h3>
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
                            <td className="p-2 border">140,000 JPY</td>
                            <td className="p-2 border">155,000 JPY</td>
                            <td className="p-2 border">175,000 JPY</td>
                        </tr>
                        <tr>
                            <td className="p-2 border">Academic*</td>
                            <td className="p-2 border">125,000 JPY</td>
                            <td className="p-2 border">140,000 JPY</td>
                            <td className="p-2 border">160,000 JPY</td>
                        </tr>
                        <tr>
                            <td className="p-2 border">Student</td>
                            <td className="p-2 border">100,000 JPY</td>
                            <td className="p-2 border">115,000 JPY</td>
                            <td className="p-2 border">135,000 JPY</td>
                        </tr>
                    </tbody>
                </table>

                <p className="mb-6 italic">
                    Note: We do not offer a “Workshops/Tutorials/Ph.D. Symposium Only”
                    registration option.
                </p>
                <p className="mb-6 italic">
                    * <b>Academic registration</b> refers to persons that are affiliated with a University or Research Institute.
                    It does not refer to persons from industry for whom the Regular registration fee applies.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Delegate Registration includes:</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Access to Workshops/Tutorials/Ph.D. Symposium sessions (2–3 November 2025) and full conference sessions (4–6 November 2025)</li>
                    <li>Lunch and coffee breaks during both the Workshops/Tutorials/Ph.D. Symposium (2–3 November) and the full conference (4–6 November)</li>
                    <li>Conference materials</li>
                    <li>Posters & Demos session and reception on Tuesday, 4 November 2025</li>
                    <li>Conference Dinner on Wednesday, 5 November 2025</li>
                    <li>Access to exhibition</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Terms & Conditions</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>All registration fees are quoted in Japanese Yen (JPY) and taxes are included.</li>
                    <li>Payment in any other currency will not be accepted.</li>
                </ul>

                <p>Further details will be announced on this website as they become available.</p>


            </div>
        </>
    );
}

export default Registration;
