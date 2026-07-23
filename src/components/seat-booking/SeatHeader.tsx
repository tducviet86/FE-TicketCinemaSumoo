import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import styles from "../../screens/Seat/seat.style";

import {
  Movie,
  Cinema,
  Room,
  ShowtimeInfo,
} from "../../entity/seat-map.type";

interface Props {
  movie: Movie | null;
  cinema: Cinema | null;
  room: Room | null;
  showtime: ShowtimeInfo | null;
  onBack: () => void;
}

const SeatHeader = ({
  movie,
  cinema,
  room,
  showtime,
  onBack,
}: Props) => {
  const formatDateTime = (date?: string) => {
    if (!date) return "";

    return new Date(date).toLocaleString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

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
            {movie?.title ?? "Tên phim"}
          </Text>

          <Text style={styles.cinemaName}>
            {cinema?.name ?? ""}
            {room ? ` • ${room.name}` : ""}
          </Text>

          <Text style={styles.showtime}>
            {formatDateTime(showtime?.startTime)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(SeatHeader);