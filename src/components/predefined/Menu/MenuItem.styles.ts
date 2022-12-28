import { StyleSheet } from 'react-native';
import type { PredefinedSupportedThemes } from '../../../types';

const styles = StyleSheet.create({
  touchable: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  text: {
    color: '#4695eb',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export function getTextStyle(theme: PredefinedSupportedThemes) {
  return {
    color: theme === 'dark' ? '#4695eb' : '#4695eb',
  };
}

export default styles;