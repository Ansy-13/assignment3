// File: components/Footer.js
import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-10">
      {/* Moving Colorful Border */}
      <div className="absolute inset-0 border-t-4 border-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 animate-moving-border"></div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          
          {/* Logo and description */}
          <div className="text-center md:text-left">
            <h2 className=" text-white  text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-green-400">
            Anas Blog
            </h2>
            <p className="text-lg text-gray-700">
              Inspiring you to create beautiful things every day. Let is build something amazing together.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex space-x-6 text-lg">
           <Link href={'/'}>Home </Link>
           <Link href={'/about'}>About </Link>
           <Link href={'/contact'}>Contact </Link>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-6 text-xl">
            <Link href={"https://pk.linkedin.com/"}><i><FaLinkedin /></i></Link>
            <Link href={"https://github.com/"}><i><FaGithubSquare /></i></Link>
            <Link href={"https://www.instagram.com/"}><i><FaInstagramSquare /></i></Link>
            <Link href={"https://facebook.com/"}><i><FaFacebook /></i></Link>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 Your Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
