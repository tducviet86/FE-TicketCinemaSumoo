import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "../../screens/Seat/seat.style";

interface Props {
  seatCodes: string[];

  seatCount: number;

  totalPrice: number;

  onBooking: () => void;

  onClear: () => void;
}

const BottomBooking = ({
  seatCodes,
  seatCount,
  totalPrice,
  onBooking,
  onClear,
}: Props) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  return (
    <View style={styles.bottomContainer}>

      <View style={styles.bookingRow}>
        <View style={styles.bookingLeft}>
          <Text style={styles.bookingLabel}>
            Số ghế
          </Text>

          <Text style={styles.bookingSeat}>
            {seatCount} Ghế
          </Text>
        </View>

        <Text style={styles.bookingPrice}>
          {formatPrice(totalPrice)}
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.bookingButton,
          seatCount === 0 &&
            styles.bookingButtonDisabled,
        ]}
        disabled={seatCount === 0}
        onPress={onBooking}
      >
        <Text style={styles.bookingButtonText}>
          ĐẶT VÉ
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(BottomBooking);