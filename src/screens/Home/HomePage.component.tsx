// HomePage.tsx
import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  FlatList,
  ListRenderItemInfo,
  ScrollView,
} from "react-native";
import { Movie } from "../../entity/movie.entity";
import styles from "./HomePage.style";

const GENRES = [
  "Hành động",
  "Phiêu lưu",
  "Hài",
  "Kinh dị",
  "Tình cảm",
  "Hoạt hình",
  "Khoa học viễn tưởng",
  "Tội phạm",
  "Tâm lý",
];

const FEATURED: Movie[] = [
  {
    id: "f1",
    title: "Truy Đuổi Trong Đêm",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/w780/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    rating: 8.1,
    genres: ["Hành động", "Tội phạm"],
    isFeatured: true,
  },
  {
    id: "f2",
    title: "Kỷ Nguyên Người Máy",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/w780/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    rating: 0,
    genres: ["Khoa học viễn tưởng", "Hành động"],
    isFeatured: true,
  },
  {
    id: "f3",
    title: "Anh Hùng Cổ Đại",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    backdropUrl:
      "https://image.tmdb.org/t/p/w780/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg",
    rating: 7.8,
    genres: ["Phiêu lưu", "Hành động", "Thần thoại"],
    isFeatured: true,
  },
];

const NOW_PLAYING: Movie[] = [
  {
    id: "np1",
    title: "Hài Kịch Ngoại Truyện",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    genres: ["Hài"],
    rating: 7.2,
    runtimeMins: 99,
    ageRating: "P",
  },
  {
    id: "np2",
    title: "Truy Đuổi Trong Đêm",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    genres: ["Hành động", "Tội phạm"],
    rating: 8.1,
    runtimeMins: 124,
    ageRating: "C16",
  },
  {
    id: "np3",
    title: "Tình Yêu Mùa Hè",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
    genres: ["Tình cảm", "Hài"],
    rating: 6.9,
    runtimeMins: 110,
    ageRating: "C13",
  },
  {
    id: "np4",
    title: "Quái Vật Thành Phố",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    genres: ["Kinh dị", "Tội phạm"],
    rating: 7.5,
    runtimeMins: 102,
    ageRating: "C18",
  },
  {
    id: "np5",
    title: "Bão Đêm Sài Gòn",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/pU3bnutJU91u3b4IeRPQTOP8jhV.jpg",
    genres: ["Hành động", "Hình sự"],
    rating: 7.9,
    runtimeMins: 118,
    ageRating: "C16",
  },
  {
    id: "np6",
    title: "Giai Điệu Cuối Cùng",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
    genres: ["Tâm lý", "Âm nhạc"],
    rating: 7.1,
    runtimeMins: 112,
    ageRating: "C13",
  },
  {
    id: "np7",
    title: "Đảo Sinh Tồn",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/6ELJEzQJ3Y45HczvreC3dg0GV5R.jpg",
    genres: ["Phiêu lưu", "Giật gân"],
    rating: 6.8,
    runtimeMins: 107,
    ageRating: "C13",
  },
  {
    id: "np8",
    title: "Oán Hồn Nhà Cũ",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
    genres: ["Kinh dị"],
    rating: 6.5,
    runtimeMins: 98,
    ageRating: "C18",
  },
  {
    id: "np9",
    title: "Cô Ấy Nói",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/rjBWHsVfTIE2lmNqODNUPTdmTOk.jpg",
    genres: ["Tình cảm", "Tâm lý"],
    rating: 7.4,
    runtimeMins: 115,
    ageRating: "C13",
  },
  {
    id: "np10",
    title: "Phi Vụ Triệu Đô",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
    genres: ["Tội phạm", "Hành động"],
    rating: 8.3,
    runtimeMins: 123,
    ageRating: "C16",
  },
];

