import React, { Fragment } from 'react';
import { ScrollView, View } from 'react-native';
import type { GestureResponderEvent } from 'react-native';

import Box from '../common/Box';
import MenuItem from './MenuItem';
import styles from './Menu.styles';

import type { MenuData, RenderableComponent } from '../../../types';
import { useTheme } from '../../../hooks/useTheme';

const Menu: RenderableComponent<MenuData, GestureResponderEvent> = ({ WrapperComponent }) => {
  const theme = useTheme();
  return (
    <WrapperComponent style={styles.wrapper}>
      {({ items }, createActionCallback) => (
        <Box style={styles.box} theme={theme}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {items.map((item, index) => (
              <Fragment key={item.text}>
                <MenuItem key={item.text} onPress={createActionCallback()} theme={theme} variant={item.variant}>
                  {item.text}
                </MenuItem>
                {index + 1 < items.length && <View style={[styles.separator, { backgroundColor: theme.lineColor }]} />}
              </Fragment>
            ))}
          </ScrollView>
        </Box>
      )}
    </WrapperComponent>
  );
};

export default Menu;
