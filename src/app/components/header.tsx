import React from "react";
import Link from "next/link";



const Navbar: React.FC = () => {
  return (
    <nav className=" fixed top-0 left-0 w-full backdrop-blur-md bg-white/60 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={'/'}><div className="flex-shrink-0">
            <span className="text-2xl font-bold">Anas Blog</span>
          </div></Link>
          
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;