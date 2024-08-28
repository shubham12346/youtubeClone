import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarMenu: true,
  latestVideos: [],
  suggestions: {},
  currentSuggested: [],
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
    addSuggestions: (state, action) => {
      let newSuggestions = { ...state.suggestions, ...action.payload };
      console.log("newSuggestions", newSuggestions);
      state.suggestions = newSuggestions;
    },
    showCurrentSuggestion: (state, action) => {
      state.currentSuggested = action.payload;
    },
  },
});

export const {
  toggleSideBarMenu,
  addLatestVideos,
  addSuggestions,
  showCurrentSuggestion,
} = menuSlice.actions;
export default menuSlice.reducer;
