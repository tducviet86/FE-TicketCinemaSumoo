import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import styles from "../../screens/Seat/seat.style";

interface Props {
  showtime: any;
  onBack: () => void;
}

const SeatHeader = ({
  showtime,
  onBack,
}: Props) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBack}
        >
          <Ionicons
            name="arrow-back"
            size={22}
            color="#fff"
          />
        </TouchableOpacity>

        <View style={styles.movieInfo}>
          <Text
            numberOfLines={1}
            style={styles.movieTitle}
          >
            {showtime?.movie?.title ??
              "Tên phim"}
          </Text>

          <Text style={styles.cinemaName}>
            {showtime?.room?.cinema?.name ??
              "CGV Vincom"}
          </Text>

          <Text style={styles.showtime}>
            {showtime?.startTime ??
              "20:00 • 20/07/2026"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(SeatHeader);