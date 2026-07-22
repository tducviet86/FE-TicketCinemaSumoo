import { Seat } from "../entity/seat.type";

export const groupSeat = (
  seats: Seat[]
): Record<string, Seat[]> => {
  return seats.reduce<Record<string, Seat[]>>(
    (acc, seat) => {
      if (!acc[seat.row]) {
        acc[seat.row] = [];
      }

      acc[seat.row].push(seat);

      return acc;
    },
    {}
  );
};