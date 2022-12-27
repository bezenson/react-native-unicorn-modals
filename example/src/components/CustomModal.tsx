import React from 'react';
import { Button, Text, View } from 'react-native';
import type { RenderableComponent } from 'react-native-unicorn-modals';

import styles from './CustomModal.styles';
import type { CustomModalData } from '../types';

const CustomModal: RenderableComponent<CustomModalData> = ({ WrapperComponent }) => {
  return (
    <WrapperComponent style={styles.wrapper}>
      {({ title }, actionCallback, { theme }) => (
        <View style={[styles.box, theme === 'dark' && styles.boxDark]}>
          <Text style={[styles.title, theme === 'dark' && styles.titleDark]}>{title}</Text>
          <Button title="Close" onPress={actionCallback()} />
        </View>
      )}
    </WrapperComponent>
  );
};

export default CustomModal;
