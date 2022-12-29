---
sidebar_position: 2
---

# Quick Start

:::caution
This library requires you to install **react-native-reanimated v2**. [Official documentation](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation).
:::

Only 3 simple steps to get started!

## 1. Add library into your project

```sh npm2yarn
npm install react-native-unicorn-modals
```

## 2. Add Provider into root component

```js title=src/App.js
// 1. Import initializer function and predefined component
// highlight-next-line
import { createModalProvider, Alert } from 'react-native-unicorn-modals';
import { HomePage } from './screens/HomePage.js';

// 2. Create Provider with components you need in your app
// highlight-next-line
const ModalProvider = createModalProvider({ alert: Alert });

// 3. Wrap your app components with ModalProvider
const App = () => {
  return (
    // highlight-next-line
    <ModalProvider>
      <HomePage />
    // highlight-next-line
    </ModalProvider>
  );
};

export default App;
```

Now you are ready to open `Alert` somewhere in your application!

## 3. Open Alert

Let's create a component with button which will open an Alert:

```js title=src/screens/HomePage.js
// 1. Import hook
import { useModals } from 'react-native-unicorn-modals';

export const HomePage = () => {
  // 2. Use hook in component
  // highlight-next-line
  const modal = useModals();

  const openAlert = () => {
    // 3. Call `show` function from hook
    // highlight-start
    modal.show(
      'alert',
      {
        title: 'Title',
        description: 'Description goes here.',
        buttons: [{
          onPress: () => console.log('Confirm pressed'),
          text: 'Confirm',
        }],
      },
      { cancellable: false },
    );
    // highlight-end
  };

  return (
    <TouchableOpacity onPress={openAlert}>
      <Text>Open alert</Text>
    </TouchableOpacity>
  );
};
```

`show` function accepts 3 arguments.

1. `'alert'` is a key of registered component. It accepts only keys which was provided into `createModalProvider` function.
2. Second argument is a data object which is passed into component. It is specific for every component.
3. Last arguments is an options object. You can learn more about options [here](./api/useModals.md).
