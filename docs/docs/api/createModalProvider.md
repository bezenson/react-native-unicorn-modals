# `createModalProvider`

Creates [ModalProvider](./ModalProvider) - a wrapper react component for your app with needed components.

```js
import { createModalProvider, Alert, Menu, scale } from 'react-native-unicorn-modals';

const components = {
  alert: Alert,
  menu: Menu,
};
const options = {
  animationDuration: 400,
  animationWorklet: scale,
};
const Provider = createModalProvider(components, options);
```

## Arguments

### `components`

Simple object where key is a string which will be used to show component and value - is a React component.

### `options`

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| **animationDuration** | `number` | `350` | Modal show/hide animation duration in milliseconds |
| **animationWorklet** | `function` | `slideUp` | Reanimated worklet function |
| **hardwareAccelerated** | `boolean` | `true` | React Native modal prop |

#### `animationWorklet`

This function should return styles object for `Animated.View` based on `progressValue` (first argument of function).

```js
function customWorklet(progressValue) {
  'worklet';
  return { opacity: progressValue };
}
```

:::info
Learn more about animations [here](../guides/animations).
:::

:::info
Learn more about **React Native Reanimated** worklet functions on [official documentation](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/worklets/).
:::
