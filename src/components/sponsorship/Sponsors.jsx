import React from "react";
import google_logo from "./assets/google_logo.png"
import lore_star_logo from "./assets/lore_star_logo.png"
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
                    
                    <h2 className="text-3xl font-bold text-[#e94607]">Silver</h2>
                    <hr className="border-t-2 border-[#e94607] my-2" />
                    <h3 className="text-lg font-semibold text-center">Lore Star</h3>
                    <div className="sponsor-logos flex justify-center items-center gap-8">
                        <a href="https://lorestar.it/" target="_blank" rel="noopener noreferrer">
                            <img src={lore_star_logo} alt="Lore Star Logo" className="logo-high-res" width="300"/>
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