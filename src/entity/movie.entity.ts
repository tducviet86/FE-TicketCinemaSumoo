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
