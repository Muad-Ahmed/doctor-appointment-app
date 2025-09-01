import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Menu = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Explore",
    path: "/explore",
  },
  {
    id: 3,
    name: "Contact Us",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <div className="flex items-center justify-between p-3 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src={"/assets/imgs/logo.png"} width={100} height={100} alt="img" />
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <Link href={item.path} key={item.name}>
              <li className="hover:text-lime-600 cursor-pointer hover:scale-105 transition-all">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
