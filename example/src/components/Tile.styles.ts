import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 20,
    width: '46%',
    margin: '2%',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  wrapper: {
    backgroundColor: 'blue',
    borderRadius: 20,
    width: '100%',
    aspectRatio: 1,
    padding: 14,
  },
  text: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 24,
  },
  textAdditional: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '400',
    fontSize: 18,
    marginTop: 4,
  },
});

export default styles;
