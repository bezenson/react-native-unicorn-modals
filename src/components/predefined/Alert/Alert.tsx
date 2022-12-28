import React from 'react';
import { Text, View, type GestureResponderEvent } from 'react-native';

import type { AlertData, RenderableComponent, PredefinedSupportedProps } from '../../../types';

import Box from '../common/Box';

import AlertFooter from './AlertFooter';
import styles, { getDescriptionStylesForTheme, getTitleStylesForTheme } from './Alert.styles';

const Alert: RenderableComponent<AlertData, GestureResponderEvent, PredefinedSupportedProps> = ({
  WrapperComponent,
}) => {
  return (
    <WrapperComponent style={styles.wrapper}>
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
