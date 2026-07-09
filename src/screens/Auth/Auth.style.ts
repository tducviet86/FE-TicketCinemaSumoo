import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#cfd8ff', 
  },
  headerImage: {
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    marginBottom: 20,
  },
  
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 20,

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },

    elevation: 10,
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
  },

  activeTab: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#4A7DFF',
    paddingBottom: 5,
    color: '#4A7DFF',
  },

  inactiveTab: {
    fontSize: 18,
    paddingBottom: 5,
    marginRight: 20,
    color: '#bbb',
  },

  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#333',
  },

  input: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 10,
  },

  passwordInput: {
    flex: 1,
    paddingVertical: 12,
  },

  forgotText: {
    textAlign: 'right',
    color: '#4A7DFF',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#5c7cff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#eee',
  },

  orText: {
    marginHorizontal: 10,
    color: '#aaa',
  },

  socialButton: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    marginBottom: 10,
  },

  socialText: {
    fontWeight: '500',
  },

  signupText: {
    textAlign: 'center',
    marginTop: 15,
    color: '#666',
  },

  signupLink: {
    color: '#4A7DFF',
    fontWeight: '600',
  },
});

export default styles;