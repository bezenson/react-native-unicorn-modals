import React, { Fragment } from 'react';

import type { MenuData, RenderableComponent, PredefinedSupportedAddionalProps } from '../../../types';

import Box from '../common/Box';
import MenuItem from './MenuItem';
import styles, { getSeparatorStyle } from './Menu.styles';
import { ScrollView, View } from 'react-native';

const Menu: RenderableComponent<MenuData, any, PredefinedSupportedAddionalProps> = ({ WrapperComponent }) => {
  return (
    <WrapperComponent style={styles.wrapper}>
      {({ items }, createActionCallback, { theme }) => (
        <Box style={styles.box} theme={theme}>
          <ScrollView style={styles.scrollView}>
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
