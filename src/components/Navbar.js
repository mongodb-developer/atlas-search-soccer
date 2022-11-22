import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="container flex items-center justify-between pb-2 mx-auto bg-black">
      {loggedIn ? (
        <div
          onClick={() => setLoggedIn(false)}
          className="px-6 py-3 border-b border-gray-600  text-red-500  sm:mx-3 sm:mt-0 flex justify-end"
        >
          Logout
        </div>
      ) : (
        <div
          onClick={() => setLoggedIn(true)}
          className="px-6 py-3 border-b border-gray-600  text-red-500  sm:mx-3 sm:mt-0 flex justify-end"
        >
          Login
        </div>
      )}
    </div>
  );
};

export default Navbar;
