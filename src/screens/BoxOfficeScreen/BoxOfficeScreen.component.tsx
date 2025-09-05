import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { DayItem } from "../../entity/movie.entity";
import { THEATERS } from "../../components/data/cinema.mock";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./BoxOfficeScreen.style";
/* =============== Theme & helpers =============== */

const pad2 = (n: number) => n.toString().padStart(2, "0");
const weekdayShorts = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
const minutesToHM = (mins: number) => `${Math.floor(mins / 60)}h ${mins % 60}m`;

const build7Days = (): DayItem[] => {
  const today = new Date();
  return Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return {
      iso: d.toISOString(),
      label: i === 0 ? "Hôm nay" : weekdayShorts[d.getDay()],
      dateLabel: `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}`,
    };
  });
};

const showtimeColors = (format?: "2D" | "3D" | "IMAX") => {
  switch (format) {
    case "IMAX":
      return { border: "#0EA5E9", text: "#0369A1" };
    case "3D":
      return { border: "#8B5CF6", text: "#6D28D9" };
    default:
      return { border: "#10B981", text: "#065F46" };
  }
};

/* =============== UI atoms =============== */
const SectionHeader = ({ title }: { title: string }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View />
  </View>
);

const ShowtimePills = ({
  showtimes,
}: {
  showtimes: { time: string; format?: "2D" | "3D" | "IMAX"; price?: string }[];
}) => (
  <View style={styles.timeRow}>
    {showtimes.map((s, idx) => {
      const c = showtimeColors(s.format);
      return (
        <View
          key={`${s.time}-${idx}`}
          style={[styles.timePill, { borderColor: c.border }]}
        >
          <Text style={[styles.timeText, { color: c.text }]}>{s.time}</Text>
          {s.price ? (
            <Text style={styles.timePrice}>
              {s.format} · {s.price}
            </Text>
          ) : null}
        </View>
      );
    })}
  </View>
);

/* =============== Screen =============== */

const BoxOfficeScreen = () => {
  const route = useRoute<any>();
  const { theaterId } = route.params;

  const theater = useMemo(
    () => THEATERS.find((t) => t.id === theaterId),
    [theaterId]
  );

  const [days] = useState<DayItem[]>(() => build7Days());
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);
  const navigation = useNavigation<any>();
  if (!theater) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          { alignItems: "center", justifyContent: "center" },
        ]}
      >
        <Text>Không tìm thấy rạp.</Text>
        <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>Quay lại</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.boxHeader}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backIconBtn}
        >
          <Text style={styles.backIconText}>‹</Text>
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text style={styles.boxTheaterName}>{theater.name}</Text>
          <Text style={styles.boxTheaterAddr}>
            {theater.address} · {theater.city}
          </Text>
        </View>
      </View>

      {/* Day strip */}
      <SectionHeader title="Chọn ngày" />
      <FlatList
        horizontal
        data={days}
              keyExtractor={(d) => d.iso}
              style={{ flexGrow: 0, flex: 0 }}         
        contentContainerStyle={[styles.dayRow, { alignItems: "flex-start" }]}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: d, index: idx }) => {
          const isSel = selectedDayIdx === idx;
          return (
            <TouchableOpacity
              onPress={() => setSelectedDayIdx(idx)}
              style={[styles.dayChip, isSel && styles.dayChipActive]}
            >
              <Text style={[styles.dayTop, isSel && styles.dayTopActive]}>
                {d.label}
              </Text>
              <Text style={[styles.dayBot, isSel && styles.dayBotActive]}>
                {d.dateLabel}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      {/* Movies & showtimes */}
      <FlatList
        data={theater.schedules}
        keyExtractor={(item) => item.movie.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        ListHeaderComponent={<SectionHeader title="Phim & suất chiếu" />}
        renderItem={({ item }) => (
          <View style={styles.movieCard}>
            <View style={styles.movieRow}>
              <Image
                source={{ uri: item.movie.posterUrl }}
                style={styles.moviePoster}
              />
              <View style={{ flex: 1 }}>
                <Text numberOfLines={2} style={styles.movieTitle}>
                  {item.movie.title}
                </Text>
                <Text style={styles.movieMeta}>
                  {item.movie.ageRating} ·{" "}
                  {item.movie.runtimeMins
                    ? `${minutesToHM(item.movie.runtimeMins)} · `
                    : ""}
                  {item.movie.genres.slice(0, 2).join(" • ")}
                </Text>
              </View>
            </View>
            <ShowtimePills showtimes={item.showtimes} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default BoxOfficeScreen;
