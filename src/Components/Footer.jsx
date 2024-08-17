import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-xl font-bold flex items-center">
            <span className="text-orange-500 mr-2">🏨</span>Hotel
          </h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <FaInstagram className="text-2xl cursor-pointer hover:text-gray-400" />
            <FaFacebook className="text-2xl cursor-pointer hover:text-gray-400" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-gray-400" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-gray-400" />
          </div>
          {/* Email Subscription */}
          <input
            type="email"
            placeholder="Your email address"
            className="mt-4 p-2 w-full bg-gray-800 rounded text-white focus:outline-none"
          />
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">Gallery</li>
            <li className="hover:text-gray-400 cursor-pointer">Blogs</li>
            <li className="hover:text-gray-400 cursor-pointer">About</li>
            <li className="hover:text-gray-400 cursor-pointer">Image</li>
            <li className="hover:text-gray-400 cursor-pointer">Rooms</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">Restaurant</li>
            <li className="hover:text-gray-400 cursor-pointer">Coffee Shop</li>
            <li className="hover:text-gray-400 cursor-pointer">Car Wash</li>
            <li className="hover:text-gray-400 cursor-pointer">Cycle Rent</li>
            <li className="hover:text-gray-400 cursor-pointer">Car Rent</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">Reach Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              📍 <span className="ml-2">6391 Elgin St.</span>
            </li>
            <li className="flex items-center">
              📞 <span className="ml-2">(239) 555-0108</span>
            </li>
            <li className="flex items-center">
              🏠 <span className="ml-2">6391 Elgin St. Celina, Delaware 10299</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
