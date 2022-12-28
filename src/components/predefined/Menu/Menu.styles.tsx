import { StyleSheet, type ViewStyle } from 'react-native';
import type { PredefinedSupportedThemes } from '../../../types';

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: 500,
    maxHeight: '80%',
    width: '90%',
  },
  box: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  separator: {
    height: 1,
  },
});

export function getSeparatorStyle(theme: PredefinedSupportedThemes): ViewStyle {
  return {
    backgroundColor: theme === 'dark' ? '#222' : '#ddd',
  };
}

export default styles;
