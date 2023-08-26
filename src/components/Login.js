import React, { useRef, useState } from "react";
import Header from "./Header";
import { NETFLIX_BACKGROUND } from "../utils/constant";
import Footer from "./Footer";
import validate from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const handleClick = () => {
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, displayName, email } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, displayName: displayName, email: email })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-4/12 absolute p-14 my-32 mx-auto left-0 right-0 rounded-lg text-white bg-opacity-80"
      >
        <h1 className="p-2 my-2 text-3xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-sm bg-gray-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-sm bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-sm bg-gray-600"
        />
        {errorMessage !== null && (
          <p className="p-4 mt-2 text-center w-full text-red-600 text-lg">
            {errorMessage}
          </p>
        )}
        <button
          className="p-4 mt-6 w-full bg-[#e50914] rounded-sm"
          onClick={handleClick}
        >
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
            {isSignIn ? "Sign Up Now" : "Sign In"}
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
