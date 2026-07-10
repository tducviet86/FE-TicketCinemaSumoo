import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerTab: {
    height: 50,
    backgroundColor: '#fcf9f2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  iconButton: {
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },

  logoWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoIcon: {
    width: 180,
    height: 30,
  },

  banner: {
    height: 430,
    position: 'relative',
    backgroundColor: '#000',
  },

  bannerImage: {
    width: '100%',
    height: '100%',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
  },

  header: {
    position: 'absolute',
    top: 15,
    left: 15,
    right: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },

  headerRight: {
    flexDirection: 'row',
  },

  circle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.35)',
    marginLeft: 10,
  },

  infoContainer: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
  },

  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  redTag: {
    backgroundColor: '#EF233C',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
  },

  redTagText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },

  genreTag: {
    backgroundColor: 'rgba(255,255,255,.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
  },

  genreText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 15,
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },

  metaText: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 5,
    fontWeight: '600',
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 14,
  },

  trailerBtn: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  trailerText: {
    color: '#fff',
    fontWeight: '700',
    marginLeft: 8,
    fontSize: 15,
  },

  content: {
    padding: 18,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111',
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 23,
    marginBottom: 30,
  },

  scheduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  month: {
    color: '#E91E63',
    fontWeight: '700',
  },

  dayItem: {
    width: 62,
    height: 78,
    borderRadius: 14,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginBottom: 22,
  },

  dayItemActive: {
    backgroundColor: '#E91E63',
  },

  dayWeek: {
    color: '#777',
    fontWeight: '600',
    fontSize: 13,
  },

  dayNumber: {
    color: '#111',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 6,
  },

  dayActiveText: {
    color: '#fff',
  },

  cinemaCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 5,
  },

  cinemaName: {
    fontSize: 17,
    fontWeight: '800',
    color: '#111',
  },

  address: {
    color: '#777',
    marginTop: 5,
    marginBottom: 16,
    fontSize: 13,
  },

  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  timeButton: {
    width: (width - 90) / 3,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 10,
  },

  timeText: {
    fontWeight: '700',
    color: '#333',
    fontSize: 14,
  },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: '#fff',

    borderTopWidth: 1,
    borderColor: '#eee',

    paddingHorizontal: 18,
    paddingVertical: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  priceLabel: {
    color: '#888',
    fontSize: 12,
  },

  price: {
    color: '#E91E63',
    fontSize: 24,
    fontWeight: '900',
    marginTop: 4,
  },

  bookButton: {
    width: 170,
    height: 52,
    borderRadius: 14,
    backgroundColor: '#E91E63',

    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',
  },

  bookText: {
    color: '#fff',
    fontWeight: '800',
    marginLeft: 8,
    fontSize: 16,
  },
});