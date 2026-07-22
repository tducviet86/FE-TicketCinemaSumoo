import React from "react";
import {
  View,
  Text,
} from "react-native";
import styles from "../../screens/Seat/seat.style";


import SeatItem from "./SeatItem";

import { Seat } from "../../entity/seat.type";

interface Props {
  row: string;

  seats: Seat[];

  isSelected: (id: string) => boolean;

  onSelectSeat: (seat: Seat) => void;
}

const SeatRow = ({
  row,
  seats,
  isSelected,
  onSelectSeat,
}: Props) => {
  return (
    <View style={styles.seatRow}>
      <Text style={styles.rowLabel}>
        {row}
      </Text>

      <View style={styles.seatList}>
        {seats.map((seat, index) => (
          <React.Fragment key={seat.id}>
            {index === 4 && (
              <View style={styles.seatGap} />
            )}

            <SeatItem
              seat={seat}
              selected={isSelected(
                seat.id
              )}
              onPress={onSelectSeat}
            />
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

export default React.memo(SeatRow);