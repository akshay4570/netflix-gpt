import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="py-4 ml-6">
      <div>
        <h1 className="text-3xl p-2 mx-2 text-white">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll no-scrollbar">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
