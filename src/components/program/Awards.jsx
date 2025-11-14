import React from "react";

export const Awards = () => {
    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>
            <br />
            <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">ISWC 2025 Awards
                </p>
                <div className="text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2">

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold">
                            SWSA Distinguished Dissertation Award 2025
                        </h2>
                        <p>
                            The recipient of this year's <a href="https://swsa.semanticweb.org/content/swsa-distinguished-dissertation-award"> SWSA Distinguished Dissertation Award</a> is <strong>Bo Xiong</strong> with their thesis on “Geometric Relational Embeddings”. Bo will receive the award at ISWC 2025, which includes a complimentary registration to the conference, a certificate, and a € 1,000 payment.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold">SWSA Ten-Year Award 2025</h2>
                        <p>The recipient of this year's <a href="https://swsa.semanticweb.org/content/swsa-ten-year-award">SWSA Ten-Year Award</a> is </p>
                        <p><a href="https://link.springer.com/chapter/10.1007/978-3-319-25010-6_1">RDFox: A Highly-Scalable RDF Store</a>, by Yavor Nenov, Robert Piro, Boris Motik, Ian Horrocks, Zhe Wu, and Jay Banerjee.</p>
                        <p>Nenov, Y., Piro, R., Motik, B., Horrocks, I., Wu, Z., Banerjee, J. (2015). RDFox: A Highly-Scalable RDF Store. In: Arenas, M., et al. The Semantic Web - ISWC 2015. ISWC 2015. Lecture Notes in Computer Science(), vol 9367. Springer, Cham. https://doi.org/10.1007/978-3-319-25010-6_1</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold">Best Research Paper</h2>
                        <p>
                            <strong>FLORA: Unsupervised Knowledge Graph Alignment by Fuzzy Logic</strong><br />
                            Yiwen Peng, Thomas Bonald and Fabian Suchanek.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold">Best Resource Paper</h2>
                        <p>
                            <strong>MammoTab 25: A Large-Scale Dataset for Semantic Table Interpretation - Training, Testing, and Detecting Weaknesses</strong><br />
                            Marco Cremaschi, Federico Belotti, Jennifer D’Souza and Matteo Palmonari.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold">Best In-Use Paper</h2>
                        <p>
                            <strong>Open Government Data as Multi-dimensional 5 Star Data: cube.link</strong><br />
                            Michael Luggen, Julien Audiffren, Djellel Difallah, Kwasnitza Stefan, Jean-Luc Cochard, Philippe Cudre-Mauroux and Benedikt Hitz.
                        </p>
                    </section>

                    {/* <section className="mb-6 bg-yellow-100 p-2">
                        <h2 className="text-2xl font-semibold">Best Industry Paper</h2>
                        <p>To be announced at the closing ceremony of the conference.</p>
                    </section> */}

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold">Best Poster</h2>
                        <p>
                            <strong>Unveiling the Butterfly Effect in Knowledge Editing for Large Language Models Using Knowledge Graph-based Analysis</strong><br />
                            Patipon Wiangnak, Natthawut Kertkeidkachorn, and Kiyoaki Shirai.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">Best Demo</h2>
                        <p>
                            <strong>Introducing GPTKB to the Semantic Web</strong><br />
                            Yujia Hu, Tuan-Phong Nguyen, Shrestha Ghosh, Moritz Müller, and Simon Razniewski.
                        </p>
                    </section>


                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold">Poster/Demo Audience Choice Award</h2>
                        <p>
                            <strong>CHeCLOUD—the Cultural Heritage Linked Open Data Cloud</strong><br />
                            Gabriele Tuozzo, Maria Angela Pellegrino, and Antonio Lieto.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold">Best Reviewers</h2>
                        <h3 className="text-xl font-semibold mt-3">Research Track — Senior PC Members</h3>
                        <ul className="list-disc ml-6">
                            <li>María Poveda-Villalón, Universidad Politécnica de Madrid</li>
                            <li>Hala Skaf-Molli, University of Nantes - LS2N</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-3">Research Track — PC Members</h3>
                        <ul className="list-disc ml-6">
                            <li>Elmar Kiesling, Vienna University of Economics and Business</li>
                            <li>Romana Pernisch, Vrije Universiteit Amsterdam</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-3">Resource Track — Senior PC Members</h3>
                        <ul className="list-disc ml-6">
                            <li>Milan Markovic, University of Aberdeen, UK</li>
                            <li>Ruben Taelman, IDLab, Ghent University — imec, BE</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-3">Resource Track — PC Members</h3>
                        <ul className="list-disc ml-6">
                            <li>Jesse Wright, University of Oxford, UK</li>
                            <li>Davide Di Pierro, Université de Montpellier, FR</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-3">In-Use Track</h3>
                        <ul className="list-disc ml-6">
                            <li>Anna Sofia Lippolis, University of Bologna &amp; CNR - ISTC</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold">Best ORKG Comparison</h2>
                        <p className="mt-2">
                            The recipient of this year's ORKG comparison award is:<br />
                            <strong>
                                CompoST: A Benchmark for Analyzing the Ability of LLMs To Compositionally Interpret Questions in a QALD Setting
                            </strong><br />
                            David Maria Schmidt, Raoul Schubert, Philipp Cimiano.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold">SW Challenges Awards</h2>

                        <h3 className="text-xl font-semibold mt-3">LLMs4OL Challenge — Winner #1</h3>
                        <p>
                            <strong>
                                SBU-NLP at LLMs4OL 2025 Tasks A, B, and C: Stage-Wise Ontology Construction Through LLMs Without Any Training Procedure
                            </strong><br />
                            Rashin Rahnamoun and Mehrnoush Shamsfard
                        </p>

                        <h3 className="text-xl font-semibold mt-4">LLMs4OL Challenge — Winner #2</h3>
                        <p>
                            <strong>
                                Alexbek at LLMs4OL 2025 Tasks A, B, and C: Heterogeneous LLM Methods for Ontology Learning (Few-Shot Prompting, Ensemble Typing, and Attention-Based Taxonomies)
                            </strong><br />
                            Aleksandra Beliaeva and Temurbek Rahmatullaev
                        </p>

                        <h3 className="text-xl font-semibold mt-4">SemTab Challenge — Winner</h3>
                        <p>
                            <strong>
                                ADFr: Knowledge Graph Entity Linking via Interactive Reasoning and Exploration with GRASP
                            </strong><br />
                            Sebastian Walter and Hannah Bast<br /><br />
                            <em>Oktie Hassanzadeh — SemTab Challenge Organizer</em>
                        </p>
                    </section>

                </div>
            </div>
        </>
    );
}

export default Awards;