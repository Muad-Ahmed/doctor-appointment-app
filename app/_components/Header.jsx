import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Menu = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Explore", path: "/explore" },
  { id: 3, name: "Contact Us", path: "/contact" },
];

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="flex items-center gap-12">
        {/* اللوجو */}
        <Image 
          src={"/assets/imgs/logo.png"} 
          width={120} 
          height={40} 
          alt="logo" 
          className="cursor-pointer"
        />

        
        <ul className="md:flex gap-10 hidden">
          {Menu.map((item) => (
            <Link href={item.path} key={item.id}>
              <li className="text-gray-600 font-medium hover:text-purple-600 cursor-pointer transition-all duration-300 relative group">
                {item.name}
               
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full shadow-lg shadow-purple-200 transition-all hover:scale-105 active:scale-95 font-semibold">
        Get Started
      </Button>
    </div>
  );
};

export default Header;
