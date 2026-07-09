import React, { useEffect } from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './movieDetail.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { HomeStackParamList } from '../../entity/navigation.entity';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getMovieById } from '../../store/Home/home.thunk';


type DetailMovieRouteProp = RouteProp<HomeStackParamList, 'DetailMovie'>;
export const MovieDetailScreen = () => {
  const route = useRoute<DetailMovieRouteProp>();
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const { movieId } = route.params;
  console.log("Movie ID:", movieId);
  
  const movie = useSelector((state: RootState) => state.home.detailMovie);
  const loading = useSelector((state: RootState) => state.home.loading);

  useEffect(() => {
    dispatch(getMovieById(movieId))
  }, [dispatch])
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.logoWrapper}>
          <Image
            source={require('../../assets/images/name-logo.png')}
            style={styles.logoIcon}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="person-circle-outline" size={26} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.banner}>
        <Image
          source={{ uri: movie.posterUrl }}
          style={styles.bannerImage}
          resizeMode="cover"
        />

        <View style={styles.bannerOverlay}>
          <View style={styles.movieInfo}>
            <View style={styles.brandRow}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={styles.brandLogo}
                resizeMode="contain"
              />
              <Text style={styles.brandText}>Sumoo Cinema</Text>
            </View>

            <TouchableOpacity style={styles.trailerButton}>
              <Ionicons name="caret-forward-circle" size={22} color="#fff" />
              <Text style={styles.trailerText}>Xem Trailer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};