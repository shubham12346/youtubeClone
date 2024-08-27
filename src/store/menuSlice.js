import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarMenu: false,
};
const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    toggleSideBarMenu: (state) => {
      state.sidebarMenu = !state.sidebarMenu;
    },
  },
});

export const { toggleSideBarMenu } = menuSlice.actions;
export default menuSlice.reducer;
