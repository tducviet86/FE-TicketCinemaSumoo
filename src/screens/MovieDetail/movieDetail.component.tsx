import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";

import styles from "./movieDetail.styles";

import { RootStackParamList } from "../../entity/navigation.entity";
import { Showtime } from "../../entity/movie.entity";

import { AppDispatch, RootState } from "../../store/store";
import { getMovieById } from "../../store/Home/home.thunk";

import MovieBanner from "../../components/movie-detail/MovieBanner";
import MovieInfo from "../../components/movie-detail/MovieInfo";
import ScheduleSection from "../../components/movie-detail/ScheduleSection";
import AgeConfirmModal from "../../components/movie-detail/AgeConfirmModal";

import { useMovieSchedule } from "../../hooks/useMovieSchedule";

type DetailMovieRouteProp = RouteProp<
  RootStackParamList,
  "MovieDetail"
>;

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList
>;

export const MovieDetailScreen = () => {
  const route = useRoute<DetailMovieRouteProp>();

  const navigation =
    useNavigation<NavigationProp>();

  const dispatch = useDispatch<AppDispatch>();

  const { movieId } = route.params;

  const movie = useSelector(
    (state: RootState) => state.home.detailMovie
  );

  useEffect(() => {
    dispatch(getMovieById(movieId));
  }, [dispatch, movieId]);

  const [selectedDay, setSelectedDay] =
    useState(0);

  const [visible, setVisible] =
    useState(false);

  const [selectedShowtime, setSelectedShowtime] =
    useState<Showtime | null>(null);

  const {
    uniqueDates,
    groupedCinema,
  } = useMovieSchedule(
    movie.showtimes,
    selectedDay
  );

  /*
   * Sau khi modal đóng thì mới chuyển màn
   */

  useEffect(() => {
    if (!visible && selectedShowtime) {
      navigation.navigate("SeatMovie", {
        showtimeId: selectedShowtime.id,
      });

      setSelectedShowtime(null);
    }
  }, [
    visible,
    selectedShowtime,
    navigation,
  ]);

  if (!movie?.id) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <>
      <SafeAreaView
        style={styles.container}
        edges={["top"]}
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#fcf9f2"
          animated
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <MovieBanner
            movie={movie}
            onBack={() =>
              navigation.goBack()
            }
          />

          <View style={styles.content}>
            <MovieInfo movie={movie} />

            <ScheduleSection
              uniqueDates={uniqueDates}
              selectedDay={selectedDay}
              groupedCinema={groupedCinema}
              onChangeDay={setSelectedDay}
              onSelectShowtime={(show) => {
                setSelectedShowtime(show);
                setVisible(true);
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>

      <AgeConfirmModal
        visible={visible}
        onCancel={() => {
          setVisible(false);
          setSelectedShowtime(null);
        }}
        onConfirm={() => {
          setVisible(false);
        }}
      />
    </>
  );
};