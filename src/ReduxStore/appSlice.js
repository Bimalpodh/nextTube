import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu:(state)=>{
       state.isMenuOpen=false;
    },
  },
});

// Export the action
export const { toggleMenu,closeMenu } = appSlice.actions;

// Export the reducer
export default appSlice.reducer;
