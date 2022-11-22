import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/CurrentUserContext";
import { useForm } from "react-hook-form";

const LogInPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  // We are consuming our user-management context to
  // get & set the user details here
  const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);

  // We are using React's "useState" hook to keep track of the form values.
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // This function will be called whenever the user edits the form.
  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // This function will redirect the user to the appropriate page once the authentication is done.
  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/");
  };

  // Since there can be chances that the user is already logged in
  // but whenever the app gets refreshed the user context will become
  // empty. So we are checking if the user is already logged in and
  // if so we are redirecting the user to the home page.
  // Otherwise we will do nothing and let the user to login.
  const loadUser = async () => {
    if (!user) {
      const fetchedUser = await fetchUser();
      if (fetchedUser) {
        console.log("FETCHED USER", fetchedUser);
        // Redirecting them once fetched.
        redirectNow();
      }
    }
  };

  // This useEffect will run only once when the component is mounted.
  // Hence this is helping us in verifying whether the user is already logged in or not.
  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // This function gets fired when the user clicks on the "Login" button.

  const onSubmit = async (data) => {
    console.log("SUBMITTED");
    console.log(data);
    try {
      // Here we are passing user details to our emailPasswordLogin
      // function that we imported from our realm/authentication.js
      // to validate the user credentials and login the user into our App.
      console.log("EMAIL", data.email);
      console.log("PASSWORD", data.password);
      const user = await emailPasswordLogin(data.email, data.password);
      if (user) {
        console.log("USER", user);
        redirectNow();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="pt-24">
        <form
          className="bg-white py-32 md:w-2/3 lg:w-1/2 mx-auto rounded px-20"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div class="flex items-center mb-5">
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

          <div class="flex items-center mb-10">
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
          <div class="text-right">
            <button className="py-3 px-8 bg-green-500 text-white font-bold ">
              Log In
            </button>
            <p className="mt-8">
              Need an account? <Link to="/signup">Sign Up!</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
