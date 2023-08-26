import React, { useState } from "react";
import { NETFLIX_LOGO, NETFLIX_USER_ICON } from "../utils/constant";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    setToggle(!toggle);
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="w-full flex absolute justify-between z-10">
      <img src={NETFLIX_LOGO} alt="logo" className="w-40 p-2 m-2" />
      {user && (
        <div className="flex">
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
