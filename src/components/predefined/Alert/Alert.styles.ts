import { StyleSheet, type TextStyle } from 'react-native';
import type { Theme } from '../types';

const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  title: {
    color: '#000',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 12,
  },
  description: {
    color: '#333',
    fontSize: 16,
  },
});

export function getTitleStylesForTheme(theme: Theme): TextStyle {
  if (theme === 'dark') {
    return {
      color: '#fff',
    };
  }
  return {};
}

export function getDescriptionStylesForTheme(theme: Theme): TextStyle {
  if (theme === 'dark') {
    return {
      color: '#ddd',
    };
  }
  return {};
}

export default styles;
