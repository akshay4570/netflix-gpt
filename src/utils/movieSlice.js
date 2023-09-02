import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    logo: null,
    nowPlayingMovieTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addLogo: (state, action) => {
      state.logo = action.payload;
    },
    addTrailer: (state, action) => {
      state.nowPlayingMovieTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addLogo, addTrailer } = movieSlice.actions;
export default movieSlice.reducer;
