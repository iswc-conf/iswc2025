import React from "react";
import { useState, useRef } from "react";

export const JobFair = () => {
   return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center"></div>
            <br />
            <div className="flex flex-col pt-10 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-8 tracking-wide text-center">
                    Job Fair - ISWC 2025
                </p>
                
                <p className="text-lg text-zinc-700 mb-8 text-center">
                    The ISWC 2025 job fair is open to all attendees of the ISWC 2025 conference. Attendees are encouraged to submit a CV or resume before the event so they can be circulated to the sponsors.
                </p>
                
                <section className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm mb-6">
                    <div className="p-6 sm:p-8">
                        <div className="min-w-0">
                            <h2 className="text-2xl font-bold tracking-tight mb-4">
                                Looking for your next big opportunity?
                            </h2>
                            <p className="leading-relaxed text-zinc-800">
                                As part of the job fair, interested participants are advised to share their resumes with all the participating companies before the event. This will help the participating companies in recognizing potential candidates and having some face-to-face conversations during the fair.
                            </p>
                            <p className="mt-4 leading-relaxed text-zinc-800 font-medium">
                                Please ensure that your resume specifies your availability, the type of job you are interested in, and includes your contact details!
                            </p>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm mb-6">
                    <div className="p-6 sm:p-8">
                        <div className="min-w-0">
                            <h2 className="text-2xl font-bold tracking-tight mb-4">
                                Submit your CV!
                            </h2>
                            <p className="leading-relaxed text-zinc-800 mb-4">
                                Submit your information and CV using the following form:
                            </p>
                            <a 
                                href="https://tinyurl.com/5bh9rer2" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-3 rounded-lg font-semibold text-white transition-colors"
                                style={{ backgroundColor: '#e94607' }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#d13f06'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#e94607'}
                            >
                                Submit Your CV
                            </a>
                            <p className="mt-4 text-sm leading-relaxed text-zinc-600 italic">
                                By submitting your resume, you are consenting to be contacted by participating and sponsoring companies regarding recruitment and job opportunities.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm mb-6">
                    <div className="p-6 sm:p-8">
                        <div className="min-w-0">
                            <h2 className="text-2xl font-bold tracking-tight mb-4">
                                Explore available job postings by our sponsors
                            </h2>
                            <p className="leading-relaxed text-zinc-800 mb-4">
                                Our sponsors have current job openings that might be of interest to conference attendees:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-zinc-700 mr-2">•</span>
                                    <div>
                                        <span className="font-semibold text-zinc-900">metaphacts:</span>{' '}
                                        <a 
                                            href="https://metaphacts.com/about/about-us/career" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="transition-colors"
                                            style={{ color: '#e94607' }}
                                            onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                                        >
                                            View career opportunities
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-zinc-700 mr-2">•</span>
                                    <div>
                                        <span className="font-semibold text-zinc-900">Internet Initiative Japan (IIJ):</span>{' '}
                                        <a 
                                            href="https://www.iij.ad.jp/recruit/career/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="transition-colors"
                                            style={{ color: '#e94607' }}
                                            onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                                        >
                                            View career opportunities
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <p className="mt-4 text-sm leading-relaxed text-zinc-600 italic">
                                More career opportunities to be added soon!
                            </p>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm mb-6">
                    <div className="p-6 sm:p-8">
                        <div className="min-w-0">
                            <h2 className="text-2xl font-bold tracking-tight mb-4">
                                At the conference
                            </h2>
                            <p className="leading-relaxed text-zinc-800 mb-4">
                                We will mark a special area (Room 206) during the afternoon coffee break on November 4th, and ask the sponsors to be available.
                            </p>
                            <p className="leading-relaxed text-zinc-800">
                                Nonetheless, ISWC sponsors will have a badge indicating so; therefore, feel free to reach out to them at any time during the conference!
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default JobFair;