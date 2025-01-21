import React from "react";
export const InUse = () => {
  return (
    <>
      <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
      </div>
      <br />
      <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8 overflow-visible">
        <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">Call for In-Use Track Papers</p>

        <div className="text-md lg:text-lg font-[300] lg:mx-10 sm:mx-2">
          <p>
            The ISWC In-Use track provides a forum to explore the benefits and challenges of applying Semantic Web and Knowledge Graph technologies in concrete, practical use cases, in contexts ranging from industry to government and society.
          </p>
          <p>
            The track aims to give a stage to applied works addressing real-world problems in which Semantic Web and Knowledge Graph technologies have been employed, possibly in combination with machine learning, deep learning, and other AI techniques.
          </p>
          <p>
            The In-Use track thus seeks submissions describing applied research as well as software tools, systems, or architectures that benefit from the use of Semantic Web and Knowledge Graph technologies (including, but not limited to, technologies based on the Semantic Web standards). Importantly, submitted papers should provide convincing evidence of the use of the proposed application or tool by the target user group, preferably outside the group that conducted the development and, more broadly, outside the Semantic Web and Knowledge Graph research communities.
          </p>
          <p>
            A primary focus of the submissions should be on the benefits of Semantic Web and Knowledge Graph technologies for the intended use case and (if relevant) the added challenges they introduce. In addition, papers that advance the understanding of issues related to applying and deploying solutions involving Semantic Web and Knowledge Graph technologies in practice are strongly encouraged.
          </p>
          <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Important Dates</h2>
          <p>All deadlines are 23:59 AoE (anywhere on Earth).</p>
          <ul>
            <li>Abstract submission due: <b>May 6th, 2025</b></li>
            <li>Full paper submission due: <b>May 13th, 2025</b></li>
            <li>Rebuttal: <b>June 17th - 20th, 2025</b></li>
            <li>Notifications: <b>July 17th, 2025</b></li>
            <li>Camera ready papers due: <b>July 31st, 2025</b></li>
          </ul>

          <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Topics of Interest</h2>
          <p>
            We welcome submissions that demonstrate the use of Semantic Web and Knowledge Graph technologies, encompassing all topics mentioned in the Research Track. Submissions may particularly emphasize one or more of the following types of contributions:
          </p>
          <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
            <li>Applications in domain-specific areas such as libraries, cultural heritage, healthcare, life sciences, engineering, smart manufacturing, smart cities, open government, legal tech, finance.</li>
            <li>Descriptions of how Semantic Web resources (ontologies, datasets, software, standards, etc.) are being used in practice.</li>
            <li>Assessment of the Semantic Web and Knowledge Graph technologies from diverse points of view, including:
              <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                <li>Usability and acceptance by stakeholder groups</li>
                <li>Uptake outside the proposing research communities</li>
                <li>Scalability of solutions and their large-scale deployment</li>
                <li>Costs and benefits of implementing, deploying, using, and managing Semantic Web and Knowledge Graph technologies</li>
                <li>Risks and opportunities of using Semantic Web and Knowledge Graph technologies in organizations for their businesses and customers</li>
              </ul>
            </li>
            <li>Lessons learned and best practices from deploying and using an application or service based on Semantic Web and Knowledge Graph technologies.</li>
            <li>Comparison of Semantic Web and Knowledge Graph technologies with alternative approaches that use conventional or competing technologies (e.g., database management systems, model-driven engineering, other AI techniques).</li>
            <li>Application-oriented work that does not qualify as a research paper, where the use of rather than the development of Semantic Web and Knowledge Graph technologies has a demonstrated impact on more flexible, more efficient, or otherwise improved solutions.</li>
          </ul>

          <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Differentiation From the Other Tracks</h2>
          <p>
            We strongly recommend that prospective authors carefully check the calls of the other tracks of the conference in order to identify the optimal track for their submission (submission of the same work to multiple tracks is prohibited). Papers that propose new algorithms and architectures should be submitted to the Research track as usual. Papers focusing on new reusable resources themselves, such as datasets, ontologies, workflows, etc., should be submitted to the Resources Track. Papers that describe and/or assess the use or application of Semantic Web and Knowledge Graph technologies in practical settings should be submitted to the In-Use track. See “Exemplary In-Use Papers From Previous Editions of ISWC” (below) for additional details.
          </p>

          <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Review Criteria</h2>
          <p>Reviews for the In-Use track are not anonymous. Submissions will be assessed in terms of novelty and significance (of the proposed use case or solution), uptake by the target user group, demonstrated or potential impact, as well as overall soundness and quality. Therefore, authors should clearly address these aspects in their submission.</p>
          <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Soundness and Quality</h3>
          <p>Methodological correctness of the performed evaluation in terms of quantitative and/or qualitative metrics to assess the pros and cons of the proposed solution.</p>
          <p>Quality of the discussion of the benefits and challenges of adopting Semantic Web and Knowledge Graph technologies for solving the addressed problem and/or with respect to alternative approaches.</p>
          <p>Overall clarity and quality of the submission.</p>
          <p>Guidelines for reviewers are available  <a href="https://iswc2025.semanticweb.org/#/guidelines/review" target="_blank" style={{ color: '#e94607' }}>here</a>.</p>
          <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Novelty and Significance</h3>
          <p>Novelty and significance of the addressed problem or use case when applying Semantic Web and Knowledge Graph technologies. Novelty in the application or assessment of Semantic Web and Knowledge Graph technologies, which can be reflected in terms of, for example: (1) the role they play in the solution; (2) how they foster adoption; or (3) their combination/interplay with other technologies.</p>
          <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Uptake</h3>
          <p>Evidence of the adoption of the proposed solution by a relevant user base (domain practitioners, the general public, developers, etc.), preferably distinct from the proposer’s institutions and the Semantic Web and Knowledge Graph research communities. This adoption can reflect either current uptake – demonstrating existing use – or expected uptake, supported by a well-founded plan for large-scale deployment or adoption in the specific domain.</p>
          <h3 style={{ color: '#e94607' }} className="text-lg font-medium mt-4">Impact</h3>
          <p>Technological, business, and social impact of the proposed solution, especially in contrast to alternative approaches. Validity and applicability of the proposed approach in a different domain. Applicability of the lessons learned from the adoption of Semantic Web and Knowledge Graph technologies both from a technical and non-technical perspective.</p>


          <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Rebuttal</h2>
          <p>
            Authors will have the chance to respond to the reviews during a rebuttal period that precedes the reviewer discussion period. In order to reduce the workload on authors and reviewers, authors are encouraged to use their rebuttal in a focused way to:
          </p>
          <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
            <li>highlight clear factual errors in reviews regarding the content of the submission, or</li>
            <li>respond to explicit questions from reviewers.</li>
          </ul>


          <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Supplemental Material Statement</h2>
          <p>
            We recommend authors to add a statement at the end of their submission that clarifies the availability of supplemental material (see Supplemental Material Statement Guide for more details). Such material may include datasets, ontologies, queries, code, configuration details, etc., depending on the contributions of the paper. The statement should cover all of the material necessary to assess claims in the paper. Unless otherwise justified, it is expected that access to resources is provided from the submitted paper since these resources often play an important role in the review process and are relevant to the prospective readership. In case certain resources cannot be made available (e.g., due to privacy, ethical, or financial concerns), the statement should include a justification of why this is the case. In case the paper is fully self-contained and does not have supplemental material associated, a short statement can be provided arguing that the paper is self-contained. Please see the Supplemental Material Statement Guide for more details.
          </p>

          <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Submission Details</h2>
          <ul className="list-disc ml-16 text-md lg:text-lg font-[300]"></ul>
          <li>
            Pre-submission of abstracts is a strict requirement. All papers and abstracts have to be submitted electronically via EasyChair.
          </li>
          <li>
            All research submissions must be in English, and no longer than 15 pages (excluding references). Papers that exceed this limit will be rejected without review.
          </li>
          <li>
            Submissions must be either in PDF or HTML, formatted in the style of the Springer Publications format for Lecture Notes in Computer Science (LNCS). For details on the LNCS style, see <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" target="_blank" style={{ color: '#e94607' }}>Springer’s Author Instructions</a>. For HTML submission guidance, please see the HTML submission guide.
          </li>
          <li>
            Submissions to the ISWC 2025 In-Use track are not anonymous. We encourage embedding metadata in the PDF or HTML to provide a machine-readable link from the paper to the resource.
          </li>
          <li>
            Authors of accepted papers will be required to provide semantic annotations for the abstract of their submission, which will be made available on the conference website. Details will be provided at the time of acceptance.
          </li>
          <li>
            Accepted papers will be distributed to conference attendees and also published by Springer in the conference proceedings, as part of the Lecture Notes in Computer Science series.
          </li>
          <li>
            At least one author of each accepted paper must register for the conference and present the paper.
          </li>
          <li>
            As in previous years, students will be able to apply for travel/registration support to attend the conference.
          </li>

          <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Prior Publication and Multiple Submissions</h2>
          <p>
            ISWC 2025 will not accept papers that, at the time of submission, are under review for or have already been published or accepted for publication in a journal, another conference, or another ISWC track. The conference organizers may share information on submissions with other venues to ensure that this rule is not violated.
          </p>

          <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Research Metadata and Comparisons</h2>
          <p>
            Authors are encouraged to consider whether their submission can profit from an explicit comparison with related approaches in the literature by means of an ORKG comparison in the Open Research Knowledge Graph (ORKG) (this is not mandatory). More information on the background and how to create an ORKG comparison can be found here (including a how-to video). This can be done during the submission process – in which case a link to the comparison can be added to the submission for reviewers. This workflow describes the steps involved in the creation of such a comparison.
          </p>

          <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Exemplary In-Use Papers from Previous Editions of ISWC</h2>
          <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
            <li><a href="https://doi.org/10.1007/978-3-031-77847-6_12">Scrocca, M. et al. (20245) Intelligent Urban Traffic Management via Semantic Interoperability Across Multiple Heterogeneous Mobility Data Sources. ISWC 2024. LNCS, vol. 15233. Springer, pp. 218–235.</a></li>
            <li><a href="https://doi.org/10.1007/978-3-031-47243-5_19">Cuddihy, P. et al. (2023) Aviation Certification Powered by the Semantic Web Stack. ISWC 2023. LNCS, vol. 14266. Springer, pp. 345–361.</a></li>
            <li><a href="https://doi.org/10.1007/978-3-031-19433-7_42"> Angioni, S. et al. (2022) Leveraging Knowledge Graph Technologies to Assess Journals and Conferences at Springer Nature. ISWC 2022. LNCS, vol 13489. Springer, pp. 735-752.</a></li>
            <li><a href="https://doi.org/10.1007/978-3-030-88361-4_38">Rojas J.A. et al. (2021) Leveraging Semantic Technologies for Digital Interoperability in the European Railway Domain. ISWC 2021. LNCS, vol 12922. Springer, pp. 648-664.</a></li>
            <li><a href="https://doi.org/10.1007/978-3-030-30796-7_27">Ibáñez LD., Millard I., Glaser H., Simperl E. (2019) An Assessment of Adoption and Quality of Linked Data in European Open Government Data. ISWC 2019. LNCS, vol 11779. Springer, pp. 436-453.</a></li>
            <li><a href="https://doi.org/10.1007/978-3-030-00668-6_21">Thanapalasingam T., Osborne F., Birukou A., Motta E. (2018) Ontology-Based Recommendation of Editorial Products. ISWC 2018. LNCS, vol 11137. Springer, pp. 341-358.</a></li>
            <li><a href="https://doi.org/10.1007/978-3-319-68204-4_29">Mehdi G. et al. (2017) Semantic Rule-Based Equipment Diagnostics. ISWC 2017. LNCS, vol 10588. Springer, pp. 314-333.</a></li>
            <li><a href="https://doi.org/10.1007/978-3-319-46547-0_34">Piro R. et al. (2016) Semantic Technologies for Data Analysis in Health Care. ISWC 2016. LNCS, vol 9982. Springer, pp. 400-417.</a></li>
          </ul>

          <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">In-Use Track Chairs</h2>
          <p><b>Maribel Acosta</b>, Technical University of Munich, Germany</p>
          <p><b>Andrea Giovanni Nuzzolese</b>, CNR - Institute of Cognitive Sciences and Technologies, Italy</p>
          <p>Contact: <a href="mailto:iswc2025-in-use@easychair.org">iswc2025-in-use@easychair.org</a></p>

        </div>
      </div>
    </>
  );
}

export default InUse;