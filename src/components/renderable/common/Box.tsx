import type { PropsWithChildren } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { ViewStyle } from 'react-native';

import type { DefaultTheme } from '../../../types';

const styles = StyleSheet.create({
  box: {
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

interface BoxProps {
  style?: ViewStyle;
  theme: DefaultTheme;
}
const Box: React.FC<PropsWithChildren<BoxProps>> = ({ children, style, theme }) => {
  return <View style={[styles.box, { backgroundColor: theme.cardBackgroundColor }, style]}>{children}</View>;
};

export default Box;
