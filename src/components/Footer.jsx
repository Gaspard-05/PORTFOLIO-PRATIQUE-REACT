import { Link } from "react-router-dom";
import MyStoryimg from "../assets/img/icon-story.png";
import MyIconesvg from "../assets/img/logo.svg";
import { Computer } from 'lucide-react';
import { Package } from 'lucide-react';
import { FileSymlink } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <div className=" bg-[#072344] mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12">
          <div className="mr-auto flex flex-col items-center sm:flex-row">
            < Link to="/" className="mr-auto sm:mr-6"> </Link>
              <img src={MyIconesvg} alt="logo" />
            
            <p className="pt-5 font-body font-light  text-white sm:pt-0">
              ©2020 John Doe • Distributed by
              < Link to ="https://themewagon.com" target="_blank">ThemeWagon</Link>
                
              
            </p>
          </div>
          <div className="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">
            < Link to ="https://github.com" target="_blank"> </Link>
              <Computer className="text-4xl  text-white w-9 h-9 ps-4   transition-colors" />
            

            < Link to ="https://codepen.io" target="_blank"> </Link>
              <Package className="text-4xl  text-white w-9 h-9 ps-2   transition-colors" />
        

            < Link to ="https://linkedin.com" target="_blank"> </Link>
              <FileSymlink className="text-4xl  text-white w-9 h-9 ps-2   transition-colors" />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
