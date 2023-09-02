import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptState: false,
  },
  reducers: {
    changeGPTState: (state) => {
      state.gptState = !state.gptState;
    },
  },
});

export const { changeGPTState } = gptSlice.actions;
export default gptSlice.reducer;
