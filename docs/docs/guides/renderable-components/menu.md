---
sidebar_position: 2
---

# Menu

<!-- TODO: Finish page -->

List of different actions.

<img src="../../../img/menu.png" width="400" />

## Usage example

```js
const modal = useModals();

const handleShowMenu = () => {
  modal.show('menu', {
    items: [
      { text: 'Default variant', onPress: () => {} },
      { text: 'Cancel variant', variant: 'cancel' },
      { text: 'Destructive variant', variant: 'destructive', onPress: () => {} },
    ],
  });
}
```

:::info
Learn more about data object at [API page](../../api/renderable-components/menu.md)
:::
