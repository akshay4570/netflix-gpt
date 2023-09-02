import { useEffect } from "react";
import { API_OPTIONS, MOVIE_VIDEO_CDN } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const useNowPlayingMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const data = await fetch(
      MOVIE_VIDEO_CDN + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const filteredData = json?.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json?.results[0];
    dispatch(addTrailer(trailer));
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useNowPlayingMovieTrailer;
