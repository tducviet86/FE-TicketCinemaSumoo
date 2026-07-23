import { createSlice } from "@reduxjs/toolkit";
import { Seat } from "../../entity/seat.type";
import {
  Movie,
  Cinema,
  Room,
  ShowtimeInfo,
} from "../../entity/seat-map.type";
import { getSeatByShowtime } from "./seat.thunk";

interface SeatState {
  movie: Movie | null;
  cinema: Cinema | null;
  room: Room | null;
  showtime: ShowtimeInfo | null;

  seats: Seat[];

  loading: boolean;
  error: string | null;
}

const initialState: SeatState = {
  movie: null,
  cinema: null,
  room: null,
  showtime: null,

  seats: [],

  loading: false,
  error: null,
};

const seatSlice = createSlice({
  name: "seat",
  initialState,
  reducers: {
    clearSeatState(state) {
      state.movie = null;
      state.cinema = null;
      state.room = null;
      state.showtime = null;
      state.seats = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSeatByShowtime.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getSeatByShowtime.fulfilled, (state, action) => {
        state.loading = false;

        state.movie = action.payload.movie;
        state.cinema = action.payload.cinema;
        state.room = action.payload.room;
        state.showtime = action.payload.showtime;

        state.seats = action.payload.seats;
      })

      .addCase(getSeatByShowtime.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload ?? "Có lỗi xảy ra khi tải sơ đồ ghế";
      });
  },
});

export const { clearSeatState } = seatSlice.actions;

export default seatSlice.reducer;