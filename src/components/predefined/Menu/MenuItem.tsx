import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import type { TouchableOpacityProps } from 'react-native';
import type { PredefinedSupportedThemes } from '../../../types';
import { config } from '../config';
import styles, { getTextStyle } from './MenuItem.styles';

interface MenuItemProps {
  children: string;
  onPress: TouchableOpacityProps['onPress'];
  theme: PredefinedSupportedThemes;
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
