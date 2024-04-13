import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchMovieList = createAsyncThunk("Movie_list", async ({api}) => {
  try {
    const response = axios.get(api);
    console.log(response.data)
    return response.data
  } catch (error) {}
});
const MovieListSlice = createSlice({
  name: "Moive_list",
  initialState: {
    loading: "idle",
    error: null,
    data: null,
  },
  reducers: {
    [fetchMovieList.pending]: (state) => {
      state.loading = true;
    },
    [fetchMovieList.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchMovieList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default MovieListSlice.reducer