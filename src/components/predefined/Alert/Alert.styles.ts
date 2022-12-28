import { StyleSheet } from 'react-native';
import type { TextStyle } from 'react-native';

import type { PredefinedSupportedThemes } from '../../../types';

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: 500,
    width: '90%',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  description: {
    color: '#333',
    fontSize: 16,
  },
});

export function getTitleStylesForTheme(theme: PredefinedSupportedThemes): TextStyle {
  if (theme === 'dark') {
    return {
      color: '#fff',
    };
  }
  return {};
}

export function getDescriptionStylesForTheme(theme: PredefinedSupportedThemes): TextStyle {
  if (theme === 'dark') {
    return {
      color: '#ddd',
    };
  }
  return {};
}

export default styles;
