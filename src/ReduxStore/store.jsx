import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import watchVideoDataReducer from "./watchVideoDataSlice";

const store=configureStore({
  reducer:{
    app:appReducer,
    watchVideoData:watchVideoDataReducer,

  },

});

export default store;