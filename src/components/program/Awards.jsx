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
                        <p>To be announced at the closing ceremony of the conference.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold">Best Resource Paper</h2>
                        <p>To be announced at the closing ceremony of the conference.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold">Best In-Use Paper</h2>
                        <p>To be announced at the closing ceremony of the conference.</p>
                    </section>

                    {/* <section className="mb-6 bg-yellow-100 p-2">
                        <h2 className="text-2xl font-semibold">Best Industry Paper</h2>
                        <p>To be announced at the closing ceremony of the conference.</p>
                    </section> */}

                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold">Best Poster</h2>
                        <p>To be announced at the closing ceremony of the conference.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">Best Demo</h2>
                        <p>To be announced at the closing ceremony of the conference.</p>
                    </section>

                </div>
            </div>
        </>
    );
}

export default Awards;