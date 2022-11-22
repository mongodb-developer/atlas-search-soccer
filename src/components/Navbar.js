import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Leaf from "../images/Leaf.png";
import { HiOutlineLogout, HiShoppingCart } from "react-icons/hi";

const Navbar = ({ user, logOutUser, signedUp }) => {
  let navigate = useNavigate();
  console.log("SIGNEDUP? ", signedUp);
  console.log("USER FROM NAV", user);
  return (
    <div className="flex items-center text-white justify-between mx-auto bg-black border-b border-green-500">
      <div id="left">
        <img className="mx-auto w-12 ml-8" src={Leaf} alt="bundles" />
      </div>
      <div>
        {signedUp && user ? (
          <div className="px-6 text-white flex justify-end">
            <div className=" flex mx-4">Welcome, Karen</div>
            <div className="text-green-500 text-2xl mx-4">
              <HiShoppingCart />
            </div>
            <div
              onClick={async () => await logOutUser()}
              className="text-indigo-600 text-2xl"
            >
              <HiOutlineLogout />
            </div>
          </div>
        ) : (
          <div
            onClick={() => navigate("/login")}
            className="px-6 py-3  border-gray-600  text-white  sm:mx-3 sm:mt-0 flex justify-end"
          >
            Login
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
