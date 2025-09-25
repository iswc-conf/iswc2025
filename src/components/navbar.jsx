import React, { useState, useEffect } from "react";
import logo from "./assests/logo.webp";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ calls: false, guidelines: false });
  const location = useLocation();
  let mouseLeaveTimeout;

  const handleMouseEnter = (key) => {
    //clearTimeout(mouseLeaveTimeout);
    setDropdownOpen((prev) => {
      if (isMobile) return;
      const newState = { calls: false, guidelines: false, attendings: false }; // Reset all dropdowns
      newState[key] = true;
      setIsOpen(true);
      return newState;
    });
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    // Set a timeout to delay the execution of the dropdown closing logic
    mouseLeaveTimeout = setTimeout(() => {
      setDropdownOpen(() => {
        const newState = { calls: false, guidelines: false, attendings: false }; // Reset all dropdowns
        return newState;
      });
    }, 2000); // 2 seconds delay
  };

  const dropdownMenuClicked = () => {
    setDropdownOpen(() => {
      const newState = { calls: false, guidelines: false, attendings: false }; // Reset all dropdowns
      return newState;
    });
  }

  // Close the navbar when navigating to another page
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      var isMobileSize = window.innerWidth <= 768
      setIsMobile(isMobileSize);
      if (!isMobileSize) setIsOpen(false); // Close the dropdown when the window is resized
    };

    handleResize(); // Initial check on component mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const toggleDropdown = (key) => {
  //   setDropdownOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  // };

  return (
    <nav onMouseLeave={() => handleMouseLeave()} className="absolute top-0 left-0 w-full z-[10000] bg-[#FEFFFE] text-[#000080]  shadow-md ">
      <div className="flex items-center justify-between lg:justify-between   flex-wrap p-2 pb-0 mx-0 lg:mr-4">
        <Link to="/">
          <div className="flex items-center justify-center flex-shrink-0 mr-2 md:mr-14 ">
            <img src={logo} className="w-[74px] h-[74px]  mr-4" alt="Logo" />
          </div>
        </Link>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"
            }`}
        >
          <div className="text-md font-medium lg:flex-wrap relative">

            <Link
              to="/"
              style={{ color: '#e94607' }}
              className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4 group"
            >
              About
              <div class="bg-[#E30022] h-[px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link>

            <Link
              to="/importantdates"
              style={{ color: '#e94607' }}
              className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4 group"
            >
              Important Dates
              <div class="bg-[#E30022] h-[px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link>

            

            <Link to="#" style={{ color: '#e94607' }} onMouseEnter={() => handleMouseEnter('calls')} className="relative block mt-4 lg:inline-block items-center text-[#e94607] mr-4 group lg:mr-4 lg:inline-flex lg:mt-0 mt-4">
              Calls
              <div className="w-0 w-full">
                {(isMobile || dropdownOpen.calls) && (
                  <div className={`${isMobile ? 'relative' : 'absolute'} right-auto left-0 top-full mt-2 bg-white shadow-md rounded-md z-50`}>
                    <Link to="/calls/research" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Research
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/calls/resource" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Resource
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/calls/in-use" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      In Use
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/calls/posters" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Posters and Demos
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/calls/challenges" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Challenges
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/calls/industry" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Industry Track
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/calls/doctoral" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Doctoral Consortium
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/calls/workshops" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Workshops 
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/calls/dagstuhl" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Dagstuhl Workshops
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/calls/tutorials" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Tutorials
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/calls/swsa" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      SWSA Distinguished Dissertation Award
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/calls/journaltrack" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Journal track
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                  </div>
                )}
              </div>
            </Link>

            <Link to="#" style={{ color: '#e94607' }} onMouseEnter={() => handleMouseEnter('program')} className="relative block mt-4 lg:inline-block items-center text-[#e94607] mr-4 group lg:mr-4 lg:inline-flex lg:mt-0 mt-4">
              Program
              <div className="w-0 w-full">
                {(isMobile || dropdownOpen.program) && (
                  <div className={`${isMobile ? 'relative' : 'absolute'} right-auto left-0 top-full mt-2 bg-white shadow-md rounded-md z-50`}>
                    <Link to="/program/schedule" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Schedule
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/program/acceptedpapers" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Accepted Papers
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/program/keynotespeakers" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Keynote Speakers
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/program/workshops" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Workshops
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/program/dagstuhl" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Dagstuhl Workshops
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/program/tutorials" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Tutorials
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/program/challenges" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Challenges
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/program/panel" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Panel
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/program/awards" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Awards
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                  </div>
                )}
              </div>
            </Link>

            <Link to="#" style={{ color: '#e94607' }} onMouseEnter={() => handleMouseEnter('guidelines')} className="relative block mt-4 lg:inline-block items-center text-[#e94607] mr-4 group lg:mr-4 lg:inline-flex lg:mt-0 mt-4">
              Guidelines
              <div className="w-0 w-full">
                {(isMobile || dropdownOpen.guidelines) && (
                  <div className={`${isMobile ? 'relative' : 'absolute'} right-auto left-0 top-full mt-2 bg-white shadow-md rounded-md z-50`}>
                    <Link to="/guidelines/html-submission" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      HTML Submission Guide
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/guidelines/prior-publications" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Prior Publications and Simultaneous Submissions
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/guidelines/review" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Review Guidelines
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/guidelines/supplemental" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Supplemental Materials
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/guidelines/resources" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Resources Availability
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                  </div>
                )}
              </div>
            </Link>

            <Link to="#" style={{ color: '#e94607' }} onMouseEnter={() => handleMouseEnter('sponsorship')} className="relative block mt-4 lg:inline-block items-center text-[#e94607] mr-4 group lg:mr-4 lg:inline-flex lg:mt-0 mt-4">
              Sponsorship
              <div className="w-0 w-full">
                {(isMobile || dropdownOpen.sponsorship) && (
                  <div className={`${isMobile ? 'relative' : 'absolute'} right-auto left-0 top-full mt-2 bg-white shadow-md rounded-md z-50`}>
                    <Link to="/sponsorship/sponsorshippackages" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Sponsorship Packages
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/sponsorship/sponsors" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Sponsors
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                  </div>
                )}
              </div>
            </Link>

            <Link to="#" style={{ color: '#e94607' }} onMouseEnter={() => handleMouseEnter('attendings')} className="relative block mt-4 lg:inline-block items-center text-[#e94607] mr-4 group lg:mr-4 lg:inline-flex lg:mt-0 mt-4">
              Attending
              <div className="w-0 w-full">
                {(isMobile || dropdownOpen.attendings) && (
                  <div className={`${isMobile ? 'relative' : 'absolute'} right-auto left-0 top-full mt-2 bg-white shadow-md rounded-md z-50`}>
                    <Link to="/attending/visa" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      VISA Information
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/attending/studentgrants" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Student Grants
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/attending/codeofconduct" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Code of Conduct
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/atttending/venueandaccomodation" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Venue and Accomodation
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/atttending/registration" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Registration
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                  </div>
                )}
              </div>
            </Link>

            <Link to="#" style={{ color: '#e94607' }} onMouseEnter={() => handleMouseEnter('blogs')} className="relative block mt-4 lg:inline-block items-center text-[#e94607] mr-4 group lg:mr-4 lg:inline-flex lg:mt-0 mt-4">
              Blogs
              <div className="w-0 w-full">
                {(isMobile || dropdownOpen.blogs) && (
                  <div className={`${isMobile ? 'relative' : 'absolute'} right-auto left-0 top-full mt-2 bg-white shadow-md rounded-md z-50`}>
                    <Link to="/blogs/host" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      ISWC 2025 Host
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/blogs/naturenavigator" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      ISWC 2025 Nature Navigator
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/blogs/community" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      ISWC Community
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/blogs/presentingatiswc" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Presenting at ISWC
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                  </div>
                )}
              </div>
            </Link>

            <Link to="#" style={{ color: '#e94607' }} onMouseEnter={() => handleMouseEnter('organization')} className="relative block mt-4 lg:inline-block items-center text-[#e94607] mr-4 group lg:mr-4 lg:inline-flex lg:mt-0 mt-4">
              Organization
              <div className="w-0 w-full">
                {(isMobile || dropdownOpen.organization) && (
                  <div className={`${isMobile ? 'relative' : 'absolute'} right-auto left-0 top-full mt-2 bg-white shadow-md rounded-md z-50`}>
                    <Link to="/organizing_committee" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Organizing Committee
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                    <Link to="/organization/program_committee" className="block px-4 py-2" style={{ color: '#e94607' }} onClick={() => dropdownMenuClicked()}>
                      Program Commitee
                      <div className="bg-[#E30022] w-0 group-hover:w-full"></div>
                    </Link>
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
