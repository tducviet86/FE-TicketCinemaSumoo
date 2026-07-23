import { Seat } from "./seat.type";

export interface Movie {
  id: string;
  title: string;
  description?: string;
  duration: number;
  releaseDate?: string;
  language?: string;
  trailerUrl?: string;
  posterUrl?: string;
  rating?: number;
}

export interface Cinema {
  id: string;
  name: string;
  address: string;
  city: string;
}

export interface Room {
  id: string;
  name: string;
}

export interface ShowtimeInfo {
  id: string;
  startTime: string;
  endTime: string;
}

export interface SeatMapResponse {
  movie: Movie;
  cinema: Cinema;
  room: Room;
  showtime: ShowtimeInfo;
  seats: Seat[];
}