const COMING_SOON: Movie[] = [
  {
    id: "cs1",
    title: "Kỷ Nguyên Người Máy",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg",
    genres: ["Khoa học viễn tưởng", "Hành động"],
    releaseDate: "12/10/2025",
    ageRating: "C13",
  },
  {
    id: "cs2",
    title: "Bí Ẩn Trong Rừng Sâu",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    genres: ["Kinh dị", "Tâm lý"],
    releaseDate: "28/10/2025",
    ageRating: "C18",
  },
  {
    id: "cs3",
    title: "Thế Giới Phép Thuật",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/dihW2yTsvQlust7mSuAqJDtqW7k.jpg",
    genres: ["Phiêu lưu", "Kỳ ảo"],
    releaseDate: "05/11/2025",
    ageRating: "P",
  },
  {
    id: "cs4",
    title: "Cuộc Đua Tốc Độ",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
    genres: ["Hành động", "Thể thao"],
    releaseDate: "20/11/2025",
    ageRating: "C13",
  },
  {
    id: "cs5",
    title: "Vương Quốc Băng Giá 3",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
    genres: ["Hoạt hình", "Gia đình"],
    releaseDate: "10/12/2025",
    ageRating: "P",
  },
  {
    id: "cs6",
    title: "Đặc Vụ Bóng Đêm",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
    genres: ["Hành động", "Hình sự"],
    releaseDate: "15/12/2025",
    ageRating: "C16",
  },
  {
    id: "cs7",
    title: "Hẹn Ước Dưới Mưa",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/q719jXXEzOoYaps6babgKnONONX.jpg",
    genres: ["Tình cảm", "Tâm lý"],
    releaseDate: "22/12/2025",
    ageRating: "C13",
  },
  {
    id: "cs8",
    title: "Hành Tinh Xanh",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/6bCplVkhowCjTHXWv49UjRPn0eK.jpg",
    genres: ["Khoa học viễn tưởng", "Phiêu lưu"],
    releaseDate: "05/01/2026",
    ageRating: "C13",
  },
  {
    id: "cs9",
    title: "Cuộc Gọi Từ Quá Khứ",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
    genres: ["Giật gân", "Bí ẩn"],
    releaseDate: "18/01/2026",
    ageRating: "C16",
  },
  {
    id: "cs10",
    title: "Mèo Thần Tài",
    posterUrl:
      "https://image.tmdb.org/t/p/w342/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    genres: ["Hài", "Gia đình"],
    releaseDate: "25/01/2026",
    ageRating: "P",
  },
];


/* =======================
   UI Components (arrow + props)
======================= */
type SectionHeaderProps = { title: string; rightAction?: React.ReactNode };
const SectionHeader = ({ title, rightAction }: SectionHeaderProps) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {rightAction ? <View>{rightAction}</View> : null}
  </View>
);

type FeaturedCarouselProps = { movies: Movie[]; onItemPress?: (m: Movie) => void };
const FeaturedCarousel = ({ movies, onItemPress }: FeaturedCarouselProps) => {
  if (!movies.length) return null;
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
      {movies.map((m) => (
        <Pressable
          key={m.id}
          onPress={() => onItemPress?.(m)}
          style={({ pressed }) => [styles.featuredCard, pressed && { opacity: 0.96 }]}
        >
          <Image source={{ uri: m.backdropUrl || m.posterUrl }} style={styles.featuredImage} />
          <View style={styles.featuredOverlay}>
            <Text numberOfLines={1} style={styles.featuredTitle}>{m.title}</Text>
            <Text style={styles.featuredMeta}>
              {m.genres.slice(0, 2).join(" • ")} · {m.rating ? `${m.rating.toFixed(1)}/10` : "Chưa có"}
            </Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

/** Card dạng lưới (grid): poster đứng + tiêu đề + meta */
type GridCardProps = { movie: Movie; variant?: "now" | "soon" };
const GridCard = ({ movie, variant = "now" }: GridCardProps) => (
  <Pressable style={styles.gridCard}>
    <Image source={{ uri: movie.posterUrl }} style={styles.gridPoster} />
    <Text numberOfLines={2} style={styles.gridTitle}>{movie.title}</Text>
    <Text numberOfLines={1} style={styles.gridMeta}>
      {variant === "soon"
        ? `Khởi chiếu: ${movie.releaseDate ?? "—"}`
        : movie.rating
        ? `${movie.rating.toFixed(1)}/10`
        : "Chưa có"}
    </Text>
  </Pressable>
);


const HomePage = () => {
  const [tab, setTab] = useState<"now" | "soon">("now");

  const featured = useMemo(() => FEATURED, []);
  const list = useMemo(() => (tab === "now" ? NOW_PLAYING : COMING_SOON), [tab]);

  const renderGridItem = ({ item }: ListRenderItemInfo<Movie>) => (
    <View style={styles.gridItemWrap}>
      <GridCard movie={item} variant={tab} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Dùng FlatList làm scroller chính, header = Featured + Tabs + Section */}
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderGridItem}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View>
            {/* Featured */}
            <FeaturedCarousel movies={featured} />

            {/* Tabs */}
            <View style={styles.tabs}>
              <Pressable
                onPress={() => setTab("now")}
                android_ripple={{ color: "rgba(255,255,255,0.2)" }}
                style={[styles.tab, tab === "now" && styles.tabActive]}
              >
                <Text style={[styles.tabText, tab === "now" && styles.tabTextActive]}>Đang chiếu</Text>
              </Pressable>
              <Pressable
                onPress={() => setTab("soon")}
                android_ripple={{ color: "rgba(255,255,255,0.2)" }}
                style={[styles.tab, tab === "soon" && styles.tabActive]}
              >
                <Text style={[styles.tabText, tab === "soon" && styles.tabTextActive]}>Sắp chiếu</Text>
              </Pressable>
            </View>

            <SectionHeader title={tab === "now" ? "Đang chiếu" : "Sắp chiếu"} />
          </View>
        }
        ListEmptyComponent={
          <View style={{ padding: 24, alignItems: "center" }}>
            <Text>Không có phim phù hợp</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default HomePage;

