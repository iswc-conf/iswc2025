import React from "react";
import './blog.css';

import SE1 from "./pics/se_1.jpg";
import SE2 from "./pics/se_2.png";
import SE3 from "./pics/se_3.png";
import SE4 from "./pics/se_4.png";

const SocialEvents = () => {
    return (
        <div>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>
            <div className="container mx-auto px-4 lg:px-8 lg:pb-12 mt-12">
                <h1 className="font-bold mb-4 lg:mx-10 sm:mx-2 tracking-wide text-center">ISWC 2025 Social Events</h1>

                 <h2 style={{ color: '#e94607' }}>Getting Ready for ISWC 2025</h2>
                
                <p>Attending ISWC is not just about sessions and papers. Social events are golden opportunities to connect, relax, and immerse in the community. The <strong>four social events</strong> at ISWC 2025 are your chance to experience the conference beyond presentations - to meet your research fellows, recharge, and celebrate together. Bring your curiosity, openness, and perhaps a touch of style for the gala - but most importantly, bring <em>yourself</em>.</p>

                <br></br>

                <h2 style={{ color: '#e94607' }}>Students' Party</h2>

                <p>This is a students-only party, and it is registration only. The party will be held at an Izakaya, which offers a relaxed, friendly atmosphere perfect for casual conversations over shared small plates and drinks. You can expect a cozy setting where you can unwind, try a variety of Japanese dishes, and enjoy an informal evening together.</p>

                <p><strong>Exclusively for students</strong>, this event brings together graduate and undergraduate attendees for a fun, laid-back night - <strong>no supervisors, no formalities</strong>!</p>

                <p><strong>Why go:</strong></p>
                <ul className="list-disc ml-8 mb-4">
                    <li>Meet peers from other universities who share your interests</li>
                    <li>Let loose and recharge before the conference starts</li>
                    <li>Great place to form friendships that often last beyond ISWC</li>
                </ul>

                <p><strong>Pro Tip:</strong><br></br> Bring your badge and a fun attitude. If you're shy, join a group playing a game or grab a snack - it's the easiest way to start chatting.</p>

                <img src={ SE1 } alt="A room with wooden benches and red cushions" className="rounded-xl my-4" />

                <div className="bg-gray-100 p-4 rounded-lg my-4">
                    <p><strong>When:</strong> Nov 2nd, 18:00</p>
                    <p><strong>Where:</strong> <a href="https://tabelog.com/en/nara/A2901/A290101/29006543/" target="_blank" rel="noopener noreferrer" style={{ color: '#e94607' }}>Kuimono Ya Wan Shin Oomiya Ten</a></p>
                </div>

                <h2 style={{ color: '#e94607' }}>Pre-conference Welcome Reception</h2>

                <p>This is the first official social gathering of the conference - an informal reception in the early evening before the main conference starts. It is a great opportunity to catch up with old friends, find new ones, and get comfortable before the conference officially starts. It is the perfect ice-breaker before sessions begin.</p>

                <p>Due to the venue capacity limitations, this gathering will be restricted to all participants who registered for the pre-conference days (i.e., those with the "Pre-conference Days" option or "Pre-conference Only" ticket) - join us for an informal get-together!</p>

                <p><strong>Pro tip:</strong> <br></br> Bring your badge and a smile. This is your chance to form connections before the conference gets busy!</p>

                <img src={ SE2 } alt="A group of people sitting at tables in a restaurant" className="rounded-xl my-4" />

                <div className="bg-gray-100 p-4 rounded-lg my-4">
                    <p><strong>When:</strong> Nov 3rd, 18:30-21:00</p>
                    <p><strong>Where:</strong> <a href="https://cafe-etranger.jp/" target="_blank" rel="noopener noreferrer" style={{ color: '#e94607' }}>Cafe Etranger Narad</a></p>
                </div>

                <h2 style={{ color: '#e94607' }}>Posters&Demos Reception</h2>

                <p>One of ISWC's most dynamic events, the <strong>Poster & Demo Reception</strong> combines hands-on interaction with lively social energy. Researchers showcase prototypes, demos, and posters - all alongside refreshments and relaxed networking.</p>

                <p><strong>Why go:</strong></p>
                <ul className="list-disc ml-8 mb-4">
                    <li>Experience innovative systems up close</li>
                    <li>Chat directly with authors and get inspired by new ideas</li>
                    <li>Enjoy the energetic, informal vibe that makes ISWC unique</li>
                </ul>

                <p><strong>Pro Tip:</strong> <br></br> Make a quick list of posters or demos you don't want to miss - but leave room for serendipity. Some of the best discoveries come from chance encounters (and nearby snack tables).</p>

                <img src={ SE3 } alt="A large room with lights" className="rounded-xl my-4" />

                <div className="bg-gray-100 p-4 rounded-lg my-4">
                    <p><strong>When:</strong> Nov 4th, 18:30</p>
                    <p><strong>Where:</strong> Conference Venue, <a href="https://maps.app.goo.gl/7DmZUQKWFCycwmcz8" target="_blank" rel="noopener noreferrer" style={{ color: '#e94607' }}>Nara Prefectural Convention Center</a>, Convention Hall A+B</p>
                </div>

                <h2 style={{ color: '#e94607' }}>Gala Dinner</h2>

                <p>The gala is the highlight of ISWC's social calendar — an evening of food and celebration of the community's achievements. It's your chance to unwind, celebrate the week's work, and enjoy some well-deserved fun.</p>

                <p><strong>About dress code:</strong> You're warmly encouraged to <strong>dress up for the evening gala</strong> — think <em>smart, festive, or elegant</em> - but this isn't a formal requirement. Whether you're in a suit, a stylish dress, or your favorite chic conference outfit, what matters most is that you feel <strong>comfortable and confident</strong>.</p>

                <p><strong>Pro tip:</strong> <br></br>Don't forget to take at least one group photo - future you will thank you!</p>

                 <img src={ SE4 } alt="A room with tables and chairs" className="rounded-xl my-4" />

                <div className="bg-gray-100 p-4 rounded-lg my-4">
                    <p><strong>When:</strong> Nov 5th, 19:00</p>
                    <p><strong>Where:</strong> <a href="https://maps.app.goo.gl/bhmyX2mczz5dYrZPA" target="_blank" rel="noopener noreferrer" style={{ color: '#e94607' }}>Nara Royal Hotel</a></p>
                </div>
            </div>
        </div>
    );
};

export default SocialEvents;