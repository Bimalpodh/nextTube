// ReduxStore/watchVideoDataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const watchVideoDataSlice = createSlice({
  name: "watchVideoData",
  initialState: {
    videoInfo: null,
  },
  reducers: {
    setWatchVideoData: (state, action) => {
      state.videoInfo = action.payload;
    },
    clearWatchVideoData: (state) => {
      state.videoInfo = null;
    },
  }
})

export const {setWatchVideoData,clearWatchVideoData}=watchVideoDataSlice.actions;
export default watchVideoDataSlice.reducer;
