import { useMemo, useState } from "react";
import {
  Seat,
  SeatStatus,
} from "../entity/seat.type";

export const useSeatSelection = () => {
  const [selectedSeats, setSelectedSeats] =
    useState<Seat[]>([]);

  const toggleSeat = (seat: Seat) => {
    if (
      seat.status === SeatStatus.BOOKED ||
      seat.status === SeatStatus.LOCKED
    ) {
      return;
    }

    setSelectedSeats((prev) => {
      const exist = prev.find(
        (item) => item.id === seat.id
      );

      if (exist) {
        return prev.filter(
          (item) => item.id !== seat.id
        );
      }

      return [...prev, seat];
    });
  };

  const clearSeats = () => {
    setSelectedSeats([]);
  };

  const removeSeat = (seatId: string) => {
    setSelectedSeats((prev) =>
      prev.filter((item) => item.id !== seatId)
    );
  };

  const isSelected = (seatId: string) => {
    return selectedSeats.some(
      (item) => item.id === seatId
    );
  };

  const totalPrice = useMemo(() => {
    return selectedSeats.reduce(
      (sum, seat) => sum + seat.price,
      0
    );
  }, [selectedSeats]);

  const seatCount = selectedSeats.length;

  const seatCodes = useMemo(() => {
    return selectedSeats
      .map((seat) => seat.code)
      .sort();
  }, [selectedSeats]);

  return {
    selectedSeats,

    seatCodes,

    seatCount,

    totalPrice,

    toggleSeat,

    clearSeats,

    removeSeat,

    isSelected,
  };
};