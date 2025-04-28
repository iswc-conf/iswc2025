import React from "react";
import ISWC_HEAD from "./ISWC_HEAD.png";
import ISWC1 from "./ISWC1.png";
import ISWC2 from "./ISWC2.png";
import ISWC3 from "./ISWC3.png";
import './blog.css';

const NatureNavigator = () => {
    return (
        <div>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>
            <div className="container mx-auto px-4 lg:px-8 lg:pb-12 mt-12">
                <img src={ ISWC_HEAD } alt="ISWC Header" className="rounded-xl my-4" />
                <h1 className="font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">ISWC under the Nature Navigator lens</h1>
                
                <p><strong>Author:</strong> Angelo Salatino, Research Fellow at the Knowledge Media Institute of the Open University (UK)</p>
                <br />

                <p>The International Semantic Web Conference (ISWC) is a leading annual event that brings together researchers, practitioners, and industry leaders in semantic web technologies. The conference promotes collaboration and knowledge exchange, focusing on innovative approaches to data interoperability, knowledge representation, and intelligent information retrieval. Participants discuss the development and application of semantic web standards, tools, and methodologies for integrating and utilizing diverse data sources. By showcasing cutting-edge research and practical implementations, ISWC aims to drive the advancement and adoption of the semantic web across various domains and industries, ultimately improving the way information is accessed and used in an increasingly interconnected digital world.</p>

                <p>To learn more about ISWC’s history, we explored all the 1,564 published articles from the main track from 2002 to 2024, published in LNCS proceedings. We collected the paper DOIs and fed them into the Nature Navigator tool, developed by Springer Nature (see Appendix for further information). </p>

                <p>You can explore this research autonomously using <a href="https://navigator.nature.com/the-international-semantic-web-conference_2" target="_blank" style={{ color: '#e94607' }}>Nature Navigator</a> (free access with login), but to pique your interest, here are some of the insights we found.</p>

                <p>The figure below shows the distribution of publications over time. Records were registered in 2006, 2017, and 2011 with 85-86 papers. Interestingly, all three editions were held in Europe: Athens (2006), Bonn (2011), and Vienna (2017).</p>

                <img src={ ISWC1 } alt="Distribution of ISWC papers" className="rounded-xl my-4" />
                <p><strong>Fig. 1. Distribution of ISWC papers in LNCS proceedings from 2002 to 2024.</strong>.</p>
                <br/>

                <p>The conference papers were divided into six primary themes. The majority of papers fell under the Semantic Web Technologies and Applications category (762 papers, 49%), followed closely by Knowledge Graphs and Embedding Techniques (755 papers, 48%) and Ontology and Reasoning in Knowledge Bases (703 papers, 45%). A smaller but still substantial number of papers were categorized under Semantic Web and Information Retrieval (678 papers, 43%) and RDF Data and SPARQL Query Processing (541 papers, 35%). The smallest category was Semantic Web Services and Composition, with only 203 papers (13%).</p>
                
                <p>The sum of the subtopics is higher than the total papers analysed because one paper can be classified with more than one subtopic.</p>

                <img src={ ISWC2 } alt="Main topics of ISWC" className="rounded-xl my-4" />
                <p><strong>Fig. 2. Main topics of ISWC and their associated papers in parenthesis. </strong></p>
                <br/>

                <p>The cumulative distribution of papers across the six highlighted themes in the following figure shows varying research trends over time. Semantic Web Technologies and Applications (purple line), Ontology and Reasoning in Knowledge Bases (blue), and Semantic Web and Information Retrieval (cyan) all showed consistent, linear growth throughout the two decades. Knowledge Graphs and Embedding Techniques (red line) grew more slowly initially but sharply increased around 2011, eventually reaching the level of the previous three themes in a shorter time frame. RDF Data and SPARQL Query Processing (yellow) followed a similar pattern to Knowledge Graphs and Embedding Techniques (red), but research in this area appears to have slowed down around 2019. Semantic Web Services and Composition (green) showed a linear increase from 2002 to 2013, then plateaued and nearly ceased.</p>

                <img src={ ISWC3 } alt="Cumulative distribution of papers" className="rounded-xl my-4" />
                <p><strong>Fig. 3. Cumulative distribution of papers for ISWC’s six main topics.</strong></p>
                <br/>

                <p>How did the papers presented at ISWC 2024 relate to the six main global trends? To investigate this, all 11 session names from the 2024 main tracks–each containing 4 thematically coherent papers–were selected and mapped to these six general topics (see Table below). It is worth noting that we did not force a one-to-one mapping, acknowledging that sessions could contribute to multiple topics. From the mapping, we can observe that the most addressed topic is “Knowledge Graphs and Embedding Techniques”, involving sessions on Data Integration, Information Extraction, and Entity Linking. It ensures Data Quality, uses Machine Learning for Graphs and Link Prediction for analysis and completion, and leverages Language Models for enhanced KG interaction and representation, often using embeddings. Interestingly, no session from ISWC 2024 addressed Semantic Web Services and Composition, confirming the claim above.</p>

                <div className="overflow-x-auto my-6">
                    <table className="table-auto border border-gray-300 w-full">
                        <thead style={{ backgroundColor: '#e94607', color: 'white' }}>
                            <tr>
                                <th className="px-4 py-2 border border-gray-300">Main Topics</th>
                                <th className="px-4 py-2 border border-gray-300"><a href="https://iswc.umbc.edu/program/schedule/" target="_blank" style={{ color: '#e94607' }}>Main Tracks' Session Titles</a> from ISWC 2024</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">Semantic Web Technologies and Applications</td>
                                <td className="border px-4 py-2">Data Integration, Web Data, Digital Trust</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Knowledge Graphs and Embedding Techniques</td>
                                <td className="border px-4 py-2">
                                    Data Integration, Entity Linking, Information Extraction, Machine Learning for Graphs, Data Quality, Link Prediction, Language Models
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Ontology and Reasoning in Knowledge Bases</td>
                                <td className="border px-4 py-2">Ontologies, Data Quality, Link Prediction</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Semantic Web and Information Retrieval</td>
                                <td className="border px-4 py-2">Entity Linking, Information Extraction, Language Models, Web Data, Querying</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">RDF Data and SPARQL Query Processing</td>
                                <td className="border px-4 py-2">Querying, Ontologies, Data Integration</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Semantic Web Services and Composition</td>
                                <td className="border px-4 py-2">–</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>The data showed that 2,985 unique researchers contributed to ISWC, from 616 unique organisations across 46 countries. The largest category was Semantic Web Technologies and Applications (1,050 authors, 35%), followed by Knowledge Graphs and Embedding Techniques (838 authors, 28%). A smaller but substantial number of researchers were categorized under SPARQL Query Processing (537 authors, 18%), Ontology and Reasoning in Knowledge Bases (526 authors, 18%), and Semantic Web and Information Retrieval (453 authors, 15%), and RDF Data. The smallest number of authors (224, 8%) contributed to the Semantic Web Services and Composition category.</p>

                <p>The top 50 authors in terms of publication numbers across all topics represent a wide range of countries. While Germany, the UK, and the US lead the way with multiple authors, they are closely followed by China, Italy, Spain, the Netherlands, Austria, Ireland, and Switzerland.</p>
                
                <p>The top 10 institutions in terms of published papers include Karlsruhe Institute of Technology (DE), Vrije Universiteit Amsterdam (NL), University of Oxford (UK), University of Manchester (UK), Leipzig University (DE), The Open University (UK), Stanford University (US), University of Bonn (DE), University of Southampton (UK), University of Mannheim (DE).</p>

                <p>Here, we have only presented general statistics, and we refrained from diving into a more detailed analysis. Feel free to use Nature Navigator to explore more advanced statistics, enabling you to further dissect the six themes into more specific topics. Additionally, you can identify the experts on those topics, track their development over time, and discover the key papers associated with them. I strongly encourage researchers who are unfamiliar with the conference to use this tool to find experts in their particular subfield and connect with them in person at the conference in Nara - you will be surprised by how welcoming the Semantic Web community is, especially towards newcomers.</p>

                <p>Speaking of ISWC 2025, it is hard to predict this edition’s trends, although many at ISWC 2024, in Baltimore, suggested that Semantic Web technologies will increasingly contribute to AI, including GraphRAG and agents.</p>

                <p>Once the 2025 proceedings are published, we intend to conduct another analysis to compare them with the 2024 proceedings and reflect on the changes.</p>

                <p>Explore ISWC on Nature Navigator <a href="https://navigator.nature.com/the-international-semantic-web-conference_2" target="_blank" style={{ color: '#e94607' }}>here</a>.</p>

                <h2 style={{ color: '#e94607' }}>Appendix</h2>

                <p>To create the ISWC topic within  <a href="https://navigator.nature.com" target="_blank" style={{ color: '#e94607' }}>Nature Navigator</a>, we created a file containing all ISWC papers' DOIs (one per line) from 2002 to 2024. In this case, we only included the papers available in LNCS proceedings. Hence, this excludes all workshop papers, doctoral consortium, and industry track, which are usually published through alternative outlets like CEUR.ws.</p>

                <p>You can download the list of DOIs from here <a href="https://github.com/angelosalatino/iswc-paper-dois" target="_blank" style={{ color: '#e94607' }}>https://github.com/angelosalatino/iswc-paper-dois</a></p>
            </div>
        </div>
    );
};

export default NatureNavigator;
