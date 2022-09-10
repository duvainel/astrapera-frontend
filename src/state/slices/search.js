import { createSlice } from "@reduxjs/toolkit";

const initialState = { query: "" };

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    resetQuery(state) {
      state.query = initialState.query;
    },
  },
});

export const { setQuery, resetQuery } = searchSlice.actions;
export default searchSlice.reducer;
