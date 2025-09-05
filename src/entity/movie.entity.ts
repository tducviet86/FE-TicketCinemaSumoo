export type Movie = {
  id: string;
  title: string;
  posterUrl: string;
  backdropUrl?: string;
  rating?: number; // 0..10
  genres: string[];
  runtimeMins?: number;
  ageRating?: string;
  releaseDate?: string;
  isFeatured?: boolean;
};
export type Ticket = {
  id: string;
  title: string;
  posterUrl: string;
  ageRating: "P" | "C13" | "C16" | "C18";
  runtimeMins: number;
  genres: string[];
  rating?: number;
};

export type Showtime = {
  time: string;
  format?: "2D" | "3D" | "IMAX";
  language?: "VI" | "EN" | "SUB";
  room?: string;
  price?: string;
};

export type MovieSchedule = {
  movie: Movie;
  showtimes: Showtime[];
};

export type LatLng = { lat: number; lon: number };

export type Theater = {
  id: string;
  name: string;
  address: string;
  city: string;
  imageUrl: string;
  coords: LatLng;
  amenities?: ("Parking" | "IMAX" | "3D" | "Snack" | "eTicket")[];
  schedules: MovieSchedule[];
};

export type DayItem = { iso: string; label: string; dateLabel: string };
