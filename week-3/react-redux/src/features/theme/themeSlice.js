import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: "dark",
  reducers: {
    toggleTheme: (state) => (state === "dark" ? "light" : "dark"),
  },
});

// exporting out our functions
export const { toggleTheme } = themeSlice.actions;

// connection to the store
export default themeSlice.reducer;