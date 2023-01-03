import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { TouchableOpacityProps } from 'react-native';

import styles from './AlertButton.styles';
import type { ActionButtonVariant, DefaultTheme } from '../../../types';
import { config } from '../config';

interface AlertButtonProps {
  children: string;
  onPress: TouchableOpacityProps['onPress'];
  theme: DefaultTheme;
  variant?: ActionButtonVariant;
}

const AlertButton: React.FC<AlertButtonProps> = ({ children, onPress, theme, variant = 'default' }) => {
  return (
    <TouchableOpacity activeOpacity={config.touchableActiveOpacity} onPress={onPress} style={styles.button}>
      <Text style={[styles.text, { color: theme.actionButtonColor[variant] }]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default AlertButton;
