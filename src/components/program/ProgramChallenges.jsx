import React from "react";

export const ProgramChallenges = () => {
    const challenges = [
        {
            title: "LM-KBC: Knowledge Base Construction from Pretrained Language Models (4th Edition)",
            organizers: "Jan-Christoph Kalo, Tuan-Phong Nguyen, Simon Razniewski and Bohui Zhang",
            description: ""
        },
        {
            title: "SemTab 2025: Semantic Web Challenge on Tabular Data to Knowledge Graph Matching",
            organizers: "Marco Cremaschi, Fabio D'Adda, Fidel Azanzi Jiomekong, Ernesto Jimenez-Ruiz and Oktie Hassanzadeh",
            description: ""
        },
        {
            title: "Controlling LLM Grounding: Between Weights and Context.",
            organizers: "Sebastien Dery",
            description: ""
        },
        {
            title: "TRIPLET Challenge 2025: TRIPLET Extraction from Triplet Text, Table, Knowledge Graph",
            organizers: "Raphaël Troncy, Yoan Chabot, Veronique Moriceau and Nandana Mihindukulasooriya",
            description: ""
        },
        {
            title: "LLMs4OL 2025: The 2nd Large Language Models for Ontology Learning Challenge at ISWC 2025",
            organizers: "Hamed Babaei Giglou, Jennifer D'Souza, Nandana Mihindukulasooriya, Andrei Aioanei and Sören Auer",
            description: ""
        },
        {
            title: "Agentic Pipeline Optimization for the Semantic Web",
            organizers: "Kaushik Roy",
            description: ""
        },
        {
            title: "The 2nd Challenge on Characterizing User Behavior in Social Networks: Propagation, Prediction, and Sensemaking",
            organizers: "Qingyun Sun, Xingcheng Fu, Minglai Shao, Haoyi Zhou and Jianxin Li",
            description: ""
        }
    ];

    return (
        <>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center"></div>
            <br />
            <div className="flex flex-col pt-10 lg:pt-16 lg:pb-4 mb-4 lg:my-6 lg:px-32 px-8 overflow-visible">
                <p
                    style={{ color: "#e94607" }}
                    className="text-3xl font-bold mb-8 tracking-wide text-center"
                >
                    Accepted Challenges
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse text-left text-sm lg:text-base">
                        <thead>
                            <tr className="bg-[#f8f8f8] text-[#e94607] font-bold border-b">
                                <th className="p-4 border border-gray-300 w-1/4">Challenge Title</th>
                                <th className="p-4 border border-gray-300 w-1/4">Organizers</th>
                            </tr>
                        </thead>
                        <tbody>
                            {challenges.map((ch, idx) => (
                                <tr key={idx} className="border-b">
                                    <td className="align-top p-4 border border-gray-200 font-semibold">{ch.title}</td>
                                    <td className="align-top p-4 border border-gray-200">{ch.organizers}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ProgramChallenges;
