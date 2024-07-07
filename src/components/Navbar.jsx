import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Bars3BottomRightIcon,
  XMarkIcon
} from '@heroicons/react/24/solid';
import { FaPlane } from 'react-icons/fa';

const Navbar = () => {
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'Destinations', link: '/DestinationPage' },
    { name: 'Tours', link: '/Tours' },
    { name: 'Services', link: '/ServicePage' },
    { name: 'About Us', link: '/AboutUsPage' },
    { name: 'Contact', link: '/ContactPage' }
  ];

  const [isOpen, setisOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close the menu when the location changes
    setisOpen(false);
  }, [location]);

const LinkClass = ({isActive})=>
  
  isActive ?
  'font-semibold duration-500 bg-indigo-600 w-full py-2 px-2 text-white rounded-md' :
  'text-gray-800 hover:bg-indigo-600 hover:text-white hover:py-2 hover:px-2 hover:rounded-md font-semibold duration-500';

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between bg-white py-4 px-7 md:px-10">
        <div className="flex items-center cursor-pointer gap-2 text-2xl">
          <FaPlane className="h-7 w-7 text-indigo-600" />
          <span className="font-bold text-indigo-600">Travey</span>
        </div>

        {/* Menu Icon */}
        <div 
          onClick={() => setisOpen(!isOpen)} 
          className="absolute top-4 right-8 cursor-pointer md:hidden w-7 h-7"
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* Links */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in md:pl-0 pl-9 ${isOpen ? 'top-16 shadow-md' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7">
              <NavLink to={link.link} className={LinkClass}>
                {link.name}
              </NavLink>
            </li>
          ))}
          {/* Button */}
          <button className="bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;