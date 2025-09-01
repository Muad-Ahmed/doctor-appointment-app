import React from "react";
import Image from "next/image";
const Menu = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Explore",
    path: "/",
  },
  {
    id: 3,
    name: "Contact Us",
    path: "/",
  },
];

const Header = () => {
  return (
    <div>
      <Image src={"/assets/imgs/logo.png"} width={50} height={50} />
      <h1>Hello</h1>
    </div>
  );
};

export default Header;
