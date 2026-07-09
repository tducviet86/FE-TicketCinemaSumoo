import { createSlice } from "@reduxjs/toolkit";
import { getMovieById, getMovieNowShowing, getMovieUpComing } from "./home.thunk";
import { Movie } from "../../entity/movie.entity";

interface HomeState {
  list: Movie[];
  listComing: Movie[];
  detailMovie: Movie;
  loading: boolean;
  error: string | null;
}

const INIT_STATE: HomeState = {
  list: [],
  listComing: [],
  detailMovie: {} as Movie,
  loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieNowShowing.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovieNowShowing.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getMovieNowShowing.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Có lỗi xảy ra";
      })

      .addCase(getMovieUpComing.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovieUpComing.fulfilled, (state, action) => {
        state.loading = false;
        state.listComing = action.payload;
      })
      .addCase(getMovieUpComing.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Có lỗi xảy ra";
      })
      .addCase(getMovieById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovieById.fulfilled, (state, action) => {
        state.loading = false;
        state.detailMovie = action.payload;
      })
      .addCase(getMovieById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Có lỗi xảy ra";
      });
  },
});

export default homeSlice.reducer;