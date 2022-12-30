# `useModals`

:::info
Page not finished yet.
:::

## Example

```js
const Example = () => {
  const modal = useModals();

  const onPress = () => {
    modal.show('alert', {
      title: 'Title',
      description: 'Description',
      buttons: [{ onPress: () => {}, text: 'Ok' }],
    }, { cancelable: false });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Open Alert</Text>
    </TouchableOpacity>
  );
};

export default Example;
```
