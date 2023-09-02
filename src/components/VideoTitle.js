import React from "react";
import useMovieImage from "../hooks/useMovieImage";
import { useSelector } from "react-redux";
import { MOVIE_IMAGE_CDN } from "../utils/constant";
import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";

const VideoTitle = ({ title, overview, id }) => {
  useMovieImage(id);
  const movieLogo = useSelector((store) => store.movie?.logo);
  if (!movieLogo) return;
  console.log(movieLogo);
  return (
    <div className="w-screen aspect-video pt-[20%] px-10 absolute bg-gradient-to-r from-black">
      <div>
        <img
          src={MOVIE_IMAGE_CDN + movieLogo?.file_path}
          alt="movie"
          className="w-30 h-20 my-10"
        />
        <p className="py-6 text-lg h-[10rem] overflow-y-hidden text-white w-1/3">
          {overview}
        </p>
      </div>
      <div className="flex justify-items-start mt-6 w-1/3">
        <button className="flex bg-white py-2 px-3 text-center rounded-md w-1/3 mr-4 hover:bg-gray-400">
          <span className="mx-4">
            <FaPlay size={22} />
          </span>
          <span className="text-md font-bold">Play</span>
        </button>
        <button className="flex bg-gray-600 py-2 px-8 rounded-lg bg-opacity-80 hover:bg-opacity-40">
          <span className="mr-2">
            <ImInfo size={22} color="white" />
          </span>
          <span className="text-white font-bold">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
