import React from "react";

export const HTMLSubmissionGuide = () => {
    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>
            <br/>
            <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 tracking-wide">
                    HTML Submission Guide
                </p>

                <p>
                    ISWC 2025 welcomes research articles employing the Open Web Platform. This document provides guidance to authors who wish to make their contributions available in HTML and related technology stack.
                </p>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">General Guidance</h2>
                <p>
                    Contributions in HTML should be shared in EasyChair as a ZIP archive that contains the complete and self-contained content of the article. It should include a main “index.html” and all used resources (like media, scripts) to guarantee a correct visualization of the document on common desktop and mobile Web browsers. Please note the following key requirements
                </p>
                <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                    <li>HTML template: any tooling or process can be used to produce the HTML.</li>
                    <li>Content: the full content of the article must be human-readable with HTML alone. The use of CSS and JavaScript is encouraged, but should not interfere with the accessibility of the content.</li>
                    <li>Offline-friendly: there must not be any external dependencies (e.g., a network connection) to retrieve, to render, or to manipulate the content of the article.</li>
                    <li>Privacy: scripts must not be used to identify or track readers.</li>
                    <li>View: the rendered article (HTML+CSS) should have the “look and feel” of the LNCS authoring guidelines. Pixel-perfection is not expected. This is to ensure visual consistency of the proceedings as well as to have comparative page limits with the print-based publication. The HTML article has to be compliant with the page limit constraint.</li>
                </ul>
                <p>
                    It should be possible to read the HTML contributions on an average desktop computer or mobile computer that is equipped with a reasonably current, Javascript-enabled Web browser (e.g., Firefox, Chrome/Chromium, Internet Explorer, Brave, Safari). We encourage authors to make their articles as accessible as possible (for reading and interacting) because different consumers (in this case initially the reviewers and chairs) may have different environments and abilities.
                </p>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Final (“camera-ready”) Version</h2>
                <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                    <li>The publisher for the Research, In-Use, and Resources tracks will be confirmed soon. It is likely that the publisher will require submissions in LaTeX (or possibly Word) format. If an article submitted in HTML is accepted, the authors can choose to convert their paper manually or using tool support as outlined below.</li>
                    <li>Articles accepted in the Posters & Demos track and in the Doctoral Consortium will be published as CEUR-WS.org proceedings volumes. CEUR-WS.org allows articles to be in HTML but, for guaranteed printability and archiving, requires an additional PDF, which should be a print-out of the HTML article in the LNCS layout.</li>
                    <li>Articles accepted in the Industry track will be published on the conference website. The same “HTML+PDF” rule applies as explained above for posters, demos and doctoral papers.</li>
                </ul>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Recommendations</h2>
                <p>
                    We recommend that authors take the following steps independently of the general process:
                </p>
                <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                    <li>Before sharing your article with ISWC, self-publish your HTML version, eg. at a repository, personal or institution website that’s publicly accessible and archivable from a URL.</li>
                    <li>Include the URL of your self-published article along the lines of: “Identifier: http://example.org/article “ after the list of authors and/or include the URL in the abstract of your article.</li>
                    <li>Make sure to preserve this information in your camera-ready version.</li>
                    {/* <a href="" target="_blank" style={{ color: '#e94607' }}> */}
                    <li>Consider using a <a href="https://creativecommons.org/" target="_blank" style={{ color: '#e94607' }}>Creative Commons</a> license like <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" style={{ color: '#e94607' }}>CC BY 4.0</a> on the self-published version.</li>
                    <li>Create multiple archived copies of the self-published version using on-demand free archive services like <a href="https://web.archive.org/" target="_blank" style={{ color: '#e94607' }}>archive.org</a>, <a href="https://archive.is/" target="_blank" style={{ color: '#e94607' }}>archive.is</a>.</li>
                    <li>If you intend to also publish the “Author’s Accepted Manuscript” version following peer-review, note Springer’s <a href="https://www.springernature.com/gp/open-research/policies/journal-policies" target="_blank" style={{ color: '#e94607' }}>self-archiving policy</a>.</li>
                    <li>Send a notification about your original self-published article to the <a href="https://linkedresearch.org/" target="_blank" style={{ color: '#e94607' }}>Linked Open Research Cloud</a> (LORC) to improve the discoverability of your article.</li>
                    <li>For additional help, authors are welcome to <a href="https://gitter.im/linkedresearch/chat" target="_blank" style={{ color: '#e94607' }}>join the public chat</a> on <a href="https://linkedresearch.org/" target="_blank" style={{ color: '#e94607' }}>Linked Research</a>. Please note that this is not an official communication channel of the conference. It is an open community for scholarly communication and people passionate about the Web.</li>
                    <li>Authors are encouraged to use tooling and processes that work best for them.</li>
                </ul>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">dokieli</h2>
                <p>
                    <a href="https://dokie.li/" target="_blank" style={{ color: '#e94607' }}>dokieli</a> is a client-side editor for decentralized article publishing in HTML+RDF annotations, notifications, and social interactions. It implements W3C Recommendations like <a href="https://www.w3.org/TR/annotation-model/" target="_blank" style={{ color: '#e94607' }}>Web Annotation</a>, <a href="https://www.w3.org/TR/ldn/" target="_blank" style={{ color: '#e94607' }}>Linked Data Notifications</a>, and <a href="https://www.w3.org/TR/activitypub/" target="_blank" style={{ color: '#e94607' }}>ActivityPub</a>.
                </p>
                <p>
                    The LNCS author guidelines can be used as a template (ZIP package as expected for the submission). There is a list of <a href="https://github.com/linkeddata/dokieli/wiki#examples-in-the-wild" target="_blank" style={{ color: '#e94607' }}>examples in the wild</a>.
                </p>
                <p>
                    Authors that would like to self-publish can use any HTTP server. Authors, reviewers, and readers can use their own WebID and Linked Data based personal storages, e.g., <a href="http://github.com/solid/node-solid-server/" target="_blank" style={{ color: '#e94607' }}>Solid</a>, with dokieli. Join the <a href="https://gitter.im/linkeddata/dokieli" target="_blank" style={{ color: '#e94607' }}>chat</a> if you need help.
                </p>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">ScholarMarkdown</h2>
                <p>
                    <a href="https://github.com/rubensworks/ScholarMarkdown" target="_blank" style={{ color: '#e94607' }}>ScholarMarkdown</a> is a framework for writing articles in the lightweight Markdown syntax, with automatic translation into HTML+RDFa, and the option to output PDF. It provides syntactic sugar to easily perform common tasks such as citing articles, writing math equations, and more. Note: ScholarMarkdown requires <a href="https://www.ruby-lang.org/en/documentation/installation/" target="_blank" style={{ color: '#e94607' }}>Ruby</a> to be installed.
                </p>

                <p>
                    To get started, follow the <a href="https://github.com/rubensworks/ScholarMarkdown#quick-start" target="_blank" style={{ color: '#e94607' }}>quick start guide</a>, which provides the required LNCS template in Markdown. After compiling your Markdown files to HTML, an output directory will be created. This folder contains a standalone version of your article in HTML, and this is the folder that must be submitted on EasyChair. Further details on ScholarMarkdown can be found on the <a href="https://github.com/rubensworks/ScholarMarkdown/wiki" target="_blank" style={{ color: '#e94607' }}>wiki</a>.
                </p>

                {/* <a href="" target="_blank" style={{ color: '#e94607' }}> */}
                <p className="text-md lg:text-lg font-[300]">
                    The Markdown-based source files enables straightforward versioning and collaborative editing with version-control systems such as git, and integrates nicely with automated <a href="https://github.com/rubensworks/ScholarMarkdown/wiki/Self-publishing" target="_blank" style={{ color: '#e94607' }}>self-publishing via solutions such as GitHub pages</a>, as demonstrated by the <a href="https://github.com/rubensworks/ScholarMarkdown/wiki/Examples" target="_blank" style={{ color: '#e94607' }}>examples in the wild</a>.
                </p>

                <p>
                    To get started, follow the <a href="https://github.com/rubensworks/ScholarMarkdown#quick-start" target="_blank" style={{ color: '#e94607' }}>quick start guide</a>, which will provide you with the required LNCS template in Markdown (<a href="https://iswc2019.semanticweb.org/files/2018/12/scholarmarkdown-template-initial-1ukmyy2.zip" target="_blank" style={{ color: '#e94607' }}>Example of the initial template</a>). After compiling your <a href="https://github.com/rubensworks/ScholarMarkdown#3-compile-your-article" target="_blank" style={{ color: '#e94607' }}>Markdown files to HTML</a>, an output/ directory will be created (<a href="https://iswc2019.semanticweb.org/files/2018/12/scholarmarkdown-template-compiled-10hkhxq.zip" target="_blank" style={{ color: '#e94607' }}>Example of the compiled template</a>). This output/folder contains a standalone version of your article in HTML, and this is the folder that must be submitted on EasyChair. Further details on ScholarMarkdown can be found on the <a href="https://github.com/rubensworks/ScholarMarkdown/wiki" target="_blank" style={{ color: '#e94607' }}>wiki</a>.
                </p>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Acknowledgements</h2>
                <p className="text-md lg:text-lg font-[300]">
                    We would like to thank <a href="https://csarven.ca/#i" target="_blank" style={{ color: '#e94607' }}>Sarven Capadisli</a> for his valuable contributions to these guidelines.
                </p>

            </div>
        </>
    );
}

export default HTMLSubmissionGuide;
