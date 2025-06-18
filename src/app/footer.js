

import Image from "next/image";
import { TbPhoneCall } from "react-icons/tb";

import { FaFacebookF } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { FaLinkedinIn } from "react-icons/fa6";

import { TiArrowRightThick } from "react-icons/ti";


import { IoLocationOutline } from "react-icons/io5";
import { FaAward } from "react-icons/fa6";
import { PiPhoneCall } from "react-icons/pi";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";


import Link from "next/link";

const LinkGroup = ({ children, header }) => {
    return (
      <>
       
        <div className="mb-10">
          <h4 className="mb-9 text-2xl font-semibold text-gray-900 dark:text-white font-roboto">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
       
      </>
    );
  };
  
  const NavLink = ({ link, label }) => {
    return (
      <div className='flex gap-2 group items-center transform hover:translate-x-2 duration-700 '>
        <TiArrowRightThick className="group-hover:text-red-600 duration-700 ease-in-out "/>
        <li className="relative group">
          <Link
            href={link}
            className="inline-block text-base leading-loose  group-hover:text-red-600  duration-700 ease-in-out  dark:text-dark-6"
            >
            {label}
            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-red-600 group-hover:w-full group-hover:transition-all"></span>
          </Link>
        </li>
      </div>
    );
  };

export default function Footer(){

    return(
      <>
      
        <footer className="text-gray-700  ">

          <div className="max-w-screen-xl py-6 mx-auto px-3 md:px-5">
            <div className="lg:flex justify-center">
              <div className="mt-6 lg:mt-5 lg:flex-1">
                <div className="grid grid-cols-12">
                  <div className="flex col-span-12  md:col-span-3">
                    <LinkGroup>
                      <div className='flex justify-start gap-3 items-center group mt-5 transform hover:translate-x-2 duration-700'>
                    
                        <div>
                        <a href='/'>
                  <Image
              src="/logo.webp"
              alt="landingpress"
              className="dark:invert hidden lg:block mb-5"
              width={139}
              height={60}
              priority
            />
                  </a>
                          <p className="leading-loose">

Create stunning, modern landing<br></br> pages that captivate your <br></br>audience and drive conversions.</p>
                        </div>
                      </div>

                 
                    </LinkGroup>
                  </div>

                  <div className="flex md:justify-center col-span-12  md:col-span-3">
                    <LinkGroup header="Features">
                      <NavLink link="/" label="Home" />
                      <NavLink link="/" label="About Us" />
                      <NavLink link="/" label="Services" />
                      <NavLink link="/" label="Gallery" />
                      <NavLink link="/" label="Contact Us" />
                    </LinkGroup>
                  </div>

                  <div className="flex md:justify-center col-span-12  md:col-span-3">
                    <LinkGroup header="Resources">
                      <NavLink link="/" label="Home" />
                      <NavLink link="/" label="About Us" />
                      <NavLink link="/" label="Services" />
                      <NavLink link="/" label="Gallery" />
                      <NavLink link="/" label="Contact Us" />
                    </LinkGroup>
                  </div>
                  <div className="flex md:justify-center col-span-12  md:col-span-3">
                    <LinkGroup header="Social">
                      <NavLink link="/" label="Home" />
                      <NavLink link="/" label="About Us" />
                      <NavLink link="/" label="Services" />
                      <NavLink link="/" label="Gallery" />
                      <NavLink link="/" label="Contact Us" />
                    </LinkGroup>
                  </div>
                

                  <div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700"/>
            <div className="md:flex max-w-screen-xl mx-auto items-center justify-center flex">
              <div>
                <p className=" text-gray-500 dark:text-gray-400">©  {new Date().getFullYear()} <a className="hover:text-red-600 text-gray-500 font-semibold" href='/' target="_blank" rel='noopener noreferrer' > IT SOLUTIONS</a> . All Rights Reserved.</p>
              </div>
            </div>
          </div>


          {/* <div className="">
        <div className="max-w-screen-xl mx-auto">
            <div className="lg:flex justify-center">
            
            </div>



            <div className="md:flex justify-between py-8">
                <p className="text-center text-300-400">© Copyright {new Date().getFullYear()}.<Link href='/' className="text-blue-500 hover:text-red-400"> Relax Kanna.</Link>  All Rights Reserved.</p>
          <Link href='/privacy-policy'>
            <p className="hover:text-red-400 text-center">Privacy Policy</p>
            </Link>
            </div>

            <div className="text-center flex justify-center items-center text-gray-800">
          
                </div>
        </div>
        </div> */}
        </footer>
      </>
    );
}
