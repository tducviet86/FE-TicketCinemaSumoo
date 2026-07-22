import React from "react";
import { Text, View } from "react-native";

import DaySelector from "./DaySelector";
import CinemaCard from "./CinemaCard";
import styles from "../../screens/MovieDetail/movieDetail.styles";
import { Showtime } from "../../entity/movie.entity";

interface DateItem {
  day: number;
  month: number;
  week: string;
}

interface Props {
  uniqueDates: DateItem[];
  selectedDay: number;
  groupedCinema: Record<string, Showtime[]>;
  onChangeDay: (index: number) => void;
  onSelectShowtime: (show: Showtime) => void;
}

const ScheduleSection = ({
  uniqueDates,
  selectedDay,
  groupedCinema,
  onChangeDay,
  onSelectShowtime,
}: Props) => {
  return (
    <>
      <View style={styles.scheduleHeader}>
        <Text style={styles.sectionTitle}>
          Lịch chiếu
        </Text>

        <Text style={styles.month}>
          Tháng {uniqueDates[0]?.month}
        </Text>
      </View>

      <DaySelector
        days={uniqueDates}
        selectedDay={selectedDay}
        onSelect={onChangeDay}
      />

      {Object.entries(groupedCinema).map(
        ([cinema, shows]) => (
          <CinemaCard
            key={cinema}
            cinema={cinema}
            address={shows[0].room.cinema.address}
            shows={shows}
            onSelectShowtime={onSelectShowtime}
          />
        )
      )}
    </>
  );
};

export default React.memo(ScheduleSection);