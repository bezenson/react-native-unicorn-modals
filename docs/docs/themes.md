---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Themes

Themes allow you to change the colors of various components provided by library. You can use themes to:

- Switch between light and dark mode
- Customize the colors match your brand

Also you can extend themes to add additional colors for your custom components.

## Basic usage

Library contains 2 default theme:

- `defaultThemeLight` - default
- `defaultThemeDark`

By default light theme is used. You can pass any of them to `ModalProvider`, or switch between them like in next example:

```js title=src/App.js
import React, { useCallback, useState } from 'react';
import {
  createModalProvider,
  Alert,
  // 1. Import default themes
  // highlight-start
  defaultThemeDark,
  defaultThemeLight,
  // highlight-end
} from 'react-native-unicorn-modals';

const ModalProvider = createModalProvider({
  alert: Alert,
});

const App = () => {
  const [theme, setTheme] = useState('dark');

  // Switch theme somewhere in your app.
  const switchTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  return (
    // 2. Pass theme object into provider component as prop
    // highlight-next-line
    <ModalProvider theme={theme === 'dark' ? defaultThemeDark : defaultThemeLight}>
      {/* <YourAppComponent /> */}
    </ModalProvider>
  );
};

export default App;
```

## Change and extend themes

If you are creating your own component, you might need to add more colors than the library provides by default.

```js title=src/my-theme.js
// 1. Import default theme
import { defaultThemeLight } from 'react-native-unicorn-modals';

// 2. Extend it with your properties
const myTheme = {
  ...defaultThemeLight,
  actionButtonColor: {
    ...defaultThemeLight.actionButtonColor,
    destructive: 'red', // Change default destructive button color
  },
  titleTextColor: '#111', // Change default title color
  myCustomColor: 'red', // Add new property to use in your component
};
```

:::caution
It is recommended to extend from the default theme (light or dark) to ensure that you do not miss any property.
:::

## Access theme object in components

You can use the `useTheme` hook inside any component which is rendered inside `ModalProvider` to get access to theme object:

```js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from 'react-native-unicorn-modals';

function MyButton() {
  const { actionButtonColor } = useTheme();

  return (
    <View style={{ backgroundColor: actionButtonColor.destructive }}>
      <Text>Button</Text>
    </View>
  );
}
```
