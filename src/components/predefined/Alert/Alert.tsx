import React from 'react';
import { Text, View } from 'react-native';
import type { GestureResponderEvent } from 'react-native';

import type { RenderableComponentProps } from '../../../types';
import type { AddionalProps, AlertButtonT } from '../types';

import styles, { getDescriptionStylesForTheme, getTitleStylesForTheme } from './Alert.styles';
import AlertFooter from './AlertFooter';
import Box from '../common/Box';

interface AlertData {
  buttons: AlertButtonT[];
  description: string;
  title: string;
}

// TODO: Add additionalProps type
const Alert: React.FC<RenderableComponentProps> = ({ WrapperComponent }) => {
  return (
    <WrapperComponent<AlertData, AddionalProps, GestureResponderEvent> style={styles.wrapper}>
      {({ buttons, description, title }, createActionCallback, { theme }) => (
        <Box theme={theme}>
          <View style={styles.content}>
            <Text style={[styles.title, getTitleStylesForTheme(theme)]}>{title}</Text>
            <Text style={[styles.description, getDescriptionStylesForTheme(theme)]}>{description}</Text>
          </View>
          <AlertFooter buttons={buttons} createActionCallback={createActionCallback} theme={theme} />
        </Box>
      )}
    </WrapperComponent>
  );
};

export default Alert;
