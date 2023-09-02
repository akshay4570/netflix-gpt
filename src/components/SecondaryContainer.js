import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  return (
    movies && (
      <div className="bg-black">
        <div className="relative -mt-[5rem] z-20">
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Popular Now"} movies={movies} />
          <MovieList title={"Trending Movies"} movies={movies} />
          <MovieList title={"Upcoming Movies"} movies={movies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
