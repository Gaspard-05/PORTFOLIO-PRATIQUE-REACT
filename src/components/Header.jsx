import { useState } from "react";
import MyStoryimg from "../assets/img/icon-story.png";

import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Intro" },
  { to: "/blog", label: "Blog" },
  { to: "/uses", label: "Uses" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white bg-[#072344] px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-6 mx-auto max-w-6xl">
          <Link to="/" className="flex items-center">
            {/* <span className="mr-2">
              <img src={MyStoryimg} alt="logo" />
            </span> */}
            <p className="font-body text-2xl font-bold text-white">
              John Doe
            </p>
          </Link>
          <div className="flex items-center lg:hidden">
            <i className="bx mr-8 cursor-pointer text-3xl  text-white"></i>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              className="flex cursor-pointer flex-col items-end justify-center gap-1.5"
            >
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "w-6 translate-y-2 rotate-45" : "w-6"
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "w-0 opacity-0" : "w-4"
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "w-6 -translate-y-2 -rotate-45" : "w-5"
                }`}
              ></span>
            </button>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">
              {navLinks.map(({ to, label }) => (
                <li key={to} className="group relative mr-6 mb-1">
                  <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                  <Link
                    to={to}
                    className="relative z-30 block px-2 font-body text-lg font-medium  transition-colors group-hover:text-green text-white group-hover:text-secondary"
                  >
                    {label}
                  </Link>
                </li>
              ))}

              <li>
                <i className="bx cursor-pointer text-3xl  text-white"></i>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile & tablet menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-start gap-2 pb-6">
            {navLinks.map(({ to, label }) => (
              <li key={to} className="w-full">
                <Link
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full px-2 py-2 font-body text-lg font-medium text-white transition-colors hover:text-secondary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
