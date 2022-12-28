import React, { Fragment } from 'react';
import { ScrollView, View } from 'react-native';
import type { GestureResponderEvent } from 'react-native';

import Box from '../common/Box';
import MenuItem from './MenuItem';
import styles, { getSeparatorStyle } from './Menu.styles';

import type { MenuData, RenderableComponent, PredefinedSupportedProps } from '../../../types';

const Menu: RenderableComponent<MenuData, GestureResponderEvent, PredefinedSupportedProps> = ({ WrapperComponent }) => {
  return (
    <WrapperComponent style={styles.wrapper}>
      {({ items }, createActionCallback, { theme }) => (
        <Box style={styles.box} theme={theme}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {items.map((item, index) => (
              <Fragment key={item.text}>
                <MenuItem key={item.text} onPress={createActionCallback()} theme={theme}>
                  {item.text}
                </MenuItem>
                {index + 1 < items.length && <View style={[styles.separator, getSeparatorStyle(theme)]} />}
              </Fragment>
            ))}
          </ScrollView>
        </Box>
      )}
    </WrapperComponent>
  );
};

export default Menu;
