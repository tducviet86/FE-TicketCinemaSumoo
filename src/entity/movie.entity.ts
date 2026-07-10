export interface Genre {
  id: string;
  name: string;
}

export interface MovieGenre {
  movieId: string;
  genreId: string;
  genre: Genre;
}

export interface Cinema {
  id: string;
  name: string;
  address: string;
}

export interface Room {
  id: string;
  name: string;
  cinema: Cinema;
}

export interface Showtime {
  id: string;
  movieId: string;
  roomId: string;
  startTime: string;
  endTime: string;
  price: number;

  room: Room;
}
export interface Movie {
  id: string;
  title: string;
  description: string;
  duration: number;
  releaseDate: string;
  language: string;
  trailerUrl: string;
  posterUrl: string;
  rating: number;
  createdAt: string;
  genres: MovieGenre[];
  showtimes: Showtime[];
}
