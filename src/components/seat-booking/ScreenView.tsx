import React from "react";
import {
  Text,
  View,
} from "react-native";

import styles from "../../screens/Seat/seat.style";


const ScreenView = () => {
  return (
    <View style={styles.screenWrapper}>
      <View style={styles.screen} />

      <View style={styles.screenShadow} />

      <Text style={styles.screenText}>
        Màn Hình
      </Text>
    </View>
  );
};

export default React.memo(ScreenView);