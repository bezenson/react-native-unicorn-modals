import React from 'react';
import { Button, Text, View } from 'react-native';
import type { RenderableComponent } from 'react-native-unicorn-modals';

import styles from './CustomModal.styles';
import type { CustomModalData } from '../types';
import useAppTheme from '../hooks/useAppTheme';

const CustomModal: RenderableComponent<CustomModalData> = ({ WrapperComponent }) => {
  const theme = useAppTheme();
  return (
    <WrapperComponent style={styles.wrapper}>
      {({ title }, actionCallback) => (
        <View style={[styles.box, { backgroundColor: theme.cardBackgroundColor }]}>
          <Text style={[styles.title, { color: theme.titleTextColor }]}>{title}</Text>
          <Button color={theme.buttonColor} title="Close" onPress={actionCallback()} />
        </View>
      )}
    </WrapperComponent>
  );
};

export default CustomModal;
