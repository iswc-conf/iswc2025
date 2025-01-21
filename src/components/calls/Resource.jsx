import React from "react";

export const Resource = () => {
  return (
    <>
      <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
      </div>
      <br />
      <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8 overflow-visible">
        <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">Call for Resource Track Papers</p>
        <div className="text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2">

          <p>
            Resources are of paramount importance as they foster scientific advancement and the development of novel applications. Sharing resources is key to ensuring reproducibility, allowing other researchers to leverage FAIR principles for scientific data management to compare results and methods or to explore new lines of research, and supporting practitioners in reusing research outputs.
          </p>
          <p>
            The ISWC 2025 Resources Track aims to promote the sharing of resources that support, enable, or utilize semantic web research. We welcome descriptions of resources that leverage knowledge representation based on Semantic Web standards or other graph data models to improve the acquisition, processing, and sharing of data on the web.
          </p>
          <p>
            Resources include, but are not restricted to: datasets, knowledge graphs, ontologies/vocabularies, ontology design patterns, evaluation benchmarks or methods, software tools/services, APIs and software frameworks, workflows, crowdsourcing task designs, protocols, methodologies, and metrics, that have contributed or may contribute to the generation of novel scientific work and applications in the semantic web. In particular, we encourage the sharing of such resources following the best and well-established practices within the semantic web community. As such, this track calls for contributions that provide a concise and clear description of a resource and its usage.
          </p>

          <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Important Dates</h3>
          <p>Abstract submission due: <b>May 6th, 2025</b></p>
          <p>Full paper submission due: <b>May 13th, 2025</b></p>
          <p>Rebuttal: <b>June 17th - 20th, 2025</b></p>
          <p>Notifications: <b>July 17th, 2025</b></p>
          <p>Camera ready papers due: <b>July 31st, 2025</b></p>
          <p>All deadlines are 23:59 AoE (anywhere on Earth)</p>

          <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Resources of Interest</h3>
          <p>A typical Resource Track paper has its focus set on reporting on resources that fall into one of the following categories:</p>
          <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
            <li>Datasets produced:
              <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                <li>to support specific evaluation tasks (for instance, labeled ground truth data);</li>
                <li>to support novel research methods;</li>
                <li>by novel algorithms.</li>
              </ul>
            </li>
            <li>Knowledge graphs, represented using semantic web technologies or other graph models for web data, which can be reused in research or industry.</li>
            <li>Ontologies, vocabularies, and ontology design patterns, with a focus on describing the modelling process underlying their creation.</li>
            <li>Reusable software and services, e.g., prototypes/services supporting a given research hypothesis and enabling specific data processing and engineering tasks.</li>
            <li>Community-shared software frameworks that can be extended or adapted to support scientific study and experimentation.</li>
            <li>Crowdsourcing task designs that have been used and can be (re)used for building resources such as gold standards and the like.</li>
            <li>Benchmarking activities focusing on datasets and algorithms for comprehensible and systematic evaluation of existing and future systems.</li>
            <li>Novel evaluation methodologies and metrics, and their demonstration in an experimental study.</li>
            <li>Protocols for conducting experiments and studies.</li>
            <li>Educational Material for and about semantic technologies and techniques, including curriculum pertaining to education about knowledge graphs, ontologies, or other semantic technologies (e.g., well-described tutorials), and semantic artifacts (e.g., knowledge graphs or ontologies) that can be used to enhance education.</li>
          </ul>

          <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Differentiation from the Other Tracks</h3>
          <p>
            We strongly recommend that prospective authors carefully check the calls of the other main tracks of the conference in order to identify the optimal track for their submission. Papers that propose new algorithms and architectures should be submitted to the regular Research track, whilst papers that describe the use of semantic web technologies in practical settings should be submitted to the In-Use track.
          </p>
          <p>
            When new reusable resources are produced during the process undertaken for achieving these results, such as datasets, ontologies, workflows, etc., and they can be reused on a wider range of use cases, they are suitable subjects for submission to the Resources Track. As examples of resources that fit the Resource Track, consider tools immediately available for reuse, or benchmarks where baseline algorithms are only used to prove their relevance.
          </p>

          <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Review Criteria</h3>
          <p>
            The program committee will consider the quality of both the resource and the paper in its review process. Therefore, authors must ensure unfettered access to the resource both during the review process and after, by citing the resource at a permanent location. For example, data available in a repository such as <a href="https://figshare.com/" target="_blank" style={{ color: '#e94607' }}>FigShare</a>, <a href="https://zenodo.org/" target="_blank" style={{ color: '#e94607' }}>Zenodo</a>, or a domain-specific repository; or software code being available in a public code repository, such as <a href="https://github.com/" target="_blank" style={{ color: '#e94607' }}>GitHub</a> or <a href="https://bitbucket.org/" target="_blank" style={{ color: '#e94607' }}>BitBucket</a> or one’s institutional open data repository. Code releases should be properly deposited according to community best practices. In exceptional cases, when it is not possible to make the resource public, authors must provide anonymous access to the resource for the reviewers and briefly explain why the resource cannot be made public. All resources should clearly disclose <b>their license</b>.
          </p>
          <p>
            We welcome the submission of established resources, having a community using them (excluding the authors), and of new resources, which may not prove established reuse but have sufficient evidence and motivation for claiming potential adoption. Evidence of adoption of a resource is considered a positive factor in the evaluation.
          </p>

          <h4 style={{ color: '#e94607' }} className="text-md font-medium mt-3">Impact:</h4>
          <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
            <li>Does the resource break new ground?</li>
            <li>Does the resource fill an important gap?</li>
            <li>How does the resource advance the state of the art?</li>
            <li>Has the resource been compared to other existing resources (if any) of similar scope?</li>
            <li>Is the resource of interest to the semantic web community?</li>
            <li>Is the resource of interest to society in general?</li>
            <li>How will this resource support the adoption of semantic web technologies?</li>
            <li>What impact will this resource have (or currently has)?</li>
          </ul>

          <h4 style={{ color: '#e94607' }} className="text-md font-medium mt-3">Reusability:</h4>
          <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
            <li>Is there evidence of usage by a wider community beyond the resource creators or their project?</li>
            <li>Is the resource easy to (re)use? For example, does it have high-quality documentation? Are there tutorials available?</li>
            <li>Is the resource general enough to be applied in a wider set of scenarios, not just for the originally designed use?</li>
            <li>Is there potential for extensibility to meet future requirements?</li>
            <li>Does the resource include a clear explanation of how others use the data and software? Or (for new resources) how others are expected to use the data and software?</li>
            <li>Does the resource description clearly state what the resource can and cannot do, and the rationale for the exclusion of some functionality?</li>
          </ul>

          <h4 style={{ color: '#e94607' }} className="text-md font-medium mt-3">Design & Technical Quality:</h4>
          <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
            <li>Does the design of the resource follow resource-specific best practices?</li>
            <li>Did the authors perform an appropriate reuse or extension of suitable high-quality resources?</li>
            <li>Is the resource suitable for solving the task at hand?</li>
            <li>Does the resource provide an appropriate description (both human- and machine-readable), thus encouraging the adoption of FAIR principles?</li>
          </ul>

          <h4 style={{ color: '#e94607' }} className="text-md font-medium mt-3">Availability:</h4>
          <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
            <li>Is the resource publicly available? For example as API, Linked Open Data, Download, Open Code Repository.</li>
            <li>Is the resource publicly findable? Is it registered in (community) registries (e.g., Linked Open Vocabularies, BioPortal, or DataHub)?</li>
            <li>Is there a sustainability plan specified for the resource?</li>
            <li>Does the resource adopt open standards, when applicable? Alternatively, does it have a good reason not to adopt standards?</li>
          </ul>

          <p>
            In addition to the above criteria for evaluation, we stress that there are availability requirements to fulfill, as specified as follows:
            <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
              <li>Mandatory: Is the resource (and related results) published at a persistent URI (PURL, DOI, w3id)?</li>
              <li>Mandatory: Is there a canonical citation associated with the resource?</li>
              <li>Mandatory: Does the resource provide a license specification? (See creativecommons.org, opensource.org for more information)</li>
            </ul>
          </p>

          <p>
            Guidelines for reviewers are available <a href="https://iswc2025.semanticweb.org/#/guidelines/review" target="_blank" style={{ color: '#e94607' }}>here</a>. 
            </p>
          <p>To ensure that reviewers and readers of published papers will easily find the mandatory availability information, please use the <a href="https://iswc2025.semanticweb.org/#/guidelines/resources" target="_blank" style={{ color: '#e94607' }}>Resource Availability Statement Guide</a> and suggested wording.
          </p>

          <p>
            Regarding specific resource types, checklists of their quality attributes are available in a <a href="http://doi.org/10.21954/ou.se.28191170" target="_blank" style={{ color: '#e94607' }}>presentation</a>. Both authors and reviewers may make use of them when assessing the quality of a particular resource.
          </p>


          <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Submission Details</h3>
          <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
            <li>Pre-submission of abstracts is a strict requirement. All papers and abstracts have to be submitted electronically via <a href="https://easychair.org/conferences/?conf=iswc2025" target="_blank" style={{ color: '#e94607' }}>EasyChair</a>.</li>
            <li>Papers describing a resource must be in the range of 8 and 15 pages (excluding references). Papers must describe the resource and focus on the sustainability and community surrounding the resource. Benchmark papers are expected to include evaluations and provide a detailed description of the experimental setting. Papers that exceed the page limit will be rejected without review.</li>
            <li>All submissions must be in English. Submissions must be either in PDF or HTML, formatted in the style of the Springer Publications format for Lecture Notes in Computer Science (LNCS). For details on the LNCS style, see  <a href="http://www.springer.com/computer/lncs/lncs+authors?SGWID=0-40209-0-0-0" target="_blank" style={{ color: '#e94607' }}>Springer’s Author Instructions</a>. For <a href="https://iswc2025.semanticweb.org/#/guidelines/html-submission" target="_blank" style={{ color: '#e94607' }}>HTML submission guidance, please see the HTML submission guide used for ISWC 2025</a>.</li>
            <li>ISWC 2025 submissions for the resources track are not anonymous. We encourage embedding metadata in the PDF or HTML to provide a machine-readable link from the paper to the resource.</li>
            <li>Authors of accepted papers will be required to provide semantic annotations for the abstract of their submission, which will be made available on the conference website. Details will be provided at the time of acceptance.</li>
            <li>Accepted papers will be distributed to conference attendees and also published by Springer in the printed conference proceedings, as part of the Lecture Notes in Computer Science series.</li>
            <li>At least one author of each accepted paper must register for the conference and present the paper. As in previous years, students will be able to apply for registration or travel support to attend the conference.</li>
          </ul>

          <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Prior Publication and Multiple Submissions</h3>
          <p>ISWC 2025 will not accept resource papers that, at the time of submission, are under review for or have already been published or accepted for publication in a journal, another conference, or another ISWC track. Depositing articles to preprint servers is allowed. Please read our "prior publication and multiple submission policy" for further information.</p>

          <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Research Metadata and Comparisons</h3>
          <p>To facilitate clearly stating novelty to readers and peer-reviewers alike, findability of the paper if accepted, and trying to use knowledge graphs ourselves, you may add to the paper a so-called “ORKG comparison” with the <a href="https://orkg.org/" target="_blank" style={{ color: '#e94607' }}>Open Research Knowledge Graph</a> (ORKG). Such an ORKG Comparison is a characterization of a submission by juxtaposing it with related resources, if there are any, and therewith highlighting the key difference(s) of your resource with related ones. More information on the background and how to create an ORKG comparison can be found  <a href="https://www.orkg.org/orkg/help-center/article/38/Accompany_your_paper_submission_with_an_ORKG_comparison" target="_blank" style={{ color: '#e94607' }}>here</a> (including a how-to video). This can be done during the submission process – in which case a link to the comparison can be added to the submission for reviewers. <a href="https://iswc2023.semanticweb.org/wp-content/uploads/2023/01/ORKGWorkflow.pdf" target="_blank" style={{ color: '#e94607' }}>This workflow</a> describes the steps involved in the creation of such a comparison. This addition to an ISWC paper submission is experimental and optional. It may not be relevant to your resource, and the absence of such a comparison will not negatively affect the review of the paper.</p>

          <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Resource Track Chairs</h3>
          <p>Contact: <a href="mailto:iswc2025-resource@easychair.org">iswc2025-resource@easychair.org</a></p>
          <p><b>Cogan Shimizu</b>, Wright State University, US</p>
          <p><b>Angelo Salatino</b>, KMi, The Open University, UK</p>


      </div>
    </div >
    </>
  );
}

export default Resource;
