import React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TileProps {
  children: string;
  color: string;
  onPress: TouchableOpacityProps['onPress'];
}

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 20,
    width: '46%',
    margin: '2%',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  wrapper: {
    backgroundColor: 'blue',
    borderRadius: 20,
    justifyContent: 'flex-end',
    width: '100%',
    aspectRatio: 1,
    padding: 20,
  },
  text: {
    color: '#fff',
    fontWeight: '300',
    fontSize: 25,
  },
});

const Tile: React.FC<TileProps> = ({ children, color, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.touchable}>
      <View style={[styles.wrapper, { backgroundColor: color }]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Tile;
