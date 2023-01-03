---
sidebar_position: 1
---

# Alert

Simple alert with title, description and buttons.

<img src="../../../img/alert.png" width="400" />

## Usage example

```js
const modal = useModals();

const handleShowAlert = () => {
  modal.show(
    'alert',
    {
      title: 'Hello',
      description: 'Are you sure you want to use this awesome library?',
      buttons: [
        { onPress: () => {}, variant: 'cancel', text: 'Cancel', secondary: true },
        { onPress: () => {}, variant: 'destructive', text: 'No' },
        { onPress: () => {}, text: 'Yes' },
      ],
    },
    { cancelable: false },
  );
}
```

## Secondary buttons

Each button can be moved left by adding `secondary: true`. If you marked multiple buttons as secondary then they will appear on left in order you defined them in `buttons` array. `Array.filter` is used under the hood.

:::info
Learn more about data object at [API page](../../api/renderable-components/alert.md)
:::
