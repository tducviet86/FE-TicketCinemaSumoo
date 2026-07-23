import React, { useEffect, useMemo } from "react";
import {
  ActivityIndicator,
  ScrollView,
} from "react-native";
import {
  SafeAreaView,
} from "react-native-safe-area-context";
import {
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import { AppDispatch, RootState } from "../../store/store";
import { RootStackParamList } from "../../entity/navigation.entity";

import styles from "./seat.style";

import { getSeatByShowtime } from "../../store/Seat/seat.thunk";

import { useSeatSelection } from "../../hooks/useSeatSelection";
import { groupSeat } from "../../helpers/groupSeat";

import SeatHeader from "../../components/seat-booking/SeatHeader";
import ScreenView from "../../components/seat-booking/ScreenView";
import SeatMap from "../../components/seat-booking/SeatMap";
import SeatLegend from "../../components/seat-booking/SeatLegend";
import BottomBooking from "../../components/seat-booking/BottomBooking";

type SeatRouteProp = RouteProp<RootStackParamList, "SeatMovie">;

const SeatScreen = () => {
  const navigation = useNavigation<any>();

  const dispatch = useDispatch<AppDispatch>();

  const { showtimeId } =
    useRoute<SeatRouteProp>().params;
  console.log("🚀 ~ file: seat.components.tsx:49 ~ SeatScreen ~ showtimeId:", showtimeId);

  /*
   * Redux
   */

  const {
    movie,
    cinema,
    room,
    showtime,
    seats,
    loading,
    error,
  } = useSelector((state: RootState) => state.seat);

  /*
   * Load Seat
   */

  useEffect(() => {
    dispatch(getSeatByShowtime(showtimeId));
  }, [dispatch, showtimeId]);

  /*
   * Hook chọn ghế
   */

  const {
    selectedSeats,
    seatCodes,
    seatCount,
    totalPrice,
    toggleSeat,
    isSelected,
    clearSeats,
  } = useSeatSelection();

  /*
   * Gom ghế theo hàng
   */

  const groupedSeat = useMemo(() => {
    return groupSeat(seats);
  }, [seats]);

  /*
   * Loading
   */

  if (loading) {
    return (
      <SafeAreaView
        style={styles.loadingContainer}
      >
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top"]}
    >
      <SeatHeader
        movie={movie}
        cinema={cinema}
        room={room}
        showtime={showtime}
        onBack={() => navigation.goBack()}
      />


      <ScrollView
        style={styles.body}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 160,
        }}
      >
        <ScreenView />

        <SeatMap
          groupedSeat={groupedSeat}
          isSelected={isSelected}
          onSelectSeat={toggleSeat}
        />

        <SeatLegend />
      </ScrollView>

      <BottomBooking
        seatCodes={seatCodes}
        seatCount={seatCount}
        totalPrice={totalPrice}
        onClear={clearSeats}
        onBooking={() => {
          navigation.navigate("ConfirmBooking", {
            showtimeId,
            seatIds: selectedSeats.map(
              (item) => item.id
            ),
          });
        }}
      />
    </SafeAreaView>
  );
};

export default React.memo(SeatScreen);