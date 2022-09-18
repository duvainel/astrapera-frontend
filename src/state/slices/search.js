import { createSlice } from "@reduxjs/toolkit";

// Slice objemiz ilk oluştuğunda sahip olduğu değer
const initialState = { query: "" };

const searchSlice = createSlice({
  name: "search",
  initialState,
  // Slice durmunu değiştirmemize yarayan reducer fonksiyonlar
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
