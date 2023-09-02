import React, { useEffect, useState } from "react";
import {
  NETFLIX_LOGO,
  NETFLIX_USER_ICON,
  SUPPORTED_LANGUAGES,
} from "../utils/constant";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { changeGPTState } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";
const Header = () => {
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPT = useSelector((store) => store.gpt.gptState);
  const handleSignOut = () => {
    setToggle(!toggle);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGPTClick = () => {
    dispatch(changeGPTState());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));
  };
  return (
    <div className="w-full flex flex-row absolute justify-between z-10">
      <img src={NETFLIX_LOGO} alt="logo" className="w-[15rem] p-2 my-2" />
      {user && (
        <div className="flex">
          {showGPT && (
            <select
              className="px-4 py-2 absolute mt-5 -ml-[8rem] rounded-lg text-white bg-gray-800 cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white bg-purple-700 px-4 py-2 my-5 rounded-lg h-10"
            onClick={handleGPTClick}
          >
            {showGPT ? "Home" : "GPT Search"}
          </button>
          <img
            src={NETFLIX_USER_ICON}
            alt="icon"
            className="p-2 m-4 w-12 h-12 cursor-pointer"
          />
          <p
            onClick={() => handleSignOut()}
            className="my-8 mr-4 cursor-pointer"
          >
            {toggle ? <BiSolidDownArrow /> : <BiSolidUpArrow />}
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
