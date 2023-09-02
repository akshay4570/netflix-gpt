import React from "react";
import { MOVIE_IMAGE_CDN } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="mx-4">
      <div className="w-40">
        <img src={MOVIE_IMAGE_CDN + posterPath} alt="poster" />
      </div>
    </div>
  );
};

export default MovieCard;
