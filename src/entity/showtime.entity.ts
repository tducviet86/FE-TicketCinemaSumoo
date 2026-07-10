interface Genre {
  id: string;
  name: string;
}

interface MovieGenre {
  genre: Genre;
}

interface Cinema {
  name: string;
  address: string;
}

interface Room {
  cinema: Cinema;
}

interface Showtime {
  id: string;
  startTime: string;
  price: number;
  room: Room;
}