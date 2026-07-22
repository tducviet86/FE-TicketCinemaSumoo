import React from "react";
import { View } from "react-native";

import styles from "../../screens/Seat/seat.style";

import SeatRow from "./SeatRow";

import { Seat } from "../../entity/seat.type";

interface Props {
  groupedSeat: Record<
    string,
    Seat[]
  >;

  isSelected: (
    id: string
  ) => boolean;

  onSelectSeat: (
    seat: Seat
  ) => void;
}

const SeatMap = ({
  groupedSeat,
  isSelected,
  onSelectSeat,
}: Props) => {
  return (
    <View style={styles.seatContainer}>
      {Object.entries(
        groupedSeat
      ).map(([row, seats]) => (
        <SeatRow
          key={row}
          row={row}
          seats={seats}
          isSelected={
            isSelected
          }
          onSelectSeat={
            onSelectSeat
          }
        />
      ))}
    </View>
  );
};

export default React.memo(
  SeatMap
);