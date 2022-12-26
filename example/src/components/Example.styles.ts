import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: '#333',
    fontSize: 34,
    marginHorizontal: '2%',
    marginBottom: 20,
    marginTop: 20,
  },
  titleDark: {
    color: '#fff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  safeAreaView: {
    backgroundColor: '#eee',
    flex: 1,
  },
  safeAreaViewDark: {
    backgroundColor: '#000',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 8,
  },

  modeSwitcher: {
    backgroundColor: '#333',
    padding: 20,
  },

  modeSwitcherText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
