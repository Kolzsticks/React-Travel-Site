import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { NavLink} from 'react-router-dom';



const Footer = () => {

  return (
    <footer className="bg-indigo-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              We are a leading travel agency dedicated to helping you explore the world. Our mission is to provide exceptional travel experiences and unforgettable adventures.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/" className="hover:text-gray-400">Home</NavLink></li>
              <li><NavLink to="/DestinationPage" className="hover:text-gray-400">Destinations</NavLink></li>
              <li><NavLink to="/Tours" className="hover:text-gray-400">Tours</NavLink></li>
              <li><NavLink to="/ServicePage" className="hover:text-gray-400">Services</NavLink></li>
              <li><NavLink to="/AboutUsPage" className="hover:text-gray-400">About Us</NavLink></li>
              <li><NavLink to="/ContactPage" className="hover:text-gray-400">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaFacebookF size={24} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaTwitter size={24} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaInstagram size={24} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaLinkedinIn size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-400 pt-8">
          <p>&copy; 2024 Travel Website. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-gray-400">Terms of Service</a>
            <NavLink to="/ContactPage" className="hover:text-gray-400">Contact</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;