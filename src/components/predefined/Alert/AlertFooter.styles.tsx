import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  left: {
    flex: 1,
    flexDirection: 'row',
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default styles;
