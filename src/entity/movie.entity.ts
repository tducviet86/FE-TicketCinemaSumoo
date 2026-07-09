export interface Genre {
  id: string;
  name: string;
}

export interface MovieGenre {
  movieId: string;
  genreId: string;
  genre: Genre;
}

export interface Showtime {
  id: string;
  movieId: string;
  roomId: string;
  startTime: string;
  endTime: string;
  price: number;
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