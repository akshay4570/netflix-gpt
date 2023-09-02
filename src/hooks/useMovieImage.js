import { useEffect } from "react";
import { API_OPTIONS, MOVIE_IMAGE } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addLogo } from "../utils/movieSlice";

const useMovieImage = (id) => {
  const dispatch = useDispatch();
  const getMovieImage = async () => {
    const data = await fetch(MOVIE_IMAGE + id + "/images", API_OPTIONS);
    const json = await data.json();
    console.log(json?.logos[0]);
    dispatch(addLogo(json?.logos[0]));
  };
  useEffect(() => {
    getMovieImage();
  }, []);
};

export default useMovieImage;
