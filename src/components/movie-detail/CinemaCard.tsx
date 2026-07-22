import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Showtime } from "../../entity/movie.entity";
import { formatTime } from "../../helpers/formatTime";
import styles from "../../screens/MovieDetail/movieDetail.styles";

interface Props {
  cinema: string;
  address: string;
  shows: Showtime[];
  onSelectShowtime: (show: Showtime) => void;
}

const CinemaCard = ({
  cinema,
  address,
  shows,
  onSelectShowtime,
}: Props) => {
  return (
    <View style={styles.cinemaCard}>
      <Text style={styles.cinemaName}>
        {cinema}
      </Text>

      <Text style={styles.address}>
        {address}
      </Text>

      <View style={styles.timeContainer}>
        {[...shows]
          .sort(
            (a, b) =>
              new Date(a.startTime).getTime() -
              new Date(b.startTime).getTime()
          )
          .map((show) => (
            <TouchableOpacity
              key={show.id}
              style={styles.timeButton}
              onPress={() =>
                onSelectShowtime(show)
              }
            >
              <Text style={styles.timeText}>
                {formatTime(show.startTime)}
              </Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default React.memo(CinemaCard);