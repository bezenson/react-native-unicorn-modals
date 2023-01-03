import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import type { TouchableOpacityProps } from 'react-native';
import type { ActionButtonVariant, DefaultTheme } from '../../../types';
import { config } from '../config';
import styles from './MenuItem.styles';

interface MenuItemProps {
  children: string;
  onPress: TouchableOpacityProps['onPress'];
  theme: DefaultTheme;
  variant?: ActionButtonVariant;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, onPress, theme, variant = 'default' }) => {
  return (
    <TouchableOpacity activeOpacity={config.touchableActiveOpacity} onPress={onPress} style={styles.touchable}>
      <View>
        <Text style={[styles.text, { color: theme.actionButtonColor[variant] }]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
