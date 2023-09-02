import React from "react";
import useNowPlayingMovieTrailer from "../hooks/useNowPlayingMovieTrailer";
import { useSelector } from "react-redux";
import { YOUTUBE_URL } from "../utils/constant";

const VideoBackground = ({ movieId }) => {
  useNowPlayingMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movie?.nowPlayingMovieTrailer);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          YOUTUBE_URL + trailer?.key + "?&autoplay=1&mute=1&loop=1&controls=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
