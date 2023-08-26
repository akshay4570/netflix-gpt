import React, { useState } from "react";
import Header from "./Header";
import { NETFLIX_BACKGROUND } from "../utils/constant";
import Footer from "./Footer";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="absolute">
        <img
          src={NETFLIX_BACKGROUND}
          alt="background"
          className="bg-cover overflow-hidden h-[70rem] w-full bg-center bg-no-repeat"
        />
      </div>
      <form className="bg-black w-4/12 absolute p-14 my-32 mx-auto left-0 right-0 rounded-lg text-white bg-opacity-80">
        <h1 className="p-2 my-2 text-3xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-sm bg-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-sm bg-gray-600"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-sm bg-gray-600"
        />
        <button className="p-4 mt-6 w-full bg-[#e50914] rounded-sm">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn && (
          <span className="flex justify-between">
            <span className="my-2">
              <input type="checkbox" className="mr-2 cursor-pointer" />
              Remember me
            </span>
            <span className="my-2">Need Help?</span>
          </span>
        )}
        <p className="my-8">
          {isSignIn ? "New to Netflix?" : "Already User?"} &nbsp;
          <u className="cursor-pointer" onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? "Sign Up Now" : "Sign In Now"}
          </u>
        </p>
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <a href="/" className="text-blue-700">
            Learn more
          </a>
          .
        </p>
      </form>
      <div className="absolute bg-black w-full p-14 my-[56rem] mx-auto left-0 right-0 opacity-70">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
