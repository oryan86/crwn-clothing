import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../asset/crown.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center p-3 w-full h-[70px] mb-[25px]">
        <Link to={"/"}>
          <div className="h-full w-[70px] p-6  ">
            <CrwnLogo />
          </div>
        </Link>
        <div className=" flex gap-3 w-[50%] h-full items-center justify-end">
          <Link className="text-black" to={"/"}>
            Home
          </Link>
          <Link className="text-black" to={"/products/1"}>
            Shop
          </Link>
          <Link className="text-black" to={"/signin"}>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
