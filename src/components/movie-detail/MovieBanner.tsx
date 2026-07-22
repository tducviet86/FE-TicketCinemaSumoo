import React from "react";
import {
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Movie } from "../../entity/movie.entity";
import styles from "../../screens/MovieDetail/movieDetail.styles";

interface Props {
  movie: Movie;
  onBack: () => void;
}

const MovieBanner = ({ movie, onBack }: Props) => {
  return (
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
          onPress={onBack}
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
            color="#fff"
            size={16}
          />

          <Text style={styles.metaText}>
            {movie.duration} phút
          </Text>
        </View>

        <LinearGradient
          colors={["#ec6149", "#894969"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.trailerGradient}
        >
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
        </LinearGradient>
      </View>
    </View>
  );
};

export default React.memo(MovieBanner);