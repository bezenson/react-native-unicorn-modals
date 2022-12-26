import React, { useMemo } from 'react';
import { Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';

import styles, { getTextStyle } from './AlertButton.styles';
import type { AlertButtonVariant, PredefinedSupportedThemes } from '../../../types';
import { config } from '../config';

interface AlertButtonProps {
  children: string;
  onPress: TouchableOpacityProps['onPress'];
  theme: PredefinedSupportedThemes;
  variant?: AlertButtonVariant;
}

const AlertButton: React.FC<AlertButtonProps> = ({ children, onPress, theme, variant }) => {
  const textStyle = useMemo(() => getTextStyle(theme, variant), [theme, variant]);
  return (
    <TouchableOpacity activeOpacity={config.touchableActiveOpacity} onPress={onPress} style={styles.button}>
      <Text style={[styles.text, textStyle]}>{children.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default AlertButton;
