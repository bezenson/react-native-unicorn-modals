import React from 'react';
import { Text, View } from 'react-native';
import type { GestureResponderEvent } from 'react-native';

import type { RenderableComponent } from '../../../types';

import Box from '../common/Box';

import AlertFooter from './AlertFooter';
import styles from './Alert.styles';
import { useTheme } from '../../../hooks/useTheme';

const Alert: RenderableComponent<'alert', GestureResponderEvent> = ({ WrapperComponent }) => {
  const theme = useTheme();

  return (
    <WrapperComponent style={styles.wrapper}>
      {({ buttons, description, title }, createActionCallback) => (
        <Box theme={theme}>
          <View style={styles.content}>
            <Text style={[styles.title, { color: theme.titleTextColor }]}>{title}</Text>
            <Text style={[styles.description, { color: theme.textColor }]}>{description}</Text>
          </View>
          <AlertFooter buttons={buttons} createActionCallback={createActionCallback} theme={theme} />
        </Box>
      )}
    </WrapperComponent>
  );
};

export default Alert;
