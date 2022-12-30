# `createModalProvider`

Returns [ModalProvider](./ModalProvider)

## Example

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

- `components`
- `options`


| Option | Type | Default | Description |
| --- | --- | --- | --- |
| **animationDuration** | `number` | `350` | Modal show/hide animation duration in milliseconds |
| **animationWorklet** | `function` | `slideUp` | Reanimated worklet function |
| **hardwareAccelerated** | `boolean` | `true` | React Native modal prop |
