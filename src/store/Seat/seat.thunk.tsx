import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../helpers/api";
import { SeatMapResponse } from "../../entity/seat-map.type";

export const getSeatByShowtime = createAsyncThunk<
  SeatMapResponse,
  string,
  { rejectValue: string }
>(
  "seat/getSeatByShowtime",
  async (showtimeId, { rejectWithValue }) => {
    try {
      const response =
        await authInstance.get<SeatMapResponse>(
          `/showtimes/${showtimeId}/seats`
        );

      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message ??
          "Lấy sơ đồ ghế thất bại"
      );
    }
  }
);