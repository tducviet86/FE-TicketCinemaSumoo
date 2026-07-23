export type HomeStackParamList = {
  Home: undefined;
};

export type RootStackParamList = {
  MainApp: undefined;
  Auth: undefined;
  SeatMovie: { showtimeId: string };
  MovieDetail: { movieId: string };
};

export type TicketStackParamList = {
  TicketMain: undefined;
  BoxOffice: undefined;
};