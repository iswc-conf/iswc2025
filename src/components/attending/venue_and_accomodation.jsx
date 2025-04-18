import React from "react";
import './attending.css';
import VenueMap from "./venue_and_accomodation/venue_map.png"

export const VenueAndAccomodation = () => {
    return (
        <div>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>

            <div className="container mx-auto px-4 lg:px-8 lg:pb-12 mt-12">
                <h1 className="text-3xl font-bold text-center text-[#e94607]">Venue and Accommodations</h1>

                <h2>Venue</h2>

                <p>The conference will take place at the <a href="https://www.nara-cc.jp/english/#access" target="_blank" rel="noopener noreferrer">Nara Prefectural Convention Center</a>, a state-of-the-art facility that opened in 2020. Centrally located in Nara City, between Nara Park and Heijo Palace Site, the venue is surrounded by UNESCO World Heritage sites that embody the region’s deep cultural heritage.</p>
                <br />
                <p>
                The venue is easily accessible from major airports, ensuring a smooth journey for both international and domestic attendees.
                </p>
                <br/>
                <ul className="ul-disc">
                    <li><a href="https://www.kansai-airport.or.jp/en" target="_blank" rel="noopener noreferrer">From Kansai International Airport (KIX)</a>: 90 minutes by airport bus, 100 minutes by train.</li>
                    <li><a href="https://www.osaka-airport.co.jp/en" target="_blank" rel="noopener noreferrer">From Osaka International Airport (Itami Airport - ITM)</a>: 70 minutes by airport bus, 110 minutes by train.</li>
                </ul>

                <br />
                <p>
                    With excellent public transportation options and direct airport connections, reaching the Nara Prefectural Convention Center is convenient and efficient. Additionally, limousine buses provide direct access from both <a href="https://www.kate.co.jp/en/timetable/detail/NR?_fsi=8m9qr56S" target="_blank" rel="noopener noreferrer">Kansai International Airport</a> and <a href="https://www-hankyu-kankobus-co-jp-e.athp.transer.com/limousine/timetable/T/#from" target="_blank" rel="noopener noreferrer">Osaka International Airport</a> to the venue, further simplifying travel for attendees.
                </p>

                <div className="flex justify-center mt-8 mb-8">
                    <img
                        src={ VenueMap }
                        alt="Venue Map"
                        className="w-full max-w-3xl rounded-xl shadow-md"
                    />
                </div>

                <br />

                <h2>Hotels</h2>
                <br />
                <h3>Hotels near the venue</h3>
                <ul className="ul-disc">
                    <li><a href="https://www.marriott.com/en-us/hotels/osajw-jw-marriott-hotel-nara/overview/" target="_blank" rel="noopener noreferrer">JW Marriott Hotel Nara</a> (next to the venue)</li>
                    <li><a href="https://www.novotelnara.com/en/" target="_blank" rel="noopener noreferrer">Novotel Nara</a> (5-minute walk)</li>
                    <li><a href="https://www.worldheritage.co.jp/annex/en/" target="_blank" rel="noopener noreferrer">Hotel Asyl Nara Annex</a> (7-minute walk)</li>
                    <li><a href="https://hotel.nara-royal.co.jp/en/" target="_blank" rel="noopener noreferrer">Nara Royal Hotel</a> (10-minute walk)</li>
                </ul>

                <br/>
                <h3>Hotels around Kintetsu Shin-Omiya Station (15-minute walk from the venue)</h3>
                <ul className="ul-disc">
                    <li><a href="https://www.toyoko-inn.com/search/detail/00183?lcl_id=en" target="_blank" rel="noopener noreferrer">Toyoko Inn Nara Shin-Omiya Ekimae</a></li>
                    <li><a href="https://www.superhoteljapan.com/en/s-hotels/nara/" target="_blank" rel="noopener noreferrer">SUPER HOTEL Nara Shin-omiya Station</a></li>
                    <li><a href="https://www.nara-halftime.com/en/index.html" target="_blank" rel="noopener noreferrer">HOTEL HALFTIME</a></li>
                </ul>

                <br />
                <h3>Other Hotels</h3>
                <p>Many hotels are located near <strong>Kintetsu Nara Station</strong> and <strong>JR Nara Station</strong>.</p>
                <ul className="ul-disc">
                    <li><strong>Kintetsu Nara Station</strong> is the next station to <strong>Kintetsu Shin-Omiya</strong> (the nearest station to the venue).</li>
                    <li>From <strong>JR Nara Station</strong>, the venue is a 20-25 minutes walk or 12 minutes by bus and on foot.</li>
                </ul>
            </div>


        </div>
    )
}