
import React, {
  useEffect,
  useState,
} from "react";
import { Text, View, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import styles from "./movieDetail.styles";

import { HomeStackParamList } from "../../entity/navigation.entity";
import { Showtime } from "../../entity/movie.entity";

import { AppDispatch, RootState } from "../../store/store";
import { getMovieById } from "../../store/Home/home.thunk";
import MovieBanner from "../../components/movie-detail/MovieBanner";
import MovieInfo from "../../components/movie-detail/MovieInfo";
import ScheduleSection from "../../components/movie-detail/ScheduleSection";
import AgeConfirmModal from "../../components/movie-detail/AgeConfirmModal";
import { useMovieSchedule } from "../../hooks/useMovieSchedule";


type DetailMovieRouteProp = RouteProp<
  HomeStackParamList,
  "DetailMovie"
>;

export const MovieDetailScreen = () => {
  const route = useRoute<DetailMovieRouteProp>();
  const navigation = useNavigation<any>();
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

  const [goSeat, setGoSeat] =
    useState(false);

  const {
    uniqueDates,
    groupedCinema,
  } = useMovieSchedule(
    movie.showtimes,
    selectedDay
  );

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
            onBack={() => navigation.goBack()}
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
          setGoSeat(true);
          setVisible(false);
        }}
      />

      {/*
        Modal đóng xong mới chuyển màn
      */}

      {!visible &&
        goSeat &&
        selectedShowtime &&
        (() => {
          navigation.navigate("Seat", {
            showtimeId: selectedShowtime.id,
          });

          setGoSeat(false);
          setSelectedShowtime(null);

          return null;
        })()}
    </>
  );
};