import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarMenu: true,
  latestVideos: [],
};
const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    toggleSideBarMenu: (state) => {
      state.sidebarMenu = !state.sidebarMenu;
    },
    addLatestVideos: (state, action) => {
      let prev = state.latestVideos;
      state.latestVideos = [...prev, ...action.payload];
    },
  },
});

export const { toggleSideBarMenu, addLatestVideos } = menuSlice.actions;
export default menuSlice.reducer;
