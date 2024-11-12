import React, { useState, useEffect } from "react";
import logo from "./assests/logo.webp";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Close the navbar when navigating to another page
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsOpen(false); // Close the dropdown when the window is resized
    };

    handleResize(); // Initial check on component mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-[#FEFFFE] text-[#000080]  shadow-md ">
      <div className="flex items-center justify-between lg:justify-between   flex-wrap p-2 pb-0 mx-0 lg:mr-4">
        <Link to="/">
          <div className="flex items-center justify-center flex-shrink-0 mr-2 md:mr-14 ">
            <img src={logo} className="w-[74px] h-[74px]  mr-4" alt="Logo" />
            <p style={{ color: '#e94607' }} className=" font-bold text-xl lg:text-3xl tracking-wide">
              ISWC 2025
            </p>
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
          <div className="text-md font-medium lg:flex-wrap ">
            {
              isMobile && (
                <ul
                  class="py-2 text-sm text-[#33358c] "
                  aria-labelledby="dropdownDefaultButton"
                >
                  {/* <li>
                    <Link
                      to="/about"
                      class="block px-4 py-2  hover:text-[#33358c] hover:bg-gray-200"
                    >
                      About
                    </Link>
                  </li> */}
                  {/* <li>
                    <a
                      href="/"
                      class="block px-4 py-2 hover:text-[#33358c] hover:bg-gray-200"
                    >
                      Important Dates
                    </a>
                  </li> */}
                </ul>
              )
            }

            <div
              id="dropdownHover"
              class="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44  "
            >
              <ul
                class="py-2 text-sm text-[#33358c] "
                aria-labelledby="dropdownDefaultButton"
              >
                {/* <li>
                  <Link
                    to="/about"
                    class="block px-4 py-2  hover:text-[#33358c] hover:bg-gray-200"
                  >
                    About
                  </Link>
                </li> */}
                {/* <li>
                  <a
                    href="/"
                    class="block px-4 py-2 hover:text-[#33358c] hover:bg-gray-200"
                  >
                    Important Dates
                  </a>
                </li> */}
              </ul>
            </div>



            <Link
              to="/committees"
              style={{ color: '#e94607' }} 
              className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4 group"
            >
              Organizing Committee
              <div class="bg-[#E30022] h-[px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link>
            {/* <Link
              to="/contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4 group"
            >
              Contact
              <div class="bg-[#E30022] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link> */}
            {/* <Link
              to="/register"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4 group"
            >
              Submit Paper
              <div class="bg-[#E30022] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link> */}
            {/* {
              isMainPage ? 
              <a
                href="#venue"
                className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4"
              >
                Venue
              </a>
              :
                <Link
                to='/#venue'
                className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200 mr-4"
              >
                Venue
              </Link>
              

            } */}

            {/* <Link
              to="/participation-policy"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#33358c]-200  group"
            >
              Participation Policy
              <div class="bg-[#E30022] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link> */}

          </div>
        </div>
      </div>
    </nav>
  );
};
