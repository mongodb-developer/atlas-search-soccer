import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/CurrentUserContext";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const { emailPasswordSignup } = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/");
  };

  const onSubmit = async () => {
    try {
      const user = await emailPasswordSignup(form.email, form.password);

      if (user) {
        redirectNow();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto mb-20 rounded pt-24">
        <form className="py-20 px-20">
          <div className="flex items-center mb-5">
            <label
              htmlFor="email"
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
              htmlFor="password"
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
            <button
              className="py-3 px-8 bg-green-500 text-white font-bold"
              onClick={onSubmit}
            >
              Sign Up
            </button>
            <p className="mt-8">
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
