import React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './Tile.styles';

interface TileProps {
  additionalText?: string;
  children: string;
  color: string;
  onPress: TouchableOpacityProps['onPress'];
}

const Tile: React.FC<TileProps> = ({ additionalText, children, color, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.touchable}>
      <View style={[styles.wrapper, { backgroundColor: color }]}>
        <Text style={styles.text}>{children}</Text>
        {additionalText && <Text style={styles.textAdditional}>{additionalText}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default Tile;
