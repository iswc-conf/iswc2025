import React from "react";

export const ReviewGuidelines = () => {
    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>
            <br/>
            <div className="flex justify-start items-start flex-col pt-10 pb-0 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:h-auto lg:px-32 px-8 overflow-visible">
                <p style={{ color: '#e94607' }} className="text-3xl font-bold mb-4 tracking-wide">
                    Review Guidelines
                </p>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Review guidelines for ISWC 2025 Research/In-Use/Resource Tracks</h2>
                <p>Thank you for agreeing to review papers for ISWC 2025 and to help us form the programme!</p>
                <p>Here we provide guidance on the review process. These guidelines are inspired by similar ones from SIGMOD to improve ISWC's review process for our community's benefit. The first section offers general review content guidance, and the second suggests a review structure.</p>
                <p>Send feedback on this guide to <a href="mailto:iswc2025-research@easychair.org" style={{ color: '#e94607' }}>iswc2025-research@easychair.org</a>.</p>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Table of Contents</h2>
                <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                    <li>Review Content</li>
                    <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                        <li>Provide a detailed and constructive review</li>
                        <li>Be civil and polite</li>
                        <li>Adequately justify your recommendation</li>
                        <li>Do not try to de-anonymize authors</li>
                        <li>Be honest about your understanding of the paper</li>
                    </ul>
                    <li>Suggested review structure</li>
                </ul>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Review Content</h2>
                <p>We discuss five guidelines for reviews. We include examples of things to avoid in reviews, compared with examples of what would be better to include in a review.</p>

                <h3 style={{ color: '#e94607' }} className="text-lg font-semibold mt-4">Provide a detailed and constructive review</h3>
                <p>Please provide reviews that help the authors to improve their work, particularly in cases where your recommendation is to reject the paper. Please avoid vague, subjective, or overly-general feedback that could apply to any paper. Rather aim to provide detailed feedback that is specific to the paper under review, and indicates concrete ways in which the paper could be improved.</p>
                <table className="table-auto border-collapse border border-gray-400 mt-4">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Examples to Avoid</th>
                            <th className="border border-gray-400 px-4 py-2">Better Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2">“The paper lacks novelty.”(No justification or details provided.)</td>
                            <td className="border border-gray-400 px-4 py-2">“The key method described in Algorithm 1 appears to be very similar to that of Doe et al. [A], with only minor changes to the recursive aspect. The authors should clarify the novelty or relation of their method with respect to that proposed by Doe et al.”</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2">“The techniques seem trivial.”(No justification or details provided.)</td>
                            <td className="border border-gray-400 px-4 py-2">“The proof of the key result, described in Theorem 1, involves a standard reduction from an existing result that is described, for example, in Section 4.2 of the textbook by Zoe [A].”</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2">“The paper is poorly written”(No justification or details provided.)</td>
                            <td className="border border-gray-400 px-4 py-2">
                                “I found the paper difficult to follow; for example:
                                <br />
                                – The novel concept of ‘logical transmogrification’ plays a central role in this paper, but only on page 8 is it actually discussed or defined. This left me lost for the first half of the paper. The concept should be clearly described in the introduction.
                                <br />
                                – Section 3 defines the proposed method, but provides no examples nor intuition to aid readability. Some examples would greatly improve this section….”
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2">“The paper is uninteresting”(No justification or details provided.)</td>
                            <td className="border border-gray-400 px-4 py-2">“The paper proposes a method to generate pseudorandom numbers from RDF triples, but it is unclear to me what such a method is useful for. It would be helpful if the authors could highlight concrete use-cases for such a method in the introduction, along with a motivating example.”</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2">“The contributions are not clear”(No justification or details provided.)</td>
                            <td className="border border-gray-400 px-4 py-2">“The title and introduction of the paper focus on data quality, but the techniques described and evaluated in the rest of the paper seem to apply standard OWL reasoners over the data for motivations that appear to be largely unrelated to data quality. The authors should clarify their contribution in the introduction and ensure that it reflects the content of the paper.”</td>
                        </tr>
                    </tbody>
                </table>

                <h3 style={{ color: '#e94607' }} className="text-lg font-semibold mt-4">Be civil and polite</h3>
                <p>Please keep a civil tone. Though (almost) nobody sets out to be uncivil, it can be challenging to avoid indeliberately coming across as being “harsh” in anonymous reviews. Keep in mind that you may be reviewing the papers of students who are new to research and the community, or more generally, the papers of authors who have invested a lot of time and effort into their work. Your review should be constructive. Your review should include discussions of both positive and negative aspects rather than focusing only on negatives. Your review should not be disparaging or dismissive, and should avoid unnecessarily negative language. Until proven otherwise, you should assume good faith on the part of the authors. Avoid calling into question the ethics or honesty of the authors, but rather keep your review factual. If you have an ethical concern regarding a paper, please discuss it with other PC/SPC/Chairs first to make sure there is consensus that the concern is indeed well-founded.</p>

                <table className="table-auto border-collapse border border-gray-400 mt-4">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Examples to Avoid</th>
                            <th className="border border-gray-400 px-4 py-2">Better Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2">“The writing is terrible”(Unnecessarily disparaging and dismissive. Not constructive.)</td>
                            <td className="border border-gray-400 px-4 py-2">“The writing contains frequent spelling mistakes and grammatical errors, making it hard to follow and review. Below I will provide some samples of these errors to illustrate the types of mistakes I hope the authors can fix for a future version.”</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2">“The authors clearly have little understanding of the area.”(Unnecessarily disparaging and dismissive. Not constructive. Not justified. Speculative.)</td>
                            <td className="border border-gray-400 px-4 py-2">“The paper makes claims that contradict the literature, for example, that SPARQL 1.1 does not support path queries. The related works section misses some key references [A,B,C] for evaluating path queries. The authors could perhaps look into [C] as a survey of the relevant literature, if they have not seen it.”</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2">“The experiments were selected to make the authors’ approach look good.”(Assumes deliberate dishonesty when other possibilities have not been ruled out.)</td>
                            <td className="border border-gray-400 px-4 py-2">“The paper does not justify why the authors create a benchmark of their own queries (with few joins), nor why they did not use an existing benchmark such as proposed by Roe et al. [A]. The latter benchmark has been used in many works and includes queries with a high number of joins, for which I suspect the authors’ approach will not work as well relative to the baselines. Including an external benchmark would help to examine these cases and solidify the papers’ claims.”</td>
                        </tr>
                    </tbody>
                </table>

                <h3 style={{ color: '#e94607' }} className="text-lg font-semibold mt-4">Adequately justify your recommendation</h3>
                <p>Please clearly relate your review comments to your recommendation. The authors do not necessarily need to agree with your recommendation, but they should at least be able to understand your rationale, and how you think they could improve their work.</p>
                <p>Each paper should satisfy the relevance criteria of the call, advance the area by providing significant novel insights/claims (which may include negative results), be technically correct in terms of its key contributions, be understandable and (when applicable) reproducible by someone knowledgeable and patient, and provide enough evidence to justify its key claims and conclusions. Failing (in part or whole) with respect to one of the criteria in the call for papers is potentially a valid reason to reject. Keep in mind that papers can achieve these goals without being highly technical and while leaving open questions or tasks for future work.</p>
                <p>In case you recommend a reject, ensure that you clearly justify the rejection …</p>
                <ul className="list-disc list-inside text-md lg:text-lg font-[300]">
                    <li>Avoid rejecting a paper solely for infrequent minor issues that do not affect the key content of the paper, but can instead be addressed by the authors (in an obvious way) for a camera-ready version.</li>
                    <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                        <li>Rather make your recommendation assuming that infrequent minor issues are corrected. Make concrete suggestions on how to address these issues for a future (possibly camera-ready) version of the paper.</li>
                    </ul>
                    <li></li>
                    <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                        <li>Rather base your recommendation on the proposed approach, and suggest exploring the idea for future work (if you are happy to share it).</li>
                    </ul>
                    <li>Avoid rejecting a paper solely because there is something it does not achieve.</li>
                    <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                        <li>Rather base your recommendation on what the paper does achieve, and whether or not that is correct, sufficient, etc. (Do, however, expect key limitations and scope to be adequately clarified.)</li>
                    </ul>
                    <li>Avoid rejecting a paper solely because there exists a benchmark or baseline not used in the experiments.</li>
                    <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                        <li>Rather base your recommendation on whether or not the experiments and/or proofs are sufficient to justify the key claims or conclusions of the paper, and whether or not those claims/conclusions are of importance.</li>
                    </ul>
                    <li>Avoid rejecting a paper solely because the results are negative.</li>
                    <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                        <li>Rather base your recommendation on whether or not it advances the state-of-the-art, or offers negative results that provide novel insights on how the state-of-the-art can be advanced in future.</li>
                    </ul>
                    <li>Avoid rejecting a paper solely because it is not clear how its results could be immediately put into practice.</li>
                    <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                        <li>Rather base your recommendation on what the community stands to learn from the paper.</li>
                    </ul>
                    <li>Avoid rejecting a paper solely because it does not appear highly technical, or because the method (in hindsight) appears “obvious” or “trivial”.</li>
                    <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                        <li>Rather base your recommendation on whether or not the paper provides novel ideas or insights that advance the field.</li>
                    </ul>
                    <li>Avoid rejecting a paper for not meeting unrealistic, arbitrary or open-ended goals.</li>
                    <ul className="list-disc ml-16 text-md lg:text-lg font-[300]">
                        <li>Rather base your recommendation on realistic and/or concrete criteria that are justified in the context of the goals of the work and the literature.</li>
                    </ul>
                </ul>

                <p>We also ask reviewers to refrain from later changing (only) their recommendation to “follow the crowd” or to “seek consensus”, particularly when the new recommendation is no longer justified by the review text. However, if during the discussion phase with other reviewers and chairs you see something in a new light, or agree with another reviewer regarding a certain positive or negative aspect, you may of course change your recommendation, and modify your review text accordingly. We aim for real consensus on papers where the reviewers stand by their recommendations. Failing that, we prefer no consensus to an artificial consensus where recommendations are changed just for the sake of aligning them.</p>

                <h3 style={{ color: '#e94607' }} className="text-lg font-semibold mt-4">EXAMPLES TO FOLLOW</h3>
                <p>“This paper must be rejected due to having multiple typos, missing references to similar works in related areas, and bugs in Equation 1.”</p>
                <p>(All such issues have clear resolutions that could be easily addressed for the camera-ready version. Few specific details are provided to justify the recommendation or improve the work.)</p>
                <p>“For a future version of this paper (potentially the camera-ready version, if accepted), the authors should be sure to address the following minor comments:</p>
                <p>Please spell-check, e.g., ‘qeury’, ‘frgment’, etc.The authors should acknowledge similar works in relational databases, e.g., by pointing to the survey of Roe et al. [A]. In Equation 1, max should be replaced by arg max.”</p>

                <br />
                <p>OR</p>
                <br />

                <p>“The paper has many grammatical errors and notational bugs that made it difficult for me to follow and review. I fear that other readers, even experts in the area, would likewise have difficulty understanding the work. For this reason I recommend a reject. Below I will provide some illustrative examples of these issues, which should be addressed for a future version”</p>
                <p>“I am rejecting this paper because one could obviously achieve better performance in Algorithm 1 by parallelising the branches.”</p>
                <p>(This is speculative. It is best offered as a suggestion for future work, rather than a reason to reject. The suggestion might only be obvious after reading the paper.)</p>
                <p>“As part of future work, I think it would be interesting to explore the idea of parallelising the branches in Algorithm 1, which may lead to further performance improvements.”</p>
                <p>“One argument for rejecting the paper is that the current approach does not support updates, which are crucial in practice.”</p>
                <p>(Even though updates are important and not considered, the approach could be extended in future. The justification for rejection should consider what is presented, not what is not presented.)</p>
                <p>“The work achieves impressive results for the read-only case. Though a complete solution would require support for updates, the authors discuss how such features could be combined with the proposed approach in future.”</p>

                <br />
                <p>OR</p>
                <br />

                <p>“One reason for rejecting the paper is that the current approach does not support updates, and there is no clear way in which the method could be extended to support updates due to the nature of the data structure proposed. The paper does not discuss this issue. While a highly-optimised read-only index might still be a useful contribution, the approach proves to be only marginally faster than baselines that do support updates.”</p>
                <p>“The paper does not deal with the case of cyclic graphs, and hence I recommend rejection.”</p>
                <p>(Even without considering the cyclic case, the results for acyclic cases might be an important contribution. The justification for rejection should consider what is presented, not what is not presented.)</p>
                <p>“The paper proves a novel tractability result for the case of acyclic graphs using new techniques. This begs the question of what happens in the cyclic case, which seems an interesting direction for future research based on these results.”</p>

                <br />
                <p>OR</p>
                <br />

                <p>“While the paper proves a novel tractability result for the case of directed acyclic graphs, it is a minor extension of a similar result by Boe et al. [A] for trees, and uses the same techniques.”</p>
                <p>“I recommend rejecting the paper as the benchmark from Doe et al. [A] is not used and the authors include only two baselines.”</p>
                <p>(It is not clear what the additional benchmark would add to the discussion. The baselines the reviewer wishes to see are not specified, nor why these particular baselines are specified. It is not made clear why extra baselines are needed or what they would add to the discussion. It is not clear that it would be feasible to run them. It is not clear what claims are not properly validated, but would be validated with these additional experiments.)</p>
                <p>“The paper’s selection of baselines and experiments, though incomplete, provides strong evidence for the claims of improved performance for path queries.”</p>

                <br />
                <p>OR</p>
                <br />

                <p>“I recommend a reject because the paper claims to provide superior performance versus the state of the art for SPARQL queries, with a main contribution being the optimisation of path queries. However, the benchmarks tested include very few path queries. To validate these claims, it would be necessary to include a benchmark with more (diverse) path queries, such as proposed by Poe et al. [A], in order to better understand the performance of such queries. Also, the baselines included run on disk while the proposed approach runs in memory. A fairer and stronger baseline would be to compare with the in-memory database proposed by Joe et al. [B], which is optimised for path queries, and has a code repository linked from the paper.”</p>
                <p>“The paper reports a precision measure of 46%, which is far too low for the approach to be applicable in practice.”</p>
                <p>(While this may be true, the paper may still improve upon the state of the art for a challenging and important problem. It may lead to further developments that, in turn, lead to approaches applicable in practice. Alternatively, the paper may be reporting an interesting negative result that refutes a commonly held belief/misconception within the community.)</p>
                <p>“The paper reports a precision measure of 46%, which though still too low for most practical applications, is a significant improvement with respect to the state of the art on this challenging and important problem. I think that further improvements can follow from this work, and can eventually yield more precise techniques that are applicable in practice.”</p>

                <br />
                <p>OR</p>
                <br />

                <p>“The paper reports a precision measure of 46%, indicating that Deep Learning methods are outperformed by much simpler classifiers for this task. This is quite a surprising negative result! The ablation study provides very useful insights into why this is the case.”</p>

                <br />
                <p>OR</p>
                <br />

                <p>“The paper reports a precision measure of 46%, which is too imprecise to be useful in practice, and offers only a single percentage point improvement over the baselines tested. On the other hand, recall drops by several percentage points compared to these baselines. Given the somewhat incremental nature of the proposal, and the arguable performance improvement over the baseline method, I lean towards rejecting this paper.”</p>
                <p>“I recommend rejecting the paper. Though the approach is new and proves effective, it is also trivial and fairly obvious. It was not difficult to come up with this approach.”</p>
                <p>(Exploring and reporting on “obvious” lines of research is important to advance the community, and often an approach that appears “obvious” is only so in retrospect. Such ideas that provide new insights through simplification are often crucial ideas for advancement. How easy or difficult it was to come up with the approach is subjective and speculative.)</p>
                <p>“The approach is not only effective, but it is also quite natural and elegant. It is surprising that nobody has thought of this approach before, and I commend the authors for not only coming up with this idea, but evaluating and publishing it.”</p>
                <p>“I think the paper should be rejected as discussion on related works is selective and brief. I can name around 30 to 40 references that were not discussed. Also the new benchmark that the authors created by hand only contains 10,000 examples, which is insufficient for training deep neural networks.”</p>
                <p>(Goals appear unrealistic. Due to space reasons, conference papers cannot reference and discuss every potentially related work. Even dedicated surveys will sometimes miss references. No specific missing references are mentioned. Creating an even larger benchmark by hand appears to demand too much of the authors. Having more than 10,000 examples is an arbitrary goal: if the authors had 20,000, would this be enough, or would the review still ask for more? What would be enough, and why?)</p>
                <p>“The paper does not discuss all of the papers in the area, but rather focuses on more recent approaches to the problem using similar machine learning methods. This is understandable for space reasons, but I would recommend at least including the seminal works by Boe et al [A] and Foe et al. [B], and if space permits, works by Koe et al. [C,D] as well.</p>
                <p>It is commendable that the authors create a new benchmark of 10,000 examples for this problem, which is a useful contribution to the community! However, the dataset by Toe et al. [A] contains 50,000 examples, and is commonly used for training deep neural networks. If the authors’ dataset could somehow be extended in future to a similar size, perhaps using a similar methodology on a crowdsourcing platform, it could replace that dataset with much higher-quality examples.</p>


                <h3 style={{ color: '#e94607' }} className="text-lg font-semibold mt-4">Do not try to de-anonymize authors</h3>
                <p>We ask reviewers not to go out of their way to try to specifically deanonymize authors. Such examples include reviewing commit histories on repositories, looking up owners or web domains, looking up metadata in documents provided in repositories, searching for unpublished versions of the papers, etc. If the paper reveals any of the authors’ identities or affiliations, or strongly hints at the same, or links to resources claimed to be theirs that are published under their authorship, this may become grounds for rejection. This may include referencing their previous publications in the first person, using examples in the paper involving their affiliation, referencing supplemental material directly from the paper that directly indicates their identity, etc. If you are unsure if something is a breach of the <a href="https://www.acm.org/diversity-inclusion/words-matter" target="_blank" style={{ color: '#e94607' }}>dual anonymous</a> (i.e, both authors and reviewers are anonymous) review process, please note it in your review and discuss it with other PC/SPC/Chairs.</p>

                <p>EXAMPLES TO AVOID</p>
                <p>“Performing a WHOIS request on the domain of the website linked from the paper, I found out that the author is Jane Doe, whose DBLP profile suggests that she has worked in related areas. Thus I am rejecting the paper for breaching the dual anonymous policy.”</p>

                <p>EXAMPLE TO FOLLOW</p>
                <p>(Do not do this.)</p>





                <h3 style={{ color: '#e94607' }} className="text-lg font-semibold mt-4">Be honest about your understanding of the paper</h3>
                <p>Of all the guidelines, this can be the hardest to follow. As much as we can try to avoid this situation, it can happen that you are assigned a paper that is a bit outside your comfort zone or area of expertise. Or you may be assigned a paper in your area that contains a large amount of technical detail you cannot verify in the time given. Please do not give up right away. Try your best to understand as much as you can of the paper, and to provide a recommendation based on what you understood. Be honest in the review text about what you understood, and what you didn’t understand. It is possible that someone more expert in the area might find the paper really interesting and worthwhile. Conversely, and perhaps even more commonly, your lack of understanding might well be the paper’s fault: it might be the case that the paper uses unhelpful notation, over-complicates technical detail, is poorly written, etc.</p>
                <p>Even if you do not have much experience in the particular sub-area, be wary of papers where you struggled to follow the motivation, overall technical ideas, and main results. These should be expressed in a manner that the broader ISWC audience can understand. Be particularly wary of papers for which other reviewers also expressed major difficulties understanding (something that can only be detected if reviewers are honest about their understanding of the paper). If the SPC or Chairs feel that a more expert review is necessary, they will solicit it (something that again depends on reviewers being honest about how much you understood).</p>
                <p>If you did not fully understand a paper, please consider lowering your confidence score. When assigning the score, please take into account the following aspects:</p>
                <ul className="list-disc list-inside">
                    <li>Your depth of understanding of the paper.</li>
                    <li>How well you know the literature in the area.</li>
                    <li>How certain you are about your recommendation.</li>
                </ul>
                <p>Please try to be honest and fair when selecting your confidence, which is intended to be a measure of the previous three points only (and not your repute as a researcher). The scores can be interpreted as follows (<a href="https://brenocon.com/blog/2014/02/what-the-acl-2014-review-scores-mean/" target="_blank" style={{ color: '#e94607' }}>based on guidelines for ACL 2014</a>).</p>

                <ul className="list-disc list-inside">
                    <li>5: (expert) Positive that my evaluation is correct. I read the paper very carefully and am familiar with related work and have published on this topic.</li>
                    <li>4: (high) Quite sure. I tried to check the important points carefully and am familiar with related work. It’s unlikely, though conceivable, that I missed something that should affect my ratings.</li>
                    <li>3: (medium) Pretty sure and willing to defend my evaluation, but there’s a chance I missed something. Although I have a good feel for this area in general, I did not carefully check all the paper’s details, e.g., the math, experimental design, or novelty.</li>
                    <li>2: (low) It is quite probable that I missed some details, didn’t understand some central points, or can’t be sure about the novelty of the work, since the topic is peripheral to my own interests.</li>
                    <li>1: (none) Not my area, or the paper is very hard to understand. My evaluation is an educated guess based on general understanding of science and scientific writing.</li>
                </ul>

                <p>While in an ideal world all reviews on a paper would provide genuinely expert comments and recommendations, in practice, this is quite a rare situation, even for experienced reviewers/researchers. In case of lower confidence, we encourage you to indicate in the review (or the internal comments to PC/SPC) issues relating to your understanding of the paper, your knowledge of the area, or doubts you may have about the recommendation. Such comments may be crucial for making fair decisions on which papers to accept, and which to reject.</p>

                <h2 style={{ color: '#e94607' }} className="text-xl font-semibold mt-6">Suggested Review Structure</h2>
                <p>Reviewers may develop their own style of review over time, and no individual style is “best”. But if you are a relative newcomer to reviewing, and are looking for guidance on how to structure your review, consider adopting the following structure:</p>
                <ul className="list-disc list-inside">
                    <li>Overview: Summarise the paper in your own words in a short, concise paragraph. While the authors (presumably) already know what their paper is about, this demonstrates to the authors, other reviewers, and chairs the extent to which you understood the paper, and what your personal perspective of the paper is. If you can provide a good overview, the authors will tend to value your opinion more. It is also a good exercise to ensure that you understand the paper. (In case there are parts of the paper you did not understand, clarify them here.)</li>
                    <li>Strengths: Summarise around three main strengths of the paper as concise bullet points. Being able to expand on the positive aspects of the paper can be encouraging to authors, and can also help them to improve their work by building upon those strengths.</li>
                    <li>Weaknesses: Summarise around three main weaknesses of the paper as concise bullet points. You do not need to go into too much detail yet. Do not include minor issues here. Consider criteria as listed in the call and in the questions of the review form (e.g., relevance, impact, clarity, reproducibility) when preparing the list of weaknesses.</li>
                    <li>Detailed comments: Discuss in more detail each of the weaknesses. As a guide, you could aim for a paragraph on each weakness. Relate each weakness to specific aspects in the paper. Relate them to the criteria in the call for papers, if necessary. Be constructive, polite and factual. Always try to clarify how the authors could realistically address these weaknesses, providing details. If you cannot clearly justify your reason for listing a weakness here, remove it.</li>
                    <li>Recommendation: Explicitly state your recommendation (reject, borderline, accept, etc.). Relate your recommendation to the aforementioned strengths and weaknesses. Almost every paper, even strong ones, have weaknesses. Not all weaknesses are grounds for rejection. Some might refer to limitations that could be addressed for future work. Other weaknesses might be adequately addressed as part of the camera-ready version (e.g., being more upfront about certain limitations). In case you accept, make clear what improvements (if any) you expect for a camera ready version. In case you recommend a rejection, provide a summary of directions in which the authors could improve their work.</li>
                    <li>Minor comments: Provide here minor comments that seem to have an easy and uncontroversial fix, such as spelling mistakes, grammatical mistakes, bugs in notation. In case such errors are frequent, you can opt to provide around three or four illustrative examples, and also list the general issue as a weakness above (e.g., if frequently poor grammar makes the paper very difficult to understand, make that a key weakness).</li>
                </ul>


                <p>Please note that the ISWC 2025 review form will include an explicit section in which you can summarise the strengths and weaknesses of the paper, and justify your recommendation.</p>
            </div>
        </>
    );
}

export default ReviewGuidelines;
