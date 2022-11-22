import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const { emailPasswordSignup } = useContext(CurrentUserContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (data) => {
    console.log("SUBMITTED");
    console.log(data);
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto mb-20 rounded pt-24">
        <form className="py-20 px-20" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center mb-5">
            <label
              for="email"
              className="inline-block text-right mr-6 w-20 font-bold"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your email"
              {...register("email")}
              className="border-b-2 border-gray-400 focus:border-green-800 w-full flex-1 py-2 placeholder-gray-300 outline-none"
            />
          </div>

          <div className="flex items-center mb-10">
            <label
              for="password"
              className="inline-block text-right mr-6 w-20 font-bold"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Super secret password"
              {...register("password")}
              className="border-b-2 border-gray-400 w-full flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-800"
            />
          </div>
          <div className="text-right">
            <button className="py-3 px-8 bg-green-500 text-white font-bold ">
              Submit
            </button>
            <p className="mt-8">
              Already have an account? <Link to="/signup">Log In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
