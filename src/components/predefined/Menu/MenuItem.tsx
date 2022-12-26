import React from 'react';
import { Text, TouchableOpacity, type TouchableOpacityProps, View } from 'react-native';
import { config } from '../config';

import type { Theme } from '../types';
import styles, { getTextStyle } from './MenuItem.styles';

interface MenuItemProps {
  children: string;
  onPress: TouchableOpacityProps['onPress'];
  theme: Theme;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, onPress, theme }) => {
  return (
    <TouchableOpacity activeOpacity={config.touchableActiveOpacity} onPress={onPress} style={styles.touchable}>
      <View>
        <Text style={[styles.text, getTextStyle(theme)]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
