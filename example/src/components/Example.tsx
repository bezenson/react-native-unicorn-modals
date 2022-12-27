import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useModals } from 'react-native-unicorn-modals';

import Tile from './Tile';
import styles from './Example.styles';
import type { RegisteredComponents } from '../types';

interface ExampleProps {
  darkMode: boolean;
  switchTheme: () => void;
}
const Example: React.FC<ExampleProps> = ({ darkMode, switchTheme }) => {
  const modal = useModals<RegisteredComponents>();

  function createModalHandler(cancelable: boolean = true) {
    return () => {
      modal.show(
        'alert',
        {
          title: 'Hello',
          description: 'Are you sure you want to use this awesome library?',
          buttons: [
            { onPress: () => {}, style: 'cancel', text: 'Cancel', secondary: true },
            { onPress: () => {}, style: 'destructive', text: 'No' },
            { onPress: () => {}, style: 'default', text: 'Yes' },
          ],
        },
        { cancelable: cancelable },
      );
    };
  }

  const onOpenMenuPress = () => {
    modal.show('menu', {
      items: [...new Array(5)].map((_item, index) => ({ text: `Item ${index + 1}` })),
    });
  };

  const onAlertPlusMenuPress = () => {
    modal.show('alert', {
      title: 'Show menu?',
      description: 'Menu will be shown after Alert is closed.',
      buttons: [
        { onPress: () => {}, style: 'cancel', text: 'Cancel', secondary: true },
        { onPress: onOpenMenuPress, text: 'Open Menu' },
      ],
    });
  };

  const onCustomPress = () => {
    modal.show('custom', {
      title: 'Custom title',
    });
  };

  return (
    <>
      <StatusBar backgroundColor={darkMode ? '#000' : '#eee'} barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={[styles.safeAreaView, darkMode && styles.safeAreaViewDark]}>
        <ScrollView bounces={false} contentContainerStyle={styles.scrollContent} style={styles.scroll}>
          <Text style={[styles.title, darkMode && styles.titleDark]}>React Native{'\n'}Unicorn Modals 🦄</Text>
          <View style={styles.grid}>
            <Tile color="#48BEAF" onPress={createModalHandler()}>
              Alert
            </Tile>
            <Tile additionalText="non-cancellable" color="#485cbe" onPress={createModalHandler(false)}>
              Alert
            </Tile>
            <Tile color="#EC554D" onPress={onOpenMenuPress}>
              Menu
            </Tile>
            <Tile additionalText="Menu opens by action in Alert" color="#cc4495" onPress={onAlertPlusMenuPress}>
              Alert + Menu
            </Tile>
            <Tile color="#d89d3f" onPress={onCustomPress}>
              Custom
            </Tile>
          </View>
        </ScrollView>
        <TouchableOpacity activeOpacity={0.9} onPress={() => switchTheme()} style={styles.modeSwitcher}>
          <Text style={styles.modeSwitcherText}>
            Enable {darkMode ? 'light' : 'dark'} mode {darkMode ? '☀️' : '🌙'}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Example;
