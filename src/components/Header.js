import React from "react";
import { NETFLIX_LOGO } from "../utils/constant";
const Header = () => {
  return (
    <div className="w-full">
      <img
        src={NETFLIX_LOGO}
        alt="logo"
        className="w-40 p-2 m-2 absolute z-10"
      />
    </div>
  );
};

export default Header;
