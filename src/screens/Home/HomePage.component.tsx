

import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './HomePage.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect } from 'react';
import { getMovieNowShowing, getMovieUpComing } from '../../store/Home/home.thunk';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList, RootStackParamList} from '../../entity/navigation.entity';

type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const HomePage = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>()
  const movie = useSelector((state: RootState) => state.home.list)
  const loadingNowShowing = useSelector((state: RootState) => state.home.loadingNowShowing);
  const error = useSelector((state: RootState) => state.home.error);
  const listMovieComing = useSelector((state: RootState) => state.home.listComing)
  const loadingUpShowing = useSelector((state: RootState) => state.home.loadingComing);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getMovieNowShowing())
    dispatch(getMovieUpComing())
  }, [dispatch])

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fcf9f2"
        animated
      />
      <View style={styles.header}>
        <View style={styles.logoWrapper}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logoIcon}
            resizeMode="contain"
          />
          <Image
            source={require('../../assets/images/name-logo.png')}
            style={styles.logoText}
            resizeMode="contain"
          />
        </View>
        <Ionicons name="search" size={22} color="#000" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}
      >
        {/* 🔥 BANNER */}
        <View style={styles.banner}>
          <Image
            source={require('../../assets/images/banner.png')}
            style={styles.bannerImage}
          />
          {/* 🔥 overlay gradient giả */}
          <View style={styles.gradient} />

          <View style={styles.bannerOverlay}>
            <Text style={styles.tag}>FAM</Text>

            <Text style={styles.title}>
              Nhà Ba Tôi Một Phong
            </Text>

            <Text style={styles.desc}>
              Gia đình nhỏ với những mâu thuẫn đời thường nhưng đầy cảm xúc, nơi tình thân được thử thách qua từng biến cố.
            </Text>

            {/* ACTION */}
            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.bookBtn}>
                <Text style={styles.bookText}>ĐẶT VÉ NGAY</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.playBtn}>
                <Ionicons name="play" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.movieSection}>
          {/* HEADER */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>PHIM ĐANG CHIẾU</Text>
            <Text style={styles.seeAll}>XEM TẤT CẢ</Text>
          </View>
          {loadingNowShowing ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#ff3d00" />
            </View>
          ) : (

            <ScrollView horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.movieList}>
              {
                movie.map((item) => (
                  <TouchableOpacity key={item.id} style={styles.movieCard} onPress={() => navigation.navigate('MovieDetail', { movieId: item.id })}>
                    <Image source={{ uri: item.posterUrl }} style={styles.movieImage} />

                    <View style={styles.rating}>
                      <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>

                    <Text style={styles.movieName}>{item.title}</Text>
                    <Text style={styles.movieSub}>
                      {item.genres.map((g) => g.genre.name).join(' • ')}
                    </Text>
                  </TouchableOpacity>
                ))
              }
            </ScrollView>
          )}
        </View>
        <View style={styles.movieSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>ĐẶC QUYỀN VIP</Text>
          </View>
          <View style={styles.vipCard}>
            <Image source={require('../../assets/images/vip.png')} style={styles.vipImage} />
            <View style={styles.bannerOverlay}>
              <Text style={styles.vipText}>ĐẶC BIỆT</Text>
              <Text style={styles.titleVip}>
                PHÒNG CHIẾU GOLD CLASS
              </Text>
            </View>
          </View>
          <View style={styles.vipRow}>
            <View style={styles.vipCardPrimary}>
              <View style={styles.iconWrapper}>
                <Ionicons name="star" size={18} color="#ff3d00" />
              </View>
              <Text style={styles.vipTitle}>TÍCH ĐIỂM X2</Text>
            </View>
            <View style={styles.vipCardSecondary}>
              <Text style={styles.discount}>20%</Text>
              <Text style={styles.subText}>GIẢM COMBO BẮP</Text>
            </View>
          </View>
        </View>
        <View style={styles.comingMovie}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>SẮP KHỞI CHIẾU</Text>
            <Text style={styles.seeAll}>TẤT CẢ</Text>
          </View>
          {loadingUpShowing ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#ff3d00" />
            </View>
          ) : (
            <ScrollView horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.movieList}>

              {listMovieComing.map((item) => (
                <View key={item.id} style={styles.comingMovieCard}>

                  <View style={styles.imageWrapper}>
                    <Image source={{ uri: item.posterUrl }} style={styles.comingMovieImage} />
                    <View style={styles.comingGradient} />

                    <View style={styles.date}>
                      <View style={styles.dateBox}>
                        <Text style={styles.dateText}> {new Date(item.releaseDate).toLocaleDateString("vi-VN")}</Text>
                      </View>
                    </View>
                  </View>

                  <Text style={styles.movieName}>{item.title}</Text>
                </View>
              ))}
            </ScrollView>
          )}
        </View>
        <View style={styles.discountTicket}>
          <View style={styles.discountTicketCard}>
            <View style={styles.discountOverlay}>
              <Text style={styles.discountText}>ƯU ĐÃI ĐỘC QUYỀN</Text>

              <Text style={styles.bigText}>GIẢM 20%</Text>

              <Text style={styles.discountTitle}>
                COMBO BẮP NƯỚC
              </Text>

              <Text style={styles.subDiscountText}>
                DÀNH CHO CHỦ THẺ PLATINUM
              </Text>

              <View style={styles.button}>
                <Text style={styles.buttonText}>NHẬN ƯU ĐÃI</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;