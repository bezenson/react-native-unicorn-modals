import type { PropsWithChildren } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { ViewStyle } from 'react-native';
import type { PredefinedSupportedThemes } from '../../../types';

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#eee',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 3,
  },
});

export function getBoxStylesForTheme(theme: PredefinedSupportedThemes): ViewStyle {
  if (theme === 'dark') {
    return {
      backgroundColor: '#111',
    };
  }
  return {};
}

interface BoxProps {
  style?: ViewStyle;
  theme: PredefinedSupportedThemes;
}
const Box: React.FC<PropsWithChildren<BoxProps>> = ({ children, style, theme }) => {
  return <View style={[styles.box, getBoxStylesForTheme(theme), style]}>{children}</View>;
};

export default Box;
