import React, { Fragment } from 'react';

import type { RenderableComponentProps } from '../../../types';
import type { MenuItemT, AddionalProps } from '../types';

import Box from '../common/Box';
import MenuItem from './MenuItem';
import styles, { getSeparatorStyle } from './Menu.styles';
import { ScrollView, View } from 'react-native';

interface MenuData {
  items: MenuItemT[];
}

const Menu: React.FC<RenderableComponentProps> = ({ WrapperComponent }) => {
  return (
    <WrapperComponent<MenuData, AddionalProps> style={styles.wrapper}>
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
