import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import watchVideoDataReducer from "./watchVideoDataSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store=configureStore({
  reducer:{
    app:appReducer,
    watchVideoData:watchVideoDataReducer,
    search:searchSlice,
    chat:chatSlice,

  },

});

export default store;