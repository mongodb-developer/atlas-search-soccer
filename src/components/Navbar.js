import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Navbar = ({ user, logOutUser }) => {
  let navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  console.log("USER FROM NAV", user);
  return (
    <div className="flex items-center justify-between pb-2 mx-auto bg-black border-b border-green-500">
      {user ? (
        <div
          onClick={async () => await logOutUser()}
          className="px-6 py-3  border-gray-600  text-white  sm:mx-3 sm:mt-0 flex justify-end"
        >
          Logout
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
  );
};

export default Navbar;
