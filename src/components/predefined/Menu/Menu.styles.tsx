import { StyleSheet, type ViewStyle } from 'react-native';
import type { Theme } from '../types';

const styles = StyleSheet.create({
  wrapper: {
    maxHeight: '80%',
    width: '90%',
  },
  scrollView: {
    // flex: 1,
  },
  box: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  separator: {
    height: 1,
    // borderBottomWidth: 1,
  },
});

export function getSeparatorStyle(theme: Theme): ViewStyle {
  return {
    backgroundColor: theme === 'dark' ? '#222' : '#ddd',
  };
}

export default styles;
