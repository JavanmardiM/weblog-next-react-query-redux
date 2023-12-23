import { createSlice } from "@reduxjs/toolkit";

export interface RootState {
  theme: string;
}
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "",
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload.theme;
    },
  },
});

export const themeAction = themeSlice.actions;
export default themeSlice;
