import React, { useEffect, useRef } from "react";
import {
  Animated,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import styles from "../../screens/Seat/seat.style";
import {
  Seat,
  SeatStatus,
  SeatType,
} from "../../entity/seat.type";


interface Props {
  seat: Seat;

  selected: boolean;

  onPress: (seat: Seat) => void;
}

const SeatItem = ({
  seat,
  selected,
  onPress,
}: Props) => {
  const scale = useRef(
    new Animated.Value(1)
  ).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(scale, {
        toValue: selected ? 1.18 : 1,
        useNativeDriver: true,
      }),

      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  }, [selected]);

  const backgroundColor = () => {
    if (selected) {
      return styles.selectedSeat;
    }

    if (seat.status === SeatStatus.BOOKED) {
      return styles.bookedSeat;
    }

    if (seat.status === SeatStatus.LOCKED) {
      return styles.lockedSeat;
    }

    switch (seat.type) {
      case SeatType.VIP:
        return styles.vipSeat;

      case SeatType.COUPLE:
        return styles.coupleSeat;

      default:
        return styles.normalSeat;
    }
  };

  const disabled =
    seat.status === SeatStatus.BOOKED ||
    seat.status === SeatStatus.LOCKED;

  return (
    <TouchableWithoutFeedback
      disabled={disabled}
      onPress={() => onPress(seat)}
    >
      <Animated.View
        style={[
          styles.seat,
          backgroundColor(),
          disabled &&
          styles.seatDisabled,
          {
            transform: [
              {
                scale,
              },
            ],
          },
        ]}
      >
        <Text style={styles.seatText}>
          {seat.number}
        </Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(SeatItem);