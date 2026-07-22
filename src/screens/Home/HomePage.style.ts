import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf9f2',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoIcon: {
    width: 30,
    height: 30,
    marginRight: 6,
  },

  logoText: {
    width: 150,
    height: 30,
  },
  banner: {
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },

  bannerImage: {
    width: '100%',
    height: 450,
  },

  bannerOverlay: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },

  tag: {
    backgroundColor: '#a65d00',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    alignSelf: 'flex-start',
    fontSize: 12,
    marginBottom: 10,
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  info: {
    color: '#fff',
    fontSize: 13,
  },

  dot: {
    marginHorizontal: 6,
    color: '#fff',
  },


  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    // backgroundColor: 'rgba(0,0,0,0.6)', // giả gradient
  },


  desc: {
    color: '#ddd',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },

  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bookBtn: {
    backgroundColor: '#ff3d00',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 14,
    marginRight: 10,
  },

  bookText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  playBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // 1
  movieSection: {
    marginTop: 20,
    paddingHorizontal: 16,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 16,
  },

  sectionTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#5a0f0f',
  },

  seeAll: {
    fontSize: 13,
    color: '#888',
    fontWeight: '600',
  },

  movieList: {
    paddingRight: 16,
  },

  movieCard: {
    width: 160, // 🔥 fixed width cho scroll ngang
    marginRight: 12,
  },

  movieImage: {
    width: '100%',
    height: 250,
    borderRadius: 20,
  },

  rating: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#ff3d00',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },

  ratingText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },

  movieName: {
    marginTop: 8,
    marginRight: 4,
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },

  movieSub: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },

  vipCard: {
    width: "100%",
  },

  vipImage: {
    width: '100%',
    height: 300,
    borderRadius: 35,
    marginBottom: 10,
  },
  vipText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ae2c01",
    marginTop: 10
  },
  titleVip: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  vipRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },

  vipCardPrimary: {
    flex: 1,
    backgroundColor: '#910800',
    borderRadius: 30,
    paddingVertical: 25,
    alignItems: 'center',
    marginRight: 10,
  },

  vipCardSecondary: {
    flex: 1,
    backgroundColor: '#e9e5df',
    borderRadius: 30,
    paddingVertical: 25,
    alignItems: 'center',
  },

  iconWrapper: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  vipTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  discount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6d0000',
  },
  loadingContainer:{
    width: 350,
    justifyContent: "center",
    alignItems: "center",
  
  },
  subText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '600',
    color: '#5c4b46',
  },
  comingMovie: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  comingMovieImage: {
    width: '100%',
    height: 250,
    borderRadius: 20,

  },
  imageWrapper: {
    position: 'relative',
  },
  comingMovieCard: {
    position: 'relative',
    width: 160, // 🔥 fixed width cho scroll ngang
    marginRight: 12,
  },

  date: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',

  },
  dateBox: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 5,
  },
  dateText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12,
  },
  comingGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 250,
    backgroundColor: 'rgba(128, 128, 128, 0.83)',
    borderRadius: 20,
  },
  discountTicket: {
    marginTop: 40,
    paddingHorizontal: 16,
  },
  discountTicketCard: {
    backgroundColor: '#910800',
    borderRadius: 30,
    height: 300,
    overflow: 'hidden',
  },
  discountOverlay: {
    flex: 1,
    justifyContent: 'center', // center dọc
    alignItems: 'center',     // center ngang
    paddingHorizontal: 20,
  },
  discountText: {
    color: '#ffccbc',
    fontSize: 16,
    letterSpacing: 2,
    marginBottom: 8,
  },

  bigText: {
    color: '#fff',
    fontSize: 38,
    fontWeight: 'bold',
  },

  discountTitle: {
    color: '#fff',
    fontSize: 38,
    fontWeight: 'bold',
    marginTop: 4,
  },

  subDiscountText: {
    color: '#ffccbc',
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 15,
  },

  buttonText: {
    color: '#c62800',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles