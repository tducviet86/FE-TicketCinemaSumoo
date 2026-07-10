import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./movieDetail.styles";
import { HomeStackParamList } from "../../entity/navigation.entity";
import { AppDispatch, RootState } from "../../store/store";
import { getMovieById } from "../../store/Home/home.thunk";
import { Showtime } from "../../entity/movie.entity";

type DetailMovieRouteProp = RouteProp<
  HomeStackParamList,
  "DetailMovie"
>;

const formatTime = (date: string) => {
  return new Date(date).toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

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

  const [selectedDay, setSelectedDay] = useState(0);



  // ========================
  // Danh sách ngày
  // ========================

  const uniqueDates = useMemo(() => {
    if (!movie.showtimes?.length) return [];

    const map = new Map();

    const sortedShowtimes = [...movie.showtimes].sort(
      (a: Showtime, b: Showtime) =>
        new Date(a.startTime).getTime() -
        new Date(b.startTime).getTime()
    );

    sortedShowtimes.forEach((show) => {
      const d = new Date(show.startTime);

      const key = d.toDateString();

      if (!map.has(key)) {
        map.set(key, {
          day: d.getDate(),
          month: d.getMonth() + 1,
          week: d.toLocaleDateString("vi-VN", {
            weekday: "short",
          }),
        });
      }
    });

    return [...map.values()];
  }, [movie.showtimes]);

  // ========================
  // Gom theo rạp
  // ========================

  const groupedCinema = useMemo(() => {
    if (!movie.showtimes?.length) return {};

    const selectedDate = uniqueDates[selectedDay];

    if (!selectedDate) return {};

    const filtered = movie.showtimes.filter((show) => {
      const d = new Date(show.startTime);

      return (
        d.getDate() === selectedDate.day &&
        d.getMonth() + 1 === selectedDate.month
      );
    });

    return filtered.reduce<Record<string, Showtime[]>>(
      (acc, item) => {
        const cinema = item.room.cinema.name;

        if (!acc[cinema]) {
          acc[cinema] = [];
        }

        acc[cinema].push(item);

        return acc;
      },
      {}
    );
  }, [movie.showtimes, uniqueDates, selectedDay]);

  // ========================
  // Giá nhỏ nhất
  // ========================

  const minPrice = useMemo(() => {
    const selectedDate = uniqueDates[selectedDay];

    if (!selectedDate) return 0;

    const prices = movie.showtimes
      .filter((show) => {
        const d = new Date(show.startTime);

        return (
          d.getDate() === selectedDate.day &&
          d.getMonth() + 1 === selectedDate.month
        );
      })
      .map((show) => show.price);

    return prices.length ? Math.min(...prices) : 0;
  }, [movie.showtimes, uniqueDates, selectedDay]);

  // Loading
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
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 130 }}
      >
        <View style={styles.banner}>
          <Image
            source={{ uri: movie.posterUrl }}
            style={styles.bannerImage}
          />

          <LinearGradient
            colors={[
              "transparent",
              "rgba(0,0,0,.2)",
              "rgba(0,0,0,.95)",
            ]}
            style={styles.overlay}
          />

          <View style={styles.header}>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => navigation.goBack()}
            >
              <Ionicons
                name="arrow-back"
                size={22}
                color="#fff"
              />
            </TouchableOpacity>

            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.circle}>
                <Ionicons
                  name="heart-outline"
                  size={20}
                  color="#fff"
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.circle}>
                <Ionicons
                  name="share-social-outline"
                  size={20}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.tagRow}>
              <View style={styles.redTag}>
                <Text style={styles.redTagText}>
                  T13
                </Text>
              </View>

              {movie.genres?.map((g) => (
                <View
                  key={g.genre.id}
                  style={styles.genreTag}
                >
                  <Text style={styles.genreText}>
                    {g.genre.name}
                  </Text>
                </View>
              ))}
            </View>

            <Text style={styles.title}>
              {movie.title.toUpperCase()}
            </Text>

            <View style={styles.metaRow}>
              <Ionicons
                name="star"
                color="#FDBA12"
                size={16}
              />

              <Text style={styles.metaText}>
                {movie.rating}
              </Text>

              <View style={styles.dot} />

              <Ionicons
                name="time-outline"
                size={16}
                color="#fff"
              />

              <Text style={styles.metaText}>
                {movie.duration} phút
              </Text>
            </View>

            <TouchableOpacity
              style={styles.trailerBtn}
              onPress={() =>
                Linking.openURL(movie.trailerUrl)
              }
            >
              <Ionicons
                name="play-circle"
                size={22}
                color="#fff"
              />

              <Text style={styles.trailerText}>
                XEM TRAILER
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>
            Nội dung phim
          </Text>

          <Text style={styles.description}>
            {movie.description}
          </Text>

          <View style={styles.scheduleHeader}>
            <Text style={styles.sectionTitle}>
              Lịch chiếu
            </Text>

            <Text style={styles.month}>
              Tháng {uniqueDates[0]?.month}
            </Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {uniqueDates.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dayItem,
                  selectedDay === index &&
                  styles.dayItemActive,
                ]}
                onPress={() => setSelectedDay(index)}
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

          {Object.entries(groupedCinema).map(
            ([cinema, shows]) => (
              <View
                key={cinema}
                style={styles.cinemaCard}
              >
                <Text style={styles.cinemaName}>
                  {cinema}
                </Text>

                <Text style={styles.address}>
                  {shows[0].room.cinema.address}
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
                          navigation.navigate("Seat", {
                            showtimeId: show.id,
                          })
                        }
                      >
                        <Text style={styles.timeText}>
                          {formatTime(show.startTime)}
                        </Text>
                      </TouchableOpacity>
                    ))}
                </View>
              </View>
            )
          )}
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.priceLabel}>
            Giá từ
          </Text>

          <Text style={styles.price}>
            {minPrice.toLocaleString()}đ
          </Text>
        </View>

        <TouchableOpacity style={styles.bookButton}>
          <Ionicons
            name="ticket"
            size={18}
            color="#fff"
          />

          <Text style={styles.bookText}>
            Chọn ghế
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};