import React from "react";
import google_logo from "./assets/google_logo.png"
import lore_star_logo from "./assets/lore_star_logo.png"
import iij_logo from "./assets/IIJ_logo.jpg"
import './sponsorship.css';

export const Sponsors = () => {
    return (
        <div>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>
            <div className="container mx-auto px-4 lg:px-8 lg:pb-12 mt-12">
                <h1 className="text-3xl font-bold text-center text-[#e94607]">Sponsors</h1>
                <div className="sponsor-level">
                    <h2 className="text-3xl font-bold text-[#e94607]">Gold</h2>
                    <hr className="border-t-2 border-[#e94607] my-2" />
                    <div className="sponsor-info mt-4">
                        <h3 className="text-lg font-semibold text-center">eBay</h3>
                        <div className="sponsor-logos flex justify-center items-center gap-8">
                            <a href="https://jobs.ebayinc.com/us/en/" target="_blank" rel="noopener noreferrer">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/880px-EBay_logo.svg.png" alt="ebay Logo" className="logo-high-res" width="300"/>
                            </a>
                        </div>
                    </div>
                    <div className="sponsor-info mt-4">
                        <h3 className="text-lg font-semibold text-center">Google</h3>
                        <div className="sponsor-logos flex justify-center items-center gap-8">
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <img src={google_logo} alt="Google Logo" className="logo-high-res" width="300"/>
                            </a>
                        </div>
                    </div>

                    <div className="sponsor-info mt-4">
                        <a href="https://journals.riverpublishers.com/index.php/JWE/index" target="_blank" rel="noopener noreferrer">
                            <h3 className="text-lg font-semibold text-center">River Publishers</h3>
                        </a>
                        <div className="sponsor-logos flex justify-center items-center gap-8">
                            <a href="https://www.riverpublishers.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.dropbox.com/scl/fi/5gav365487otxcohen05g/River_logo.JPG?rlkey=z2zjthq4wmonz2isz6wtm0xts&dl=1" alt="River Publishers Logo" className="logo-high-res" width="300"/>
                            </a>
                        </div>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-[#e94607]">Silver</h2>
                    <hr className="border-t-2 border-[#e94607] my-2" />
                    <h3 className="text-lg font-semibold text-center">Lore Star</h3>
                    <div className="sponsor-logos flex justify-center items-center gap-8">
                        <a href="https://lorestar.it/" target="_blank" rel="noopener noreferrer">
                            <img src={lore_star_logo} alt="Lore Star Logo" className="logo-high-res" width="300"/>
                        </a>
                    </div>
                    <br/>
                    <br/>
                    <h3 className="text-lg font-semibold text-center">IIJ - Internet Initiative Japan</h3>
                    <br/>
                    <div className="sponsor-logos flex justify-center items-center gap-8">
                        <a href="https://www.iij.ad.jp/en/" target="_blank" rel="noopener noreferrer">
                            <img src={iij_logo} alt="IIJ Logo" className="logo-high-res" width="250"/>
                        </a>
                    </div>

                    <h2 className="text-3xl font-bold text-[#e94607]">Student Support</h2>
                    <hr className="border-t-2 border-[#e94607] my-2" />
                    <p className="text-sm mb-4">Sponsored by: <em>Artificial Intelligence Journal</em></p>
                    <h3 className="text-lg font-semibold text-center">Artificial Intelligence Journal</h3>
                    <div className="sponsor-logos flex justify-center items-center gap-8">
                        {/* <a href="https://aij.ijcai.org/wp-content/uploads/2021/07/ARTINT_Logo2_c_highresolution.tif" target="_blank" rel="noopener noreferrer"> */}
                            <img src="https://aij.ijcai.org/wp-content/uploads/2021/07/ARTINT_Logo2_c_web_more.jpg" alt="Artificial Intelligence Journal Logo" className="logo-high-res"/>
                        {/* </a> */}
                    </div>

                    <h2 className="text-3xl font-bold text-[#e94607]">Best Paper Award</h2>
                    <hr className="border-t-2 border-[#e94607] my-2" />
                    <p className="text-sm mb-4">Sponsored by: <em>Springer</em></p>
                    <h3 className="text-lg font-semibold text-center">Springer</h3>
                    <div className="sponsor-logos flex justify-center items-center gap-8">
                        {/* <a href="https://aij.ijcai.org/wp-content/uploads/2021/07/ARTINT_Logo2_c_highresolution.tif" target="_blank" rel="noopener noreferrer"> */}
                            <img src="https://www.springer.com/public/images/springer-logo.svg" alt="Springer Logo" className="logo-high-res h-[100px]"/>
                        {/* </a> */}
                    </div>

                    <h2 className="text-3xl font-bold text-[#e94607]">Best Student Paper Award</h2>
                    <hr className="border-t-2 border-[#e94607] my-2" />
                    <p className="text-sm mb-4">Sponsored by: <em>Journal of Web Semantics</em></p>
                    <h3 className="text-lg font-semibold text-center">Journal of Web Semantics</h3>
                    <div className="sponsor-logos flex justify-center items-center gap-8">
                        {/* <a href="https://aij.ijcai.org/wp-content/uploads/2021/07/ARTINT_Logo2_c_highresolution.tif" target="_blank" rel="noopener noreferrer"> */}
                            <img src="https://ars.els-cdn.com/content/image/X15708268.jpg" alt="Journal of Web Semantics Logo" className="logo-high-res h-[300px]"/>
                        {/* </a> */}
                    </div>

                    <h2 className="text-3xl font-bold text-[#e94607]">Best Resource Paper Award</h2>
                    <hr className="border-t-2 border-[#e94607] my-2" />
                    <div className="sponsor-info mt-4">
                        <a href="https://journals.riverpublishers.com/index.php/JWE/index" target="_blank" rel="noopener noreferrer">
                            <h3 className="text-lg font-semibold text-center">River Publishers</h3>
                        </a>
                        <div className="sponsor-logos flex justify-center items-center gap-8">
                            <a href="https://www.linkedin.com/company/560004/admin/dashboard/" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.dropbox.com/scl/fi/tgkn8tzgxu4xbdzicuwau/JWE_River_Logo.jpg?rlkey=dloruuyqyl1jgaz84lv6x0iki&dl=1" alt="River Publishers Logo" className="logo-high-res" width="300"/>
                            </a>
                        </div>
                    </div>

                    {/* <h2 className="text-2xl font-bold text-[#e94607]">Bronze</h2>
                    <hr className="border-t-2 border-[#e94607] my-2" />
                    <div className="sponsor-info mt-4">
                        
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Sponsors;