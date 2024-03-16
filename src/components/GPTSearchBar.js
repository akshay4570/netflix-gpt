import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const language = useSelector((store) => store.config.lang);

  const handleGPTClick = async () => {
    console.log(searchText.current.value);

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };
  return (
    <div className="mt-[8rem] absolute w-screen">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-2/3 grid grid-cols-12 mx-auto"
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[language].placeholder}
          className="p-4 m-4 col-span-10"
        />
        <button
          className="bg-red-700 m-4 py-2 px-4 text-white rounded-lg col-span-2"
          onClick={handleGPTClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
