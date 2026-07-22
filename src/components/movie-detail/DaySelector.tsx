import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";


interface DateItem {
  day: number;
  month: number;
  week: string;
}

interface Props {
  days: DateItem[];
  selectedDay: number;
  onSelect: (index: number) => void;
}
import styles from "../../screens/MovieDetail/movieDetail.styles";

const DaySelector = ({
  days,
  selectedDay,
  onSelect,
}: Props) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {days.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.dayItem,
            selectedDay === index &&
              styles.dayItemActive,
          ]}
          onPress={() => onSelect(index)}
        >
          <Text
            style={[
              styles.dayWeek,
              selectedDay === index &&
                styles.dayActiveText,
            ]}
          >
            {item.week}
          </Text>

          <Text
            style={[
              styles.dayNumber,
              selectedDay === index &&
                styles.dayActiveText,
            ]}
          >
            {item.day}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default React.memo(DaySelector);