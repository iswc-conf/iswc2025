import React from "react";
import './attending.css';
import SWSA from "./semantic_web_science_association.png";

export const CodeOfConduct = () => {
    return (
        <div>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>

            <div className="container mx-auto px-4 lg:px-8 lg:pb-12 mt-12">
                <h1 className="text-3xl font-bold text-center text-[#e94607]">Code of Conduct</h1>

                <div className="flex justify-center mt-8 mb-8">
                    <img
                        src={ SWSA }
                        alt="Semantic Web Science Association"
                        className="w-full max-w-3xl rounded-xl shadow-md"
                    />
                </div>

                <div className="text-lg space-y-4 whitespace-pre-line">
                    <p>The International Semantic Web Conference (ISWC) is organized by the Semantic Web Science Association (SWSA) as a forum to encourage rich interactions and promote the free exchange of ideas to benefit the community. SWSA welcomes conference participants that foster inclusion and respect to all members of the community.</p>

                    <p>Our association is dedicated to providing a respectful and inclusive conference experience for everyone. Respectful behavior is always assumed and expected of community members during all conference events, online discussions about conference topics, and networking events held after hours. Conference participants are expected to interact with others in a respectful and courteous manner, regardless of age, race, ethnicity, national origin, ancestry, gender, sexual orientation, gender identity, gender presentation, physical appearance, religious affiliation, creed, marital status, differing abilities, medical conditions, personal characteristics, or technology choices.</p>

                    <p>Abusive, racist, sexist, homophobic, intimidating, harassing, or threatening behavior towards any other conference participant or directed at any organizer, student volunteer, sponsor, conference staff or locals, will not be tolerated.</p>

                    <p>SWSA disapproves of offensive actions, aggressive acts, or comments that intimidate or disparage others. SWSA will not tolerate any kind of harassment, including but not limited to:</p>

                    <ul className="ul-disc">
                        <li>Verbal attacks, accusations, bullying, or offensive comments</li>
                        <li>Aggressive or intimidatory questioning</li>
                        <li>Sustained disruption during presentations and other events</li>
                        <li>Unwelcome sexual attention</li>
                        <li>Inappropriate physical contact</li>
                        <li>Deliberate intimidation or stalking, both in person and online</li>
                        <li>Sexual and racist images and materials in public spaces</li>
                        <li>Ignoring, encouraging, or advocating any of the above behaviors</li>
                    </ul>

                    <p>SWSA expects all community members to endorse this code of conduct, and to prevent and discourage any undesired behaviors actively. Everyone should feel empowered to politely engage when themselves or others are disrespected, and to raise awareness and understanding of this code of conduct. Conference participants asked to stop any unacceptable behavior are expected to comply immediately.</p>

                    <p>To report any behavior that makes you or others uncomfortable, please contact (by email or in person) any of the SWSA members, who are committed to treating such reports confidentially.</p>

                    <p>Those violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of SWSA.</p>

                    <p>Sponsors are also subject to the code of conduct in events, images, and other materials.</p>

                    <p>This code of conduct complements all legal rights that apply to particular situations.</p>

                    <h2 className="h2-border-bottom">References</h2>
                    <div className="mt-4 text-lg">
                        <ul className="ul-disc lg:text-lg">
                            <li><a href="http://confcodeofconduct.com/" target="_blank">confcodeofconduct.com</a></li>
                            <li><a href="https://www.w3.org/Consortium/cepc/">W3C Code of Ethics and Professional Conduct</a></li>
                            <li><a href="https://www.aclweb.org/adminwiki/index.php?title=Anti-Harassment_Policy">ACL Anti-Harassment Policy</a></li>
                            <li><a href="https://www.iscb.org/ismbeccb2015-general-info/ismbeccb2015-coc" target="_blank">ISMB ECCB Code of Conduct</a></li>
                            <li><a href="https://chi2017.acm.org/diversity-inclusion-statement.html" target="_blank">ACM CHI Diversity Statement</a></li>
                            <li><a href="https://sites.google.com/view/aiide2017/home/code-of-conduct?authuser=0" target="_blank">AIIDE 2017 Code of Conduct</a></li>
                            <li><a href="http://www.humancomputation.com/2017/codeofconduct.html" target="_blank">Human Computation CoC</a></li>
                            <li><a href="http://www.ifaamas.org/harassment.html">IFAAMAS Harassment Policy</a></li>
                            <li><a href="https://github.com/Polymer/polymer/wiki/Code-of-Conduct" target="_blank">Polymer GitHub CoC</a></li>
                            <li><a href="http://geekfeminism.wikia.com/" target="_blank">Geek Feminism Wiki</a></li>
                            <li><a href="http://geekfeminism.wikia.com/wiki/Timeline_of_incidents" target="_blank">Timeline of Incidents</a></li>
                            <li><a href="https://implicit.harvard.edu/implicit/takeatest.html" target="_blank">Harvard Implicit Bias Tests</a></li>
                            <li><a href="https://www.projectcallisto.org/" target="_blank">Project Callisto</a></li>
                            <li><a href="http://swsa.semanticweb.org/content/code-conduct-iswc" target="_blank">SWSA Code of Conduct</a></li>
                        </ul>
                    </div>
                    <br/>
                    <p>Source: <a href="http://swsa.semanticweb.org/content/code-conduct-iswc" target="_blank">http://swsa.semanticweb.org/content/code-conduct-iswc</a></p>
                </div>
            </div>
        </div>
    );
};

export default CodeOfConduct;
