import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center p-3 w-full h-[70px]">
        <div className="text-2xl font-bold">
          <Link to={"/"}>Crwn-Clothing</Link>
        </div>
        <div className=" flex gap-3">
          <Link to={"/"}>Home</Link>
          <Link to={"/products/1"}>Shop</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
