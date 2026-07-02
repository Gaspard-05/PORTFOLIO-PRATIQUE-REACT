import MyStoryimg from "../assets/img/icon-story.png";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white bg-[#072344] px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6 lg:py-10 mx-auto max-w-6xl">
          <Link to="/" className="flex items-center">
            {/* <span className="mr-2">
              <img src={MyStoryimg} alt="logo" />
            </span> */}
            <p className="hidden font-body text-2xl font-bold  text-white lg:block">
              John Doe
            </p>
          </Link>
          <div className="flex items-center lg:hidden">
            <i className="bx mr-8 cursor-pointer text-3xl  text-white"></i>

            <svg
              width="24"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              className="fillCurrent  text-white"
            >
              <g fillRule="evenodd">
                <rect width="24" height="3" rx="1.5" />
                <rect x="8" y="6" width="16" height="3" rx="1.5" />
                <rect x="4" y="12" width="20" height="3" rx="1.5" />
              </g>
            </svg>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">
              <li className="group relative mr-6 mb-1">
                <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                <Link
                  to="/"
                  className="relative z-30 block px-2 font-body text-lg font-medium  transition-colors group-hover:text-green text-white group-hover:text-secondary"
                >
                  Intro
                </Link>
              </li>

              <li className="group relative mr-6 mb-1">
                <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                <Link
                  to="/blog"
                  className="relative z-30 block px-2 font-body text-lg font-medium  transition-colors group-hover:text-green text-white group-hover:text-secondary"
                >
                  Blog
                </Link>
              </li>

              <li className="group relative mr-6 mb-1">
                <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                <Link
                  to="/uses"
                  className="relative z-30 block px-2 font-body text-lg font-medium  transition-colors group-hover:text-green text-white group-hover:text-secondary"
                >
                  Uses
                </Link>
              </li>

              <li className="group relative mr-6 mb-1">
                <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                <Link
                  to="/contact"
                
                  className="relative z-30 block px-2 font-body text-lg font-medium  transition-colors group-hover:text-green text-white group-hover:text-secondary"
                >
                  Contact
                </Link>
              </li>

              <li>
                <i className="bx cursor-pointer text-3xl  text-white"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
