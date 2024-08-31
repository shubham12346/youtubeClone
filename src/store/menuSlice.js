import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedText: "",
  sidebarMenu: true,
  latestVideos: [],
  videoLoader: true,
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
      state.latestVideos = [...action.payload];
    },
    addSuggestions: (state, action) => {
      let newSuggestions = { ...state.suggestions, ...action.payload };
      state.suggestions = newSuggestions;
    },
    showCurrentSuggestion: (state, action) => {
      state.currentSuggested = action.payload;
    },
    toggleLoading: (state, action) => {
      state.videoLoader = action.payload;
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
