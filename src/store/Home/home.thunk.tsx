import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../helpers/api";
import { Movie } from "../../entity/movie.entity";

interface GetMovieResponse {
  movie: Movie[];
}

export const getMovieNowShowing = createAsyncThunk<
  Movie[],
  void,
  { rejectValue: string }
>(
  "movies/now-showing",
  async (_, { rejectWithValue }) => {
    try {
      const response = await authInstance.get<Movie[]>("/movies/now-showing");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Lấy phim đang chiếu thất bại"
      );
    }
  }
)

export const getMovieUpComing = createAsyncThunk<
  Movie[],
  void,
  { rejectValue: string }
>(
  "movies/upcoming",
  async (_, { rejectWithValue }) => {
    try {
      const response = await authInstance.get<Movie[]>("/movies/upcoming");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Lấy phim sắp chiếu thất bại"
      );
    }
  }
)
export const getMovieById = createAsyncThunk<
  Movie,
  string,
  { rejectValue: string }
>(
  "movies/getMovieById",
  async (movieId, { rejectWithValue }) => {

    try {
      const response = await authInstance.get(`/movies/${movieId}`);


      return response.data;
    } catch (error: any) {
      console.log(error);

      return rejectWithValue(
        error.response?.data?.message || "Lấy chi tiết phim thất bại"
      );
    }
  }
);