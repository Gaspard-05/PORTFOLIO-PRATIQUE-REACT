import { Link } from "react-router-dom";
import MyStoryimg from "../assets/img/icon-story.png";
import MyIconesvg from "../assets/img/logo.svg";
import { Computer } from 'lucide-react';
import { Package } from 'lucide-react';
import { FileSymlink } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-[#072344] px-2 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-white py-2 sm:flex-row lg:py-3">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-6 sm:text-left">
          <Link to="/">
            <img src={MyIconesvg} alt="logo" />
          </Link>
          <p className="font-body font-light text-white">
            ©2020 John Doe • Distributed by{" "}
            <a
              href="https://themewagon.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-indigo-400"
            >
              ThemeWagon
            </a>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Computer className="h-4 w-4 text-white transition-colors hover:text-indigo-400" />
          </a>
          <a href="https://codepen.io" target="_blank" rel="noreferrer">
            <Package className="h-4 w-4 text-white transition-colors hover:text-indigo-400" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FileSymlink className="h-4 w-4 text-white transition-colors hover:text-indigo-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
