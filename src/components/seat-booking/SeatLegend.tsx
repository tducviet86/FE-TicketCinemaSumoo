import React from "react";
import {
  Text,
  View,
} from "react-native";

import styles from "../../screens/Seat/seat.style";


const Item = ({
  color,
  text,
}: {
  color: string;
  text: string;
}) => {
  return (
    <View style={styles.legendItem}>
      <View
        style={[
          styles.legendSeat,
          {
            backgroundColor: color,
          },
        ]}
      />

      <Text style={styles.legendText}>
        {text}
      </Text>
    </View>
  );
};

const SeatLegend = () => {
  return (
    <View style={styles.legendContainer}>
      <Item
        color="#2D3442"
        text="Ghế thường"
      />

      <Item
        color="#F59E0B"
        text="Ghế VIP"
      />

      <Item
        color="#E53935"
        text="Đang chọn"
      />

      <Item
        color="#5B6473"
        text="Đã đặt"
      />
    </View>
  );
};

export default React.memo(SeatLegend);