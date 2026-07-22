import React from "react";
import { Text, View } from "react-native";
import styles from "../../screens/MovieDetail/movieDetail.styles";
import { Movie } from "../../entity/movie.entity";



interface Props {
  movie: Movie;
}

const MovieInfo = ({ movie }: Props) => {
  return (
    <>
      <Text style={styles.sectionTitle}>
        Nội dung phim
      </Text>

      <Text style={styles.description}>
        {movie.description}
      </Text>
    </>
  );
};

export default React.memo(MovieInfo);