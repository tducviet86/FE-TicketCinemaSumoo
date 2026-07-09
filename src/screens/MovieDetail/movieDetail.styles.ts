import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf9f2',
  },

  header: {
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
    overflow: 'hidden',
    position: 'relative',
  },

  bannerImage: {
    width: '100%',
    height: 500,
  },

  bannerOverlay: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 20,
    left: 16,
    right: 16,
  },

  movieInfo: {
    gap: 14,
  },

  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  brandLogo: {
    width: 36,
    height: 36,
    marginRight: 8,
  },

  brandText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },

  trailerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.45)',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 24,
  },

  trailerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default styles;