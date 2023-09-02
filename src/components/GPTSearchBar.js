import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  return (
    <div className="mt-[8rem] absolute w-screen">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-2/3 grid grid-cols-12 mx-auto"
      >
        <input
          type="text"
          placeholder={lang[language].placeholder}
          className="p-4 m-4 col-span-10"
        />
        <button className="bg-red-700 m-4 py-2 px-4 text-white rounded-lg col-span-2">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
